#  ShardingSphere 
## 数据分片
	1. 逻辑表
	2. 真实表
	3. 数据节点
	4. 绑定表（即mycat的childTable，父子表，按照同一个分片规则保存的主表和子表）
	5. 广播表（即mycat的全局表）
	6. 逻辑索引，某些数据库（如：PostgreSQL/Oracle）不允许同一个库存在名称相同索引，某些数据库（如：MySQL/SQLServer）则允许只要同一个表中不存在名称相同的索引即可。 逻辑索引用于同一个库不允许出现相同索引名称的分表场景，需要将同库不同表的索引名称改写为索引名 + 表名，改写之前的索引名称成为逻辑索引
## 分片
	1. 分片键，用于分片的字段
	2. 分片算法，支持通过=、BETWEEN和IN分片。
		1. 精确分片算法：
		对应PreciseShardingAlgorithm，用于处理使用单一键作为分片键的=与IN进行分片的场景。需要配合StandardShardingStrategy使用。
		2. 范围分片算法：
		对应RangeShardingAlgorithm，用于处理使用单一键作为分片键的BETWEEN AND进行分片的场景。需要配合StandardShardingStrategy使用。
		3. 复合分片算法：
		对应ComplexKeysShardingAlgorithm，用于处理使用多键作为分片键进行分片的场景，包含多个分片键的逻辑较复杂，需要应用开发者自行处理其中的复杂度。需要配合ComplexShardingStrategy使用。
		4. Hint分片算法：
		对应HintShardingAlgorithm，用于处理使用Hint行分片的场景。需要配合HintShardingStrategy使用。
	3. 分片策略
		1. 标准分片，提供对SQL语句中的=, IN和BETWEEN AND的分片操作支持。StandardShardingStrategy只支持单分片键。PreciseShardingAlgorithm是必选的，用于处理=和IN的分片。RangeShardingAlgorithm是可选的，用于处理BETWEEN AND分片。
		2. 复合分片，提供对SQL语句中的=, IN和BETWEEN AND的分片操作支持。ComplexShardingStrategy支持多分片键。
		3. 行表达式分片，提供对SQL语句中的=和IN的分片操作支持，只支持单分片键。
		4. Hint分片，对应HintShardingStrategy。通过Hint而非SQL解析的方式分片的策略。
		5. 不分片，对应NoneShardingStrategy。不分片的策略。
## 配置
	1. 自增主键生成策略，可以在客户端生成唯一主键。
	2. 数据节点配置，配置逻辑表与真实表的映射关系。
		1. 均匀分布
		2. 自定义分布
## 执行流程

SQL解析 => 执行器优化 => SQL路由 => SQL改写 => SQL执行 => 结果归并

	1. 解析引擎
	2. 路由引擎
		1. 分片路由，用于根据分片键进行路由的场景，又细分为直接路由、标准路由和笛卡尔积路由这3种类型。
		2. 广播路由，根据SQL类型又可以划分为全库路由、全库表路由、全实例路由、单播路由和阻断路由这5种类型。
	3. 改写引擎
		1. 标识符改写，包括表名称、索引名称以及Schema名称，需要根据分片逻辑，找到对应逻辑表的真实表。
		2. 补列
			1. 第一种情况是ShardingSphere需要在结果归并时获取相应数据，但该数据并能未通过查询的SQL返回。 这种情况主要是针对GROUP BY和ORDER BY。结果归并时，需要根据GROUP BY和ORDER BY的字段项进行分组和排序，但如果原始SQL的选择项中若并未包含分组项或排序项，则需要对原始SQL进行改写。
			2. 第二种情况是使用AVG聚合函数。在分布式的场景中，使用avg1+avg2+avg3/3计算平均值并不正确，需要改写为 (sum1+sum2+sum3)/(count1+count2+count3)。这就需要将包含AVG的SQL改写为SUM和COUNT，并在结果归并时重新计算平均值。
			3. 第三种是在执行INSERT的SQL语句时，如果使用数据库自增主键，是无需写入主键字段的。但数据库的自增主键是无法满足分布式场景下的主键唯一的，因此ShardingSphere提供了分布式自增主键的生成策略，并且可以通过补列，让使用方无需改动现有代码，即可将分布式自增主键透明的替换数据库现有的自增主键。
		3. 分页修正
			1. 改写limit的SQL，类似于mycat的改写逻辑。
		4. 批量拆分
			1. 在使用批量插入的SQL时，如果插入的数据是跨分片的，那么需要对SQL进行改写来防止将多余的数据写入到数据库中。
		5. 优化改写
			1. 单节点优化，路由至单节点的SQL，则无需优化改写。
			2. 流式归并优化，它仅为包含GROUP BY的SQL增加ORDER BY以及和分组项相同的排序项和排序顺序，用于将内存归并转化为流式归并。
	4. 执行引擎
		1. 目标是自动化的平衡资源控制与执行效率。
		2. 连接模式
			1. 内存限制模式（MEMORY_STRICTLY）
			2. 连接限制模式（CONNECTION_STRICTLY）
			3. 内存限制模式适用于OLAP操作，可以通过放宽对数据库连接的限制提升系统吞吐量；连接限制模式适用于OLTP操作，OLTP通常带有分片键，会路由到单一的分片，因此严格控制数据库连接，以保证在线系统数据库资源能够被更多的应用所使用
		3. 自动化执行引擎
			1. 配置maxConnectionSizePerQuery，该参数表示一次查询时每个数据库所允许使用的最大连接数。
			2. 为了避免获取数据库连接时造成死锁。
				1. 避免锁定一次性只需要获取1个数据库连接的操作。
				2. 仅针对内存限制模式时才进行资源锁定。
	5. 归并引擎
		1. 从功能上分为遍历、排序、分组、分页和聚合5种类型。
		2. 从结构划分，可分为流式归并、内存归并和装饰者归并。流式归并和内存归并是互斥的，装饰者归并可以在流式归并和内存归并之上做进一步的处理。
		3. 遍历归并，遍历每个结果集，进行归并。
		4. 排序归并，在SQL语句有order by时，每个结果集都是有序的，采用流式归并的方式，每次都将当前游标指向的数据值进行排序，然后把第一个放入优先级队列，再将游标下移，以此方式将所有结果集进行排序。
		5. 分组归并，分为流式分组归并和内存分组归并。
			1. 流式分组归并要求SQL的排序项与分组项的字段以及排序类型（ASC或DESC）必须保持一致，否则只能通过内存归并才能保证其数据的正确性。
			2. 
			3. 当SQL中只包含分组语句时，根据不同数据库的实现，其排序的顺序不一定与分组顺序一致。 但由于排序语句的缺失，则表示此SQL并不在意排序顺序。 因此，ShardingSphere通过SQL优化的改写，自动增加与分组项一致的排序项，使其能够从消耗内存的内存分组归并方式转化为流式分组归并方案。
		6. 聚合归并
			1. 聚合函数可以归类为比较、累加和求平均值这3种类型。
		7. 分页归并
			1. 改写SQL语句，到每个分片上查询的limit，由limit offset,count修改成了limit 0,offset+count。然后，通过会优先通过流式归并获得结果集。
路由引擎：
![avatar](https://shardingsphere.apache.org/document/legacy/3.x/document/img/sharding/route_architecture.png)

改写引擎：
![avatar](https://shardingsphere.apache.org/document/legacy/3.x/document/img/sharding/rewrite_architecture_cn.png)

shardingSphere自动化执行引擎在准备阶段选择连接模式的计算方式：
![avatar](https://shardingsphere.apache.org/document/legacy/3.x/document/img/sharding/connection_mode_cn.png)

自动化执行引擎：
![avatar](https://shardingsphere.apache.org/document/legacy/3.x/document/img/sharding/execute_architecture_cn.png)

归并引擎：
![avatar](https://shardingsphere.apache.org/document/legacy/3.x/document/img/sharding/merge_architecture_cn.png)

## 分布式主键自增策略
	1. 默认使用雪花算法，此算法能够保证不同进程主键的不重复性，以及相同进程主键的有序性。
	2. 但它要求不同服务器之间要保证时间同步，否则可能会出现id重复（时间回拨）。
		1. 处理方式：默认分布式主键生成器提供了一个最大容忍的时钟回拨毫秒数。如果时钟回拨的时间超过最大容忍的毫秒数阈值，则程序报错；如果在可容忍的范围内，默认分布式主键生成器会等待时钟同步到最后一次主键生成的时间后再继续工作
	3. 雪花算法生成的主键，二进制表示形式包含4部分，从高位到低位分表为：1bit符号位、41bit时间戳位、10bit工作进程位以及12bit序列号位。
		1. 1bit符号位恒为0。
### 雪花算法
![avatar](https://shardingsphere.apache.org/document/legacy/3.x/document/img/sharding/snowflake_cn_v2.png)

## 行表达式
	1. 行表达式使用的是Groovy的语法。

## 主从分离
	1. 目前只支持一主多从。
	2. 同一线程且同一数据库连接内，如有写入操作，以后的读操作均从主库读取，用于保证数据一致性。

## 分页性能

	1. 采用流式处理 + 归并排序的方式来避免内存的过量占用。
	2. ShardingSphere对仅落至单分片的查询，不改写其SQL。
	3. 优化思路：每次获取下一页时，都把上一页最后一条记录的id作为查询条件，可大幅度优化单个分片的查询速度和返回的结果集大小。



(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{432:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis-内存逐出策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-内存逐出策略"}},[t._v("#")]),t._v(" Redis 内存逐出策略")]),t._v(" "),a("h2",{attrs:{id:"源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码分析"}},[t._v("#")]),t._v(" 源码分析")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// redis.conf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置为0代表没有内存限制")]),t._v("\nmaxmemory "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("mb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置内存淘汰策略")]),t._v("\nmaxmemory-policy noeviction\nmaxmemory-samples "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),a("p",[t._v("逐出算法有两大类：")]),t._v(" "),a("ul",[a("li",[t._v("LRU，最近最少使用逐出")]),t._v(" "),a("li",[t._v("LFU(Least Frequently Used, 4.0+)，最不常用逐出")])]),t._v(" "),a("p",[t._v("可选的逐出算法：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("no-enviction（驱逐）：禁止驱逐数据，")]),t._v(" "),a("hr")]),t._v(" "),a("li",[a("p",[t._v("volatile-lru：从已设置过期时间的数据集（server.db[i].expires）中的key使用lru算法淘汰，")])]),t._v(" "),a("li",[a("p",[t._v("allkeys-lru：从数据集（server.db[i].dict）中的key使用lru算法淘汰，")]),t._v(" "),a("hr")]),t._v(" "),a("li",[a("p",[t._v("volatile-lfu：对所有设置了过期时间的key使用LFU算法进行淘汰，")])]),t._v(" "),a("li",[a("p",[t._v("allkeys-lfu：对所有key使用LFU算法进行淘汰，")]),t._v(" "),a("hr")]),t._v(" "),a("li",[a("p",[t._v("volatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰，")]),t._v(" "),a("hr")]),t._v(" "),a("li",[a("p",[t._v("volatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰，")])]),t._v(" "),a("li",[a("p",[t._v("allkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰。")])])]),t._v(" "),a("p",[a("strong",[t._v("注，volatile-lru、volatile-ttl、volatile-random在没有符合条件（即所有的key都没有设置过期时间）的key时，逐出行为和no-enviction一致。")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// evict.c")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeMemoryIfNeededAndSafe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当没有lua脚本执行，并且server不在加载状态时执行freeMemoryIfNeeded()")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lua_timedout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" C_OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeMemoryIfNeeded")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据逐出策略来清理内存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeMemoryIfNeeded")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认情况下slave不需要执行内存逐出方法，只需要执行master的命令即可，")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("masterhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("repl_slave_ignore_maxmemory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" C_OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过getMaxmemoryState函数，获得当前要释放多少内存mem_tofree")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMaxmemoryState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mem_reported"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mem_tofree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" C_OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" C_OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 当Redis需要清理内存，但是逐出策略又是："MAXMEMORY_NO_EVICTION"（禁止逐出）时，跳转到cant_free代码块')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxmemory_policy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" MAXMEMORY_NO_EVICTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("goto")]),t._v(" cant_free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* We need to free memory, but policy forbids. */")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mem_freed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" mem_tofree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sds bestkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" bestdbid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lru算法、lfu算法、过期键删除")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxmemory_policy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MAXMEMORY_FLAG_LRU"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("MAXMEMORY_FLAG_LFU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n            server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxmemory_policy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" MAXMEMORY_VOLATILE_TTL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 随机删除")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* volatile-random and allkeys-random policy */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxmemory_policy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" MAXMEMORY_ALLKEYS_RANDOM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                 server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxmemory_policy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" MAXMEMORY_VOLATILE_RANDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除所选的key")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Finally remove the selected key. */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bestkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("bestdbid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前已使用的内存")]),t._v("\n            delta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zmalloc_used_memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("latencyStartMonitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eviction_latency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否为异步删除")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lazyfree_lazy_eviction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dbAsyncDelete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("keyobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dbSyncDelete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("keyobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signalModifiedKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("keyobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("latencyEndMonitor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eviction_latency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("latencyAddSampleIfNeeded")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eviction-del"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("eviction_latency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算释放了多少内存")]),t._v("\n            delta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zmalloc_used_memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            mem_freed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" delta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当需要释放的内存很大时，在这里可能会花费很多时间，所以循环内部会调用flushSlavesOutputBuffers函数强制刷新到slave")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slaves"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushSlavesOutputBuffers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前线程在释放内存时，也有可能其他线程会删除key，所以此处判断一次当前内存是否已降到目标内存（大概是这个意思）")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lazyfree_lazy_eviction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keys_freed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMaxmemoryState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" C_OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Let's satisfy our stop condition. */")]),t._v("\n                    mem_freed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mem_tofree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("goto")]),t._v(" cant_free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* nothing to free... */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" C_OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cant_free只做了一件事情，那就是检查lazyfree线程是否还有任务要执行，然后等待")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* When evicting a random key, we try to evict a key for\n             * each DB, so we use the static 'next_db' variable to\n             * incrementally visit all DBs. */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 随机删除的策略比较简单，循环遍历每个db，")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果策略是MAXMEMORY_ALLKEYS_RANDOM，获取db-dict，从全部key中随机选择")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果策略是MAXMEMORY_VOLATILE_RANDOM，则获取db->expires，从设置了过期时间的key中随机选择")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dbnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("next_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dbnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    dict "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxmemory_policy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" MAXMEMORY_ALLKEYS_RANDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n      db"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("dict "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("expires"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dictSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      de "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dictGetRandomKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      bestkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dictGetKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("de"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      bestdbid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")])])}),[],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{467:function(a,s,t){"use strict";t.r(s);var r=t(43),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[a._v("#")]),a._v(" JVM")]),a._v(" "),t("h2",{attrs:{id:"jvm-内存区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-内存区域"}},[a._v("#")]),a._v(" JVM 内存区域")]),a._v(" "),t("p",[t("strong",[a._v("注，方法区是jvm规范所定义的，元空间是jdk 1.8之后的 Hotspot 对方法区的实现。")])]),a._v(" "),t("ul",[t("li",[a._v("程序计数器（线程私有）")]),a._v(" "),t("li",[a._v("虚拟机栈（线程私有）")]),a._v(" "),t("li",[a._v("本地方法栈（线程私有）")]),a._v(" "),t("li",[a._v("方法区（元数据和常量池）")]),a._v(" "),t("li",[a._v("堆（运行时数据区）")])]),a._v(" "),t("h2",{attrs:{id:"如何判断对象死亡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何判断对象死亡"}},[a._v("#")]),a._v(" 如何判断对象死亡")]),a._v(" "),t("h3",{attrs:{id:"引用计数算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用计数算法"}},[a._v("#")]),a._v(" 引用计数算法")]),a._v(" "),t("h3",{attrs:{id:"可达性分析算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法"}},[a._v("#")]),a._v(" 可达性分析算法")]),a._v(" "),t("h2",{attrs:{id:"了解哪些-gc-算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#了解哪些-gc-算法"}},[a._v("#")]),a._v(" 了解哪些 GC 算法")]),a._v(" "),t("h3",{attrs:{id:"标记-清除算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除算法"}},[a._v("#")]),a._v(" 标记-清除算法")]),a._v(" "),t("h3",{attrs:{id:"标记-整理算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理算法"}},[a._v("#")]),a._v(" 标记-整理算法")]),a._v(" "),t("h3",{attrs:{id:"标记-复制算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-复制算法"}},[a._v("#")]),a._v(" 标记-复制算法")]),a._v(" "),t("h3",{attrs:{id:"分代理论-复制算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分代理论-复制算法"}},[a._v("#")]),a._v(" 分代理论-复制算法")]),a._v(" "),t("h3",{attrs:{id:"基于region的算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于region的算法"}},[a._v("#")]),a._v(" 基于Region的算法")]),a._v(" "),t("h3",{attrs:{id:"分代回收策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分代回收策略"}},[a._v("#")]),a._v(" 分代回收策略")]),a._v(" "),t("h4",{attrs:{id:"新生代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新生代"}},[a._v("#")]),a._v(" 新生代")]),a._v(" "),t("ul",[t("li",[a._v("Eden区")]),a._v(" "),t("li",[a._v("Servivor区（又分为From和To）")]),a._v(" "),t("li",[a._v("Minor GC的执行过程")])]),a._v(" "),t("h4",{attrs:{id:"老年代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老年代"}},[a._v("#")]),a._v(" 老年代")]),a._v(" "),t("ul",[t("li",[a._v("Major GC的执行过程")]),a._v(" "),t("li",[a._v("Full GC的执行过程")])]),a._v(" "),t("h4",{attrs:{id:"永久代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#永久代"}},[a._v("#")]),a._v(" "),t("s",[a._v("永久代")])]),a._v(" "),t("p",[a._v("指的是内存永久保留的区域，主要存放Class和Meta（元数据）的信息，Class在加载的时候被放入这个区域。由于GC不会对永久代进行回收，这就导致，如果Class过多，会导致永久代膨胀，进而抛出OOM异常。")]),a._v(" "),t("p",[a._v("在jdk 1.8之后，永久代已经被废除了，取而代之的是元空间，元空间的本质和永久代差不多，只不过元空间不在虚拟机中，而是使用了本地内存，所以，默认情况下，元空间仅受本地内存的大小限制。")]),a._v(" "),t("h3",{attrs:{id:"基于region的回收策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于region的回收策略"}},[a._v("#")]),a._v(" 基于region的回收策略")]),a._v(" "),t("p",[a._v("参考G1垃圾收集器的执行原理")]),a._v(" "),t("h2",{attrs:{id:"有哪些垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有哪些垃圾收集器"}},[a._v("#")]),a._v(" 有哪些垃圾收集器")]),a._v(" "),t("h3",{attrs:{id:"新生代-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新生代-2"}},[a._v("#")]),a._v(" 新生代")]),a._v(" "),t("h4",{attrs:{id:"serial（单线程，复制算法）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serial（单线程，复制算法）"}},[a._v("#")]),a._v(" Serial（单线程，复制算法）")]),a._v(" "),t("h4",{attrs:{id:"parnew（多线程，serial的升级版）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parnew（多线程，serial的升级版）"}},[a._v("#")]),a._v(" ParNew（多线程，Serial的升级版）")]),a._v(" "),t("h4",{attrs:{id:"parallel-scavenge（多线程，复制算法）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parallel-scavenge（多线程，复制算法）"}},[a._v("#")]),a._v(" Parallel Scavenge（多线程，复制算法）")]),a._v(" "),t("h3",{attrs:{id:"老年代-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老年代-2"}},[a._v("#")]),a._v(" 老年代")]),a._v(" "),t("h4",{attrs:{id:"serial-old（单线程，标记整理算法）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serial-old（单线程，标记整理算法）"}},[a._v("#")]),a._v(" Serial Old（单线程，标记整理算法）")]),a._v(" "),t("h4",{attrs:{id:"parallel-old（多线程，标记整理算法）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parallel-old（多线程，标记整理算法）"}},[a._v("#")]),a._v(" Parallel Old（多线程，标记整理算法）")]),a._v(" "),t("h4",{attrs:{id:"cms（多线程，标记清除算法）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cms（多线程，标记清除算法）"}},[a._v("#")]),a._v(" CMS（多线程，标记清除算法）")]),a._v(" "),t("h5",{attrs:{id:"cms垃圾收集器的工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cms垃圾收集器的工作原理"}},[a._v("#")]),a._v(" CMS垃圾收集器的工作原理")]),a._v(" "),t("h3",{attrs:{id:"基于region的垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于region的垃圾收集器"}},[a._v("#")]),a._v(" 基于region的垃圾收集器")]),a._v(" "),t("h4",{attrs:{id:"g1-jdk-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g1-jdk-9"}},[a._v("#")]),a._v(" G1 (jdk 9)")]),a._v(" "),t("h5",{attrs:{id:"g1垃圾收集器的工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g1垃圾收集器的工作原理"}},[a._v("#")]),a._v(" G1垃圾收集器的工作原理")]),a._v(" "),t("ul",[t("li",[a._v("初始标记")]),a._v(" "),t("li",[a._v("并发标记")]),a._v(" "),t("li",[a._v("重新标记")]),a._v(" "),t("li",[a._v("并发清除")])]),a._v(" "),t("h3",{attrs:{id:"低延时垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#低延时垃圾收集器"}},[a._v("#")]),a._v(" 低延时垃圾收集器")]),a._v(" "),t("h4",{attrs:{id:"zgc-jdk-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zgc-jdk-11"}},[a._v("#")]),a._v(" ZGC (jdk 11)")]),a._v(" "),t("h2",{attrs:{id:"java-类加载机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-类加载机制"}},[a._v("#")]),a._v(" Java 类加载机制")]),a._v(" "),t("h3",{attrs:{id:"执行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行过程"}},[a._v("#")]),a._v(" 执行过程")]),a._v(" "),t("h3",{attrs:{id:"类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[a._v("#")]),a._v(" 类加载器")]),a._v(" "),t("h3",{attrs:{id:"双亲委派机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派机制"}},[a._v("#")]),a._v(" 双亲委派机制")]),a._v(" "),t("h3",{attrs:{id:"如何打破双亲委派"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何打破双亲委派"}},[a._v("#")]),a._v(" 如何打破双亲委派")]),a._v(" "),t("h3",{attrs:{id:"osgi-spi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osgi-spi"}},[a._v("#")]),a._v(" OSGI/SPI")]),a._v(" "),t("h2",{attrs:{id:"jvm如何优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm如何优化"}},[a._v("#")]),a._v(" JVM如何优化")]),a._v(" "),t("h3",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),t("h4",{attrs:{id:"java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[a._v("#")]),a._v(" java")]),a._v(" "),t("h5",{attrs:{id:"命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令格式"}},[a._v("#")]),a._v(" 命令格式")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("java "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" -jar\n")])])]),t("h5",{attrs:{id:"option参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option参数"}},[a._v("#")]),a._v(" option参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("-server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" to select the "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"server VM"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" is default\n\n-D<name>=<value>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" set a system property\n")])])]),t("h5",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("java -Dspring.profile.active=pro -jar xxx.jar\n")])])]),t("h4",{attrs:{id:"jps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jps"}},[a._v("#")]),a._v(" jps")]),a._v(" "),t("h5",{attrs:{id:"命令格式-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令格式-2"}},[a._v("#")]),a._v(" 命令格式")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"option参数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option参数-2"}},[a._v("#")]),a._v(" option参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h4",{attrs:{id:"jcmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jcmd"}},[a._v("#")]),a._v(" jcmd")]),a._v(" "),t("h5",{attrs:{id:"命令格式-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令格式-3"}},[a._v("#")]),a._v(" 命令格式")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"option参数-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option参数-3"}},[a._v("#")]),a._v(" option参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"示例-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h4",{attrs:{id:"jstat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstat"}},[a._v("#")]),a._v(" jstat")]),a._v(" "),t("h5",{attrs:{id:"命令格式-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令格式-4"}},[a._v("#")]),a._v(" 命令格式")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"option参数-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option参数-4"}},[a._v("#")]),a._v(" option参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"示例-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h4",{attrs:{id:"jmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmap"}},[a._v("#")]),a._v(" jmap")]),a._v(" "),t("h5",{attrs:{id:"命令格式-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令格式-5"}},[a._v("#")]),a._v(" 命令格式")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"option参数-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option参数-5"}},[a._v("#")]),a._v(" option参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"示例-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-5"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h4",{attrs:{id:"jstack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstack"}},[a._v("#")]),a._v(" jstack")]),a._v(" "),t("h5",{attrs:{id:"命令格式-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令格式-6"}},[a._v("#")]),a._v(" 命令格式")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"option参数-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option参数-6"}},[a._v("#")]),a._v(" option参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"示例-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-6"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h4",{attrs:{id:"jhat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jhat"}},[a._v("#")]),a._v(" jhat")]),a._v(" "),t("h5",{attrs:{id:"命令格式-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令格式-7"}},[a._v("#")]),a._v(" 命令格式")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"option参数-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option参数-7"}},[a._v("#")]),a._v(" option参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"示例-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-7"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h4",{attrs:{id:"jinfo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jinfo"}},[a._v("#")]),a._v(" jinfo")]),a._v(" "),t("h5",{attrs:{id:"命令格式-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令格式-8"}},[a._v("#")]),a._v(" 命令格式")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"option参数-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option参数-8"}},[a._v("#")]),a._v(" option参数")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h5",{attrs:{id:"示例-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-8"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n")])])]),t("h3",{attrs:{id:"jvm参数调优的详细过程，为什么这么设置，遇到过哪些gc场景，如何去分析gc日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm参数调优的详细过程，为什么这么设置，遇到过哪些gc场景，如何去分析gc日志"}},[a._v("#")]),a._v(" jvm参数调优的详细过程，为什么这么设置，遇到过哪些gc场景，如何去分析gc日志")]),a._v(" "),t("h3",{attrs:{id:"怎样排查cpu飙升，内存飙升，逃逸分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎样排查cpu飙升，内存飙升，逃逸分析"}},[a._v("#")]),a._v(" 怎样排查CPU飙升，内存飙升，逃逸分析")]),a._v(" "),t("h3",{attrs:{id:"列举出你常用的spring-应用启动时指定的jvm参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列举出你常用的spring-应用启动时指定的jvm参数"}},[a._v("#")]),a._v(" 列举出你常用的spring 应用启动时指定的jvm参数")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-Xmx\n-Xms\n")])])]),t("h3",{attrs:{id:"异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[a._v("#")]),a._v(" 异常")]),a._v(" "),t("p",[a._v("OutOfMemoryError")]),a._v(" "),t("p",[a._v("StackOverflowError")]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ul",[t("li",[a._v("Java 虚拟机规范 Java SE 8")]),a._v(" "),t("li",[a._v("深入理解Java虚拟机")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://tech.meituan.com/2017/12/29/jvm-optimize.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("从实际案例聊聊Java应用的GC优化"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/littleLord/p/5380624.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("详解cmd垃圾回收机制"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.ityouknow.com/jvm/2017/09/03/jvm-command.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jvm-command"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
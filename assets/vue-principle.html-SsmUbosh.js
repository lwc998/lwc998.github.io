import{_ as l,c as t,d as i,o as a}from"./app-Dq_mPPFb.js";const p="/assets/vue-reactive-BFyCFBTu.png",r={};function n(c,e){return a(),t("div",null,e[0]||(e[0]=[i('<h1 id="vue-框架原理" tabindex="-1"><a class="header-anchor" href="#vue-框架原理"><span>Vue 框架原理</span></a></h1><h2 id="_1、vue2-响应式原理" tabindex="-1"><a class="header-anchor" href="#_1、vue2-响应式原理"><span>1、Vue2 响应式原理</span></a></h2><ul><li><p>当 Vue 实例创建时，Vue 将遍历 data 中的所有属性，并使用 Object.defineProperty()把这些属性转为 getter 和 setter，对数据的读取进行劫持，getter 进行依赖收集，setter 进行派发更新。</p></li><li><p>依赖收集</p><ul><li>每个组件实例对应⼀个 watcher 实例</li><li>在组件渲染过程中，把接触过的数据添加为依赖(触发 getter 方法中调用 dep.depend()方法，将当前 watcher 实例收集到属性对应的 dep 中)</li></ul></li><li><p>派发更新</p><ul><li>数据更新后 -&gt; 会触发属性对应的 setter -&gt; 通过调用 dep.notify()方法去通知 watcher -&gt; 关联的组件重新渲染</li></ul></li></ul><h2 id="_2、三个核心类" tabindex="-1"><a class="header-anchor" href="#_2、三个核心类"><span>2、三个核心类</span></a></h2><ul><li><p>Observe: Observer 类中 Object.defineProperty 的 get 调用 Def 类中 addSub 进行依赖收集，set 数据变更时调用 Def 类中 notify()通知更新</p></li><li><p>Dep: Def 类主要添加观察者 addSub()，和通知变更 notify()两种操作。作为 Observer 类和多个 Watcher 实例之间的桥梁。</p></li><li><p>Watcher: Watcher 类中主要触发 get 进行依赖收集，和数据变化时更新视图 update。</p></li></ul><img src="'+p+'"><h2 id="_3、模板编译原理" tabindex="-1"><a class="header-anchor" href="#_3、模板编译原理"><span>3、模板编译原理</span></a></h2><ul><li><p>compile()循环判断是 compileText 文本节点 or 元素节点 compileElement，有子节点则递归调用 compile()</p></li><li><p>文本节点正则能匹配上模板表达式就用 data 属性值进行替换，并绑定上 Watcher 实例，变更更新</p></li><li><p>遍历元素节点所有的属性，判断有绑定 v-开头属性，进行相应的解析，并绑定上 Watcher 实例，更新元素节点</p></li></ul><h2 id="_4、虚拟-dom-原理" tabindex="-1"><a class="header-anchor" href="#_4、虚拟-dom-原理"><span>4、虚拟 Dom 原理</span></a></h2><ul><li><p>虚拟 Dom 本质是 js 对象，是对真实 Dom 的抽象；状态变更时，记录新树与旧树的差异；最后将差异一次性更新到真实 Dom 上。</p></li><li><p>优点</p><ul><li><p>避免多次操作真实 Dom，减少不必要的重绘和回流，提高性能。</p></li><li><p>React 借助虚拟 Dom，实现跨平台的能力，一套代码多端使用。</p></li></ul></li></ul><h2 id="_5、计算属性原理" tabindex="-1"><a class="header-anchor" href="#_5、计算属性原理"><span>5、计算属性原理</span></a></h2><ul><li><p>computed watcher 计算属性的监听器</p></li><li><p>computed watcher 持有一个 dep 实例，通过 dirty 属性标记计算属性是否需要重新求值</p></li><li><p>当 computed 的依赖值发生改变时，会通知订阅的 watcher 进行更新，对于 computed watcher 会将 dirty 属性设置为 true，并且进行计算属性方法的调用</p></li><li><p>computed 所谓的缓存是指 计算属性是基于他的响应式依赖进行缓存的，只有依赖发生改变的时候才会重新求值</p></li></ul><h2 id="_6、vue-nexttick-的原理" tabindex="-1"><a class="header-anchor" href="#_6、vue-nexttick-的原理"><span>6、Vue.nextTick 的原理</span></a></h2><ul><li><p>Vue 是异步执行 dom 更新的，一旦观察到数据发生变化，把同一个 event loop 中观察数据变化的 watcher 推送进这个队列</p></li><li><p>在下一次事件循环时，Vue 清空异步队列，进行 dom 的更新</p></li><li><p>支持的顺序：Promise.then -&gt; MutationObserver -&gt; setImmediate -&gt; setTimeout</p></li><li><p>属性变化导致 dom 发生变化时，此时想进行的操作依赖于该 dom(ref) 时需用 Vue.nextTick</p></li></ul>',14)]))}const d=l(r,[["render",n],["__file","vue-principle.html.vue"]]),s=JSON.parse('{"path":"/page/vue/vue-principle.html","title":"Vue 框架原理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、Vue2 响应式原理","slug":"_1、vue2-响应式原理","link":"#_1、vue2-响应式原理","children":[]},{"level":2,"title":"2、三个核心类","slug":"_2、三个核心类","link":"#_2、三个核心类","children":[]},{"level":2,"title":"3、模板编译原理","slug":"_3、模板编译原理","link":"#_3、模板编译原理","children":[]},{"level":2,"title":"4、虚拟 Dom 原理","slug":"_4、虚拟-dom-原理","link":"#_4、虚拟-dom-原理","children":[]},{"level":2,"title":"5、计算属性原理","slug":"_5、计算属性原理","link":"#_5、计算属性原理","children":[]},{"level":2,"title":"6、Vue.nextTick 的原理","slug":"_6、vue-nexttick-的原理","link":"#_6、vue-nexttick-的原理","children":[]}],"git":{},"filePathRelative":"page/vue/vue-principle.md"}');export{d as comp,s as data};

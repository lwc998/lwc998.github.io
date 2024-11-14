import{_ as i,c as p,a,o as e}from"./app-D1kvnzcV.js";const t="/assets/关系-Ce9CNZLT.png",s="/assets/原型链-D2GdrH__.png",n={};function r(h,l){return e(),p("div",null,l[0]||(l[0]=[a('<h1 id="javascript-基础" tabindex="-1"><a class="header-anchor" href="#javascript-基础"><span>JavaScript 基础</span></a></h1><h2 id="_1、作用域" tabindex="-1"><a class="header-anchor" href="#_1、作用域"><span>1、作用域</span></a></h2><h3 id="_1-1、执行上下文-执行环境" tabindex="-1"><a class="header-anchor" href="#_1-1、执行上下文-执行环境"><span>1.1、执行上下文(执行环境)</span></a></h3><ul><li><p>定义了变量和函数有权访问的数据，某个执行环境中的代码执行完毕后，该执行环境也会随之销毁</p></li><li><p>全局执行环境(Window)，函数执行环境</p></li><li><p>变量声明优先次序</p><ul><li>执行上下文时，首先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性</li></ul></li><li><p>ES6 之前没有块作用域，只有全局作用域和函数作用域</p></li><li><p>JavaScript 采用词法作用域，也就是静态作用域，函数的作用域在函数定义时就决定了</p></li><li><p>作用域链</p><ul><li><p>其实是执行环境的栈，标识符在解析过程中，会沿着作用域链一层一层往上找</p></li><li><p>程序执行过程中，每进入一个新的执行环境就会将其压入执行环境栈中，每执行完毕就跳出该执行环境并将其弹出栈，所以越后压入栈的其执行时访问的范围越大</p></li></ul></li><li><p>闭包</p><ul><li>有权访问另一个函数作用域中的变量的函数，创建闭包的常见形式就是在函数中创建并返回另一个函数</li><li>可以使外部使用到父作用域的变量，但同时也会占用更多的内存，从而影响性能，用完需手动销毁来避免内存泄露</li><li>副作用：作用域链的这种机制导致闭包保存父函数变量的最终值。通过匿名调用函数保证是函数参数值传递的方式解决</li></ul></li></ul><h2 id="_2、this-上下文-context" tabindex="-1"><a class="header-anchor" href="#_2、this-上下文-context"><span>2、this 上下文 context</span></a></h2><ul><li><p>函数直接调用：this 指向 window</p></li><li><p>隐式绑定：this 指向调用堆栈的上一级</p></li><li><p>显示绑定：apply | call | bind</p><ul><li><p>apply | call 的传参不同，数组传入/依次传入</p></li><li><p>bind 的返回值不同，是函数</p></li><li><p>手写题</p></li></ul></li><li><p>箭头函数中的 this 会直接访问上一级</p></li></ul><h2 id="_3、类" tabindex="-1"><a class="header-anchor" href="#_3、类"><span>3、类</span></a></h2><ul><li><p>function 声明类的话，后加类名首字母大写，使用 new 关键字来生成</p></li><li><p>实例成员：在构造函数内部创建的对象成员(this)，由实例对象访问</p></li><li><p>静态成员：在构造函数本身添加的成员(Star.name)，只能由构造函数访问</p></li><li><p>使用 prototype 来声明成员方法，所有构造函数都可访问</p></li></ul><h2 id="_4、原型链" tabindex="-1"><a class="header-anchor" href="#_4、原型链"><span>4、原型链</span></a></h2><ul><li><p>对象原型 __proto__ 属性：指向构造函数的原型对象 prototype</p></li><li><p>原型对象 prototype：可定义对象的成员函数</p></li><li><p>构造函数、实例、原型对象三者之间的关系 <img src="'+t+'"></p></li><li><p>原型链</p><img src="'+s+'"></li><li><p>JavaScript 的成员查找机制(规则)</p><ul><li><p>当访问一个对象的属性(包括方法)时，首先查找这个对象自身有没有该属性</p></li><li><p>如果没有就查找它的原型(也就是 proto 指向的 prototype 原型对象)</p></li><li><p>如果没有就查找原型对象的原型(Object 的原型对象)</p></li><li><p>以此类推一直找到 Object 为止(null)</p></li></ul></li></ul><h2 id="_5、参数值传递" tabindex="-1"><a class="header-anchor" href="#_5、参数值传递"><span>5、参数值传递</span></a></h2><ul><li><p>把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样</p></li><li><p>注意：按引用传递是传递对象的引用，按共享传递是传递对象的引用的副本</p></li><li><p>参数如果是基本类型是按值传递，如果是引用类型是共享传递</p></li></ul>',12)]))}const o=i(n,[["render",r],["__file","js-base.html.vue"]]),_=JSON.parse('{"path":"/page/js/js-base.html","title":"JavaScript 基础","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、作用域","slug":"_1、作用域","link":"#_1、作用域","children":[{"level":3,"title":"1.1、执行上下文(执行环境)","slug":"_1-1、执行上下文-执行环境","link":"#_1-1、执行上下文-执行环境","children":[]}]},{"level":2,"title":"2、this 上下文 context","slug":"_2、this-上下文-context","link":"#_2、this-上下文-context","children":[]},{"level":2,"title":"3、类","slug":"_3、类","link":"#_3、类","children":[]},{"level":2,"title":"4、原型链","slug":"_4、原型链","link":"#_4、原型链","children":[]},{"level":2,"title":"5、参数值传递","slug":"_5、参数值传递","link":"#_5、参数值传递","children":[]}],"git":{},"filePathRelative":"page/js/js-base.md"}');export{o as comp,_ as data};

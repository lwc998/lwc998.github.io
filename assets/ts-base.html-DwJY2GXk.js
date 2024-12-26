import{_ as n,c as a,a as e,o as p}from"./app-BIa0kyUY.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="ts-基础" tabindex="-1"><a class="header-anchor" href="#ts-基础"><span>ts 基础</span></a></h1><h2 id="_1、简介" tabindex="-1"><a class="header-anchor" href="#_1、简介"><span>1、简介</span></a></h2><p>TypeScript 是 JavaScript 的超集，可以被编译成 JavaScript。相关的特点：</p><ul><li>类型检查</li><li>语言扩展：装饰器、接口等</li><li>工具属性：可编译为标准 js</li></ul><h2 id="_2、类型基础" tabindex="-1"><a class="header-anchor" href="#_2、类型基础"><span>2、类型基础</span></a></h2><h3 id="_1、强类型和弱类型" tabindex="-1"><a class="header-anchor" href="#_1、强类型和弱类型"><span>1、强类型和弱类型</span></a></h3><ul><li>强类型语言不允许改变变量的数据类型，除非进行强制类型转换</li><li>弱类型语言中，变量可以被赋予不同的数据类型</li></ul><h3 id="_2、静态类型和动态类型" tabindex="-1"><a class="header-anchor" href="#_2、静态类型和动态类型"><span>2、静态类型和动态类型</span></a></h3><ul><li>静态类型语言：在编译阶段确定所有变量的类型</li><li>动态类型语言：在执行阶段确定所有变量的类型</li></ul><h2 id="_3、基础" tabindex="-1"><a class="header-anchor" href="#_3、基础"><span>3、基础</span></a></h2><h3 id="_1、接口类型-interface-和-类型别名-type" tabindex="-1"><a class="header-anchor" href="#_1、接口类型-interface-和-类型别名-type"><span>1、接口类型 interface 和 类型别名 type</span></a></h3><p>1、接口类型 interface 主要用于描述对象的形状和结构。定义了一个对象的结构和它所包含的属性或方法</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//可选属性？:</span></span>
<span class="line"><span class="token comment">//任意属性[propName: string]: any</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、类型别名 type 类型别名用来给一个类型起个新名字，type 声明的方式可以表示基本类型、联合类型、交叉类型等复杂类型。它不仅限于对象类型，还可以表示函数、联合类型、元组等。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">NameResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">NameOrResolver</span> <span class="token operator">=</span> Name <span class="token operator">|</span> NameResolver<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span>n<span class="token operator">:</span> NameOrResolver<span class="token punctuation">)</span><span class="token operator">:</span> Name <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> n<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、语法和功能差异</p><ul><li>1、继承和扩展 <ul><li>interface: 可以通过<strong>extends</strong>关键字继承多个接口</li></ul></li></ul><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  grade<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>type: 不能直接扩展，但可以通过交叉类型(<strong>&amp;</strong>)来模拟扩展</li></ul><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Student</span> <span class="token operator">=</span> Person <span class="token operator">&amp;</span> <span class="token punctuation">{</span> grade<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>‌2、合并声明 ‌： <ul><li>interface‌：可以多次定义同一个接口，它们会自动合并。例如：</li></ul></li></ul><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">// 等效于 interface Person { name: string; age: number; }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>‌type‌：不能重复定义同一个类型别名，否则会报错。</li></ul>`,23)]))}const o=n(t,[["render",l],["__file","ts-base.html.vue"]]),r=JSON.parse('{"path":"/page/js/ts-base.html","title":"ts 基础","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1、简介","slug":"_1、简介","link":"#_1、简介","children":[]},{"level":2,"title":"2、类型基础","slug":"_2、类型基础","link":"#_2、类型基础","children":[{"level":3,"title":"1、强类型和弱类型","slug":"_1、强类型和弱类型","link":"#_1、强类型和弱类型","children":[]},{"level":3,"title":"2、静态类型和动态类型","slug":"_2、静态类型和动态类型","link":"#_2、静态类型和动态类型","children":[]}]},{"level":2,"title":"3、基础","slug":"_3、基础","link":"#_3、基础","children":[{"level":3,"title":"1、接口类型 interface 和 类型别名 type","slug":"_1、接口类型-interface-和-类型别名-type","link":"#_1、接口类型-interface-和-类型别名-type","children":[]}]}],"git":{},"filePathRelative":"page/js/ts-base.md"}');export{o as comp,r as data};
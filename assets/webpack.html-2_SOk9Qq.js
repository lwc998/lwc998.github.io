import{_ as s,c as a,a as l,o as e}from"./app-BIa0kyUY.js";const p={};function t(i,n){return e(),a("div",null,n[0]||(n[0]=[l(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>webpack</span></a></h1><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题"><span>面试题</span></a></h2><h3 id="webpack-的打包流程" tabindex="-1"><a class="header-anchor" href="#webpack-的打包流程"><span>webpack 的打包流程</span></a></h3><ol><li><p>初始化参数：根据 webpack.config.js 配置文件、shell 参数，确定最终参数</p></li><li><p>开始编译：根据参数，初始化 compiler 对象，加载配置参数，执行对象的 run 方法</p></li><li><p>确定入口：根据配置参数，确定所有的入口文件</p></li><li><p>编译模块：从入口文件出发，调用对应的 loader 对模块进行编译，找出模块依赖的模块，递归编译本步骤直至所有入口文件依赖的模块都被编译完成</p></li><li><p>完成模块编译：经过第 4 步，所有模块都被编译完成，得到每个模块被翻译后的最终内容，生成一个依赖图记录它们之间的依赖关系</p></li><li><p>输出资源：根据入口文件与各个模块之间的依赖关系，组装成一个个包含多个模块的 chunk，再把每个 chunk 转换成一个单独的文件加入到输出列表，可修改输出内容的最后机会</p></li><li><p>输出完成：确定输出内容，根据配置的输出路径和文件名，将输出内容写入文件系统</p></li></ol><h3 id="webpack-性能优化" tabindex="-1"><a class="header-anchor" href="#webpack-性能优化"><span>webpack 性能优化</span></a></h3><ol><li>加快文件构建速度</li></ol><ul><li><p>减少不必要的模块依赖：module.noParse 配置不需要解析的模块(jquery 和 lodash 兼容性好的第三方库)</p></li><li><p>减少不必要的 loader 处理：使用 loader 时考虑不需要处理的模块，以提升构建速度(moduel.rules.exclude 或 module.rules.include 排除或仅包含需要应用 loader 的场景)</p></li><li><p>配置区分生产和开发环境的 plugin，不要混用</p></li><li><p>使用 cache-loader 进行缓存：对于一些比较消耗性能的模块，并且打包后的文件内容没有什么改动可以使用 cache-loader 进行缓存</p></li></ul><ol start="2"><li>优化打包后的文件</li></ol><ul><li><p>代码压缩：webpack 自动集成了 Terser 插件进行打包时代码压缩，只需要配置 optimization 选项即可</p></li><li><p>删除无用的代码和模块：内置 Tree-shaking 功能(静态分析)来删除用不到或者对程序没影响的代码，极大减少了打包后的体积</p></li><li><p>模块懒加载：对于一些不会立即使用的模块，可以通过懒加载的形式导入 import(&#39;xxx&#39;)，webpack 打包的时候会把这些需要懒加载的模块打包成独立文件，只有使用到的时候才会去加载这个文件，并把模块添加到 webpackJsonp 对象中。</p></li></ul><h3 id="webpack-实战" tabindex="-1"><a class="header-anchor" href="#webpack-实战"><span>webpack 实战</span></a></h3><ol><li>webpack-dev-server</li></ol><ul><li>作用：启动一个本地服务，处理打包资源和静态文件的请求</li><li>live-reloading 功能可以监听文件的变化，自动刷新页面提高开发效率</li></ul><ol start="2"><li>HMR 模块热替换</li></ol><ul><li>devServer.hot: true 开启</li><li>css 文件：可使用，css-loader 内部实现</li><li>js 文件：需要设置添加支持 HMR(只能处理非入口文件):</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&quot;./print.js&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Accepting the updated printMe module!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>html 文件：默认不能使用 HMR，一个文件也不用 HMR，需修改 entry，增加 html 文件</li></ul><ol start="3"><li>source-map</li></ol><ul><li>配置：devtool: &#39;source-map&#39;</li><li>一种 提供源代码到构建后代码映射 的技术 （如果构建后代码错误，通过映射可以追踪源代码错误）</li></ul><ol start="4"><li>oneOf</li></ol><ul><li>以下 loader 只会匹配一个；注意：不能有两个配置处理同一种类型文件</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 配置</span></span>
<span class="line"><span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>缓存</li></ol><ul><li><p>babel 缓存：babel-loader 默认缓存，配置 babel-loader.cacheDirectory: true</p><ul><li>让第二次打包构建速度更快</li></ul></li><li><p>文件资源缓存</p><ul><li>hash：每次 webpack 构建时会生成一个唯一的 hash 值 <ul><li>问题：js 和 css 同时使用一个 hash，重新打包缓存失败</li></ul></li><li>chunkhash：根据 chunk 生成 hash 值 <ul><li>问题：js 和 css 在同一个 chunk 上，也会重新加载</li></ul></li><li>contenthash：根据文件内容生成 hash 值，不同文件 hash 值一定不一样</li><li>让代码上线运行缓存更好使用</li></ul></li></ul><ol start="6"><li>tree-shaking</li></ol><ul><li>前提：必须使用 ES6 模块化；开启 production 模式</li><li>作用：减少代码体积</li><li>在 package.json 中配置</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token comment">// 所有代码都没有副作用 (可以使用tree-sharking)</span></span>
<span class="line">    <span class="token comment">// 问题: 可能会把css / @babel/polyfill (副作用)文件干掉</span></span>
<span class="line">    <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span>  <span class="token punctuation">[</span><span class="token string">&quot;*.css&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.less&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>code split</li></ol><ul><li>第一种：单个或者多个入口文件，每个单独形成一个 chunk</li><li>第二种： <ul><li>可以将 node_modules 文件单独打包一个 chunk 最终输出</li><li>自动分析多入口 chunk 中，有没有公共的文件。有的话会打包成单独一个 chunk</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 配置：</span></span>
<span class="line"><span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>第三种： <ul><li>通过 js 代码让某个文件被单独打包成一个 chunk，import 动态导入语法</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token operator">/</span>_webpackChunkName<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span> _<span class="token operator">/</span><span class="token string">&#39;./test.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><ol start="8"><li>懒加载和预加载</li></ol><ul><li>懒加载：当文件需要使用时才加载</li><li>预加载 prefetch：会在使用之前，提前加载 js 文件</li><li>正常加载可以认为是并行加载（同一时间内加载多个文件）</li><li>预加载 prefetch：等其他资源加载完毕，浏览器空闲了，浏览器再偷偷加载资源</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/*webpackChunkName: &#39;test&#39;, webpackPrefetch: true */</span> <span class="token string">&quot;./test.js&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>PWA：渐进式网络开发应用程序（离线可访问）</li></ol><ul><li>workbox --&gt; workbox-webpack-plugin 包</li><li>new WorkboxWebpackPlugin.GenerateSW({ /<em>1、帮助 serviceWorker 快速启动 2、删除旧的 serviceWorker 生成一个 serviceWorker 配置文件</em>/ clientsClaim: true, skipWaiting: true})</li><li>sw 代码必须运行在服务器上 <ul><li>node.js</li><li>npm i serve -g / serve -s build 启动服务器，将 build 目录下的所有资源作为静态资源暴露出去</li><li>注册 serviceWorker 处理兼容性问题</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;serviceWorker&quot;</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    navigator<span class="token punctuation">.</span>serviceWorker</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;/service-worker.js&quot;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="10"><li>多进程打包：thread-loader</li></ol><ul><li>开启多进程打包，进程启动大概为 600ms，进程通信也有开销。只有工作消耗时间比较长，才需要多进程打包</li><li>放在 babel-loader 后面</li></ul><ol start="11"><li>externals 排除打包 第一级配置</li></ol><ul><li>通过 CDN 引入</li><li>{ // 拒绝 jQuery 被打包进来 jquery: &#39;jQuery&#39;}</li></ul><ol start="12"><li>dll 单独打包</li></ol><ul><li>使用 dll 技术，对某些库（第三方库：jQuery、react、vue...）进行单独打包</li><li>当运行 webpack 时，默认查找 webpack.config.js 配置文件，该文件通过插件配置哪些库不需要重复打包；配置将文件打包出去，在 html 中自动引入该资源</li><li>需要运行 webpack.dll.js 文件(生成一个 manifest.json 文件提供和打包库的映射) --&gt; webpack --config webpack.dll.js</li></ul><ol start="13"><li>总结</li></ol><ul><li><p>开发环境性能优化</p><ul><li>优化打包构建速度 <ul><li>HRM</li></ul></li><li>优化代码调试 <ul><li>source-map</li></ul></li></ul></li><li><p>生产环境性能优化</p><ul><li>优化打包构建速度 <ul><li>oneOf</li><li>babel 缓存</li><li>多进程打包</li><li>externals</li><li>dll</li></ul></li><li>优化代码运行的性能 <ul><li>缓存（hash-chunkhash-contenthash）</li><li>tree shaking</li><li>code split</li><li>懒加载/预加载</li><li>pwa</li></ul></li></ul></li></ul>`,41)]))}const o=s(p,[["render",t],["__file","webpack.html.vue"]]),u=JSON.parse('{"path":"/page/project/webpack.html","title":"webpack","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"面试题","slug":"面试题","link":"#面试题","children":[{"level":3,"title":"webpack 的打包流程","slug":"webpack-的打包流程","link":"#webpack-的打包流程","children":[]},{"level":3,"title":"webpack 性能优化","slug":"webpack-性能优化","link":"#webpack-性能优化","children":[]},{"level":3,"title":"webpack 实战","slug":"webpack-实战","link":"#webpack-实战","children":[]}]}],"git":{},"filePathRelative":"page/project/webpack.md"}');export{o as comp,u as data};

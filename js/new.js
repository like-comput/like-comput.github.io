function switchNightMode(){document.querySelector("body").insertAdjacentHTML("beforeend",'<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),setTimeout((function(){document.querySelector("body").classList.contains("DarkMode")?(document.querySelector("body").classList.remove("DarkMode"),localStorage.setItem("isDark","0"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-moon")):(document.querySelector("body").classList.add("DarkMode"),localStorage.setItem("isDark","1"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-sun")),setTimeout((function(){document.getElementsByClassName("Cuteen_DarkSky")[0].style.transition="opacity 3s",document.getElementsByClassName("Cuteen_DarkSky")[0].style.opacity="0",setTimeout((function(){document.getElementsByClassName("Cuteen_DarkSky")[0].remove()}),1e3)}),2e3)})),"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night),document.getElementById("modeicon").setAttribute("xlink:href","#icon-sun")):(activateLightMode(),saveToLocal.set("theme","light",2),document.querySelector("body").classList.add("DarkMode"),document.getElementById("modeicon").setAttribute("xlink:href","#icon-moon")),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)}function tagsBarActive(){var e=window.location.pathname;if("/"==(e=decodeURIComponent(e)))document.querySelector("#tags-bar")&&document.getElementById("首页").classList.add("select");else if(/\/tags\/.*?\//.test(e)){var t=e.split("/")[2];document.querySelector("#category-bar")&&document.getElementById(t).classList.add("select")}}if(tagsBarActive(),""===GLOBAL_CONFIG_SITE.title.replace("Eurkon","")?document.getElementById("page-name-text").style.display="none":document.getElementById("page-name-text").getElementsByTagName("span")[0].innerHTML=GLOBAL_CONFIG_SITE.title.replace("Eurkon",""),!document.getElementById("post-comment")&&document.getElementById("comment-button")&&(document.getElementById("comment-button").style.display="none"),document.getElementById("post-cover-img")){let e=[];for(let t=0;t<=5;t++)for(let o=0;o<=5;o++)for(let n=0;n<=5;n++)e.push(`rgb(${t},${o},${n})`),e.push(`rgb(${255-t},${255-o},${255-n})`);RGBaster.colors(document.getElementById("post-cover-img").getAttribute("src"),{paletteSize:30,exclude:e,success:function(e){const t=e.dominant.match(/\d+/g),o=.299*t[0]+.587*t[1]+.114*t[2];document.styleSheets[0].addRule(":root","--main: "+e.dominant),document.styleSheets[0].addRule(":root","--second: "+(o>=192?"#000":"#FFF")),document.styleSheets[0].addRule(":root",`--main-light: rgba(${t[0]}, ${t[1]}, ${t[2]}, .4)`),document.styleSheets[0].addRule(":root",`--main-shadow: 0 8px 12px -3px rgba(${t[0]}, ${t[1]}, ${t[2]}, .2)`),document.styleSheets[0].addRule(":root","--cover-text: "+(o>=192?"#4C4948":"#EEE")),document.styleSheets[0].addRule(":root",`--cover-bg: rgba(${t[0]}, ${t[1]}, ${t[2]})`)}})}else document.styleSheets[0].addRule(":root","--main: #49B1F5"),document.styleSheets[0].addRule(":root","--second: #FFF"),document.styleSheets[0].addRule(":root","--main-light: rgba(73, 177, 245, .4)"),document.styleSheets[0].addRule(":root","--main-shadow: 0 8px 12px -3px rgba(73, 177, 245, .2)"),document.styleSheets[0].addRule(":root","--cover-text: #EEE"),document.styleSheets[0].addRule(":root","--cover-bg: #49B1F5");function catalogActive(e){let t=window.location.pathname;if(t=decodeURIComponent(t),("tags"==e?/\/tags\/.*?\//:/\/categories\/.*?\//).test(t)&&document.querySelector("#catalog-list")){document.getElementById(t.split("/")[2]).classList.add("selected");let e=document.getElementById("catalog-list");e.addEventListener("mousewheel",(function(t){let o=-t.wheelDelta/2;e.scrollLeft+=o,t.preventDefault()}),!1)}}function copyContentFn(e){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const t=e.previousElementSibling;t.innerText=GLOBAL_CONFIG.copy.success,t.style.opacity=1,setTimeout((()=>{t.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport}function copyClickFn(e,t){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const e=t.previousElementSibling;e.innerText=GLOBAL_CONFIG.copy.success,e.style.opacity=1,setTimeout((()=>{e.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport}function postUrlCopyFn(e){const t=e.parentNode;t.classList.add("copy-true");const o=window.getSelection(),n=document.createRange();n.selectNodeContents(t.querySelectorAll("#post-url")[0]),o.removeAllRanges(),o.addRange(n),copyClickFn(o.toString(),e.prevEle),o.removeAllRanges(),t.classList.remove("copy-true")}function copyFn(e){$("body").after("<input id='copyText'></input>");const t=document.getElementById("copyText");t.value=e,t.select(),document.execCommand("copy"),t.remove(),copyContentFn(this)}function switchReadMode(){const e=document.body;if(e.classList.contains("read-mode"))return void e.classList.remove("read-mode");e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function o(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",o)}))}function switchDarkMode(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)}function showOrHideBtn(){document.getElementById("rightside-config-hide").classList.toggle("show")}function scrollToTop(){btf.scrollToDest(0,500)}function hideAsideBtn(){const e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")}function adjustFontSize(e){const t=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size"));let o="";if(e){if(t>=20)return;o=t+1,document.documentElement.style.setProperty("--global-font-size",o+"px"),!document.getElementById("nav").classList.contains("hide-menu")&&adjustMenu(!0)}else{if(t<=10)return;o=t-1,document.documentElement.style.setProperty("--global-font-size",o+"px"),document.getElementById("nav").classList.contains("hide-menu")&&adjustMenu(!0)}saveToLocal.set("global-font-size",o,2)}function switchPostChart(){let e="light"===document.documentElement.getAttribute("data-theme")?"#4C4948":"rgba(255,255,255,0.7)";if(document.getElementById("posts-chart")&&postsOption)try{let t=postsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,postsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("tags-chart")&&tagsOption)try{let t=tagsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,tagsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("categories-chart")&&categoriesOption)try{let t=categoriesOption;t.title.textStyle.color=e,t.legend.textStyle.color=e,t.series[0].label.color=e,categoriesChart.setOption(t)}catch(e){console.log(e)}}function switchVisitChart(){let e="light"===document.documentElement.getAttribute("data-theme")?"#4C4948":"rgba(255,255,255,0.7)";if(document.getElementById("map-chart"))try{let t=mapOption;t.title.textStyle.color=e,t.visualMap.textStyle.color=e,mapChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("trends-chart"))try{let t=trendsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,trendsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("sources-chart"))try{let t=sourcesOption;t.title.textStyle.color=e,t.legend.textStyle.color=e,t.series[0].label.color=e,sourcesChart.setOption(t)}catch(e){console.log(e)}}function scrollToTop(){btf.scrollToDest(0,500)}if(document.styleSheets[0].addRule('[data-theme="dark"]',"--second: #EEE !important"),document.styleSheets[0].addRule('[data-theme="dark"]',"--main-light: rgba(92, 92, 92, .4) !important"),document.styleSheets[0].addRule('[data-theme="dark"]',"--main-shadow: 0 8px 12px -3px rgba(92, 92, 92, .2) !important"),catalogActive("categories"),console.log(["                   _ooOoo_","                  o8888888o",'                  88" . "88',"                  (| -_- |)","                  O\\  =  /O","               ____/`---'\\____","             .'  \\\\|     |//  `.","            /  \\\\|||  :  |||//  \\","           /  _||||| -:- |||||-  \\","           |   | \\\\\\  -  /// |   |","           | \\_|  ''\\---/''  |   |","           \\  .-\\__  `-`  ___/-. /","         ___`. .'  /--.--\\  `. . __",'      ."" \'<  `.___\\_<|>_/___.\'  >\'"".',"     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |","     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /","======`-.____`-.___\\_____/___.-`____.-'======","                   `=---='","^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^","         佛祖保佑       永无BUG"].join("\n")),document.getElementById("top-button").onclick=scrollToTop,document.getElementById("page-name-text").onclick=scrollToTop,$(document).keyup((function(e){123==e.keyCode&&btf.snackbarShow("稍等一下 开发者控制台即将打开")})),document.getElementById("post-cover")){const e=document.getElementById("post-cover").getAttribute("data-lazy-src");RGBaster.colors(e,{paletteSize:30,exclude:["rgb(255,255,255)","rgb(0,0,0)","rgb(254,254,254)"],success:function(e){if("rgb()"!=e.dominant){const t=e.dominant.match(/\d+/g),o=`rgba(${t[0]},${t[1]},${t[2]},0.8)`;let n;.213*t[0]+.715*t[1]+.072*t[2]>=127.5?(n="#000",metaColor="#1C1C1C"):(n="#fff",metaColor="#eee"),document.styleSheets[0].addRule(":root","--blog-main:"+o+"!important"),document.styleSheets[0].addRule(":root","--blog-titlecolor:"+n+"!important"),document.styleSheets[0].addRule(":root","--blog-metacolor:"+metaColor+"!important")}else document.styleSheets[0].addRule(":root","--blog-main: rgba(255,250,240,0.5) !important"),document.styleSheets[0].addRule(":root","--blog-titlecolor: #000 !important"),document.styleSheets[0].addRule(":root","--blog-metacolor: #1C1C1C !important")},error:function(){document.styleSheets[0].addRule(":root","--blog-main: rgba(255,250,240,0.5) !important"),document.styleSheets[0].addRule(":root","--blog-titlecolor: #000 !important"),document.styleSheets[0].addRule(":root","--blog-metacolor: #1C1C1C !important")}})}else document.styleSheets[0].addRule(":root","--blog-main: transparent !important"),document.styleSheets[0].addRule(":root","--blog-titlecolor: var(--light-grey) !important");
!function(n){"use strict";var t=function(n){return["rgb(",n,")"].join("")},a={};a.colors=function(n,a){var e=(a=a||{}).exclude||[],o=a.paletteSize||10;!function(n,t){var a=new Image,e=n.src||n;"data:"!==e.substring(0,5)&&(a.crossOrigin="Anonymous"),a.onload=function(){var n=document.createElement("canvas").getContext("2d");n.drawImage(a,0,0);var e=n.getImageData(0,0,a.width,a.height);t&&t(e.data)},a.src=e}(n,(function(r){for(var i=n.width*n.height||r.length,c={},u="",m=[],s={dominant:{name:"",count:0},palette:Array.apply(null,new Array(o)).map(Boolean).map((function(){return{name:"0,0,0",count:0}}))},d=0;i>d;){if(m[0]=r[d],m[1]=r[d+1],m[2]=r[d+2],c[u=m.join(",")]=u in c?c[u]+1:1,-1===e.indexOf(t(u))){var f=c[u];f>s.dominant.count?(s.dominant.name=u,s.dominant.count=f):s.palette.some((function(n){return f>n.count?(n.name=u,n.count=f,!0):void 0}))}d+=20}if(a.success){var l=function(n){return n.map((function(n){return t(n.name)}))}(s.palette);a.success({dominant:t(s.dominant.name),secondary:l[0],palette:l})}}))},n.RGBaster=n.RGBaster||a}(window);
(()=>{"use strict";const e="ENTRANCE",o="PATH",t="WALL",n="EXIT",r={[e]:"entrance",[o]:"path",[t]:"wall",[n]:"exit"};function c(e,o){return{row:Math.floor(Math.random()*e),column:Math.floor(Math.random()*o)}}(function(r,a){const l=[];for(let e=0;e<5;e++){l[e]=[];for(let o=0;o<5;o++)l[e][o]=0}const m=c(5,5);let d;l[m.row][m.column]=e;do{d=c(5,5)}while(d.row===m.row&&d.column===m.column);l[d.row][d.column]=n;for(let e=0;e<5;e++)for(let n=0;n<5;n++)0===l[e][n]&&(l[e][n]=Math.random()>.5?o:t);return l})().forEach((e=>{const o=document.createElement("div");o.className="row";let t=document.querySelector("#maze-container");t||(t=document.createElement("div"),t.id="maze-container",document.body.append(t)),t.append(o),e.forEach((e=>{const t=document.createElement("div");t.className=r[e],o.append(t)}))}))})();
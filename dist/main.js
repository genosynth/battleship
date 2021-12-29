(()=>{var e={171:e=>{const t=document.getElementsByClassName("container");e.exports=function(e){if(1==e){t[0].innerText="";for(let e=0;e<100;e++)div=document.createElement("div"),div.classList.add("grid-item"),t[0].appendChild(div)}if(2==e){let e=document.getElementsByClassName("container-game");e[1].innerText="";for(let t=0;t<100;t++)div=document.createElement("div"),div.classList.add("grid-item"),e[1].appendChild(div)}}},872:e=>{const t=document.getElementsByTagName("main")[0];e.exports={updateCSS:function(){let e=document.createElement("div");e.classList.toggle("container-game"),t.appendChild(e),t.classList.toggle("forMainClass"),document.getElementsByClassName("container")[0].classList.remove("container"),document.getElementsByTagName("div")[0].classList.add("container-game"),document.getElementById("axis").style.display="none"}}},13:e=>{e.exports=class{constructor(e,t){this.player=e,this.ships=[],this.positionsOfShips=[],this.missedShots=[]}assignPositions(){this.ships.forEach((e=>{e.positions.forEach((e=>{this.positionsOfShips.push(e)}))}))}recieveAttack(e){let t=!1;this.positionsOfShips.forEach((s=>{e==s&&this.ships.forEach((e=>{e.positions.forEach((i=>{i==s&&(t=!0,e.hit(s))}))}))})),0==t&&this.missedShots.push(e)}checkForAllShipsSunk(){let e=!1;return this.ships.forEach((t=>{e=t.isSunk()})),e}}},926:(e,t,s)=>{s(13),e.exports=class{constructor(e,t){this.name=e,this.gameBoard=t}fireShot(e,t){t.recieveAttack(e)}}},113:e=>{e.exports=class{constructor(e,t,s){this.name=e,this.length=t,this.positions=s,this.hits=[]}hit(e){this.hits.push(e)}isSunk(){return this.hits.length===this.length}}}},t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}(()=>{const e=s(113),t=s(926),i=s(13),o=s(171),r=s(872);var n=document.querySelectorAll("div");let a=5;var l="Z";shipNamesArray=["Patrol Boat","Cruiser","Submarine","Battleship","Carrier"];let c=new t("Jean"),h=new i("player1");function d(e,t){if(u(),!(e+t>101)){if("Z"==l)for(let s=0;s<t;s++)n[e+s].style.backgroundColor="rgb(49, 46, 46)";if("Y"==l)for(let s=0;s<10*t;s+=10)n[e+s].style.backgroundColor="rgb(49, 46, 46)"}}function p(e,t){if(u(),"Z"==l)for(let s=0;s<t;s++)n[e+s].style.backgroundColor="aqua";if("Y"==l)for(let s=0;s<10*t;s+=10)n[e+s].style.backgroundColor="aqua"}function u(){let e=document.querySelectorAll("div");for(let t=1;t<=100;t++)for(let s=0;s<c.gameBoard.ships.length;s++)c.gameBoard.ships[s].positions.forEach((s=>{t==s&&(e[t].style.backgroundColor="rgb(49, 46, 46)")}))}c.gameBoard=h,document.getElementById("axis").addEventListener("click",(function(){return"Z"==l?(u(),l="Y"):"Y"==l?(u(),l="Z"):void 0})),o(1),displayMessage=e=>{document.getElementById("console").textContent=e},displayMessage("Place Your "+shipNamesArray[a-1]),function t(s,i){if(0!=a){n=document.querySelectorAll("div");for(let e=1;e<=100;e++)n[e].addEventListener("mouseover",d.bind(this,e,i)),n[e].addEventListener("mouseout",p.bind(this,e,i));for(let d=1;d<100;d++)n[d].addEventListener("click",(function(){let p=[];if("Z"==l)for(let e=0;e<i;e++)p.push(d+e);if("Y"==l)for(let e=0;e<10*i;e+=10)p.push(d+e);for(let e=0;e<i;e++)if(p[e]>100)return console.log("Cannot place ship here");let m=new e(s,i,p);if(c.gameBoard.ships.length>0)for(let e=0;e<c.gameBoard.ships.length;e++)for(let s=0;s<c.gameBoard.ships[e].positions.length;s++)for(let i=0;i<p.length;i++)if(p[i]==h.ships[e].positions[s])return o(1),u(),displayMessage("Place Your "+shipNamesArray[a-1]),t(shipNamesArray[a-1],a),console.log("cannot put ship here");c.gameBoard.ships.push(m),n.forEach((e=>{})),o(1),u(),a--,displayMessage("Place Your "+shipNamesArray[a-1]),t(shipNamesArray[a-1],a),0==a&&(displayMessage("Attack!"),c.gameBoard.assignPositions(),r.updateCSS(),o(2),u()),console.log(c)}))}}(shipNamesArray[a-1],a)})()})();
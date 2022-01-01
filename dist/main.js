(()=>{var e={171:e=>{const s=document.getElementsByClassName("container");e.exports=function(e){if(1==e){s[0].innerText="";for(let e=0;e<100;e++)div=document.createElement("div"),div.classList.add("grid-item"),s[0].appendChild(div)}if(2==e){let e=document.getElementsByClassName("container-game");e[1].innerText="";for(let s=0;s<100;s++)div=document.createElement("div"),div.classList.add("grid-item"),e[1].appendChild(div)}}},872:e=>{const s=document.getElementsByTagName("main")[0];e.exports={updateCSS:function(){let e=document.createElement("div");e.classList.toggle("container-game"),s.appendChild(e),s.classList.toggle("forMainClass"),document.getElementsByClassName("container")[0].classList.remove("container"),document.getElementsByTagName("div")[0].classList.add("container-game"),document.getElementById("axis").style.display="none"},updateP1BoxesCSS:function(){for(let e=0;e<100;e++)document.getElementsByClassName("grid-item")[e].classList.add("grid-item-p1");for(let e=0;e<100;e++)document.getElementsByClassName("grid-item-p1")[e].classList.remove("grid-item")}}},13:e=>{e.exports=class{constructor(e,s){this.player=e,this.ships=[],this.positionsOfShips=[],this.missedShots=[]}assignPositions(){this.ships.forEach((e=>{e.positions.forEach((e=>{this.positionsOfShips.push(e)}))}))}recieveAttack(e){let s=!1;this.positionsOfShips.forEach((t=>{e==t&&this.ships.forEach((e=>{e.positions.forEach((o=>{o==t&&(s=!0,e.hits.includes(t)||e.hit(t))}))}))})),0==s&&(this.missedShots.includes(e)||this.missedShots.push(e))}checkForAllShipsSunk(){let e=[];if(this.ships.forEach((s=>{e.push(s.isSunk())})),!e.includes(!1))return!0}}},926:(e,s,t)=>{t(13),e.exports=class{constructor(e,s){this.name=e,this.gameBoard=s}fireShot(e,s){s.recieveAttack(e)}}},113:e=>{e.exports=class{constructor(e,s,t){this.name=e,this.length=s,this.positions=t,this.hits=[]}hit(e){this.hits.push(e)}isSunk(){return this.hits.length===this.length}}}},s={};function t(o){var i=s[o];if(void 0!==i)return i.exports;var r=s[o]={exports:{}};return e[o](r,r.exports,t),r.exports}(()=>{const e=t(113),s=t(926),o=t(13),i=t(171),r=t(872);var a=document.querySelectorAll("div");let n=5;var l="Z";shipNamesArray=["Patrol Boat","Cruiser","Submarine","Battleship","Carrier"];let d=new s("Jean"),h=new o("player1");var c;function m(e,s){if(f(),!(e+s>101)){if("Z"==l)for(let t=0;t<s;t++)a[e+t].style.backgroundColor="rgb(49, 46, 46)";if("Y"==l)for(let t=0;t<10*s;t+=10)a[e+t].style.backgroundColor="rgb(49, 46, 46)"}}function u(e,s){if(f(),"Z"==l)for(let t=0;t<s;t++)a[e+t].style.backgroundColor="aqua";if("Y"==l)for(let t=0;t<10*s;t+=10)a[e+t].style.backgroundColor="aqua"}function g(){for(let e=0;e<100;e++)document.getElementsByClassName("grid-item")[e].addEventListener("click",(function(){d.fireShot(e+1,c.gameBoard),console.log(c),p()}))}function p(){i(2);let e=document.getElementsByClassName("grid-item");for(let s=0;s<e.length+1;s++)c.gameBoard.ships.forEach((t=>{t.hits.forEach((t=>{t==s&&(e[s-1].style.backgroundColor="red")}))})),c.gameBoard.missedShots.forEach((t=>{t==s&&(e[s-1].style.backgroundColor="rgb(11, 146, 146)")}));return c.gameBoard.checkForAllShipsSunk()?document.getElementById("console").innerText="You Win!":d.gameBoard.checkForAllShipsSunk()?document.getElementById("console").innerText="You Loose!":(function(){let e=Number;for(e=Math.floor(100*Math.random())+1;d.gameBoard.missedShots.includes(e)||d.gameBoard.ships[0].hits.includes(e)||d.gameBoard.ships[1].hits.includes(e)||d.gameBoard.ships[2].hits.includes(e)||d.gameBoard.ships[3].hits.includes(e)||d.gameBoard.ships[4].hits.includes(e);)e=Math.floor(100*Math.random())+1;c.fireShot(e,d.gameBoard),console.log(d);let s=document.getElementsByClassName("grid-item-p1");d.gameBoard.positionsOfShips;for(let e=1;e<s.length+1;e++)d.gameBoard.ships.forEach((t=>{t.hits.forEach((t=>{t==e&&(s[e-1].style.backgroundColor="red")}))})),d.gameBoard.missedShots.forEach((t=>{t==e&&(s[e-1].style.backgroundColor="rgb(11, 146, 146)")}))}(),void g())}function f(){let e=document.querySelectorAll("div");for(let s=1;s<=100;s++)for(let t=0;t<d.gameBoard.ships.length;t++)d.gameBoard.ships[t].positions.forEach((t=>{s==t&&(e[s].style.backgroundColor="rgb(49, 46, 46)")}))}function B(){c=new s("CPU");let t=new o("player2");c.gameBoard=t;for(let s=4;s>-1;s--){let t=!1,o=y(s+1),i=new e(shipNamesArray[s],s+1,o);for(let e=0;e<c.gameBoard.ships.length;e++)c.gameBoard.ships[e].positions.forEach((e=>{if(o.includes(e))return console.log(o),void(t=!0)}));1==t&&(s+=1),0==t&&c.gameBoard.ships.push(i)}return c.gameBoard.assignPositions(),console.log(c)}function y(e){let s=Math.floor(2*Math.random()),t=[];if(0==s){let s=Math.floor(Math.random()*(100-e))+1;for(let o=0;o<e;o++)t.push(s+o)}if(1==s){let s=Math.floor(Math.random()*(100-10*e))+1;for(let o=0;o<10*e;o+=10)t.push(s+o)}return t}d.gameBoard=h,document.getElementById("axis").addEventListener("click",(function(){return"Z"==l?(f(),l="Y"):"Y"==l?(f(),l="Z"):void 0})),i(1),displayMessage=e=>{document.getElementById("console").textContent=e},displayMessage("Place Your "+shipNamesArray[n-1]),function s(t,o){if(0!=n){a=document.querySelectorAll("div");for(let e=1;e<=100;e++)a[e].addEventListener("mouseover",m.bind(this,e,o)),a[e].addEventListener("mouseout",u.bind(this,e,o));for(let c=1;c<100;c++)a[c].addEventListener("click",(function(){let m=[];if("Z"==l)for(let e=0;e<o;e++)m.push(c+e);if("Y"==l)for(let e=0;e<10*o;e+=10)m.push(c+e);for(let e=0;e<o;e++)if(m[e]>100)return console.log("Cannot place ship here");let u=new e(t,o,m);if(d.gameBoard.ships.length>0)for(let e=0;e<d.gameBoard.ships.length;e++)for(let t=0;t<d.gameBoard.ships[e].positions.length;t++)for(let o=0;o<m.length;o++)if(m[o]==h.ships[e].positions[t])return i(1),f(),displayMessage("Place Your "+shipNamesArray[n-1]),s(shipNamesArray[n-1],n),console.log("cannot put ship here");d.gameBoard.ships.push(u),a.forEach((e=>{})),i(1),f(),n--,displayMessage("Place Your "+shipNamesArray[n-1]),s(shipNamesArray[n-1],n),0==n&&(displayMessage("Attack!"),d.gameBoard.assignPositions(),r.updateCSS(),i(2),r.updateP1BoxesCSS(),console.log(B()),g()),console.log(d)}))}}(shipNamesArray[n-1],n)})()})();
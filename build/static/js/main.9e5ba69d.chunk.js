(this["webpackJsonpdraconid-wars"]=this["webpackJsonpdraconid-wars"]||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(9),c=a.n(l),s=(a(17),a(6)),i=a(1),o=a(2),u=a(4),m=a(3),h=function(e){var t=e.players,a=e.getPlayerRace,r=e.onIntroScreen;return n.a.createElement("div",{className:"players"},t.map((function(e){return n.a.createElement("div",{key:e.number},n.a.createElement("h3",{style:{textAlign:"center"}},a(e.number)," Hero"),!0===r?n.a.createElement("button",{className:"character character-display",style:{textDecoration:"none"}},n.a.createElement("img",{className:"character-image",src:"./characters/".concat(e.character,".png"),alt:e.character}),n.a.createElement("div",{style:{textAlign:"center",fontFamily:"Space Mono"}},e.character),n.a.createElement("p",{className:"player-score"},e.score)):n.a.createElement("button",{className:"character character-intro",style:{textDecoration:"none"}},n.a.createElement("img",{className:"character-image",src:"./characters/".concat(e.character,".png"),alt:e.character}),n.a.createElement("div",{style:{textAlign:"center",fontFamily:"Space Mono"}},e.character),n.a.createElement("p",{className:"player-score"},e.score)))})))},p=function(){return n.a.createElement("div",{class:"footer"},n.a.createElement("h6",null,"Created by Aditya Vikram Singh"))},y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).onClose=function(t){e.props.onClose(t)},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.displayInstruction?n.a.createElement("div",{class:"instructions"},n.a.createElement("h2",{style:{textAlign:"center"}},"Game Instructions"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{class:"content"},n.a.createElement("ul",null,n.a.createElement("li",null,"The first player chooses a Humanoid character."),n.a.createElement("li",null,"The second player chooses a Draconem character."),n.a.createElement("li",null,"The Board appears, and Humanoid character begins by rolling a die!"),n.a.createElement("li",null,"The player moves ahead the same number of tiles as the number on the die.",n.a.createElement("ul",null,n.a.createElement("li",null,"If the player lands on their own tile, then their score is incremented by 2."),n.a.createElement("li",null,"If the player lands on their opponent's tile, then their score is decremented by 1."),n.a.createElement("li",null,"If the player lands on Fields of Destiny, they have an equal chance of winning a point or forfeiting a point."),n.a.createElement("li",null,"If the player lands on Mythic Kingdom of Friendship, the player's score is not affected."))),n.a.createElement("li",null,"There is no clear winner in this game (just like there is no victor in war), and you can keep playing till one of the players reach an arbitrary limit on the score, decided before embarking on this quest. A game of 15 points is preferable for short playthroughs."))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("button",{class:"inverted-button",onClick:this.onClose},"Close Instructions"))):null}}]),a}(r.Component),d=a(10),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={characters:{Draconem:["Baneful Blue Dragon","Fiery Red Dragon","Noxious Green Dragon"],Humanoid:["Ancient Wizard","Mighty Knight","Stealthy Rogue"]},currentPlayerNumber:1,players:[],readyToStart:!1},e.setPlayer=function(t){e.setState((function(e){return{currentPlayerNumber:e.currentPlayerNumber+1,players:[].concat(Object(d.a)(e.players),[{number:e.currentPlayerNumber,character:t}]),readyToStart:2===e.currentPlayerNumber}}))},e.getPlayerRace=function(e){return 1===e?"Humanoid":"Draconem"},e.startGame=function(){e.props.startGame(e.state.players)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(h,{players:this.state.players,getPlayerRace:this.getPlayerRace,onIntroScreen:!0}),this.state.readyToStart?n.a.createElement(r.Fragment,null,n.a.createElement("button",{onClick:this.startGame,className:"button"},"Start Game")):n.a.createElement(r.Fragment,null,n.a.createElement("h1",{style:{textAlign:"center"}},this.getPlayerRace(this.state.currentPlayerNumber)," race, choose your hero:"),this.state.characters[this.getPlayerRace(this.state.currentPlayerNumber)].map((function(t){return n.a.createElement("button",{className:"character",onClick:function(){return e.setPlayer(t)},style:{textDecoration:"none"},key:t},n.a.createElement("img",{className:"character-image",src:"./characters/".concat(t,".png"),alt:t}),n.a.createElement("div",{style:{textAlign:"center"}},t))}))))}}]),a}(r.Component),f=a(11),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={boardSideSize:8,tiles:[]},e.diceThrow=function(){var t=Math.floor(6*Math.random()),a=["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"][t];e.setState({diceDisplay:a}),e.props.movePlayer(t+1,e.state.tiles)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.tileGenerator();this.setState({tiles:e})}},{key:"tileGenerator",value:function(){for(var e=Object(f.a)(this.props.players,2),t=e[0],a=e[1],r=[{row_index:1,col_index:1,type:"Start"}],n=this.state.boardSideSize,l=1,c=1,s=2,i=4*(n-1);r.length<i;){var o={row_index:c,col_index:s};o.type=l%3===0?"Fields of Destiny":l%3===1?t.character:a.character,r.push(o);var u=n-1;++l<=u?++s:l<=2*u?++c:l<=3*u?--s:--c}return r}},{key:"render",value:function(){var e=this,t=this.state.boardSideSize,a=[];return this.state.tiles.length>0&&(a=this.props.players.map((function(t){return e.state.tiles[t.position%e.state.tiles.length]}))),n.a.createElement("div",{className:"game-board",style:{gridTemplateRows:"repeat(".concat(t,", 1fr)"),gridTemplateColumns:"repeat(".concat(t,", 1fr)")}},this.state.tiles.map((function(e,t){return n.a.createElement("div",{className:"game-tile",style:{gridRow:e.row_index,gridColumn:e.col_index},key:t},"Start"!==e.type?n.a.createElement("img",{alt:e.type,src:"./tiles/".concat(e.type,".png")}):n.a.createElement("img",{alt:"Start",src:"./tiles/Mythic Kingdom of Friendship.png"}))})),a.map((function(t,a){var r=e.props.players[a];return n.a.createElement("div",{className:"player-character",key:r.number,style:{gridRow:t.row_index,gridColumn:t.col_index,transition:"all 1s"}},n.a.createElement("img",{className:"character-image",alt:r.number,src:"./characters/".concat(r.character,".png")}))})),n.a.createElement("div",{className:"board-center"},this.props.tile?n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,this.props.tile.player.character,":",this.props.tile.points," ","score"),n.a.createElement("h5",null,this.props.tile.player.character," landed on"," ",this.props.tile.type,"!")):"",n.a.createElement("h5",null," ",this.props.currentPlayer.character,", roll the dice! \ud83c\udfb2"),n.a.createElement("p",{className:"dice-thrown"},this.state.diceDisplay),n.a.createElement("button",{onClick:this.diceThrow,className:"button"},"Dice Roll!")))}}]),a}(r.Component),E=(a(18),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={players:[],gameStarted:!1,displayInstruction:!1,currentPlayer:null,tile:null},e.toggleInstruction=function(t){e.setState({displayInstruction:!e.state.displayInstruction})},e.startGame=function(t){e.setState({players:t.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{position:0,score:0})})),gameStarted:!0,currentPlayer:t[0]})},e.movePlayer=function(t,a){e.setState((function(e){var r=e.players.find((function(t){return t.number===e.currentPlayer.number})),n=r.position+t,l=a[n%a.length],c=l.type===r.character?2:"Start"===l.type?0:"Fields of Destiny"!==l.type?-1:0===Math.floor(2*Math.random())?1:-1;return{tile:{player:r=Object(s.a)(Object(s.a)({},r),{},{position:r.position+t,score:Math.max(0,r.score+c)}),type:l.type,points:(c>=0?"+":"")+c},players:e.players.map((function(t){return t.number===e.currentPlayer.number?r:t})),currentPlayer:e.currentPlayer.number===e.players[0].number?e.players[1]:e.players[0]}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"header"},n.a.createElement("button",{onClick:function(t){e.toggleInstruction(t)},className:"inverted-button"},"Instructions"),n.a.createElement("h1",null,"Draconid Wars"),n.a.createElement("a",{className:"inverted-button",style:{textDecoration:"none"},href:""},"Restart Game")),this.state.displayInstruction?n.a.createElement(y,{onClose:this.toggleInstruction,displayInstruction:this.state.displayInstruction}):n.a.createElement("div",{className:"App"},n.a.createElement(h,{players:this.state.players,getPlayerRace:function(e){return 1===e?"Humanoid":"Draconem"},onIntroScreen:!1}),this.state.gameStarted?n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{players:this.state.players,currentPlayer:this.state.currentPlayer,tile:this.state.tile,gameOver:this.state.gameOver,movePlayer:this.movePlayer})):n.a.createElement(g,{startGame:this.startGame})),n.a.createElement(p,null))}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.9e5ba69d.chunk.js.map
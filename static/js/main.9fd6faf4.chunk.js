(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(32)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),i=t(11),o=t(12),m=t(16),s=t(13),u=t(17);t(24);var d=function(e){return r.a.createElement("div",{onClick:function(){return e.chooseCharacter(e.id)},className:"card"},r.a.createElement("img",{alt:e.name,src:e.image}))};t(25);var f=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},b=(t(26),t(14)),h=t.n(b);var g=function(e){return r.a.createElement("h1",null,r.a.createElement(h.a,{variant:"danger"},"Score: ",e.count))};t(30);var p=function(e){return r.a.createElement("h1",{className:"title"},e.children)},v=t(7),y=t(15),_=t.n(y),E=t(8),k=t.n(E),w=t(6),x=t.n(w),S=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={characters:v,count:0,available:[]},t.shuffle=function(e){for(var a,n,r=e.length;r;)n=Math.floor(Math.random()*r--),a=e[r],e[r]=e[n],e[n]=a;return t.setState({characters:e})},t.empty=function(e){var a=t.state.available.filter(function(a){return a.id===e});t.setState({available:a}),console.log(a)},t.chooseCharacter=function(e){if(console.log(e),console.log(t.state.available.filter(function(a){return a.id!==e}),"no item in the array matches the id passed in"),console.log(t.state.available.filter(function(a){return a.id===e}),"an item in the array matches the id passed in"),t.state.available.length>0&&!1===t.state.available.some(function(a){return a.id===e}))console.log("first conditional works"),console.log(t.state.available),t.setState({characters:v,count:0}),t.empty(e),t.shuffle(t.state.characters);else if(t.state.available.length<1){console.log("second conditional works"),t.handleScoreChange();var a=t.state.characters.filter(function(a){return a.id!==e});t.setState({available:a}),console.log(a),t.shuffle(t.state.characters)}else if(!0===t.state.available.some(function(a){return a.id===e})){console.log("third conditional works"),t.handleScoreChange();var n=t.state.available.filter(function(a){return a.id!==e});t.setState({available:n}),console.log(n),t.shuffle(t.state.characters)}},t.handleScoreChange=function(e){t.setState({count:t.state.count+1})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(_.a,null,r.a.createElement(k.a,null,r.a.createElement(x.a,{xs:12},r.a.createElement(p,null,"Stranger Things 3 Memory Game")),r.a.createElement(x.a,{xs:12,className:"text-center"},r.a.createElement(g,{count:this.state.count}))),r.a.createElement(k.a,null,r.a.createElement(x.a,null,r.a.createElement(f,null,this.state.characters.map(function(a){return r.a.createElement(d,{chooseCharacter:e.chooseCharacter,id:a.id,key:a.id,image:a.image,name:a.name})})))))}}]),a}(n.Component);t(31);l.a.render(r.a.createElement(S,null),document.getElementById("root"))},7:function(e){e.exports=[{id:1,name:"Eleven",image:"https://66.media.tumblr.com/6039eb5fdd77acbd2b741038b595cb56/tumblr_oykkz6yQu41tf5kqco1_250.png"},{id:2,name:"Mike Wheeler",image:"https://66.media.tumblr.com/1d51137c3f4ac7c4ad7cac41d0338ff2/tumblr_pu4isyaNqQ1s0v7b0o5_250.png"},{id:3,name:"Jim Hopper",image:"https://66.media.tumblr.com/fdfef88cd0b54f343adc31ad2c5a6397/tumblr_pualoxxNYD1u2eo2uo7_250.png"},{id:4,name:"Maxine 'Max' Mayfield",image:"https://66.media.tumblr.com/4a62f90a97937daf9269899f0c0d6a50/tumblr_pu5098UDuT1xmq33do6_250.png"},{id:5,name:"Dustin Henderson",image:"https://66.media.tumblr.com/08cc3177846acd3c90b48689bda263d9/tumblr_pufy1jA1Qt1y5wxweo9_250.png"},{id:6,name:"Lucas Sinclair",image:"https://66.media.tumblr.com/7814a25bd9fd6ae5985c727d2772e8ef/tumblr_ozli2gZT1d1wgp4lco1_250.jpg"},{id:7,name:"Will Byers",image:"https://66.media.tumblr.com/936c3902bb9664821c72e877fb1951f1/tumblr_p3zt7jCCUF1tut8b4o4_250.png"},{id:8,name:"Steve Harrington",image:"https://i.pinimg.com/736x/3b/84/5b/3b845bbcd5d179210859fda4e1db81a4--joe-keery-hot-stranger-things-steve.jpg"},{id:9,name:"Jonathan Byers",image:"https://66.media.tumblr.com/6c8909f861d569414fbe1895adf1c3ab/tumblr_oyp3njLrc21uflmebo7_250.png"},{id:10,name:"Nancy Wheeler",image:"https://66.media.tumblr.com/cc70c19c3da8e94ddfad3842d13c9378/tumblr_oykkz6yQu41tf5kqco7_250.png"},{id:11,name:"Billy Hargrove",image:"https://66.media.tumblr.com/5b3c1aeb014c674a94df0079d85a011e/tumblr_p01txiGbJm1vrpaero2_250.jpg"},{id:12,name:"Joyce Byers",image:"https://66.media.tumblr.com/3167ac9f0e489216d1bf56dd87b87abc/tumblr_pu70bfX3VF1s0v7b0o6_250.png"}]}},[[18,1,2]]]);
//# sourceMappingURL=main.9fd6faf4.chunk.js.map
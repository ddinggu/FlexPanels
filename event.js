// var wow = document.getElementsByClassName('item3');
// console.log(document.styleSheets[0]);
// // 보안상 CSS 파일에 접근 할 수 없다.
// console.log(document.styleSheets[0].cssRules);

// style 태그안의 value를 변화시킬 수 없다 ㅡㅡ
// function clickEvent(){
//     if(document.styleSheets[0].cssRules[2].style["flex"]) {
//         document.styleSheets[0].cssRules[2].style["flex"]= 3;
//     }
//     if(document.styleSheets[0].cssRules[2].style["flex"] === 3){
//         document.styleSheets[0].cssRules[2].style["flex"] = 1;
//     }   
//     console.log(document.styleSheets[0].cssRules[2].style["flex"]);
// }

function clickEvent(){
    this.classList.toggle('on_click');
}

function transitionEvent(){
   var topPtag = this.getElementsByTagName('p')[0],
       bottomPtag = this.getElementsByTagName('p')[2];

   topPtag.classList.toggle('text_animate');
   bottomPtag.classList.toggle('text_animate');
}

var common = document.getElementsByClassName('common');

Array.prototype.forEach.call(common, function(el){
    el.addEventListener('click', clickEvent);
    el.addEventListener("transitionend", transitionEvent);
})


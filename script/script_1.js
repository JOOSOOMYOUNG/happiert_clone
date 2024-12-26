const header = document.querySelector("hesder");
let scrollHight = 0; 
// 스크롤 위치값 넣을 변수

window.addEventListener("scroll",() => {
    if(scrollHight < window.scrollY){
        // 숨기는 함수 실행
    }else{
        // 헤더 보여짐
    }
    scrollHight = window.scrollY
});

function hide(){
    header.classList.add("hide");
}

function show(){
    header.classList.remove("hide");
}
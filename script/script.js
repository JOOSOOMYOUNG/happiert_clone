const header = document.getElementById("header");
        
    let posY = 0;
    // 스크롤 위치값 넣을 변수 생성
    window.addEventListener("scroll", (e) => {
        if(posY < scrollY){
            headerHide()
        }else{
            headerShow()
        }
        posY = window.scrollY
    });

    function headerHide(){
        header.classList.add("hide");
        // classList.add class를 미리 만들고 붙일 수 있음
    };

    function headerShow(){
        header.classList.remove("hide");
        // classList.remove "hide"라는 class를 없앨게
        }
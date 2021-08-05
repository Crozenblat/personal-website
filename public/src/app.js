const throttle = (fn, wait) => {
    let enableCall = true;

    return function(){

        if(!enableCall) return;

        enableCall = false;

        fn();
        setTimeout(() => enableCall = true, wait);
    };
};

(function init(){
    let bannerVideo =  document.querySelector(".banner_video");
    bannerVideo.play();

    let sections = Array.from(document.querySelectorAll("div[class^=section--]"));
    let bannerDownBtnWrppr = document.querySelector(".banner_down-btn-wrapper");
    let bannerDownBtn = document.querySelector(".banner_down-btn");


    setTimeout(() => {
        bannerDownBtnWrppr.classList.remove("contents-invisible");
    }, 1500);

    setTimeout(() => {
        bannerDownBtn.classList.add("pulse");
    }, 2500);


    window.addEventListener("scroll", () => {
        throttle(
        sections.forEach(section => {
            if((section.getBoundingClientRect().top + document.body.scrollTop) < 200){
                section.classList.remove("contents-invisible");
            };
        }), 100);
    });
})();
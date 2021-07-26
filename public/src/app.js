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


    let banner = document.querySelector(".banner");
    banner.style.height = `${window.innerHeight}px`;

    window.addEventListener("resize", () => {
        banner.style.height = `${window.innerHeight}px`;
        console.log(window.innerWidth);
    });

    let sections = Array.from(document.querySelectorAll("div[class^=section--]"));

    window.addEventListener("scroll", () => {
        throttle(
        sections.forEach(section => {
            console.log(section.getBoundingClientRect().top + document.body.scrollTop)
            if((section.getBoundingClientRect().top + document.body.scrollTop) < 250){
                section.classList.remove("contents-invisible");
            };
        }), 100);
    });
})();
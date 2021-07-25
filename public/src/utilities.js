export const throttle = (fn, wait) => {
    let enableCall = true;

    return function(){

        if(!enableCall) return;

        enableCall = false;

        fn();
        setTimeout(() => enableCall = true, wait);
    };
};
function searchWithDebounce (fn,delay){
    let timer;
    return function(...arg);
    clearTimeout(timer);
    timer = setTimeout(()=>{
        fn(...args);
    },delay);
    };
}


searchWithDebouncec(search,3000 )
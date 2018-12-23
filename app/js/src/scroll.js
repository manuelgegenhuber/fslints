export function onScroll(cb){
    window.addEventListener('scroll', function(event) {
        cb(event);
    });
};

export function anchorElement_outofView(anchorElement, modifyElement) {
    if(window.pageYOffset > anchorElement.offsetTop + anchorElement.offsetHeight){
        modifyElement.style.display = 'block';
    }else{
        modifyElement.style.display = 'none';
    }
};
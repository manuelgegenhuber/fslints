export function onScroll(cbBoth, cbScrollDown, cbScrollUp){
    window.addEventListener('scroll', function(event) {
        cbBoth(event);
        if(this.oldScroll > this.scrollY){
            cbScrollUp(event);
        }else{
            cbScrollDown(event);
        }
        //both
        this.oldScroll = this.scrollY;
    });
};

export function anchorElement_outofView(anchorElement, modifyElement) {
    if(window.pageYOffset > anchorElement.offsetTop - (anchorElement.offsetHeight / 2)){
        modifyElement.style.display = 'block';
    }else{
        modifyElement.style.display = 'none';
    }
};

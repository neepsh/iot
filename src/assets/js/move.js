function getStyle(obj,attr){
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,false)[attr];
    }
}
function doMove (obj,jaon,fn) {

    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var bStop=true;
        for(var attr in jaon){
            var iCur=0;
            if(attr=='opacity'){
                iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
            }else {
                iCur=parseInt(getStyle(obj,attr));
            }

            var iSpeed=(jaon[attr]-iCur)/8;
            iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
            if(iCur!=jaon[attr]){
                bStop=false;
            }
            if(attr=='opacity') {
                obj.style.opacity=(iCur+iSpeed)/100 ;
            }else {
                obj.style[attr]=iCur+iSpeed+'px';
            }
        }
        if(bStop){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30);

}
export {
    doMove
}

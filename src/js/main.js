var violetarrowsState = false;
function StartStopAnimate_violetarrows() {
    violetarrowsState = !violetarrowsState;
    if(violetarrowsState){
        document.getElementById("violetarrows").style.display = "block";
        //Preview_violetarrows()
    } else{
        //StopAnimate_violetarrows();
        document.getElementById("violetarrows").style.display = "none";
    }
}

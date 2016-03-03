function log(msg) {
    console.log(msg);
}

$(document).ready(function () {
    doPoll();
});

function doPoll() {
    jQuery.ajax({
        type: "POST",
        url: "http://localhost:8283/values",
        success: function (data) {
            //log(data.compressors[0].status);
            var motorRunStatus = data.compressors[0].status.motor_run;
            var onLoadStatus = data.compressors[0].status.on_load;
            motorRun(motorRunStatus);
            onLoad(onLoadStatus);
            lastState(motorRunStatus, onLoadStatus);
            setTimeout(doPoll, 1000);
        },
        error: function (XMLHttpRequest, textStatus, error) {
            alert("error\n" + XMLHttpRequest + "\n" + textStatus + "\n" + error);
        }
    });
}

function lastState(motorRunStatus, onLoadStatus) {
    if(!motorRunStatus && !onLoadStatus){
        startVioletPipe1();
        Preview_violetarrowssmall();
        Preview_violetarrowssmall2_();
        Preview_violetarrowssmall3_();
    } else {
        stopVioletPipe1();
        StopAnimate_violetarrowssmall();
        StopAnimate_violetarrowssmall2_();
        StopAnimate_violetarrowssmall3_();
    }
}

function onLoad(status) {
    if (status) {
        openAirValve();
        openSepSpring();
        Preview_airarrows();
        startVioletArrows();
    } else {
        closeAirValve();
        closeSepSpring();
        StopAnimate_airarrows();
        stopVioletArrows();
    }
}

function motorRun(status) {
    if (status) {
        startEngine();
        startOilPipeFromSep();
        Preview_oilpipefromadaptertoengine();
        Preview_liq();
        Preview_ggas();
        Preview_resarrows();
        Preview_smallgreenpipe();
        openSolenoidValve();
        openSolenoidValveBlowDown();
        startVioletPipe2();
        startVioletPipe3();
    } else {
        stopEngine();
        stopOilPipeFromSep();
        StopAnimate_oilpipefromadaptertoengine();
        StopAnimate_liq();
        StopAnimate_ggas();
        StopAnimate_resarrows();
        StopAnimate_smallgreenpipe();
        closeSolenoidValve();
        closeSolenoidValveBlowDown();
        stopVioletPipe2();
        stopVioletPipe3();
    }
}

function startVioletArrows() {
    document.getElementById("violetarrows").style.display = "block";
}
function stopVioletArrows() {
    document.getElementById("violetarrows").style.display = "none";
}

//var violetarrowsState = false;
//function StartStopAnimate_violetarrows() {
//    violetarrowsState = !violetarrowsState;
//    if (violetarrowsState) {
//        //Preview_violetarrows()
//    } else {
//        //StopAnimate_violetarrows();
//    }
//}

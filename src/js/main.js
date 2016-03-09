function log(msg) {
    console.log(msg);
}

var delta = 0;
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

            jQuery('[id="indicatorContainer"]').jqxGauge({
                ranges: [{
                    startValue: 0,
                    endValue: 55,
                    style: {fill: '#C9C9C9', stroke: '#C9C9C9'},
                    endWidth: 5,
                    startWidth: 1
                },
                    {
                        startValue: 55,
                        endValue: 110,
                        style: {fill: '#FCF06A', stroke: '#FCF06A'},
                        endWidth: 10,
                        startWidth: 5
                    },
                    {
                        startValue: 110,
                        endValue: 165,
                        style: {fill: '#FCA76A', stroke: '#FCA76A'},
                        endWidth: 15,
                        startWidth: 10
                    },
                    {
                        startValue: 165,
                        endValue: 220,
                        style: {fill: '#FC6A6A', stroke: '#FC6A6A'},
                        endWidth: 20,
                        startWidth: 15
                    }],
                ticksMinor: {interval: 5, size: '5%'},
                ticksMajor: {interval: 10, size: '9%'},
                value: 0,
                colorScheme: 'scheme03',
                animationDuration: 1000
            });
            var oilPressure = data.compressors[0].oil_pressure;
            var value = parseInt(oilPressure, 10) + delta;
            jQuery('[id="indicatorContainer"]').jqxGauge('value', value);
            delta += 5;
            setTimeout(doPoll, 1000);
        },
        error: function (XMLHttpRequest, textStatus, error) {
            alert("error\n" + XMLHttpRequest + "\n" + textStatus + "\n" + error);
        }
    });
}

function lastState(motorRunStatus, onLoadStatus) {
    if (!motorRunStatus && !onLoadStatus) {
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

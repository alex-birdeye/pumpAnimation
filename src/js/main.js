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


            jQuery('[id="indicatorContainer"]').jqxGauge({
                ranges: [{
                    startValue: 0,
                    endValue: 5,
                    style: {fill: '#C9C9C9', stroke: '#C9C9C9'},
                    endWidth: 3,
                    startWidth: 1
                },
                    {
                        startValue: 5,
                        endValue: 10,
                        style: {fill: '#FCF06A', stroke: '#FCF06A'},
                        endWidth: 5,
                        startWidth: 3
                    },
                    {
                        startValue: 10,
                        endValue: 15,
                        style: {fill: '#FCA76A', stroke: '#FCA76A'},
                        endWidth: 8,
                        startWidth: 5
                    },
                    {
                        startValue: 15,
                        endValue: 20,
                        style: {fill: '#FC6A6A', stroke: '#FC6A6A'},
                        endWidth: 11,
                        startWidth: 8
                    }],
                ticksMinor: {interval: 1, size: '5%'},
                ticksMajor: {interval: 5, size: '9%'},
                value: 0,
                colorScheme: 'scheme03',
                animationDuration: 1000
            });
            jQuery('[id="indicatorValue"] > p').html(oilPressure);
            jQuery('[id="indicatorContainer"]').jqxGauge({max: 20});
            jQuery('[id="indicatorContainer"]').jqxGauge({labels: { interval: 5}});
            jQuery('[id="indicatorContainer"]').jqxGauge({ caption: { value: 'bar', position: 'bottom', offset: [0, 10]}});
            jQuery('[id="indicatorContainer"]').jqxGauge('value', value);

            motorRun(motorRunStatus);
            onLoad(onLoadStatus);
            lastState(motorRunStatus, onLoadStatus);

            var oilPressure = data.compressors[0].oil_pressure;
            var oilTemperature = data.compressors[0].oil_temperature;
            jQuery('[class="temperature"] > p').html("<strong>" +oilTemperature + " C</strong>");

            var value = parseInt(oilPressure, 10);

            setTimeout(doPoll, 1000);
        },
        error: function (XMLHttpRequest, textStatus, error) {
            alert("error\n" + XMLHttpRequest + "\n" + textStatus + "\n" + error);
        }
    });
}

function lastState(motorRunStatus, onLoadStatus) {
    if (!motorRunStatus && !onLoadStatus) {
        //startVioletPipe1();
        //Preview_violetarrowssmall();
        //Preview_violetarrowssmall2_();
        //Preview_violetarrowssmall3_();
    } else {
        //stopVioletPipe1();
        //StopAnimate_violetarrowssmall();
        //StopAnimate_violetarrowssmall2_();
        //StopAnimate_violetarrowssmall3_();
    }
}

function onLoad(status) {
    if (status) {
        //openAirValve();
        //openSepSpring();
        //Preview_airarrows();
        startVioletArrows();
    } else {
        //closeAirValve();
        //closeSepSpring();
        //StopAnimate_airarrows();
        //stopVioletArrows();
    }
}

function motorRun(status) {
    if (status) {
        //startEngine();
        //startOilPipeFromSep();
        //Preview_oilpipefromadaptertoengine();
        //Preview_liq();
        //Preview_ggas();
        //Preview_resarrows();
        //Preview_smallgreenpipe();
        //openSolenoidValve();
        //openSolenoidValveBlowDown();
        //startVioletPipe2();
        //startVioletPipe3();
    } else {
        //stopEngine();
        //stopOilPipeFromSep();
        //StopAnimate_oilpipefromadaptertoengine();
        //StopAnimate_liq();
        //StopAnimate_ggas();
        //StopAnimate_resarrows();
        //StopAnimate_smallgreenpipe();
        //closeSolenoidValve();
        //closeSolenoidValveBlowDown();
        //stopVioletPipe2();
        //stopVioletPipe3();
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

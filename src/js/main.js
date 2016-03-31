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
            log(data.compressors[0].status);
            var motorRunStatus = data.compressors[0].status.motor_run;
            var onLoadStatus = data.compressors[0].status.on_load;
            var oilPressure = data.compressors[0].oil_pressure;
            var oilTemperature = data.compressors[0].oil_temperature;
            jQuery('[class="temperature"] > p').html("<strong>" + oilTemperature + " C</strong>");

            var value = parseInt(oilPressure, 10);

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
            jQuery('[id="indicatorContainer"]').jqxGauge({labels: {interval: 5}});
            jQuery('[id="indicatorContainer"]').jqxGauge({
                caption: {
                    value: 'bar',
                    position: 'bottom',
                    offset: [0, 10]
                }
            });
            jQuery('[id="indicatorContainer"]').jqxGauge('value', value);
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
        openAirValve();
        //openSepSpring();
        //Preview_airarrows();
        startAirArrows();
        startVioletArrows();
    } else {
        closeAirValve();
        //closeSepSpring();
        //StopAnimate_airarrows();
        stopAirArrows();
        stopVioletArrows();
    }
}

function motorRun(status) {
    if (status) {
        startEngine();
        startOilPipeFromSep();
        startOilPipeFromAdapterToEngine();
        startLiq();
        //Preview_oilpipefromadaptertoengine();
        //Preview_liq();
        Preview_ggas();
        Preview_resarrows();
        startSmallGreenPipe();
        //Preview_smallgreenpipe();
        openSolenoidValve();
        openSolenoidValveBlowDown();
        startVioletPipe2();
        startVioletPipe3();
    } else {
        stopEngine();
        stopOilPipeFromSep();
        stopOilPipeFromAdapterToEngine();
        stopLiq();
        //StopAnimate_oilpipefromadaptertoengine();
        //StopAnimate_liq();
        StopAnimate_ggas();
        StopAnimate_resarrows();
        stopSmallGreenPipe();
        //StopAnimate_smallgreenpipe();
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

function startEngine() {
    jQuery('[class="engine"]').css('visibility', 'visible');
    jQuery('[id="engine_dis"]').css('visibility', 'hidden');
}
function stopEngine() {
    jQuery('[class="engine"]').css('visibility', 'hidden');
    jQuery('[id="engine_dis"]').css('visibility', 'visible');
}

function startOilPipeFromSep() {
    jQuery('[class="oilpipefromsep"]').css('visibility', 'visible');
    jQuery('[class="oilpipefromsep_dis"]').css('visibility', 'hidden');
}
function stopOilPipeFromSep() {
    jQuery('[class="oilpipefromsep"]').css('visibility', 'hidden');
    jQuery('[class="oilpipefromsep_dis"]').css('visibility', 'visible');
}

function startOilPipeFromAdapterToEngine() {
    jQuery('[class="oilpipefromadaptertoengine"]').css('visibility', 'visible');
    jQuery('[class="oilpipefromadaptertoengine_dis"]').css('visibility', 'hidden');
}
function stopOilPipeFromAdapterToEngine() {
    jQuery('[class="oilpipefromadaptertoengine"]').css('visibility', 'hidden');
    jQuery('[class="oilpipefromadaptertoengine_dis"]').css('visibility', 'visible');
}

function startLiq() {
    jQuery('[class="liquid"]').css('visibility', 'visible');
    jQuery('[class="liquid_dis"]').css('visibility', 'hidden');
}
function stopLiq() {
    jQuery('[class="liquid"]').css('visibility', 'hidden');
    jQuery('[class="liquid_dis"]').css('visibility', 'visible');
}

function startSmallGreenPipe() {
    jQuery('[class="smallgreenpipe"]').css('visibility', 'visible');
    jQuery('[class="smallgreenpipe_dis"]').css('visibility', 'hidden');
}
function stopSmallGreenPipe() {
    jQuery('[class="smallgreenpipe"]').css('visibility', 'hidden');
    jQuery('[class="smallgreenpipe_dis"]').css('visibility', 'visible');
}

function startAirArrows() {
    jQuery('[class="airarrows"]').css('visibility', 'visible');
}
function stopAirArrows() {
    jQuery('[class="airarrows"]').css('visibility', 'hidden');
}

var isSolenoidValveOpened = false;
function openSolenoidValve() {
    if (!isSolenoidValveOpened)
        jQuery('[id="solenoidvalve"]').attr('src', 'img/gif/solenoidvalve.gif');
    isSolenoidValveOpened = true;
}
function closeSolenoidValve() {
    if (isSolenoidValveOpened)
        jQuery('[id="solenoidvalve"]').attr('src', 'img/gif/solenoidvalve_rev.gif');
    isSolenoidValveOpened = false;
}

var isAirValveOpened = false;
function openAirValve() {
    if (!isAirValveOpened)
        jQuery('[id="solenoidvalve"]').attr('src', 'img/gif/solenoidvalve.gif');
    isAirValveOpened = true;
}
function closeAirValve() {
    if (isAirValveOpened)
        jQuery('[id="solenoidvalve"]').attr('src', 'img/gif/solenoidvalve_rev.gif');
    isAirValveOpened = false;
}

var isSolenoidValveBlowDownOpened = false;
function openSolenoidValveBlowDown() {
    if (!isSolenoidValveBlowDownOpened)
        jQuery('[id="solenoidvalveblowdown"]').attr('src', 'img/gif/solenoidvalveblowdown_rev.gif');
    isSolenoidValveBlowDownOpened = true;
}
function closeSolenoidValveBlowDown() {
    if (isSolenoidValveBlowDownOpened)
        jQuery('[id="solenoidvalveblowdown"]').attr('src', 'img/gif/solenoidvalveblowdown.gif');
    isSolenoidValveBlowDownOpened = false;
}

var isVioletPipe2 = false;
function startVioletPipe2() {
    if (!isVioletPipe2)
        jQuery('[id="violetpipe2_"]').attr('src', 'img/gif/violetpipe2.gif');
    isVioletPipe2 = true;
}
function stopVioletPipe2() {
    if (isVioletPipe2)
        jQuery('[id="violetpipe2_"]').attr('src', 'img/gif/violetpipe2_rev.gif');
    isVioletPipe2 = false;
}

var isVioletPipe3 = false;
function startVioletPipe3() {
    if (!isVioletPipe3)
        jQuery('[id="violetpipe3_"]').attr('src', 'img/gif/violetpipe3.gif');
    isVioletPipe3 = true;
}
function stopVioletPipe3() {
    if (isVioletPipe3)
        jQuery('[id="violetpipe3_"]').attr('src', 'img/gif/violetpipe3_rev.gif');
    isVioletPipe3 = false;
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

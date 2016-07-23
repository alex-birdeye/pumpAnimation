function log(msg) {
    console.log(msg);
}

var blockNumber = 1;
var compressorBlocksArray = jQuery('.compressor-block');
var blocksCount = compressorBlocksArray.length;

$(document).ready(function () {
    doPoll();
});

function doPoll() {
    if (blockNumber > blocksCount)
        blockNumber = 1;
    var url = $('#' + blockNumber).data('url');
    log(url);
    jQuery.ajax({
        type: "POST",
        url: url,
        //url: "http://localhost:8283/values1",
        success: function (data) {
            //log(data.compressors[0].status);
            var motorRunStatus = data.compressors[0].status.motor_run;
            var onLoadStatus = data.compressors[0].status.on_load;
            var avaria = data.compressors[0].status.fault;
            var poperedzhennia = data.compressors[0].status.warning;
            var service = data.compressors[0].status.service_req;
            var oilPressure = data.compressors[0].oil_pressure;
            var oilTemperature = data.compressors[0].oil_temperature;
            var motorSpeed = data.compressors[0].motor_speed_rpm;
            var runningHrs = data.compressors[0].running_hrs;
            var loadedHrs = data.compressors[0].loaded_hrs;
            var volume = data.compressors[0].volume;

            jQuery('#' + blockNumber + ' .pressure > p').html("<strong>" + oilPressure + "</strong> бар");
            jQuery('#' + blockNumber + ' .temperature > p').html("<strong>" + oilTemperature + " C</strong>");
            jQuery('#' + blockNumber + ' .volume > p').html("<strong>" + volume + "</strong>  м3/хв");
            jQuery('#' + blockNumber + ' li.temperature > p').html("Температура: <strong>" + oilTemperature + " C</strong>");
            jQuery('#' + blockNumber + ' .running-hrs').html("<strong>" + runningHrs + "</strong> год");
            jQuery('#' + blockNumber + ' .frequency > p').html("Частота обертання: <strong>" + motorSpeed + " об/хв</strong>");

            var value = parseInt(oilPressure, 10);
            //jQuery('[id="indicatorcontainer"]').jqxGauge({
            jQuery('#' + blockNumber + ' .indicatorcontainer').jqxGauge({
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

            var workingHrs = [
                { hrs: runningHrs, state: 'Всього' },
                { hrs: loadedHrs, state: 'Навантаж.' }
            ];

            var settings = {
                animationDuration: 0,
                showBorderLine: false,
                backgroundColor: 'transparent',
                source: workingHrs,
                colorScheme: 'scheme05',
                title: '',
                description: '',
                seriesGroups:
                    [{
                        type: 'pie',
                        showLabels: true,
                        useGradient: false,
                        series: [{
                            dataField: 'hrs', displayText: 'state',
                            labelRadius: 30,
                            initialAngle: 90,
                            radius: 110,
                            centerOffset: 5
                        }]
                    }]
            };
            $('.jqxChart').jqxChart(settings);

            jQuery('#' + blockNumber + ' .indicatorValue > p').html(oilPressure);
            jQuery('#' + blockNumber + ' .indicatorcontainer').jqxGauge({max: 20});
            jQuery('#' + blockNumber + ' .indicatorcontainer').jqxGauge({labels: {interval: 5}});
            jQuery('#' + blockNumber + ' .indicatorcontainer').jqxGauge({
                caption: {
                    value: 'bar',
                    position: 'bottom',
                    offset: [0, 10]
                }
            });
            jQuery('#' + blockNumber + ' .indicatorcontainer').jqxGauge('value', value);
            jQuery('text:contains("www.jqwidgets.com")').html("");
            motorRun(motorRunStatus);
            onLoad(onLoadStatus);
            lastState(motorRunStatus, onLoadStatus);
            handleUvagaBlock(avaria, poperedzhennia, service);

            blockNumber++;
            setTimeout(doPoll, 5000);
        },
        error: function (XMLHttpRequest, textStatus, error) {
            alert("error\n" + XMLHttpRequest + "\n" + textStatus + "\n" + error);
        }
    });
}

function lastState(motorRunStatus, onLoadStatus) {
    if (!motorRunStatus && !onLoadStatus) {
        startVioletPipe1();
        startVioletArrowsSmall();
        startVioletArrowsSmall2_();
        startVioletArrowsSmall3_();
    } else {
        stopVioletPipe1();
        stopVioletArrowsSmall();
        stopVioletArrowsSmall2_();
        stopVioletArrowsSmall3_();
    }
}

function handleUvagaBlock(avaria, poperedzhennia, service) {
    if (avaria)
        jQuery('#' + blockNumber + ' .status-avaria').addClass("status-on");
    else
        jQuery('#' + blockNumber + ' .status-avaria').removeClass("status-on");
    if (poperedzhennia)
        jQuery('#' + blockNumber + ' .status-poperedzhennia').addClass("status-on");
    else
        jQuery('#' + blockNumber + ' .status-poperedzhennia').removeClass("status-on");
    if (service)
        jQuery('#' + blockNumber + ' .status-service').addClass("status-on");
    else
        jQuery('#' + blockNumber + ' .status-service').removeClass("status-on");
}

function onLoad(status) {
    if (status) {
        openAirValve();
        openSepSpring();
        startAirArrows();
        startVioletArrows();

        jQuery('#' + blockNumber + ' .status-load').addClass("status-on");
    } else {
        closeAirValve();
        closeSepSpring();
        stopAirArrows();
        stopVioletArrows();

        jQuery('#' + blockNumber + ' .status-load').removeClass("status-on");
    }
}

function motorRun(status) {
    if (status) {
        startEngine();
        startOilPipeFromSep();
        startOilPipeFromAdapterToEngine();
        startLiq();
        //Preview_ggas();
        startGgas();
        //Preview_resarrows();
        startResArrows();
        startSmallGreenPipe();
        openSolenoidValve();
        openSolenoidValveBlowDown();
        startVioletPipe2();
        startVioletPipe3();

        jQuery('#' + blockNumber + ' .status-motor').addClass("status-on");
    } else {
        stopEngine();
        stopOilPipeFromSep();
        stopOilPipeFromAdapterToEngine();
        stopLiq();
        //StopAnimate_ggas();
        stopGgas();
        //StopAnimate_resarrows();
        stopResArrows();
        stopSmallGreenPipe();
        closeSolenoidValve();
        closeSolenoidValveBlowDown();
        stopVioletPipe2();
        stopVioletPipe3();
        jQuery('#' + blockNumber + ' .status-motor').removeClass("status-on");
    }
}

function startVioletArrows() {
    jQuery('#' + blockNumber + ' .violetarrows').css('display', 'block');
}
function stopVioletArrows() {
    jQuery('#' + blockNumber + ' .violetarrows').css('display', 'none');
}

function startGgas() {
    jQuery('#' + blockNumber + ' .ggas').css('display', 'block');
}
function stopGgas() {
    jQuery('#' + blockNumber + ' .ggas').css('display', 'none');
}

function startResArrows() {
    jQuery('#' + blockNumber + ' .resarrows').css('display', 'block');
}
function stopResArrows() {
    jQuery('#' + blockNumber + ' .resarrows').css('display', 'none');
}

function startEngine() {
    //jQuery('[class="engine"]').css('visibility', 'visible');
    //jQuery('[class="engine_dis"]').css('visibility', 'hidden');
    jQuery('#' + blockNumber + ' .engine').css('visibility', 'visible');
    jQuery('#' + blockNumber + ' .engine_dis').css('visibility', 'hidden');
}
function stopEngine() {
    //jQuery('[class="engine"]').css('visibility', 'hidden');
    //jQuery('[class="engine_dis"]').css('visibility', 'visible');
    jQuery('#' + blockNumber + ' .engine').css('visibility', 'hidden');
    jQuery('#' + blockNumber + ' .engine_dis').css('visibility', 'visible');
}

function startOilPipeBig() {
    jQuery('#' + blockNumber + ' .oilpipebig').css('visibility', 'visible');
    jQuery('#' + blockNumber + ' .oilpipebig_dis').css('visibility', 'hidden');
}
function stopOilPipeBig() {
    jQuery('#' + blockNumber + ' .oilpipebig').css('visibility', 'hidden');
    jQuery('#' + blockNumber + ' .oilpipebig_dis').css('visibility', 'visible');
}

function startOilPipeFromSep() {
    jQuery('#' + blockNumber + ' .oilpipefromsep').css('visibility', 'visible');
    jQuery('#' + blockNumber + ' .oilpipefromsep_dis').css('visibility', 'hidden');
}
function stopOilPipeFromSep() {
    jQuery('#' + blockNumber + ' .oilpipefromsep').css('visibility', 'hidden');
    jQuery('#' + blockNumber + ' .oilpipefromsep_dis').css('visibility', 'visible');
}

function startOilPipeFromAdapterToEngine() {
    jQuery('#' + blockNumber + ' .oilpipefromadaptertoengine').css('visibility', 'visible');
    jQuery('#' + blockNumber + ' .oilpipefromadaptertoengine_dis').css('visibility', 'hidden');
}
function stopOilPipeFromAdapterToEngine() {
    jQuery('#' + blockNumber + ' .oilpipefromadaptertoengine').css('visibility', 'hidden');
    jQuery('#' + blockNumber + ' .oilpipefromadaptertoengine_dis').css('visibility', 'visible');
}

function startLiq() {
    jQuery('#' + blockNumber + ' .liquid').css('visibility', 'visible');
    jQuery('#' + blockNumber + ' .liquid_dis').css('visibility', 'hidden');
}
function stopLiq() {
    jQuery('#' + blockNumber + ' .liquid').css('visibility', 'hidden');
    jQuery('#' + blockNumber + ' .liquid_dis').css('visibility', 'visible');
}

function startSmallGreenPipe() {
    jQuery('#' + blockNumber + ' .smallgreenpipe').css('visibility', 'visible');
    jQuery('#' + blockNumber + ' .smallgreenpipe_dis').css('visibility', 'hidden');
}
function stopSmallGreenPipe() {
    jQuery('#' + blockNumber + ' .smallgreenpipe').css('visibility', 'hidden');
    jQuery('#' + blockNumber + ' .smallgreenpipe_dis').css('visibility', 'visible');
}

function startAirArrows() {
    jQuery('#' + blockNumber + ' .airarrows').css('visibility', 'visible');
}
function stopAirArrows() {
    jQuery('#' + blockNumber + ' .airarrows').css('visibility', 'hidden');
}

window['isSolenoidValveOpened' + blockNumber] = false;
function openSolenoidValve() {
    if (!window['isSolenoidValveOpened' + blockNumber])
        jQuery('#' + blockNumber + ' .solenoidvalve img').attr('src', 'img/gif/solenoidvalve.gif');
    window['isSolenoidValveOpened' + blockNumber] = true;
}
function closeSolenoidValve() {
    if (window['isSolenoidValveOpened' + blockNumber])
        jQuery('#' + blockNumber + ' .solenoidvalve img').attr('src', 'img/gif/solenoidvalve_rev.gif');
    window['isSolenoidValveOpened' + blockNumber] = false;
}

//var isAirValveOpened = false;
window['isAirValveOpened' + blockNumber] = false;
function openAirValve() {
    if (!window['isAirValveOpened' + blockNumber]){
        jQuery('#' + blockNumber + ' .airvalvespring img').attr('src', 'img/gif/airvalvespring.gif');
    }
    window['isAirValveOpened' + blockNumber] = true;
}
function closeAirValve() {
    if (window['isAirValveOpened' + blockNumber])
    //jQuery('[id="airvalvespring"]').attr('src', 'img/gif/airvalvespring_rev.gif');
        jQuery('#' + blockNumber + ' .airvalvespring img').attr('src', 'img/gif/airvalvespring_rev.gif');
    window['isAirValveOpened' + blockNumber] = false;
}

window['isSepSpringOpened' + blockNumber] = false;
function openSepSpring() {
    if (!window['isSepSpringOpened' + blockNumber])
        jQuery('#' + blockNumber + ' .sepspring img').attr('src', 'img/gif/sepspring.gif');
    window['isSepSpringOpened' + blockNumber] = true;
}
function closeSepSpring() {
    if (window['isSepSpringOpened' + blockNumber])
        jQuery('#' + blockNumber + ' .sepspring img').attr('src', 'img/gif/sepspring_rev.gif');
    window['isSepSpringOpened' + blockNumber] = false;
}

window['isSolenoidValveBlowDownOpened' + blockNumber] = false;
function openSolenoidValveBlowDown() {
    if (!window['isSolenoidValveBlowDownOpened' + blockNumber])
        jQuery('#' + blockNumber + ' .solenoidvalveblowdown img').attr('src', 'img/gif/solenoidvalveblowdown_rev.gif');
    window['isSolenoidValveBlowDownOpened' + blockNumber] = true;
}
function closeSolenoidValveBlowDown() {
    if (window['isSolenoidValveBlowDownOpened' + blockNumber])
        jQuery('#' + blockNumber + ' .solenoidvalveblowdown img').attr('src', 'img/gif/solenoidvalveblowdown.gif');
    window['isSolenoidValveBlowDownOpened' + blockNumber] = false;
}

window['isVioletPipe1' + blockNumber] = false;
function startVioletPipe1() {
    if (!window['isVioletPipe1' + blockNumber])
        jQuery('#' + blockNumber + ' .violetpipe1_ img').attr('src', 'img/gif/violetpipe1.gif');
    window['isVioletPipe1' + blockNumber] = true;
}
function stopVioletPipe1() {
    if (window['isVioletPipe1' + blockNumber])
        jQuery('#' + blockNumber + ' .violetpipe1_ img').attr('src', 'img/gif/violetpipe1_rev.gif');
    window['isVioletPipe1' + blockNumber] = false;
}

window['isVioletPipe2' + blockNumber] = false;
function startVioletPipe2() {
    if (!window['isVioletPipe2' + blockNumber])
        jQuery('#' + blockNumber + ' .violetpipe2_ img').attr('src', 'img/gif/violetpipe2.gif');
    window['isVioletPipe2' + blockNumber] = true;
}
function stopVioletPipe2() {
    if (window['isVioletPipe2' + blockNumber])
        jQuery('#' + blockNumber + ' .violetpipe2_ img').attr('src', 'img/gif/violetpipe2_rev.gif');
    window['isVioletPipe2' + blockNumber] = false;
}

window['isVioletPipe3' + blockNumber] = false;
function startVioletPipe3() {
    if (!window['isVioletPipe3' + blockNumber])
        jQuery('#' + blockNumber + ' .violetpipe3_ img').attr('src', 'img/gif/violetpipe3.gif');
    window['isVioletPipe3' + blockNumber] = true;
}
function stopVioletPipe3() {
    if (window['isVioletPipe3' + blockNumber])
        jQuery('#' + blockNumber + ' .violetpipe3_ img').attr('src', 'img/gif/violetpipe3_rev.gif');
    window['isVioletPipe3' + blockNumber] = false;
}

function startVioletArrowsSmall() {
    jQuery('#' + blockNumber + ' .violetarrowssmall').css('visibility', 'visible');
}
function stopVioletArrowsSmall() {
    jQuery('#' + blockNumber + ' .violetarrowssmall').css('visibility', 'hidden');
}

function startVioletArrowsSmall2_() {
    jQuery('#' + blockNumber + ' .violetarrowssmall2_').css('visibility', 'visible');
}
function stopVioletArrowsSmall2_() {
    jQuery('#' + blockNumber + ' .violetarrowssmall2_').css('visibility', 'hidden');
}

function startVioletArrowsSmall3_() {
    jQuery('#' + blockNumber + ' .violetarrowssmall3_').css('visibility', 'visible');
}
function stopVioletArrowsSmall3_() {
    jQuery('#' + blockNumber + ' .violetarrowssmall3_').css('visibility', 'hidden');
}

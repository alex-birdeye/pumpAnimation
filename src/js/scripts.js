var $compressors = $("#compressors");
var compressorList = [];
var dryer = {
    $operating: null,
    $alarm: null,
    $dew_point: null
}

function doPoll(){
    $.ajax({
  	type: "POST",
  	url: "http://localhost:8283/values",
  	success: function(data){
        if(compressorList.length == data.compressors.length){
            data.compressors.forEach(function(compressor, index){
                setCompressorValues(compressor, index);
            });
        }
        else{
            clearCompressors();
            data.compressors.forEach(function(compressor, index){
                paintCompressor(index);
                initCompressorValues(compressor, index);
                setCompressorValues(compressor, index);

                //log(compressor.st2_in_pressure + " bar");
                //log(compressor.st2_in_temperature + " °C");
                //log(compressor.st2_out_pressure + " bar");
                //log(compressor.st2_out_temperature + " °C");
                //log(compressor.st1_in_pressure + " bar");
                //log(compressor.st1_in_temperature + " °C");
                //log(compressor.st1_out_pressure + " bar");
                //log(compressor.st1_out_temperature + " °C");
                //log(compressor.volume + " m3/min");
                //log(compressor.line_temperature + " °C");
                //log(compressor.oil_pressure + " bar");
                //log(compressor.oil_temperature + " °C");
                //log(compressor.vac_gearbox_pressure + " mbar");
                //log(compressor.motor_speed_prc + " %");
                //log("Оботоры мотора " + compressor.motor_speed_rpm + " об/мин");
                //log(compressor.line_pressure + " bar");
                //log(compressor.running_hrs + " ч");
                //log(compressor.loaded_hrs + " ч");
                //log(compressor.lowes_service_hrs + " ч");
                //log(getCompressorStatus(compressor.status));
                //log(getCompressorWarning(compressor.status));
                log(compressor.on_load_toogle_interval);

                log("Без нагрузки [" + (compressor.running_hrs - compressor.loaded_hrs) + "]", compressor.running_hrs - compressor.loaded_hrs);
                    log("Под нагрузкой [" + compressor.loaded_hrs + "]", compressor.loaded_hrs);

            });
            paintDryer();
        }
        setDryerValues(data.dryer);

        setTimeout(doPoll,1000);
  	},
  	error: function(XMLHttpRequest, textStatus, error) {
	     alert("error\n" + XMLHttpRequest + "\n" + textStatus + "\n" + error);
  		}
	});
}

function clearCompressors(){
    if(compressorList.length > 0)
    {
        compressorList.forEach(function(compressor){
            if(compressor.on_load_toogle_interval)
                clearInterval(compressor.on_load_toogle_interval);
        });
        compressorList = [];
    }
    $compressors.html("");
}

function paintCompressor(index){
    var html = "<div class='col-xs-4'>" +
            "<div class='col-wrapper'>" +
            "<div class='title' id='id_"+ index +"'></div>" +
            "<div class='schema'>" +
            "<img class='img_main' src='content/schema1.jpg'>" +
                "<div class='values' id='st2_in_pressure_"+ index +"' ></div>" +
                "<div class='values' id='st2_in_temperature_"+ index +"'></div>" +
                "<div class='values' id='st2_out_pressure_"+ index +"' ></div>" +
                "<div class='values' id='st2_out_temperature_"+ index +"'></div>" +
                "<div class='values' id='st1_in_pressure_"+ index +"' ></div>" +
                "<div class='values' id='st1_in_temperature_"+ index +"'></div>" +
                "<div class='values' id='st1_out_pressure_"+ index +"' ></div>" +
                "<div class='values' id='st1_out_temperature_"+ index +"'></div>" +
                "<div class='values' id='volume_"+ index +"'></div>" +
                "<div class='values' id='line_temperature_"+ index +"'></div>" +
                "<div class='values' id='oil_pressure_"+ index +"' ></div>" +
                "<div class='values' id='oil_temperature_"+ index +"'></div>" +
                "<div class='values' id='vac_gearbox_pressure_"+ index +"'></div>" +
                "<div class='values' id='motor_speed_prc_"+ index +"'></div>" +
                "<div class='values' id='motor_speed_rpm_"+ index +"'></div>" +
                "<div class='values' id='line_pressure_"+ index +"'>" +
                    "<input type='text' value=''>" +
                "</div>" +

                "<div class='img-value' id='on_load_box1_"+ index +"'><img src='content/schema1.1.jpg'></div>" +
                "<div class='img-value' id='on_load_box2_"+ index +"'><img src='content/schema1.1.jpg'></div>" +
                "<div class='img-value' id='on_load_arrow_t_"+ index +"'><img src='content/schema1.2-top.jpg'></div>" +
                "<div class='img-value' id='on_load_arrow_b_"+ index +"'><img src='content/schema1.2-buttom.jpg'></div>" +
                "<div class='img-value' id='motor_run_"+ index +"'><img src='content/schema1.3-m.jpg'></div>" +

            "</div>" +
                "<div class='details'>" +
                    "<div class='col-xs-6 details-l'>" +
                        "<div class='inline-top inline-develop'>" +
                            "<span>Разработка</span>" +
                        "</div>" +
                        "<div class='col-xs-9'>" +
                            "<div>Часы работы</div>" +
                            "<div>Часы под нагрузкой</div>" +
                            "<div>Часы до ТО</div>" +
                        "</div>" +
                        "<div class='col-xs-3 text-right'>" +
                            "<div id='running_hrs_"+ index +"'></div>" +
                            "<div id='loaded_hrs_"+ index +"'></div>" +
                            "<div id='lowes_service_hrs_"+ index +"'></div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-xs-6 details-r'>" +
                        "<div class='inline-top inline-status'>" +
                            "<span>Состояние</span>" +
                        "</div>" +
                        "<div id='status_"+ index +"' class='status'></div>" +
                        "<div class='inline'>" +
                            "<div><span>Тревоги</span></div>" +
                        "</div>" +
                        "<div id='warning_"+ index +"' class='alarm'></div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='col-wrapper'><div id='chart_"+ index +"'></div></div>" +
        "</div>";
        $compressors.append(html);

        initChart(index);
}

function paintDryer(index){
    var html = "<div class='col-xs-4'>" +
                    "<div class='col-wrapper'>" +
                        "<div class='title'>Donaldson HRE 2750 VC</div>" +
                        "<div class='schema2'>" +
                            "<img class='img_main' src='content/schema2.jpg'>" +
                            "<div class='dryer-value'>" +
                            "Температура точки росы<br>" +
                            "<input id='dryer_dew_point' type='text' value=''>" +
                        "</div>" +
                    "</div>" +
                    "<div class='details'>" +
                        "<div class='col-xs-6 details-dryer-l text-center'>" +
                            "Работа <div id='dryer_operating' class='cell'></div>" +
                        "</div>" +
                        "<div class='col-xs-6 details-dryer-r'>" +
                            "Авария <div id='dryer_alarm' class='cell'></div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>";
    $compressors.append(html);

    dryer.$operating = $("#dryer_operating");
    dryer.$alarm = $("#dryer_alarm");
    dryer.$dew_point = $("#dryer_dew_point");
}

function setDryerValues(data_dryer){
    dryer.$dew_point.val(data_dryer.dew_point);
    if(data_dryer.operating)
        dryer.$operating.css("background-color", "green");
    else
        dryer.$operating.css("background-color","");

    if(data_dryer.alarm)
        dryer.$alarm.css("background-color", "red");
    else
        dryer.$alarm.css("background-color","");

}

function initCompressorValues(compressor, index){
    var item = {
        $id: $("#id_" + index),
        $st2_in_pressure: $("#st2_in_pressure_" + index),
        $st2_in_temperature: $("#st2_in_temperature_" + index),
        $st2_out_pressure: $("#st2_out_pressure_" + index),
        $st2_out_temperature: $("#st2_out_temperature_" + index),
        $st1_in_pressure: $("#st1_in_pressure_" + index),
        $st1_in_temperature: $("#st1_in_temperature_" + index),
        $st1_out_pressure: $("#st1_out_pressure_" + index),
        $st1_out_temperature: $("#st1_out_temperature_" + index),
        $volume: $("#volume_" + index),
        $line_temperature: $("#line_temperature_" + index),
        $oil_pressure: $("#oil_pressure_" + index),
        $oil_temperature: $("#oil_temperature_" + index),
        $vac_gearbox_pressure: $("#vac_gearbox_pressure_" + index),
        $motor_speed_prc: $("#motor_speed_prc_" + index),
        $motor_speed_rpm: $("#motor_speed_rpm_" + index),
        $line_pressure: $("#line_pressure_" + index + " input"),
        $running_hrs: $("#running_hrs_" + index),
        $loaded_hrs: $("#loaded_hrs_" + index),
        $lowes_service_hrs: $("#lowes_service_hrs_" + index),
        $status: $("#status_" + index),
        $warning: $("#warning_" + index),
        $chart: $("#chart_" + index),

        $on_load_box1: $("#on_load_box1_" + index),
        $on_load_box2: $("#on_load_box2_" + index),
        $on_load_arrow_t: $("#on_load_arrow_t_" + index),
        $on_load_arrow_b: $("#on_load_arrow_b_" + index),
        $motor_run: $("#motor_run_" + index),
        on_load_toogle_interval: undefined
    }
    compressorList.push(item);
}

function setCompressorValues(compressor, index){
    var legacyCompressor = compressorList[index];
    if(index == 2)
        legacyCompressor.$id.text("Компрессор №" + compressor.id + " GD EnviroAir T 110-10A");
    else
        legacyCompressor.$id.text("Компрессор №" + compressor.id + " GD EnviroAir TVS 132-10A");
    legacyCompressor.$st2_in_pressure.text(compressor.st2_in_pressure + " bar");
    legacyCompressor.$st2_in_temperature.text(compressor.st2_in_temperature + " °C");
    legacyCompressor.$st2_out_pressure.text(compressor.st2_out_pressure + " bar");
    legacyCompressor.$st2_out_temperature.text(compressor.st2_out_temperature + " °C");
    legacyCompressor.$st1_in_pressure.text(compressor.st1_in_pressure + " bar");
    legacyCompressor.$st1_in_temperature.text(compressor.st1_in_temperature + " °C");
    legacyCompressor.$st1_out_pressure.text(compressor.st1_out_pressure + " bar");
    legacyCompressor.$st1_out_temperature.text(compressor.st1_out_temperature + " °C");
    legacyCompressor.$volume.text(compressor.volume + " m3/min");
    legacyCompressor.$line_temperature.text(compressor.line_temperature + " °C");
    legacyCompressor.$oil_pressure.text(compressor.oil_pressure + " bar");
    legacyCompressor.$oil_temperature.text(compressor.oil_temperature + " °C");
    legacyCompressor.$vac_gearbox_pressure.text(compressor.vac_gearbox_pressure + " mbar");
    legacyCompressor.$motor_speed_prc.text(compressor.motor_speed_prc + " %");
    legacyCompressor.$motor_speed_rpm.text("Оботоры мотора " + compressor.motor_speed_rpm + " об/мин");
    legacyCompressor.$line_pressure.val(compressor.line_pressure + " bar");
    legacyCompressor.$running_hrs.text(compressor.running_hrs + " ч");
    legacyCompressor.$loaded_hrs.text(compressor.loaded_hrs + " ч");
    legacyCompressor.$lowes_service_hrs.text(compressor.lowes_service_hrs + " ч");
    legacyCompressor.$status.text(getCompressorStatus(compressor.status));
    legacyCompressor.$warning.text(getCompressorWarning(compressor.status));
    //legacyCompressor.$chart.highcharts().series[0].setData([
    //        ["Без нагрузки [" + (compressor.running_hrs - compressor.loaded_hrs) + "]", compressor.running_hrs - compressor.loaded_hrs],
    //        ["Под нагрузкой [" + compressor.loaded_hrs + "]", compressor.loaded_hrs]
    //    ]);

    if(compressor.status.motor_run)
        legacyCompressor.$motor_run.show();
    else
        legacyCompressor.$motor_run.hide();

    if(compressor.status.on_load)
    {
        if(!legacyCompressor.on_load_toogle_interval)
        {
            legacyCompressor.$on_load_box1.show();
            legacyCompressor.$on_load_box2.show();
            legacyCompressor.on_load_toogle_interval = setInterval(function(){
                legacyCompressor.$on_load_arrow_t.toggle();
                legacyCompressor.$on_load_arrow_b.toggle();
            },500);
        }
    }
    else
    {
        if(legacyCompressor.on_load_toogle_interval)
        {
            legacyCompressor.$on_load_box1.hide();
            legacyCompressor.$on_load_box2.hide();
            clearInterval(legacyCompressor.on_load_toogle_interval);
            legacyCompressor.on_load_toogle_interval = null;
        }
    }
}

function getCompressorStatus(status){
    var res;
    if(status.ready_to_start) res = "Готов к запуску";
    if(status.start_inhibit) res = "Запрет пуска";
    if(status.motor_start_phase) res = "Запуск";
    if(status.motor_run) res = "Запущено";
    if(status.off_load) res = "Без нагрузки";
    if(status.on_load) res = "В процессе";
    if(status.soft_stop) res = "Мягкая остановка";
    if(status.run_on_timer) res = "Работает по таймеру";
    return res;
}

function getCompressorWarning(status){
    var warning;
    if(status.fault) warning = "Неисправность";
    if(status.warning) warning = "Предупреждение";
    if(status.service_req) warning = "Запрос на обслуживание";
    if(status.min_speed) warning = "Минимальная скорость";
    if(status.max_speed) warning = "Максимальная скорость";
    if(status.pre_start_phase) warning = "Предварительный старт";
    return warning;
}

function initChart(index){
    $("#chart_" + index).highcharts({
        chart: {
            animation: false,
            backgroundColor: "#EDEDED",
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: true,
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'top',
            x: 0,
            y: 40
        },
        plotOptions: {
            pie: {
                startAngle: 180,
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            point: {
                events: {
                    legendItemClick: function () {
                        return false;
                    }
                }
            },
            type: 'pie'
        }]
    });
}

$(document).ready(function(){
	doPoll();
});

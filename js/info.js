var suon = [];
var yeombun = [];
var ph = [];
var Do = [];
var td = [];

// 표 쓰기
$( document ).ready(function() {

    var area_Name = window.localStorage.getItem('areaname');
    var st_Name = window.localStorage.getItem('stname');

    $('#td_area').text(area_Name);
    $('#td_st').text(st_Name);

    valueMatting(area_Name);

    for(var i = 0; i < suon.length; i++){
        $('#suon' + i).text(suon[i]);

        $('#yeombun' + i).text(yeombun[i]);

        $('#ph' + i).text(ph[i]);

        $('#Do' + i).text(Do[i]);
    }
    
    for(var j = 0; j < td.length; j++){
        $('#td' + j).text(td[j]);
    }
    
});

function valueMatting(area_Name){
    if(area_Name == '부산연안'){
        suon = [];
        yeombun = [];
        ph = [];
        Do = [];
        td = [];

        suon = [24.360,23.680,23.670,24.710,24.680,24.610,25.100,24.950,23.430,23.400];
        yeombun = [31.740,31.410,31.430,31.610,31.540,31.310,31.370,31.530,31.560,31.580];
        ph = [8.210,8.560,8.590,8.410,8.430,8.400,8.390,8.250,8.580,8.570];
        Do = [7.360,7.730,7.160,7.290,7.610,7.590,7.190,8.290,7.450,7.310];
        td = [59,18,11,6,10];
    }
    else if(area_Name =='여수연안'){
        td = [];
        td = [71,43,25,17,10];
    }
    else if(area_Name =='울산연안'){
        td = [];
        td = [50,35,12,14,10];
    }
}

// 차트 1 (수온)
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'st');
    data.addColumn('number', 'value');

    for(var i = 0; i < 10; i++){
    data.addRows([
    ['st'+ (i + 1), suon[i]]
    ]);
}

  var options = {
    title: "- 수온 -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));

  chart.draw(data, options);
}

// 차트 2 (염분)
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'st');
    data.addColumn('number', 'value');

    for(var i = 0; i < 10; i++){
    data.addRows([
    ['st'+ (i + 1), yeombun[i]]
    ]);
}

  var options = {
    title: "- 염분 -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values2"));

  chart.draw(data, options);
}

// 차트 3 (Ph)
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'st');
    data.addColumn('number', 'value');

    for(var i = 0; i < 10; i++){
    data.addRows([
    ['st'+ (i + 1) , ph[i]]
    ]);
}

  var options = {
    title: "- pH -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values3"));

  chart.draw(data, options);
}

// 차트 4 (Do)
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'st');
    data.addColumn('number', 'value');

    for(var i = 0; i < 10; i++){
    data.addRows([
    ['st'+ (i + 1), Do[i]]
    ]);
}

  var options = {
    title: "- Do -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values4"));

  chart.draw(data, options);
}






function windowClose() {
    window.close();
}

//tab 이벤트
function tab_btn(num) {
    $(".tab").attr("class", 'tab tab_off');
    $("#tab" + num).attr("class", 'tab tab_on');

    if (num == '1') {
        $(".tab_1").css("display", "block");
        $(".tab_2").css("display", "none");
        $(".tab_3").css("display", "none");
        $(".tab_4").css("display", "none");
        $(".tab_5").css("display", "none");
    }
    else if (num == '2') {
        $(".tab_1").css("display", "none");
        $(".tab_2").css("display", "block");
        $(".tab_3").css("display", "none");
        $(".tab_4").css("display", "none");
        $(".tab_5").css("display", "none");
    }
    else if (num == '3') {
        $(".tab_1").css("display", "none");
        $(".tab_2").css("display", "none");
        $(".tab_3").css("display", "block");
        $(".tab_4").css("display", "none");
        $(".tab_5").css("display", "none");
    }
    else if (num == '4') {
        $(".tab_1").css("display", "none");
        $(".tab_2").css("display", "none");
        $(".tab_3").css("display", "none");
        $(".tab_4").css("display", "block");
        $(".tab_5").css("display", "none");
    }
    else if (num == '5') {
        $(".tab_1").css("display", "none");
        $(".tab_2").css("display", "none");
        $(".tab_3").css("display", "none");
        $(".tab_4").css("display", "none");
        $(".tab_5").css("display", "block");
    }
}
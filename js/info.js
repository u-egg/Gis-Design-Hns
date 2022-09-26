// 표 쓰기
$( document ).ready(function() {

    var area_Name = window.localStorage.getItem('areaname');
    var st_Name = window.localStorage.getItem('stname');

    $('#td_area').text(area_Name);
    $('#td_st').text(st_Name);
    $('#h2_title').text(area_Name + " 기초환경자료");

    valueMatting(area_Name);

    for(var j = 0; j < td.length; j++){
        $('#td' + j).text(td[j]);
    }

    //기초환경자료
    for(var i = 0; i < suon.length; i++){
        $('#suon' + i).text(suon[i]);

        $('#yeombun' + i).text(yeombun[i]);

        $('#ph' + i).text(ph[i]);

        $('#Do' + i).text(Do[i]);

        $('#Do_average' + i).text(Do_average[i]);
    }
    //수질오염물질
    for(var i = 0; i < q1.length; i++){
        $('#q1_' + i).text(q1[i]);
        $('#q2_' + i).text(q2[i]);
        $('#q3_' + i).text(q3[i]);
        $('#q4_' + i).text(q4[i]);

        $('#q5_' + i).text(q5[i]);
        $('#q6_' + i).text(q6[i]);
        $('#q7_' + i).text(q7[i]);
        $('#q8_' + i).text(q8[i]);
    }

    for(var i = 0; i < st_q1.length; i++){
        $('#st_q1_' + i).text(st_q1[i]);
        $('#st_q2_' + i).text(st_q2[i]);
        $('#st_q3_' + i).text(st_q3[i]);
        $('#st_q4_' + i).text(st_q4[i]);

        $('#st_q5_' + i).text(st_q5[i]);
        $('#st_q6_' + i).text(st_q6[i]);
        $('#st_q7_' + i).text(st_q7[i]);
        $('#st_q8_' + i).text(st_q8[i]);
    }
    //휘발성유기화합물
    for(var i = 0; i < hwi_q1.length; i++){
        $('#hwi_q1_' + i).text(hwi_q1[i]);
        $('#hwi_q2_' + i).text(hwi_q2[i]);
        $('#hwi_q3_' + i).text(hwi_q3[i]);
        $('#hwi_q4_' + i).text(hwi_q4[i]);
        $('#hwi_q5_' + i).text(hwi_q5[i]);
        $('#hwi_q6_' + i).text(hwi_q6[i]);
        $('#hwi_q7_' + i).text(hwi_q7[i]);
        $('#hwi_q8_' + i).text(hwi_q8[i]);

        $('#hwi_q9_' + i).text(hwi_q9[i]);
        $('#hwi_q10_' + i).text(hwi_q10[i]);
        $('#hwi_q11_' + i).text(hwi_q11[i]);
        $('#hwi_q12_' + i).text(hwi_q12[i]);
        $('#hwi_q13_' + i).text(hwi_q13[i]);
        $('#hwi_q14_' + i).text(hwi_q14[i]);
        $('#hwi_q15_' + i).text(hwi_q15[i]);
        $('#hwi_q16_' + i).text(hwi_q16[i]);

        $('#hwi_q17_' + i).text(hwi_q17[i]);
        $('#hwi_q18_' + i).text(hwi_q18[i]);
        $('#hwi_q19_' + i).text(hwi_q19[i]);
        $('#hwi_q20_' + i).text(hwi_q20[i]);
        $('#hwi_q21_' + i).text(hwi_q21[i]);
        $('#hwi_q22_' + i).text(hwi_q22[i]);
        $('#hwi_q23_' + i).text(hwi_q23[i]);
        $('#hwi_q24_' + i).text(hwi_q24[i]);

        $('#hwi_q25_' + i).text(hwi_q25[i]);
        $('#hwi_q26_' + i).text(hwi_q26[i]);
        $('#hwi_q27_' + i).text(hwi_q27[i]);
        $('#hwi_q28_' + i).text(hwi_q28[i]);
        $('#hwi_q29_' + i).text(hwi_q29[i]);
        $('#hwi_q30_' + i).text(hwi_q30[i]);
        $('#hwi_q31_' + i).text(hwi_q31[i]);
        $('#hwi_q32_' + i).text(hwi_q32[i]);

        $('#hwi_q33_' + i).text(hwi_q33[i]);
        $('#hwi_q34_' + i).text(hwi_q34[i]);
        $('#hwi_q35_' + i).text(hwi_q35[i]);
        $('#hwi_q36_' + i).text(hwi_q36[i]);
        $('#hwi_q37_' + i).text(hwi_q37[i]);
        $('#hwi_q38_' + i).text(hwi_q38[i]);
        $('#hwi_q39_' + i).text(hwi_q39[i]);
        $('#hwi_q40_' + i).text(hwi_q40[i]);

        $('#hwi_q41_' + i).text(hwi_q41[i]);
        $('#hwi_q42_' + i).text(hwi_q42[i]);
        $('#hwi_q43_' + i).text(hwi_q43[i]);
        $('#hwi_q44_' + i).text(hwi_q44[i]);
        $('#hwi_q45_' + i).text(hwi_q45[i]);
    }
    
    for(var i = 0; i < st_hwi_q1.length; i++){
        $('#st_hwi_q1_' + i).text(st_hwi_q1[i]);
        $('#st_hwi_q2_' + i).text(st_hwi_q2[i]);
        $('#st_hwi_q3_' + i).text(st_hwi_q3[i]);
        $('#st_hwi_q4_' + i).text(st_hwi_q4[i]);
        $('#st_hwi_q5_' + i).text(st_hwi_q5[i]);
        $('#st_hwi_q6_' + i).text(st_hwi_q6[i]);
        $('#st_hwi_q7_' + i).text(st_hwi_q7[i]);
        $('#st_hwi_q8_' + i).text(st_hwi_q8[i]);
        $('#st_hwi_q9_' + i).text(st_hwi_q9[i]);
        $('#st_hwi_q10_' + i).text(st_hwi_q10[i]);
        $('#st_hwi_q11_' + i).text(st_hwi_q11[i]);
        $('#st_hwi_q12_' + i).text(st_hwi_q12[i]);
        $('#st_hwi_q13_' + i).text(st_hwi_q13[i]);
        $('#st_hwi_q14_' + i).text(st_hwi_q14[i]);
        $('#st_hwi_q15_' + i).text(st_hwi_q15[i]);
        $('#st_hwi_q16_' + i).text(st_hwi_q16[i]);
        $('#st_hwi_q17_' + i).text(st_hwi_q17[i]);
        $('#st_hwi_q18_' + i).text(st_hwi_q18[i]);
        $('#st_hwi_q19_' + i).text(st_hwi_q19[i]);
        $('#st_hwi_q20_' + i).text(st_hwi_q20[i]);
        $('#st_hwi_q21_' + i).text(st_hwi_q21[i]);
        $('#st_hwi_q22_' + i).text(st_hwi_q22[i]);
        $('#st_hwi_q23_' + i).text(st_hwi_q23[i]);
        $('#st_hwi_q24_' + i).text(st_hwi_q24[i]);
        $('#st_hwi_q25_' + i).text(st_hwi_q25[i]);
        $('#st_hwi_q26_' + i).text(st_hwi_q26[i]);
        $('#st_hwi_q27_' + i).text(st_hwi_q27[i]);
        $('#st_hwi_q28_' + i).text(st_hwi_q28[i]);
        $('#st_hwi_q29_' + i).text(st_hwi_q29[i]);
        $('#st_hwi_q30_' + i).text(st_hwi_q30[i]);
        $('#st_hwi_q31_' + i).text(st_hwi_q31[i]);
        $('#st_hwi_q32_' + i).text(st_hwi_q32[i]);
        $('#st_hwi_q33_' + i).text(st_hwi_q33[i]);
        $('#st_hwi_q34_' + i).text(st_hwi_q34[i]);
        $('#st_hwi_q35_' + i).text(st_hwi_q35[i]);
        $('#st_hwi_q36_' + i).text(st_hwi_q36[i]);
        $('#st_hwi_q37_' + i).text(st_hwi_q37[i]);
        $('#st_hwi_q38_' + i).text(st_hwi_q38[i]);
        $('#st_hwi_q39_' + i).text(st_hwi_q39[i]);
        $('#st_hwi_q40_' + i).text(st_hwi_q40[i]);
        $('#st_hwi_q41_' + i).text(st_hwi_q41[i]);
        $('#st_hwi_q42_' + i).text(st_hwi_q42[i]);
        $('#st_hwi_q43_' + i).text(st_hwi_q43[i]);
        $('#st_hwi_q44_' + i).text(st_hwi_q44[i]);
        $('#st_hwi_q45_' + i).text(st_hwi_q45[i]);
    }

    // 미량금속
    for(var i = 0; i < mi_q1.length; i++){
        $('#mi_q1_' + i).text(mi_q1[i]);
        $('#mi_q2_' + i).text(mi_q2[i]);
        $('#mi_q3_' + i).text(mi_q3[i]);
        $('#mi_q4_' + i).text(mi_q4[i]);
        $('#mi_q5_' + i).text(mi_q5[i]);
        $('#mi_q6_' + i).text(mi_q6[i]);
        $('#mi_q7_' + i).text(mi_q7[i]);
        $('#mi_q8_' + i).text(mi_q8[i]);

        $('#mi_q9_' + i).text(mi_q9[i]);
        $('#mi_q10_' + i).text(mi_q10[i]);
        $('#mi_q11_' + i).text(mi_q11[i]);
        $('#mi_q12_' + i).text(mi_q12[i]);
        $('#mi_q13_' + i).text(mi_q13[i]);
        $('#mi_q14_' + i).text(mi_q14[i]);
        $('#mi_q15_' + i).text(mi_q15[i]);
    }

    for(var i = 0; i < st_mi_q1.length; i++){
        $('#st_mi_q1_' + i).text(st_mi_q1[i]);
        $('#st_mi_q2_' + i).text(st_mi_q2[i]);
        $('#st_mi_q3_' + i).text(st_mi_q3[i]);
        $('#st_mi_q4_' + i).text(st_mi_q4[i]);
        $('#st_mi_q5_' + i).text(st_mi_q5[i]);
        $('#st_mi_q6_' + i).text(st_mi_q6[i]);
        $('#st_mi_q7_' + i).text(st_mi_q7[i]);
        $('#st_mi_q8_' + i).text(st_mi_q8[i]);

        $('#st_mi_q9_' + i).text(st_mi_q9[i]);
        $('#st_mi_q10_' + i).text(st_mi_q10[i]);
        $('#st_mi_q11_' + i).text(st_mi_q11[i]);
        $('#st_mi_q12_' + i).text(st_mi_q12[i]);
        $('#st_mi_q13_' + i).text(st_mi_q13[i]);
        $('#st_mi_q14_' + i).text(st_mi_q14[i]);
        $('#st_mi_q15_' + i).text(st_mi_q15[i]);
    }

    //기타물질
    for(var i = 0; i < etc_q1.length; i++){
        $('#etc_q1_' + i).text(etc_q1[i]);
        $('#etc_q2_' + i).text(etc_q2[i]);
        $('#etc_q3_' + i).text(etc_q3[i]);
    }

    for(var i = 0; i < st_etc_q1.length; i++){
        $('#st_etc_q1_' + i).text(st_etc_q1[i]);
        $('#st_etc_q2_' + i).text(st_etc_q2[i]);
        $('#st_etc_q3_' + i).text(st_etc_q3[i]);
    }
});

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


/*
* 수질오염물질차트
*/

// 차트 1 (q1)
google.charts.load("current", {packages:['corechart']});

function drawChart_water() {

water_dataMapping();

var data = google.visualization.arrayToDataTable([
        ['Number', '1,1,1-Trichloroethane', '1,1-dichloroethylene', '1,2-Dibromo-3-chloropropan', '1,4-dioxane', 
        'Bromodichloromethane','Dibromochloromethane','Carbon tetrachloride','Formaldehyde'],
        ['No.1', a1,a2,a3,a4,a5,a6,a7,a8],
        ['No.2', b1,b2,b3,b4,b5,b6,b7,b8],
        ['No.3', c1,c2,c3,c4,c5,c6,c7,c8],
        ['No.4', d1,d2,d3,d4,d5,d6,d7,d8],
        ['No.5', e1,e2,e3,e4,e5,e6,e7,e8],
        ['No.6', f1,f2,f3,f4,f5,f6,f7,f8],

    ]);

    var options = {
        width: 780,
        height: 250,
        bar: { groupWidth: '75%' },
        title: '배출수'
      };
  var chart = new google.visualization.ColumnChart(document.getElementById("water_chart"));

  chart.draw(data, options);
}

// 차트 2 (q2)
google.charts.load("current", {packages:['corechart']});

function drawChart_water2() {

water_dataMapping2();

var data = google.visualization.arrayToDataTable([
    ['Number', '1,1,1-Trichloroethane', '1,1-dichloroethylene', '1,2-Dibromo-3-chloropropan', '1,4-dioxane', 
    'Bromodichloromethane','Dibromochloromethane','Carbon tetrachloride','Formaldehyde'],
    ['St.1', st_a1,st_a2,st_a3,st_a4,st_a5,st_a6,st_a7,st_a8],
    ['St.2', st_b1,st_b2,st_b3,st_b4,st_b5,st_b6,st_b7,st_b8],
    ['St.3', st_c1,st_c2,st_c3,st_c4,st_c5,st_c6,st_c7,st_c8],
    ['St.4', st_d1,st_d2,st_d3,st_d4,st_d5,st_d6,st_d7,st_d8],
    ['St.5', st_e1,st_e2,st_e3,st_e4,st_e5,st_e6,st_e7,st_e8],
    ['St.6', st_f1,st_f2,st_f3,st_f4,st_f5,st_f6,st_f7,st_f8],
    ['St.7', st_g1,st_g2,st_g3,st_g4,st_g5,st_g6,st_g7,st_g8],
    ['St.8', st_h1,st_h2,st_h3,st_h4,st_h5,st_h6,st_h7,st_h8],
    ['St.9', st_i1,st_i2,st_i3,st_i4,st_i5,st_i6,st_i7,st_i8],
    ['St.10', st_j1,st_j2,st_j3,st_j4,st_j5,st_j6,st_j7,st_j8],
    ]);

    var options = {
        width: 780,
        height: 250,
        bar: { groupWidth: '75%' },
        title: '주변해역'
      };
  var chart = new google.visualization.ColumnChart(document.getElementById("water_chart2"));

  chart.draw(data, options);
}


/*
* 휘발성유기화합물 차트
*/

// 차트 1 (hwi_q1)
google.charts.load("current", {packages:['corechart']});

function drawChart_hwi() {

hwi_dataMapping();

var data = google.visualization.arrayToDataTable([
    ['Number', 'Ethanol','2-propanol','Acetone','Methylene chloride','n-Hexane','Pentane, 2,4-dimethyl','2-Butanone','Ethyl Acetate'
    ,'Chloroform','Pentane, 2,2,4-trimethyl','Heptane','1-Butanol','Benzene','Trichloroethylene-','Propane, 1,2-dichloro-','Methane, bromodichloro-'
,'4-Methyl-2-pentanone','Octane','Toluene','Acetic acid, butyl ester','Tetrachloroethylene','Methane, dibromochloro-','Nonane','Ethylbenzene'
,'m-Xylene','o-Xylene','Styrene','(1S)-(-)-alpha-pinene','Decane','Benzene, 1,2,3-trimethyl-','Benzene, 1,2,4-trimethyl-','.beta.-Pinene'
,'4-Ethyltoluene','Mesitylene','(R)-(+)-Limonene','Undecane','2-Ethyltoluene','Benzene, 1,4-dichloro-','Nonanal','Dodecane'
,'Benzene, 1,2,4,5-tetramethyl-','Decanal','Tetradecane','Pentadecane','Hexadecane'],
    ['No.1', hwi_a1,hwi_a2,hwi_a3,hwi_a4,hwi_a5,hwi_a6,hwi_a7,hwi_a8,hwi_a9,hwi_a10,hwi_a11,hwi_a12,hwi_a13,hwi_a14,hwi_a15,hwi_a16,hwi_a17,hwi_a18,hwi_a19,hwi_a20,hwi_a21,hwi_a22,hwi_a23,hwi_a24,hwi_a25,hwi_a26,hwi_a27,hwi_a28,hwi_a29,hwi_a30,hwi_a31,hwi_a32,hwi_a33,hwi_a34,hwi_a35,hwi_a36,hwi_a37,hwi_a38,hwi_a39,hwi_a40,hwi_a41,hwi_a42,hwi_a43,hwi_a44,hwi_a45],
    ['No.2', hwi_b1,hwi_b2,hwi_b3,hwi_b4,hwi_b5,hwi_b6,hwi_b7,hwi_b8,hwi_b9,hwi_b10,hwi_b11,hwi_b12,hwi_b13,hwi_b14,hwi_b15,hwi_b16,hwi_b17,hwi_b18,hwi_b19,hwi_b20,hwi_b21,hwi_b22,hwi_b23,hwi_b24,hwi_b25,hwi_b26,hwi_b27,hwi_b28,hwi_b29,hwi_b30,hwi_b31,hwi_b32,hwi_b33,hwi_b34,hwi_b35,hwi_b36,hwi_b37,hwi_b38,hwi_b39,hwi_b40,hwi_b41,hwi_b42,hwi_b43,hwi_b44,hwi_b45],
    ['No.3', hwi_c1,hwi_c2,hwi_c3,hwi_c4,hwi_c5,hwi_c6,hwi_c7,hwi_c8,hwi_c9,hwi_c10,hwi_c11,hwi_c12,hwi_c13,hwi_c14,hwi_c15,hwi_c16,hwi_c17,hwi_c18,hwi_c19,hwi_c20,hwi_c21,hwi_c22,hwi_c23,hwi_c24,hwi_c25,hwi_c26,hwi_c27,hwi_c28,hwi_c29,hwi_c30,hwi_c31,hwi_c32,hwi_c33,hwi_c34,hwi_c35,hwi_c36,hwi_c37,hwi_c38,hwi_c39,hwi_c40,hwi_c41,hwi_c42,hwi_c43,hwi_c44,hwi_c45],
    ['No.4', hwi_d1,hwi_d2,hwi_d3,hwi_d4,hwi_d5,hwi_d6,hwi_d7,hwi_d8,hwi_d9,hwi_d10,hwi_d11,hwi_d12,hwi_d13,hwi_d14,hwi_d15,hwi_d16,hwi_d17,hwi_d18,hwi_d19,hwi_d20,hwi_d21,hwi_d22,hwi_d23,hwi_d24,hwi_d25,hwi_d26,hwi_d27,hwi_d28,hwi_d29,hwi_d30,hwi_d31,hwi_d32,hwi_d33,hwi_d34,hwi_d35,hwi_d36,hwi_d37,hwi_d38,hwi_d39,hwi_d40,hwi_d41,hwi_d42,hwi_d43,hwi_d44,hwi_d45],
    ['No.5', hwi_e1,hwi_e2,hwi_e3,hwi_e4,hwi_e5,hwi_e6,hwi_e7,hwi_e8,hwi_e9,hwi_e10,hwi_e11,hwi_e12,hwi_e13,hwi_e14,hwi_e15,hwi_e16,hwi_e17,hwi_e18,hwi_e19,hwi_e20,hwi_e21,hwi_e22,hwi_e23,hwi_e24,hwi_e25,hwi_e26,hwi_e27,hwi_e28,hwi_e29,hwi_e30,hwi_e31,hwi_e32,hwi_e33,hwi_e34,hwi_e35,hwi_e36,hwi_e37,hwi_e38,hwi_e39,hwi_e40,hwi_e41,hwi_e42,hwi_e43,hwi_e44,hwi_e45],
    ['No.6', hwi_f1,hwi_f2,hwi_f3,hwi_f4,hwi_f5,hwi_f6,hwi_f7,hwi_f8,hwi_f9,hwi_f10,hwi_f11,hwi_f12,hwi_f13,hwi_f14,hwi_f15,hwi_f16,hwi_f17,hwi_f18,hwi_f19,hwi_f20,hwi_f21,hwi_f22,hwi_f23,hwi_f24,hwi_f25,hwi_f26,hwi_f27,hwi_f28,hwi_f29,hwi_f30,hwi_f31,hwi_f32,hwi_f33,hwi_f34,hwi_f35,hwi_f36,hwi_f37,hwi_f38,hwi_f39,hwi_f40,hwi_f41,hwi_f42,hwi_f43,hwi_f44,hwi_f45],
    ]);

    var options = {
        width: 780,
        height: 250,
        bar: { groupWidth: '75%' },
        title: '배출수'
      };
  var chart = new google.visualization.ColumnChart(document.getElementById("hwi_chart"));

  chart.draw(data, options);
}

// 차트 2 (hwi_q2)
google.charts.load("current", {packages:['corechart']});

function drawChart_hwi2() {

hwi_dataMapping2();

var data = google.visualization.arrayToDataTable([
    ['Number', 'Ethanol','2-propanol','Acetone','Methylene chloride','n-Hexane','Pentane, 2,4-dimethyl','2-Butanone','Ethyl Acetate'
    ,'Chloroform','Pentane, 2,2,4-trimethyl','Heptane','1-Butanol','Benzene','Trichloroethylene-','Propane, 1,2-dichloro-','Methane, bromodichloro-'
,'4-Methyl-2-pentanone','Octane','Toluene','Acetic acid, butyl ester','Tetrachloroethylene','Methane, dibromochloro-','Nonane','Ethylbenzene'
,'m-Xylene','o-Xylene','Styrene','(1S)-(-)-alpha-pinene','Decane','Benzene, 1,2,3-trimethyl-','Benzene, 1,2,4-trimethyl-','.beta.-Pinene'
,'4-Ethyltoluene','Mesitylene','(R)-(+)-Limonene','Undecane','2-Ethyltoluene','Benzene, 1,4-dichloro-','Nonanal','Dodecane'
,'Benzene, 1,2,4,5-tetramethyl-','Decanal','Tetradecane','Pentadecane','Hexadecane'],
    ['St.1', st_hwi_a1,st_hwi_a2,st_hwi_a3,st_hwi_a4,st_hwi_a5,st_hwi_a6,st_hwi_a7,st_hwi_a8,st_hwi_a9,st_hwi_a10,st_hwi_a11,st_hwi_a12,st_hwi_a13,st_hwi_a14,st_hwi_a15,st_hwi_a16,st_hwi_a17,st_hwi_a18,st_hwi_a19,st_hwi_a20,st_hwi_a21,st_hwi_a22,st_hwi_a23,st_hwi_a24,st_hwi_a25,st_hwi_a26,st_hwi_a27,st_hwi_a28,st_hwi_a29,st_hwi_a30,st_hwi_a31,st_hwi_a32,st_hwi_a33,st_hwi_a34,st_hwi_a35,st_hwi_a36,st_hwi_a37,st_hwi_a38,st_hwi_a39,st_hwi_a40,st_hwi_a41,st_hwi_a42,st_hwi_a43,st_hwi_a44,st_hwi_a45],
    ['St.2', st_hwi_b1,st_hwi_b2,st_hwi_b3,st_hwi_b4,st_hwi_b5,st_hwi_b6,st_hwi_b7,st_hwi_b8,st_hwi_b9,st_hwi_b10,st_hwi_b11,st_hwi_b12,st_hwi_b13,st_hwi_b14,st_hwi_b15,st_hwi_b16,st_hwi_b17,st_hwi_b18,st_hwi_b19,st_hwi_b20,st_hwi_b21,st_hwi_b22,st_hwi_b23,st_hwi_b24,st_hwi_b25,st_hwi_b26,st_hwi_b27,st_hwi_b28,st_hwi_b29,st_hwi_b30,st_hwi_b31,st_hwi_b32,st_hwi_b33,st_hwi_b34,st_hwi_b35,st_hwi_b36,st_hwi_b37,st_hwi_b38,st_hwi_b39,st_hwi_b40,st_hwi_b41,st_hwi_b42,st_hwi_b43,st_hwi_b44,st_hwi_b45],
    ['St.3', st_hwi_c1,st_hwi_c2,st_hwi_c3,st_hwi_c4,st_hwi_c5,st_hwi_c6,st_hwi_c7,st_hwi_c8,st_hwi_c9,st_hwi_c10,st_hwi_c11,st_hwi_c12,st_hwi_c13,st_hwi_c14,st_hwi_c15,st_hwi_c16,st_hwi_c17,st_hwi_c18,st_hwi_c19,st_hwi_c20,st_hwi_c21,st_hwi_c22,st_hwi_c23,st_hwi_c24,st_hwi_c25,st_hwi_c26,st_hwi_c27,st_hwi_c28,st_hwi_c29,st_hwi_c30,st_hwi_c31,st_hwi_c32,st_hwi_c33,st_hwi_c34,st_hwi_c35,st_hwi_c36,st_hwi_c37,st_hwi_c38,st_hwi_c39,st_hwi_c40,st_hwi_c41,st_hwi_c42,st_hwi_c43,st_hwi_c44,st_hwi_c45],
    ['St.4', st_hwi_d1,st_hwi_d2,st_hwi_d3,st_hwi_d4,st_hwi_d5,st_hwi_d6,st_hwi_d7,st_hwi_d8,st_hwi_d9,st_hwi_d10,st_hwi_d11,st_hwi_d12,st_hwi_d13,st_hwi_d14,st_hwi_d15,st_hwi_d16,st_hwi_d17,st_hwi_d18,st_hwi_d19,st_hwi_d20,st_hwi_d21,st_hwi_d22,st_hwi_d23,st_hwi_d24,st_hwi_d25,st_hwi_d26,st_hwi_d27,st_hwi_d28,st_hwi_d29,st_hwi_d30,st_hwi_d31,st_hwi_d32,st_hwi_d33,st_hwi_d34,st_hwi_d35,st_hwi_d36,st_hwi_d37,st_hwi_d38,st_hwi_d39,st_hwi_d40,st_hwi_d41,st_hwi_d42,st_hwi_d43,st_hwi_d44,st_hwi_d45],
    ['St.5', st_hwi_e1,st_hwi_e2,st_hwi_e3,st_hwi_e4,st_hwi_e5,st_hwi_e6,st_hwi_e7,st_hwi_e8,st_hwi_e9,st_hwi_e10,st_hwi_e11,st_hwi_e12,st_hwi_e13,st_hwi_e14,st_hwi_e15,st_hwi_e16,st_hwi_e17,st_hwi_e18,st_hwi_e19,st_hwi_e20,st_hwi_e21,st_hwi_e22,st_hwi_e23,st_hwi_e24,st_hwi_e25,st_hwi_e26,st_hwi_e27,st_hwi_e28,st_hwi_e29,st_hwi_e30,st_hwi_e31,st_hwi_e32,st_hwi_e33,st_hwi_e34,st_hwi_e35,st_hwi_e36,st_hwi_e37,st_hwi_e38,st_hwi_e39,st_hwi_e40,st_hwi_e41,st_hwi_e42,st_hwi_e43,st_hwi_e44,st_hwi_e45],
    ['St.6', st_hwi_f1,st_hwi_f2,st_hwi_f3,st_hwi_f4,st_hwi_f5,st_hwi_f6,st_hwi_f7,st_hwi_f8,st_hwi_f9,st_hwi_f10,st_hwi_f11,st_hwi_f12,st_hwi_f13,st_hwi_f14,st_hwi_f15,st_hwi_f16,st_hwi_f17,st_hwi_f18,st_hwi_f19,st_hwi_f20,st_hwi_f21,st_hwi_f22,st_hwi_f23,st_hwi_f24,st_hwi_f25,st_hwi_f26,st_hwi_f27,st_hwi_f28,st_hwi_f29,st_hwi_f30,st_hwi_f31,st_hwi_f32,st_hwi_f33,st_hwi_f34,st_hwi_f35,st_hwi_f36,st_hwi_f37,st_hwi_f38,st_hwi_f39,st_hwi_f40,st_hwi_f41,st_hwi_f42,st_hwi_f43,st_hwi_f44,st_hwi_f45],
    ['St.7', st_hwi_g1,st_hwi_g2,st_hwi_g3,st_hwi_g4,st_hwi_g5,st_hwi_g6,st_hwi_g7,st_hwi_g8,st_hwi_g9,st_hwi_g10,st_hwi_g11,st_hwi_g12,st_hwi_g13,st_hwi_g14,st_hwi_g15,st_hwi_g16,st_hwi_g17,st_hwi_g18,st_hwi_g19,st_hwi_g20,st_hwi_g21,st_hwi_g22,st_hwi_g23,st_hwi_g24,st_hwi_g25,st_hwi_g26,st_hwi_g27,st_hwi_g28,st_hwi_g29,st_hwi_g30,st_hwi_g31,st_hwi_g32,st_hwi_g33,st_hwi_g34,st_hwi_g35,st_hwi_g36,st_hwi_g37,st_hwi_g38,st_hwi_g39,st_hwi_g40,st_hwi_g41,st_hwi_g42,st_hwi_g43,st_hwi_g44,st_hwi_g45],
    ['St.8', st_hwi_h1,st_hwi_h2,st_hwi_h3,st_hwi_h4,st_hwi_h5,st_hwi_h6,st_hwi_h7,st_hwi_h8,st_hwi_h9,st_hwi_h10,st_hwi_h11,st_hwi_h12,st_hwi_h13,st_hwi_h14,st_hwi_h15,st_hwi_h16,st_hwi_h17,st_hwi_h18,st_hwi_h19,st_hwi_h20,st_hwi_h21,st_hwi_h22,st_hwi_h23,st_hwi_h24,st_hwi_h25,st_hwi_h26,st_hwi_h27,st_hwi_h28,st_hwi_h29,st_hwi_h30,st_hwi_h31,st_hwi_h32,st_hwi_h33,st_hwi_h34,st_hwi_h35,st_hwi_h36,st_hwi_h37,st_hwi_h38,st_hwi_h39,st_hwi_h40,st_hwi_h41,st_hwi_h42,st_hwi_h43,st_hwi_h44,st_hwi_h45],
    ['St.9', st_hwi_i1,st_hwi_i2,st_hwi_i3,st_hwi_i4,st_hwi_i5,st_hwi_i6,st_hwi_i7,st_hwi_i8,st_hwi_i9,st_hwi_i10,st_hwi_i11,st_hwi_i12,st_hwi_i13,st_hwi_i14,st_hwi_i15,st_hwi_i16,st_hwi_i17,st_hwi_i18,st_hwi_i19,st_hwi_i20,st_hwi_i21,st_hwi_i22,st_hwi_i23,st_hwi_i24,st_hwi_i25,st_hwi_i26,st_hwi_i27,st_hwi_i28,st_hwi_i29,st_hwi_i30,st_hwi_i31,st_hwi_i32,st_hwi_i33,st_hwi_i34,st_hwi_i35,st_hwi_i36,st_hwi_i37,st_hwi_i38,st_hwi_i39,st_hwi_i40,st_hwi_i41,st_hwi_i42,st_hwi_i43,st_hwi_i44,st_hwi_i45],
    ['St.10',st_hwi_j1,st_hwi_j2,st_hwi_j3,st_hwi_j4,st_hwi_j5,st_hwi_j6,st_hwi_j7,st_hwi_j8,st_hwi_j9,st_hwi_j10,st_hwi_j11,st_hwi_j12,st_hwi_j13,st_hwi_j14,st_hwi_j15,st_hwi_j16,st_hwi_j17,st_hwi_j18,st_hwi_j19,st_hwi_j20,st_hwi_j21,st_hwi_j22,st_hwi_j23,st_hwi_j24,st_hwi_j25,st_hwi_j26,st_hwi_j27,st_hwi_j28,st_hwi_j29,st_hwi_j30,st_hwi_j31,st_hwi_j32,st_hwi_j33,st_hwi_j34,st_hwi_j35,st_hwi_j36,st_hwi_j37,st_hwi_j38,st_hwi_j39,st_hwi_j40,st_hwi_j41,st_hwi_j42,st_hwi_j43,st_hwi_j44,st_hwi_j45],
    ]);

    var options = {
        width: 780,
        height: 250,
        bar: { groupWidth: '75%' },
        title: '주변해역'
      };
  var chart = new google.visualization.ColumnChart(document.getElementById("hwi_chart2"));

  chart.draw(data, options);
}

/*
* 미량금속 차트
*/
// 차트 1 (Cd)
google.charts.load("current", {packages:['corechart']});

function miDrawChart1() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q1.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q1[i]]
    ]);
}

  var options = {
    title: "- Cd -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },

  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_1"));

  chart.draw(data, options);
}

// 차트 2 (As)
google.charts.load("current", {packages:['corechart']});

function miDrawChart2() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q2.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q2[i]]
    ]);
}

  var options = {
    title: "- As -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_2"));

  chart.draw(data, options);
}

// 차트 3 (Pb)
google.charts.load("current", {packages:['corechart']});

function miDrawChart3() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q3.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q3[i]]
    ]);
}

  var options = {
    title: "- Pb -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_3"));

  chart.draw(data, options);
}

// 차트 4 (Cu)
google.charts.load("current", {packages:['corechart']});

function miDrawChart4() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q4.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q4[i]]
    ]);
}

  var options = {
    title: "- Cu -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_4"));

  chart.draw(data, options);
}

// 차트 5 (Cr)
google.charts.load("current", {packages:['corechart']});

function miDrawChart5() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q5.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q5[i]]
    ]);
}

  var options = {
    title: "- Cr -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_5"));

  chart.draw(data, options);
}

// 차트 6 (Zn)
google.charts.load("current", {packages:['corechart']});

function miDrawChart6() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q6.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q6[i]]
    ]);
}

  var options = {
    title: "- Zn -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_6"));

  chart.draw(data, options);
}

// 차트 7 (Ni)
google.charts.load("current", {packages:['corechart']});

function miDrawChart7() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q7.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q7[i]]
    ]);
}

  var options = {
    title: "- Ni -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_7"));

  chart.draw(data, options);
}

// 차트 8 (Mn)
google.charts.load("current", {packages:['corechart']});

function miDrawChart8() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q8.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q8[i]]
    ]);
}

  var options = {
    title: "- Mn -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_8"));

  chart.draw(data, options);
}

// 차트 9 (V)
google.charts.load("current", {packages:['corechart']});

function miDrawChart9() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q9.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q9[i]]
    ]);
}

  var options = {
    title: "- V -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_9"));

  chart.draw(data, options);
}

// 차트 10 (Se)
google.charts.load("current", {packages:['corechart']});

function miDrawChart10() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q10.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q10[i]]
    ]);
}

  var options = {
    title: "- Se -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_10"));

  chart.draw(data, options);
}

// 차트 11 (Ba)
google.charts.load("current", {packages:['corechart']});

function miDrawChart11() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q11.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q11[i]]
    ]);
}

  var options = {
    title: "- Ba -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_11"));

  chart.draw(data, options);
}

// 차트 12 (Sn)
google.charts.load("current", {packages:['corechart']});

function miDrawChart12() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q12.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q12[i]]
    ]);
}

  var options = {
    title: "- Sn -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_12"));

  chart.draw(data, options);
}

// 차트 13 (Ag)
google.charts.load("current", {packages:['corechart']});

function miDrawChart13() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q13.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q13[i]]
    ]);
}

  var options = {
    title: "- Ag -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_13"));

  chart.draw(data, options);
}

// 차트 14 (B)
google.charts.load("current", {packages:['corechart']});

function miDrawChart14() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q14.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q14[i]]
    ]);
}

  var options = {
    title: "- B -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_14"));

  chart.draw(data, options);
}

// 차트 15 (Hg)
google.charts.load("current", {packages:['corechart']});

function miDrawChart15() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < mi_q15.length; i++){
    data.addRows([
    ['No.'+ (i + 1), mi_q15[i]]
    ]);
}

  var options = {
    title: "- Hg -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("mi_chart_15"));

  chart.draw(data, options);
}

function windowClose() {
    window.close();
}
    // 주변해역

// 차트 1 (Cd)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart1() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q1.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q1[i]]
    ]);
}

  var options = {
    title: "- Cd -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_1"));

  chart.draw(data, options);
}

// 차트 2 (As)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart2() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q2.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q2[i]]
    ]);
}

  var options = {
    title: "- As -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_2"));

  chart.draw(data, options);
}

// 차트 3 (Pb)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart3() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q3.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q3[i]]
    ]);
}

  var options = {
    title: "- Pb -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_3"));

  chart.draw(data, options);
}

// 차트 4 (Cu)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart4() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q4.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q4[i]]
    ]);
}

  var options = {
    title: "- Cu -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_4"));

  chart.draw(data, options);
}

// 차트 5 (Cr)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart5() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q5.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q5[i]]
    ]);
}

  var options = {
    title: "- Cr -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_5"));

  chart.draw(data, options);
}

// 차트 6 (Zn)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart6() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q6.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q6[i]]
    ]);
}

  var options = {
    title: "- Zn -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_6"));

  chart.draw(data, options);
}

// 차트 7 (Ni)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart7() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q7.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q7[i]]
    ]);
}

  var options = {
    title: "- Ni -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_7"));

  chart.draw(data, options);
}

// 차트 8 (Mn)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart8() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q8.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q8[i]]
    ]);
}

  var options = {
    title: "- Mn -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_8"));

  chart.draw(data, options);
}

// 차트 9 (V)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart9() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q9.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q9[i]]
    ]);
}

  var options = {
    title: "- V -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_9"));

  chart.draw(data, options);
}

// 차트 10 (Se)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart10() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q10.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q10[i]]
    ]);
}

  var options = {
    title: "- Se -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_10"));

  chart.draw(data, options);
}

// 차트 11 (Ba)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart11() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q11.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q11[i]]
    ]);
}

  var options = {
    title: "- Ba -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_11"));

  chart.draw(data, options);
}

// 차트 12 (Sn)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart12() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q12.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q12[i]]
    ]);
}

  var options = {
    title: "- Sn -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_12"));

  chart.draw(data, options);
}

// 차트 13 (Ag)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart13() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q13.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q13[i]]
    ]);
}

  var options = {
    title: "- Ag -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_13"));

  chart.draw(data, options);
}

// 차트 14 (B)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart14() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q14.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q14[i]]
    ]);
}

  var options = {
    title: "- B -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_14"));

  chart.draw(data, options);
}

// 차트 15 (Hg)
google.charts.load("current", {packages:['corechart']});

function st_miDrawChart15() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_mi_q15.length; i++){
    data.addRows([
    ['St.'+ (i + 1), st_mi_q15[i]]
    ]);
}

  var options = {
    title: "- Hg -",
    width: 380,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_mi_chart_15"));

  chart.draw(data, options);
}


/*
* 기타물질 차트
*/

// 차트 1 (TOC)
google.charts.load("current", {packages:['corechart']});

function etcDrawChart1() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < etc_q1.length; i++){
    data.addRows([
    ['No.'+ (i + 1), etc_q1[i]]
    ]);
}

  var options = {
    title: "- TOC -",
    width: 780,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("etc_chart1"));

  chart.draw(data, options);
}

// 차트 2 (CN)
google.charts.load("current", {packages:['corechart']});

function etcDrawChart2() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < etc_q2.length; i++){
    data.addRows([
    ['No.'+ (i + 1), etc_q2[i]]
    ]);
}

  var options = {
    title: "- CN -",
    width: 780,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("etc_chart2"));

  chart.draw(data, options);
}

// 차트 3 (페놀)
google.charts.load("current", {packages:['corechart']});

function etcDrawChart3() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < etc_q3.length; i++){
    data.addRows([
    ['No.'+ (i + 1), etc_q3[i]]
    ]);
}

  var options = {
    title: "- 페놀 -",
    width: 780,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("etc_chart3"));

  chart.draw(data, options);
}

    //주변해역
// 차트 1 (TOC)
google.charts.load("current", {packages:['corechart']});

function st_etcDrawChart1() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_etc_q1.length; i++){
    data.addRows([
    ['No.'+ (i + 1), st_etc_q1[i]]
    ]);
}

  var options = {
    title: "- TOC -",
    width: 780,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_etc_chart1"));

  chart.draw(data, options);
}

// 차트 2 (CN)
google.charts.load("current", {packages:['corechart']});

function st_etcDrawChart2() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_etc_q2.length; i++){
    data.addRows([
    ['No.'+ (i + 1), st_etc_q2[i]]
    ]);
}

  var options = {
    title: "- CN -",
    width: 780,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_etc_chart2"));

  chart.draw(data, options);
}

// 차트 3 (페놀)
google.charts.load("current", {packages:['corechart']});

function st_etcDrawChart3() {

var data = new google.visualization.DataTable();

    data.addColumn('string', 'No');
    data.addColumn('number', 'value');

    for(var i = 0; i < st_etc_q3.length; i++){
    data.addRows([
    ['No.'+ (i + 1), st_etc_q3[i]]
    ]);
}

  var options = {
    title: "- 페놀 -",
    width: 780,
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("st_etc_chart3"));

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
        google.charts.setOnLoadCallback(drawChart_water);
        google.charts.setOnLoadCallback(drawChart_water2);
    }
    else if (num == '3') {
        $(".tab_1").css("display", "none");
        $(".tab_2").css("display", "none");
        $(".tab_3").css("display", "block");
        $(".tab_4").css("display", "none");
        $(".tab_5").css("display", "none");
        google.charts.setOnLoadCallback(drawChart_hwi);
        google.charts.setOnLoadCallback(drawChart_hwi2);
    }
    else if (num == '4') {
        $(".tab_1").css("display", "none");
        $(".tab_2").css("display", "none");
        $(".tab_3").css("display", "none");
        $(".tab_4").css("display", "block");
        $(".tab_5").css("display", "none");

        google.charts.setOnLoadCallback(miDrawChart1);
        google.charts.setOnLoadCallback(miDrawChart2);
        google.charts.setOnLoadCallback(miDrawChart3);
        google.charts.setOnLoadCallback(miDrawChart4);
        google.charts.setOnLoadCallback(miDrawChart5);
        google.charts.setOnLoadCallback(miDrawChart6);
        google.charts.setOnLoadCallback(miDrawChart7);
        google.charts.setOnLoadCallback(miDrawChart8);
        google.charts.setOnLoadCallback(miDrawChart9);
        google.charts.setOnLoadCallback(miDrawChart10);
        google.charts.setOnLoadCallback(miDrawChart11);
        google.charts.setOnLoadCallback(miDrawChart12);
        google.charts.setOnLoadCallback(miDrawChart13);
        google.charts.setOnLoadCallback(miDrawChart14);
        google.charts.setOnLoadCallback(miDrawChart15);
        google.charts.setOnLoadCallback(st_miDrawChart1);
        google.charts.setOnLoadCallback(st_miDrawChart2);
        google.charts.setOnLoadCallback(st_miDrawChart3);
        google.charts.setOnLoadCallback(st_miDrawChart4);
        google.charts.setOnLoadCallback(st_miDrawChart5);
        google.charts.setOnLoadCallback(st_miDrawChart6);
        google.charts.setOnLoadCallback(st_miDrawChart7);
        google.charts.setOnLoadCallback(st_miDrawChart8);
        google.charts.setOnLoadCallback(st_miDrawChart9);
        google.charts.setOnLoadCallback(st_miDrawChart10);
        google.charts.setOnLoadCallback(st_miDrawChart11);
        google.charts.setOnLoadCallback(st_miDrawChart12);
        google.charts.setOnLoadCallback(st_miDrawChart13);
        google.charts.setOnLoadCallback(st_miDrawChart14);
        google.charts.setOnLoadCallback(st_miDrawChart15);

    }
    else if (num == '5') {
        $(".tab_1").css("display", "none");
        $(".tab_2").css("display", "none");
        $(".tab_3").css("display", "none");
        $(".tab_4").css("display", "none");
        $(".tab_5").css("display", "block");

        google.charts.setOnLoadCallback(etcDrawChart1);
        google.charts.setOnLoadCallback(etcDrawChart2);
        google.charts.setOnLoadCallback(etcDrawChart3);
        google.charts.setOnLoadCallback(st_etcDrawChart1);
        google.charts.setOnLoadCallback(st_etcDrawChart2);
        google.charts.setOnLoadCallback(st_etcDrawChart3);
    }
}

//전역변수 선언

//기초환경자료
var suon = [];
var yeombun = [];
var ph = [];
var Do = [];
var Do_average = [];
var td = [];

//수질오염물질
var q1 =[];
var q2 =[];
var q3 =[];
var q4 =[];
var q5 =[];
var q6 =[];
var q7 =[];
var q8 =[];


function valueMatting(area_Name){

    // suon = [];
    // yeombun = [];
    // ph = [];
    // Do_average = [];
    // Do = [];
    // td = [];

    if(area_Name == '부산 연안'){

        //기초
        suon = [24.360,23.680,23.670,24.710,24.680,24.610,25.100,24.950,23.430,23.400];
        yeombun = [31.740,31.410,31.430,31.610,31.540,31.310,31.370,31.530,31.560,31.580];
        ph = [8.210,8.560,8.590,8.410,8.430,8.400,8.390,8.250,8.580,8.570];
        Do = [7.360,7.730,7.160,7.290,7.610,7.590,7.190,8.290,7.450,7.310];
        Do_average = [105.600,106.700,104.100,104.900,107.800,106.100,103.200,111.200,107.700,105.500];
        td = [59,18,11,6,10];
        
        //수질오염
        q1 = [1,1,1,1,1,1];
        q2 = [1,1,1,1,1,1];
        q3 = [1,3,3,1,1,1];
        q4 = [1,1,1,1,1,1];

        q5 = [1,1,2,1,1,1];
        q6 = [1,1,1,1,1,1];
        q7 = [1,1,1,1,1,1];
        q8 = [1,1,1,1,1,1];

        st_q1 = [0,0,0,0,0,0,0,0,0,0];
        st_q2 = [0,0,0,0,0,0,0,0,0,0];
        st_q3 = [0,0,0,0,0,0,0,0,0,0];
        st_q4 = [0,0,0,0,0,0,0,0,0,0];

        st_q5 = [0,0,0,0,0,0,0,0,0,0];
        st_q6 = [0,0,0,0,0,0,0,0,0,0];
        st_q7 = [0,0,0,0,0,0,0,0,0,0];
        st_q8 = [0,0,0,0,0,0,0,0,0,0];

        //휘발성
        hwi_q1 = [0,0,0,0,0,0];
        hwi_q2 = [0,0,0,0,0,0];
        hwi_q3 = [0,0,0,0,0,0];
        hwi_q4 = [0,0,0,0,0,0];
        hwi_q5 = [0,0,0,0,0,0];
        hwi_q6 = [0,0,0,0,0,0];
        hwi_q7 = [0,0,0,0,0,0];
        hwi_q8 = [0,0,0,0,0,0];

        hwi_q9 = [0,0,0,0,0,18.78];
        hwi_q10 = [0,0,0,0,0,0];
        hwi_q11 = [0,0,0,0,0,0];
        hwi_q12 = [0,0,0,0,0,0];
        hwi_q13 = [0,0,0,0,0,0];
        hwi_q14 = [0,0,0,0,0,0];
        hwi_q15 = [0,0,0,0,0,0];
        hwi_q16 = [0,0,0,0,0,0];

        hwi_q17 = [0,0,0,0,0,0];
        hwi_q18 = [0,0,0,0,0,0];
        hwi_q19 = [0,0,0,0,0,0];
        hwi_q20 = [0,0,0,0,0,0];
        hwi_q21 = [0,0,0,0,0,0];
        hwi_q22 = [0,0,0,0,0,0];
        hwi_q23 = [0,0,0,0,0,0];
        hwi_q24 = [0,0,0,0,0,0];

        hwi_q25 = [0,0,0,0,0,0];
        hwi_q26 = [0,0,0,0,0,0];
        hwi_q27 = [0,0,0,0,0,0];
        hwi_q28 = [0,0,0,0,0,0];
        hwi_q29 = [0,0,0,0,0,0];
        hwi_q30 = [0,0,0,0,0,0];
        hwi_q31 = [0,0,0,0,0,0];
        hwi_q32 = [0,0,0,0,0,0];

        hwi_q33 = [0,0,0,0,0,0];
        hwi_q34 = [0,0,0,0,0,0];
        hwi_q35 = [0,0,0,0,0,0];
        hwi_q36 = [0,0,0,0,0,0];
        hwi_q37 = [0,0,0,0,0,0];
        hwi_q38 = [0,0,0,0,0,0];
        hwi_q39 = [0,0,0,0,0,0];
        hwi_q40 = [0,0,0,0,0,0];

        hwi_q41 = [0,0,0,0,0,0];
        hwi_q42 = [0,0,0,0,0,0];
        hwi_q43 = [0,0,0,0,0,0];
        hwi_q44 = [0,114.93,0,0,0,0];
        hwi_q45 = [0,554.66,0,0,0,0];

        st_hwi_q1 = [0,289.1168,0,0,0,50.848,0,0,40.1184,0];
        st_hwi_q2 = [0,804.17895,0,0,0,166.70645,0,0,103.9265,0];
        st_hwi_q3 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q4 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q5 = [0,6.10365,0,0,0,0,0,0,0,0];
        st_hwi_q6 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q7 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q8 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q9 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q10 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q11 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q12 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q13 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q14 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q15 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q16 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q17 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q18 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q19 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q20 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q21 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q22 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q23 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q24 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q25 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q26 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q27 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q28 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q29 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q30 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q31 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q32 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q33 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q34 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q35 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q36 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q37 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q38 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q39 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q40 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q41 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q42 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q43 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q44 = [0,0,0,0,0,0,0,0,0,0];
        st_hwi_q45 = [0,0,0,0,0,0,0,0,0,0];
        
        //미량금속
        mi_q1 = [0.186,0,0.164,0,0.03,0.001];
        mi_q2 = [1.032,0,0.728,0,0.891,0.831];
        mi_q3 = [0.028,0,0.070,0,0.003,0.116];
        mi_q4 = [4.203,0,0.347,0,0.938,8.908];
        mi_q5 = [0.243,0,0.221,0,0.098,0.112];
        mi_q6 = [27.317,0,39.469,0,5.518,42.395];
        mi_q7 = [0.892,0,0.558,0,0.498,0.166];
        mi_q8 = [9.604,0,17.705,0,1.537,3.655];
        mi_q9 = [0.493,0,0.262,0,0.048,0.233];
        mi_q10 =[0.089,0,0.020,0,0.020,0.025];
        mi_q11 =[33.928,0,19.614,0,9.927,12.890];
        mi_q12 =[0.882,0,0.863,0,0.028,0.062];
        mi_q13 =[0.016,0,0.013,0,0.011,0.016];
        mi_q14 =[2596.330,0,2566.065,0,90.060,163.920]
        mi_q15 =[1.351,0,0.082,0,2.528,0.009];

        st_mi_q1 = [0.019,0.013,0.013,0.018,0.017,0.020,0.018,0.028,0.022,0.022];
        st_mi_q2 = [2.167,2.054,2.051,2.143,2.193,2.151,2.212,2.188,2.111,2.123];
        st_mi_q3 = [0.025,0.015,0.015,0.014,0.023,0.035,0.021,0.022,0.014,0.010];
        st_mi_q4 = [16.357,0.740,0.700,10.756,4.373,4.349,5.955,5.984,0.359,0.228];
        st_mi_q5 = [0.253,0.227,0.219,0.208,0.243,0.271,0.356,19.758,0.305,0.397];
        st_mi_q6 = [18.773,5.354,9.313,17.391,11.848,13.751,14.977,15.533,1.834,16.059];
        st_mi_q7 = [0.346,0.336,0.332,0.346,0.277,0.304,0.358,1.182,0.332,0.389];
        st_mi_q8 = [6.035,2.445,3.017,4.506,1.624,3.315,1.457,15.272,1.538,1.064];
        st_mi_q9 = [7.442,7.805,11.881,13.435,7.760,8.934,12.741,11.465,9.807,5.749];
        st_mi_q10 =[0.022,0.020,0.015,0.018,0.021,0.029,0.022,0.023,0.015,0.016];
        st_mi_q11 =[11.028,10.424,10.253,10.774,10.735,10.710,10.748,10.623,10.077,10.195];
        st_mi_q12 =[0.065,0.026,0.021,0.040,0.040,0.043,0.031,0.003,0.035,0.028];
        st_mi_q13 =[0.025,0.017,0.017,0.022,0.019,0.020,0.018,0.019,0.017,0.017];
        st_mi_q14 =[5490.970,5638.870,5862.250,6016.310,6031.710,5781.370,5893.830,5700.490,5644.260,5745.170]
        st_mi_q15 =[0.078,0.021,0.119,0.209,0.117,0.245,0.469,0.052,0.257,0.035];

        //기타물질
        etc_q1 = [2.880,0,3.330,0,3.730,2.220];
        etc_q2 = [0.001,0,0.001,0.,0,0];
        etc_q3 = [0.001,0,0.001,0,0.001,0.001];

        st_etc_q1 = [1.210,1.230,1.230,1.230,1.240,1.180,1.180,1.190,1.190,1.200];
        st_etc_q2 = [0,0,0,0,0,0,0,0,0,0];
        st_etc_q3 = [0,0,0,0,0,0,0,0,0,0];

    }
    else if(area_Name =='여수 연안'){
        suon = [24.500,24.500,24.500,24.900,24.300,24.70,24.700,24.600,24.700,24.100];
        yeombun = [26.000,26.720,24.020,27.360,28.240,27.780,25.570,28.350,28.940,29.500];
        ph = [8.260,8.280,8.200,8.190,7.990,8.160,8.120,8.140,8.230,8.240];
        Do = [7.550,7.310,7.010,6.670,6.500,6.270,6.620,6.980,6.230,6.400];
        Do_average = [104.900,102.100,101.100,94.100,74.700,88.500,77.700,84.500,88.500,76.000];
        td = [71,43,25,17,10];
    }
    else if(area_Name =='울산 연안'){
        td = [50,35,12,14,10];
    }
    
}

function water_dataMapping(){

a1 = Number(q1[0]);
a2 = Number(q2[0]);
a3 = Number(q3[0]);
a4 = Number(q4[0]); 
a5 = Number(q5[0]);
a6 = Number(q6[0]);
a7 = Number(q7[0]);
a8 = Number(q8[0]);

b1 = Number(q1[1]);
b2 = Number(q2[1]);
b3 = Number(q3[1]);
b4 = Number(q4[1]); 
b5 = Number(q5[1]);
b6 = Number(q6[1]);
b7 = Number(q7[1]);
b8 = Number(q8[1]);

c1 = Number(q1[2]);
c2 = Number(q2[2]);
c3 = Number(q3[2]);
c4 = Number(q4[2]); 
c5 = Number(q5[2]);
c6 = Number(q6[2]);
c7 = Number(q7[2]);
c8 = Number(q8[2]);

d1 = Number(q1[3]);
d2 = Number(q2[3]);
d3 = Number(q3[3]);
d4 = Number(q4[3]); 
d5 = Number(q5[3]);
d6 = Number(q6[3]);
d7 = Number(q7[3]);
d8 = Number(q8[3]);

e1 = Number(q1[4]);
e2 = Number(q2[4]);
e3 = Number(q3[4]);
e4 = Number(q4[4]); 
e5 = Number(q5[4]);
e6 = Number(q6[4]);
e7 = Number(q7[4]);
e8 = Number(q8[4]);

f1 = Number(q1[5]);
f2 = Number(q2[5]);
f3 = Number(q3[5]);
f4 = Number(q4[5]); 
f5 = Number(q5[5]);
f6 = Number(q6[5]);
f7 = Number(q7[5]);
f8 = Number(q8[5]);


}

function water_dataMapping2(){

st_a1 = Number(st_q1[0]);
st_a2 = Number(st_q2[0]);
st_a3 = Number(st_q3[0]);
st_a4 = Number(st_q4[0]); 
st_a5 = Number(st_q5[0]);
st_a6 = Number(st_q6[0]);
st_a7 = Number(st_q7[0]);
st_a8 = Number(st_q8[0]);

st_b1 = Number(st_q1[1]);
st_b2 = Number(st_q2[1]);
st_b3 = Number(st_q3[1]);
st_b4 = Number(st_q4[1]); 
st_b5 = Number(st_q5[1]);
st_b6 = Number(st_q6[1]);
st_b7 = Number(st_q7[1]);
st_b8 = Number(st_q8[1]);

st_c1 = Number(st_q1[2]);
st_c2 = Number(st_q2[2]);
st_c3 = Number(st_q3[2]);
st_c4 = Number(st_q4[2]); 
st_c5 = Number(st_q5[2]);
st_c6 = Number(st_q6[2]);
st_c7 = Number(st_q7[2]);
st_c8 = Number(st_q8[2]);

st_d1 = Number(st_q1[3]);
st_d2 = Number(st_q2[3]);
st_d3 = Number(st_q3[3]);
st_d4 = Number(st_q4[3]); 
st_d5 = Number(st_q5[3]);
st_d6 = Number(st_q6[3]);
st_d7 = Number(st_q7[3]);
st_d8 = Number(st_q8[3]);

st_e1 = Number(st_q1[4]);
st_e2 = Number(st_q2[4]);
st_e3 = Number(st_q3[4]);
st_e4 = Number(st_q4[4]); 
st_e5 = Number(st_q5[4]);
st_e6 = Number(st_q6[4]);
st_e7 = Number(st_q7[4]);
st_e8 = Number(st_q8[4]);

st_f1 = Number(st_q1[5]);
st_f2 = Number(st_q2[5]);
st_f3 = Number(st_q3[5]);
st_f4 = Number(st_q4[5]); 
st_f5 = Number(st_q5[5]);
st_f6 = Number(st_q6[5]);
st_f7 = Number(st_q7[5]);
st_f8 = Number(st_q8[5]);

st_g1 = Number(st_q1[6]);
st_g2 = Number(st_q2[6]);
st_g3 = Number(st_q3[6]);
st_g4 = Number(st_q4[6]); 
st_g5 = Number(st_q5[6]);
st_g6 = Number(st_q6[6]);
st_g7 = Number(st_q7[6]);
st_g8 = Number(st_q8[6]);

st_h1 = Number(st_q1[7]);
st_h2 = Number(st_q2[7]);
st_h3 = Number(st_q3[7]);
st_h4 = Number(st_q4[7]); 
st_h5 = Number(st_q5[7]);
st_h6 = Number(st_q6[7]);
st_h7 = Number(st_q7[7]);
st_h8 = Number(st_q8[7]);

st_i1 = Number(st_q1[8]);
st_i2 = Number(st_q2[8]);
st_i3 = Number(st_q3[8]);
st_i4 = Number(st_q4[8]); 
st_i5 = Number(st_q5[8]);
st_i6 = Number(st_q6[8]);
st_i7 = Number(st_q7[8]);
st_i8 = Number(st_q8[8]);

st_j1 = Number(st_q1[9]);
st_j2 = Number(st_q2[9]);
st_j3 = Number(st_q3[9]);
st_j4 = Number(st_q4[9]); 
st_j5 = Number(st_q5[9]);
st_j6 = Number(st_q6[9]);
st_j7 = Number(st_q7[9]);
st_j8 = Number(st_q8[9]);

}

function hwi_dataMapping(){

    hwi_a1 = Number(hwi_q1[0]);
    hwi_a2 = Number(hwi_q2[0]);
    hwi_a3 = Number(hwi_q3[0]);
    hwi_a4 = Number(hwi_q4[0]); 
    hwi_a5 = Number(hwi_q5[0]);
    hwi_a6 = Number(hwi_q6[0]);
    hwi_a7 = Number(hwi_q7[0]);
    hwi_a8 = Number(hwi_q8[0]);
    hwi_a9 = Number(hwi_q9[0]);
    hwi_a10 = Number(hwi_q10[0]);
    hwi_a11 = Number(hwi_q11[0]);
    hwi_a12 = Number(hwi_q12[0]); 
    hwi_a13 = Number(hwi_q13[0]);
    hwi_a14 = Number(hwi_q14[0]);
    hwi_a15 = Number(hwi_q15[0]);
    hwi_a16 = Number(hwi_q16[0]);
    hwi_a17 = Number(hwi_q17[0]);
    hwi_a18 = Number(hwi_q18[0]);
    hwi_a19 = Number(hwi_q19[0]);
    hwi_a20 = Number(hwi_q20[0]); 
    hwi_a21 = Number(hwi_q21[0]);
    hwi_a22 = Number(hwi_q22[0]);
    hwi_a23 = Number(hwi_q23[0]);
    hwi_a24 = Number(hwi_q24[0]);
    hwi_a25 = Number(hwi_q25[0]);
    hwi_a26 = Number(hwi_q26[0]);
    hwi_a27 = Number(hwi_q27[0]);
    hwi_a28 = Number(hwi_q28[0]); 
    hwi_a29 = Number(hwi_q29[0]);
    hwi_a30 = Number(hwi_q30[0]);
    hwi_a31 = Number(hwi_q31[0]);
    hwi_a32 = Number(hwi_q32[0]);
    hwi_a33 = Number(hwi_q33[0]);
    hwi_a34 = Number(hwi_q34[0]);
    hwi_a35 = Number(hwi_q35[0]);
    hwi_a36 = Number(hwi_q36[0]); 
    hwi_a37 = Number(hwi_q37[0]);
    hwi_a38 = Number(hwi_q38[0]);
    hwi_a39 = Number(hwi_q39[0]);
    hwi_a40 = Number(hwi_q40[0]);
    hwi_a41 = Number(hwi_q41[0]);
    hwi_a42 = Number(hwi_q42[0]);
    hwi_a43 = Number(hwi_q43[0]);
    hwi_a44 = Number(hwi_q44[0]); 
    hwi_a45 = Number(hwi_q45[0]);

    hwi_b1 = Number(hwi_q1[1]);
    hwi_b2 = Number(hwi_q2[1]);
    hwi_b3 = Number(hwi_q3[1]);
    hwi_b4 = Number(hwi_q4[1]); 
    hwi_b5 = Number(hwi_q5[1]);
    hwi_b6 = Number(hwi_q6[1]);
    hwi_b7 = Number(hwi_q7[1]);
    hwi_b8 = Number(hwi_q8[1]);
    hwi_b9 = Number(hwi_q9[1]);
    hwi_b10 = Number(hwi_q10[1]);
    hwi_b11 = Number(hwi_q11[1]);
    hwi_b12 = Number(hwi_q12[1]); 
    hwi_b13 = Number(hwi_q13[1]);
    hwi_b14 = Number(hwi_q14[1]);
    hwi_b15 = Number(hwi_q15[1]);
    hwi_b16 = Number(hwi_q16[1]);
    hwi_b17 = Number(hwi_q17[1]);
    hwi_b18 = Number(hwi_q18[1]);
    hwi_b19 = Number(hwi_q19[1]);
    hwi_b20 = Number(hwi_q20[1]); 
    hwi_b21 = Number(hwi_q21[1]);
    hwi_b22 = Number(hwi_q22[1]);
    hwi_b23 = Number(hwi_q23[1]);
    hwi_b24 = Number(hwi_q24[1]);
    hwi_b25 = Number(hwi_q25[1]);
    hwi_b26 = Number(hwi_q26[1]);
    hwi_b27 = Number(hwi_q27[1]);
    hwi_b28 = Number(hwi_q28[1]); 
    hwi_b29 = Number(hwi_q29[1]);
    hwi_b30 = Number(hwi_q30[1]);
    hwi_b31 = Number(hwi_q31[1]);
    hwi_b32 = Number(hwi_q32[1]);
    hwi_b33 = Number(hwi_q33[1]);
    hwi_b34 = Number(hwi_q34[1]);
    hwi_b35 = Number(hwi_q35[1]);
    hwi_b36 = Number(hwi_q36[1]); 
    hwi_b37 = Number(hwi_q37[1]);
    hwi_b38 = Number(hwi_q38[1]);
    hwi_b39 = Number(hwi_q39[1]);
    hwi_b40 = Number(hwi_q40[1]);
    hwi_b41 = Number(hwi_q41[1]);
    hwi_b42 = Number(hwi_q42[1]);
    hwi_b43 = Number(hwi_q43[1]);
    hwi_b44 = Number(hwi_q44[1]); 
    hwi_b45 = Number(hwi_q45[1]);

    hwi_c1 = Number(hwi_q1[2]);
    hwi_c2 = Number(hwi_q2[2]);
    hwi_c3 = Number(hwi_q3[2]);
    hwi_c4 = Number(hwi_q4[2]); 
    hwi_c5 = Number(hwi_q5[2]);
    hwi_c6 = Number(hwi_q6[2]);
    hwi_c7 = Number(hwi_q7[2]);
    hwi_c8 = Number(hwi_q8[2]);
    hwi_c9 = Number(hwi_q9[2]);
    hwi_c10 = Number(hwi_q10[2]);
    hwi_c11 = Number(hwi_q11[2]);
    hwi_c12 = Number(hwi_q12[2]); 
    hwi_c13 = Number(hwi_q13[2]);
    hwi_c14 = Number(hwi_q14[2]);
    hwi_c15 = Number(hwi_q15[2]);
    hwi_c16 = Number(hwi_q16[2]);
    hwi_c17 = Number(hwi_q17[2]);
    hwi_c18 = Number(hwi_q18[2]);
    hwi_c19 = Number(hwi_q19[2]);
    hwi_c20 = Number(hwi_q20[2]); 
    hwi_c21 = Number(hwi_q21[2]);
    hwi_c22 = Number(hwi_q22[2]);
    hwi_c23 = Number(hwi_q23[2]);
    hwi_c24 = Number(hwi_q24[2]);
    hwi_c25 = Number(hwi_q25[2]);
    hwi_c26 = Number(hwi_q26[2]);
    hwi_c27 = Number(hwi_q27[2]);
    hwi_c28 = Number(hwi_q28[2]); 
    hwi_c29 = Number(hwi_q29[2]);
    hwi_c30 = Number(hwi_q30[2]);
    hwi_c31 = Number(hwi_q31[2]);
    hwi_c32 = Number(hwi_q32[2]);
    hwi_c33 = Number(hwi_q33[2]);
    hwi_c34 = Number(hwi_q34[2]);
    hwi_c35 = Number(hwi_q35[2]);
    hwi_c36 = Number(hwi_q36[2]); 
    hwi_c37 = Number(hwi_q37[2]);
    hwi_c38 = Number(hwi_q38[2]);
    hwi_c39 = Number(hwi_q39[2]);
    hwi_c40 = Number(hwi_q40[2]);
    hwi_c41 = Number(hwi_q41[2]);
    hwi_c42 = Number(hwi_q42[2]);
    hwi_c43 = Number(hwi_q43[2]);
    hwi_c44 = Number(hwi_q44[2]); 
    hwi_c45 = Number(hwi_q45[2]);

    hwi_d1 = Number(hwi_q1[3]);
    hwi_d2 = Number(hwi_q2[3]);
    hwi_d3 = Number(hwi_q3[3]);
    hwi_d4 = Number(hwi_q4[3]); 
    hwi_d5 = Number(hwi_q5[3]);
    hwi_d6 = Number(hwi_q6[3]);
    hwi_d7 = Number(hwi_q7[3]);
    hwi_d8 = Number(hwi_q8[3]);
    hwi_d9 = Number(hwi_q9[3]);
    hwi_d10 = Number(hwi_q10[3]);
    hwi_d11 = Number(hwi_q11[3]);
    hwi_d12 = Number(hwi_q12[3]); 
    hwi_d13 = Number(hwi_q13[3]);
    hwi_d14 = Number(hwi_q14[3]);
    hwi_d15 = Number(hwi_q15[3]);
    hwi_d16 = Number(hwi_q16[3]);
    hwi_d17 = Number(hwi_q17[3]);
    hwi_d18 = Number(hwi_q18[3]);
    hwi_d19 = Number(hwi_q19[3]);
    hwi_d20 = Number(hwi_q20[3]); 
    hwi_d21 = Number(hwi_q21[3]);
    hwi_d22 = Number(hwi_q22[3]);
    hwi_d23 = Number(hwi_q23[3]);
    hwi_d24 = Number(hwi_q24[3]);
    hwi_d25 = Number(hwi_q25[3]);
    hwi_d26 = Number(hwi_q26[3]);
    hwi_d27 = Number(hwi_q27[3]);
    hwi_d28 = Number(hwi_q28[3]); 
    hwi_d29 = Number(hwi_q29[3]);
    hwi_d30 = Number(hwi_q30[3]);
    hwi_d31 = Number(hwi_q31[3]);
    hwi_d32 = Number(hwi_q32[3]);
    hwi_d33 = Number(hwi_q33[3]);
    hwi_d34 = Number(hwi_q34[3]);
    hwi_d35 = Number(hwi_q35[3]);
    hwi_d36 = Number(hwi_q36[3]); 
    hwi_d37 = Number(hwi_q37[3]);
    hwi_d38 = Number(hwi_q38[3]);
    hwi_d39 = Number(hwi_q39[3]);
    hwi_d40 = Number(hwi_q40[3]);
    hwi_d41 = Number(hwi_q41[3]);
    hwi_d42 = Number(hwi_q42[3]);
    hwi_d43 = Number(hwi_q43[3]);
    hwi_d44 = Number(hwi_q44[3]); 
    hwi_d45 = Number(hwi_q45[3]);

    hwi_e1 = Number(hwi_q1[4]);
    hwi_e2 = Number(hwi_q2[4]);
    hwi_e3 = Number(hwi_q3[4]);
    hwi_e4 = Number(hwi_q4[4]); 
    hwi_e5 = Number(hwi_q5[4]);
    hwi_e6 = Number(hwi_q6[4]);
    hwi_e7 = Number(hwi_q7[4]);
    hwi_e8 = Number(hwi_q8[4]);
    hwi_e9 = Number(hwi_q9[4]);
    hwi_e10 = Number(hwi_q10[4]);
    hwi_e11 = Number(hwi_q11[4]);
    hwi_e12 = Number(hwi_q12[4]); 
    hwi_e13 = Number(hwi_q13[4]);
    hwi_e14 = Number(hwi_q14[4]);
    hwi_e15 = Number(hwi_q15[4]);
    hwi_e16 = Number(hwi_q16[4]);
    hwi_e17 = Number(hwi_q17[4]);
    hwi_e18 = Number(hwi_q18[4]);
    hwi_e19 = Number(hwi_q19[4]);
    hwi_e20 = Number(hwi_q20[4]); 
    hwi_e21 = Number(hwi_q21[4]);
    hwi_e22 = Number(hwi_q22[4]);
    hwi_e23 = Number(hwi_q23[4]);
    hwi_e24 = Number(hwi_q24[4]);
    hwi_e25 = Number(hwi_q25[4]);
    hwi_e26 = Number(hwi_q26[4]);
    hwi_e27 = Number(hwi_q27[4]);
    hwi_e28 = Number(hwi_q28[4]); 
    hwi_e29 = Number(hwi_q29[4]);
    hwi_e30 = Number(hwi_q30[4]);
    hwi_e31 = Number(hwi_q31[4]);
    hwi_e32 = Number(hwi_q32[4]);
    hwi_e33 = Number(hwi_q33[4]);
    hwi_e34 = Number(hwi_q34[4]);
    hwi_e35 = Number(hwi_q35[4]);
    hwi_e36 = Number(hwi_q36[4]); 
    hwi_e37 = Number(hwi_q37[4]);
    hwi_e38 = Number(hwi_q38[4]);
    hwi_e39 = Number(hwi_q39[4]);
    hwi_e40 = Number(hwi_q40[4]);
    hwi_e41 = Number(hwi_q41[4]);
    hwi_e42 = Number(hwi_q42[4]);
    hwi_e43 = Number(hwi_q43[4]);
    hwi_e44 = Number(hwi_q44[4]); 
    hwi_e45 = Number(hwi_q45[4]);

    hwi_f1 = Number(hwi_q1[5]);
    hwi_f2 = Number(hwi_q2[5]);
    hwi_f3 = Number(hwi_q3[5]);
    hwi_f4 = Number(hwi_q4[5]); 
    hwi_f5 = Number(hwi_q5[5]);
    hwi_f6 = Number(hwi_q6[5]);
    hwi_f7 = Number(hwi_q7[5]);
    hwi_f8 = Number(hwi_q8[5]);
    hwi_f9 = Number(hwi_q9[5]);
    hwi_f10 = Number(hwi_q10[5]);
    hwi_f11 = Number(hwi_q11[5]);
    hwi_f12 = Number(hwi_q12[5]); 
    hwi_f13 = Number(hwi_q13[5]);
    hwi_f14 = Number(hwi_q14[5]);
    hwi_f15 = Number(hwi_q15[5]);
    hwi_f16 = Number(hwi_q16[5]);
    hwi_f17 = Number(hwi_q17[5]);
    hwi_f18 = Number(hwi_q18[5]);
    hwi_f19 = Number(hwi_q19[5]);
    hwi_f20 = Number(hwi_q20[5]); 
    hwi_f21 = Number(hwi_q21[5]);
    hwi_f22 = Number(hwi_q22[5]);
    hwi_f23 = Number(hwi_q23[5]);
    hwi_f24 = Number(hwi_q24[5]);
    hwi_f25 = Number(hwi_q25[5]);
    hwi_f26 = Number(hwi_q26[5]);
    hwi_f27 = Number(hwi_q27[5]);
    hwi_f28 = Number(hwi_q28[5]); 
    hwi_f29 = Number(hwi_q29[5]);
    hwi_f30 = Number(hwi_q30[5]);
    hwi_f31 = Number(hwi_q31[5]);
    hwi_f32 = Number(hwi_q32[5]);
    hwi_f33 = Number(hwi_q33[5]);
    hwi_f34 = Number(hwi_q34[5]);
    hwi_f35 = Number(hwi_q35[5]);
    hwi_f36 = Number(hwi_q36[5]); 
    hwi_f37 = Number(hwi_q37[5]);
    hwi_f38 = Number(hwi_q38[5]);
    hwi_f39 = Number(hwi_q39[5]);
    hwi_f40 = Number(hwi_q40[5]);
    hwi_f41 = Number(hwi_q41[5]);
    hwi_f42 = Number(hwi_q42[5]);
    hwi_f43 = Number(hwi_q43[5]);
    hwi_f44 = Number(hwi_q44[5]); 
    hwi_f45 = Number(hwi_q45[5]);
}

function hwi_dataMapping2(){

    st_hwi_a1 = Number(st_hwi_q1[0]);
    st_hwi_a2 = Number(st_hwi_q2[0]);
    st_hwi_a3 = Number(st_hwi_q3[0]);
    st_hwi_a4 = Number(st_hwi_q4[0]); 
    st_hwi_a5 = Number(st_hwi_q5[0]);
    st_hwi_a6 = Number(st_hwi_q6[0]);
    st_hwi_a7 = Number(st_hwi_q7[0]);
    st_hwi_a8 = Number(st_hwi_q8[0]);
    st_hwi_a9 = Number(st_hwi_q9[0]);
    st_hwi_a10 = Number(st_hwi_q10[0]);
    st_hwi_a11 = Number(st_hwi_q11[0]);
    st_hwi_a12 = Number(st_hwi_q12[0]); 
    st_hwi_a13 = Number(st_hwi_q13[0]);
    st_hwi_a14 = Number(st_hwi_q14[0]);
    st_hwi_a15 = Number(st_hwi_q15[0]);
    st_hwi_a16 = Number(st_hwi_q16[0]);
    st_hwi_a17 = Number(st_hwi_q17[0]);
    st_hwi_a18 = Number(st_hwi_q18[0]);
    st_hwi_a19 = Number(st_hwi_q19[0]);
    st_hwi_a20 = Number(st_hwi_q20[0]); 
    st_hwi_a21 = Number(st_hwi_q21[0]);
    st_hwi_a22 = Number(st_hwi_q22[0]);
    st_hwi_a23 = Number(st_hwi_q23[0]);
    st_hwi_a24 = Number(st_hwi_q24[0]);
    st_hwi_a25 = Number(st_hwi_q25[0]);
    st_hwi_a26 = Number(st_hwi_q26[0]);
    st_hwi_a27 = Number(st_hwi_q27[0]);
    st_hwi_a28 = Number(st_hwi_q28[0]); 
    st_hwi_a29 = Number(st_hwi_q29[0]);
    st_hwi_a30 = Number(st_hwi_q30[0]);
    st_hwi_a31 = Number(st_hwi_q31[0]);
    st_hwi_a32 = Number(st_hwi_q32[0]);
    st_hwi_a33 = Number(st_hwi_q33[0]);
    st_hwi_a34 = Number(st_hwi_q34[0]);
    st_hwi_a35 = Number(st_hwi_q35[0]);
    st_hwi_a36 = Number(st_hwi_q36[0]); 
    st_hwi_a37 = Number(st_hwi_q37[0]);
    st_hwi_a38 = Number(st_hwi_q38[0]);
    st_hwi_a39 = Number(st_hwi_q39[0]);
    st_hwi_a40 = Number(st_hwi_q40[0]);
    st_hwi_a41 = Number(st_hwi_q41[0]);
    st_hwi_a42 = Number(st_hwi_q42[0]);
    st_hwi_a43 = Number(st_hwi_q43[0]);
    st_hwi_a44 = Number(st_hwi_q44[0]); 
    st_hwi_a45 = Number(st_hwi_q45[0]);

    st_hwi_b1 = Number(st_hwi_q1[1]);
    st_hwi_b2 = Number(st_hwi_q2[1]);
    st_hwi_b3 = Number(st_hwi_q3[1]);
    st_hwi_b4 = Number(st_hwi_q4[1]); 
    st_hwi_b5 = Number(st_hwi_q5[1]);
    st_hwi_b6 = Number(st_hwi_q6[1]);
    st_hwi_b7 = Number(st_hwi_q7[1]);
    st_hwi_b8 = Number(st_hwi_q8[1]);
    st_hwi_b9 = Number(st_hwi_q9[1]);
    st_hwi_b10 = Number(st_hwi_q10[1]);
    st_hwi_b11 = Number(st_hwi_q11[1]);
    st_hwi_b12 = Number(st_hwi_q12[1]); 
    st_hwi_b13 = Number(st_hwi_q13[1]);
    st_hwi_b14 = Number(st_hwi_q14[1]);
    st_hwi_b15 = Number(st_hwi_q15[1]);
    st_hwi_b16 = Number(st_hwi_q16[1]);
    st_hwi_b17 = Number(st_hwi_q17[1]);
    st_hwi_b18 = Number(st_hwi_q18[1]);
    st_hwi_b19 = Number(st_hwi_q19[1]);
    st_hwi_b20 = Number(st_hwi_q20[1]); 
    st_hwi_b21 = Number(st_hwi_q21[1]);
    st_hwi_b22 = Number(st_hwi_q22[1]);
    st_hwi_b23 = Number(st_hwi_q23[1]);
    st_hwi_b24 = Number(st_hwi_q24[1]);
    st_hwi_b25 = Number(st_hwi_q25[1]);
    st_hwi_b26 = Number(st_hwi_q26[1]);
    st_hwi_b27 = Number(st_hwi_q27[1]);
    st_hwi_b28 = Number(st_hwi_q28[1]); 
    st_hwi_b29 = Number(st_hwi_q29[1]);
    st_hwi_b30 = Number(st_hwi_q30[1]);
    st_hwi_b31 = Number(st_hwi_q31[1]);
    st_hwi_b32 = Number(st_hwi_q32[1]);
    st_hwi_b33 = Number(st_hwi_q33[1]);
    st_hwi_b34 = Number(st_hwi_q34[1]);
    st_hwi_b35 = Number(st_hwi_q35[1]);
    st_hwi_b36 = Number(st_hwi_q36[1]); 
    st_hwi_b37 = Number(st_hwi_q37[1]);
    st_hwi_b38 = Number(st_hwi_q38[1]);
    st_hwi_b39 = Number(st_hwi_q39[1]);
    st_hwi_b40 = Number(st_hwi_q40[1]);
    st_hwi_b41 = Number(st_hwi_q41[1]);
    st_hwi_b42 = Number(st_hwi_q42[1]);
    st_hwi_b43 = Number(st_hwi_q43[1]);
    st_hwi_b44 = Number(st_hwi_q44[1]); 
    st_hwi_b45 = Number(st_hwi_q45[1]);

    st_hwi_c1 = Number(st_hwi_q1[2]);
    st_hwi_c2 = Number(st_hwi_q2[2]);
    st_hwi_c3 = Number(st_hwi_q3[2]);
    st_hwi_c4 = Number(st_hwi_q4[2]); 
    st_hwi_c5 = Number(st_hwi_q5[2]);
    st_hwi_c6 = Number(st_hwi_q6[2]);
    st_hwi_c7 = Number(st_hwi_q7[2]);
    st_hwi_c8 = Number(st_hwi_q8[2]);
    st_hwi_c9 = Number(st_hwi_q9[2]);
    st_hwi_c10 = Number(st_hwi_q10[2]);
    st_hwi_c11 = Number(st_hwi_q11[2]);
    st_hwi_c12 = Number(st_hwi_q12[2]); 
    st_hwi_c13 = Number(st_hwi_q13[2]);
    st_hwi_c14 = Number(st_hwi_q14[2]);
    st_hwi_c15 = Number(st_hwi_q15[2]);
    st_hwi_c16 = Number(st_hwi_q16[2]);
    st_hwi_c17 = Number(st_hwi_q17[2]);
    st_hwi_c18 = Number(st_hwi_q18[2]);
    st_hwi_c19 = Number(st_hwi_q19[2]);
    st_hwi_c20 = Number(st_hwi_q20[2]); 
    st_hwi_c21 = Number(st_hwi_q21[2]);
    st_hwi_c22 = Number(st_hwi_q22[2]);
    st_hwi_c23 = Number(st_hwi_q23[2]);
    st_hwi_c24 = Number(st_hwi_q24[2]);
    st_hwi_c25 = Number(st_hwi_q25[2]);
    st_hwi_c26 = Number(st_hwi_q26[2]);
    st_hwi_c27 = Number(st_hwi_q27[2]);
    st_hwi_c28 = Number(st_hwi_q28[2]); 
    st_hwi_c29 = Number(st_hwi_q29[2]);
    st_hwi_c30 = Number(st_hwi_q30[2]);
    st_hwi_c31 = Number(st_hwi_q31[2]);
    st_hwi_c32 = Number(st_hwi_q32[2]);
    st_hwi_c33 = Number(st_hwi_q33[2]);
    st_hwi_c34 = Number(st_hwi_q34[2]);
    st_hwi_c35 = Number(st_hwi_q35[2]);
    st_hwi_c36 = Number(st_hwi_q36[2]); 
    st_hwi_c37 = Number(st_hwi_q37[2]);
    st_hwi_c38 = Number(st_hwi_q38[2]);
    st_hwi_c39 = Number(st_hwi_q39[2]);
    st_hwi_c40 = Number(st_hwi_q40[2]);
    st_hwi_c41 = Number(st_hwi_q41[2]);
    st_hwi_c42 = Number(st_hwi_q42[2]);
    st_hwi_c43 = Number(st_hwi_q43[2]);
    st_hwi_c44 = Number(st_hwi_q44[2]); 
    st_hwi_c45 = Number(st_hwi_q45[2]);

    st_hwi_d1 = Number(st_hwi_q1[3]);
    st_hwi_d2 = Number(st_hwi_q2[3]);
    st_hwi_d3 = Number(st_hwi_q3[3]);
    st_hwi_d4 = Number(st_hwi_q4[3]); 
    st_hwi_d5 = Number(st_hwi_q5[3]);
    st_hwi_d6 = Number(st_hwi_q6[3]);
    st_hwi_d7 = Number(st_hwi_q7[3]);
    st_hwi_d8 = Number(st_hwi_q8[3]);
    st_hwi_d9 = Number(st_hwi_q9[3]);
    st_hwi_d10 = Number(st_hwi_q10[3]);
    st_hwi_d11 = Number(st_hwi_q11[3]);
    st_hwi_d12 = Number(st_hwi_q12[3]); 
    st_hwi_d13 = Number(st_hwi_q13[3]);
    st_hwi_d14 = Number(st_hwi_q14[3]);
    st_hwi_d15 = Number(st_hwi_q15[3]);
    st_hwi_d16 = Number(st_hwi_q16[3]);
    st_hwi_d17 = Number(st_hwi_q17[3]);
    st_hwi_d18 = Number(st_hwi_q18[3]);
    st_hwi_d19 = Number(st_hwi_q19[3]);
    st_hwi_d20 = Number(st_hwi_q20[3]); 
    st_hwi_d21 = Number(st_hwi_q21[3]);
    st_hwi_d22 = Number(st_hwi_q22[3]);
    st_hwi_d23 = Number(st_hwi_q23[3]);
    st_hwi_d24 = Number(st_hwi_q24[3]);
    st_hwi_d25 = Number(st_hwi_q25[3]);
    st_hwi_d26 = Number(st_hwi_q26[3]);
    st_hwi_d27 = Number(st_hwi_q27[3]);
    st_hwi_d28 = Number(st_hwi_q28[3]); 
    st_hwi_d29 = Number(st_hwi_q29[3]);
    st_hwi_d30 = Number(st_hwi_q30[3]);
    st_hwi_d31 = Number(st_hwi_q31[3]);
    st_hwi_d32 = Number(st_hwi_q32[3]);
    st_hwi_d33 = Number(st_hwi_q33[3]);
    st_hwi_d34 = Number(st_hwi_q34[3]);
    st_hwi_d35 = Number(st_hwi_q35[3]);
    st_hwi_d36 = Number(st_hwi_q36[3]); 
    st_hwi_d37 = Number(st_hwi_q37[3]);
    st_hwi_d38 = Number(st_hwi_q38[3]);
    st_hwi_d39 = Number(st_hwi_q39[3]);
    st_hwi_d40 = Number(st_hwi_q40[3]);
    st_hwi_d41 = Number(st_hwi_q41[3]);
    st_hwi_d42 = Number(st_hwi_q42[3]);
    st_hwi_d43 = Number(st_hwi_q43[3]);
    st_hwi_d44 = Number(st_hwi_q44[3]); 
    st_hwi_d45 = Number(st_hwi_q45[3]);

    st_hwi_e1 = Number(st_hwi_q1[4]);
    st_hwi_e2 = Number(st_hwi_q2[4]);
    st_hwi_e3 = Number(st_hwi_q3[4]);
    st_hwi_e4 = Number(st_hwi_q4[4]); 
    st_hwi_e5 = Number(st_hwi_q5[4]);
    st_hwi_e6 = Number(st_hwi_q6[4]);
    st_hwi_e7 = Number(st_hwi_q7[4]);
    st_hwi_e8 = Number(st_hwi_q8[4]);
    st_hwi_e9 = Number(st_hwi_q9[4]);
    st_hwi_e10 = Number(st_hwi_q10[4]);
    st_hwi_e11 = Number(st_hwi_q11[4]);
    st_hwi_e12 = Number(st_hwi_q12[4]); 
    st_hwi_e13 = Number(st_hwi_q13[4]);
    st_hwi_e14 = Number(st_hwi_q14[4]);
    st_hwi_e15 = Number(st_hwi_q15[4]);
    st_hwi_e16 = Number(st_hwi_q16[4]);
    st_hwi_e17 = Number(st_hwi_q17[4]);
    st_hwi_e18 = Number(st_hwi_q18[4]);
    st_hwi_e19 = Number(st_hwi_q19[4]);
    st_hwi_e20 = Number(st_hwi_q20[4]); 
    st_hwi_e21 = Number(st_hwi_q21[4]);
    st_hwi_e22 = Number(st_hwi_q22[4]);
    st_hwi_e23 = Number(st_hwi_q23[4]);
    st_hwi_e24 = Number(st_hwi_q24[4]);
    st_hwi_e25 = Number(st_hwi_q25[4]);
    st_hwi_e26 = Number(st_hwi_q26[4]);
    st_hwi_e27 = Number(st_hwi_q27[4]);
    st_hwi_e28 = Number(st_hwi_q28[4]); 
    st_hwi_e29 = Number(st_hwi_q29[4]);
    st_hwi_e30 = Number(st_hwi_q30[4]);
    st_hwi_e31 = Number(st_hwi_q31[4]);
    st_hwi_e32 = Number(st_hwi_q32[4]);
    st_hwi_e33 = Number(st_hwi_q33[4]);
    st_hwi_e34 = Number(st_hwi_q34[4]);
    st_hwi_e35 = Number(st_hwi_q35[4]);
    st_hwi_e36 = Number(st_hwi_q36[4]); 
    st_hwi_e37 = Number(st_hwi_q37[4]);
    st_hwi_e38 = Number(st_hwi_q38[4]);
    st_hwi_e39 = Number(st_hwi_q39[4]);
    st_hwi_e40 = Number(st_hwi_q40[4]);
    st_hwi_e41 = Number(st_hwi_q41[4]);
    st_hwi_e42 = Number(st_hwi_q42[4]);
    st_hwi_e43 = Number(st_hwi_q43[4]);
    st_hwi_e44 = Number(st_hwi_q44[4]); 
    st_hwi_e45 = Number(st_hwi_q45[4]);

    st_hwi_f1 = Number(st_hwi_q1[5]);
    st_hwi_f2 = Number(st_hwi_q2[5]);
    st_hwi_f3 = Number(st_hwi_q3[5]);
    st_hwi_f4 = Number(st_hwi_q4[5]); 
    st_hwi_f5 = Number(st_hwi_q5[5]);
    st_hwi_f6 = Number(st_hwi_q6[5]);
    st_hwi_f7 = Number(st_hwi_q7[5]);
    st_hwi_f8 = Number(st_hwi_q8[5]);
    st_hwi_f9 = Number(st_hwi_q9[5]);
    st_hwi_f10 = Number(st_hwi_q10[5]);
    st_hwi_f11 = Number(st_hwi_q11[5]);
    st_hwi_f12 = Number(st_hwi_q12[5]); 
    st_hwi_f13 = Number(st_hwi_q13[5]);
    st_hwi_f14 = Number(st_hwi_q14[5]);
    st_hwi_f15 = Number(st_hwi_q15[5]);
    st_hwi_f16 = Number(st_hwi_q16[5]);
    st_hwi_f17 = Number(st_hwi_q17[5]);
    st_hwi_f18 = Number(st_hwi_q18[5]);
    st_hwi_f19 = Number(st_hwi_q19[5]);
    st_hwi_f20 = Number(st_hwi_q20[5]); 
    st_hwi_f21 = Number(st_hwi_q21[5]);
    st_hwi_f22 = Number(st_hwi_q22[5]);
    st_hwi_f23 = Number(st_hwi_q23[5]);
    st_hwi_f24 = Number(st_hwi_q24[5]);
    st_hwi_f25 = Number(st_hwi_q25[5]);
    st_hwi_f26 = Number(st_hwi_q26[5]);
    st_hwi_f27 = Number(st_hwi_q27[5]);
    st_hwi_f28 = Number(st_hwi_q28[5]); 
    st_hwi_f29 = Number(st_hwi_q29[5]);
    st_hwi_f30 = Number(st_hwi_q30[5]);
    st_hwi_f31 = Number(st_hwi_q31[5]);
    st_hwi_f32 = Number(st_hwi_q32[5]);
    st_hwi_f33 = Number(st_hwi_q33[5]);
    st_hwi_f34 = Number(st_hwi_q34[5]);
    st_hwi_f35 = Number(st_hwi_q35[5]);
    st_hwi_f36 = Number(st_hwi_q36[5]); 
    st_hwi_f37 = Number(st_hwi_q37[5]);
    st_hwi_f38 = Number(st_hwi_q38[5]);
    st_hwi_f39 = Number(st_hwi_q39[5]);
    st_hwi_f40 = Number(st_hwi_q40[5]);
    st_hwi_f41 = Number(st_hwi_q41[5]);
    st_hwi_f42 = Number(st_hwi_q42[5]);
    st_hwi_f43 = Number(st_hwi_q43[5]);
    st_hwi_f44 = Number(st_hwi_q44[5]); 
    st_hwi_f45 = Number(st_hwi_q45[5]);

    st_hwi_g1 = Number(st_hwi_q1[6]);
    st_hwi_g2 = Number(st_hwi_q2[6]);
    st_hwi_g3 = Number(st_hwi_q3[6]);
    st_hwi_g4 = Number(st_hwi_q4[6]); 
    st_hwi_g5 = Number(st_hwi_q5[6]);
    st_hwi_g6 = Number(st_hwi_q6[6]);
    st_hwi_g7 = Number(st_hwi_q7[6]);
    st_hwi_g8 = Number(st_hwi_q8[6]);
    st_hwi_g9 = Number(st_hwi_q9[6]);
    st_hwi_g10 = Number(st_hwi_q10[6]);
    st_hwi_g11 = Number(st_hwi_q11[6]);
    st_hwi_g12 = Number(st_hwi_q12[6]); 
    st_hwi_g13 = Number(st_hwi_q13[6]);
    st_hwi_g14 = Number(st_hwi_q14[6]);
    st_hwi_g15 = Number(st_hwi_q15[6]);
    st_hwi_g16 = Number(st_hwi_q16[6]);
    st_hwi_g17 = Number(st_hwi_q17[6]);
    st_hwi_g18 = Number(st_hwi_q18[6]);
    st_hwi_g19 = Number(st_hwi_q19[6]);
    st_hwi_g20 = Number(st_hwi_q20[6]); 
    st_hwi_g21 = Number(st_hwi_q21[6]);
    st_hwi_g22 = Number(st_hwi_q22[6]);
    st_hwi_g23 = Number(st_hwi_q23[6]);
    st_hwi_g24 = Number(st_hwi_q24[6]);
    st_hwi_g25 = Number(st_hwi_q25[6]);
    st_hwi_g26 = Number(st_hwi_q26[6]);
    st_hwi_g27 = Number(st_hwi_q27[6]);
    st_hwi_g28 = Number(st_hwi_q28[6]); 
    st_hwi_g29 = Number(st_hwi_q29[6]);
    st_hwi_g30 = Number(st_hwi_q30[6]);
    st_hwi_g31 = Number(st_hwi_q31[6]);
    st_hwi_g32 = Number(st_hwi_q32[6]);
    st_hwi_g33 = Number(st_hwi_q33[6]);
    st_hwi_g34 = Number(st_hwi_q34[6]);
    st_hwi_g35 = Number(st_hwi_q35[6]);
    st_hwi_g36 = Number(st_hwi_q36[6]); 
    st_hwi_g37 = Number(st_hwi_q37[6]);
    st_hwi_g38 = Number(st_hwi_q38[6]);
    st_hwi_g39 = Number(st_hwi_q39[6]);
    st_hwi_g40 = Number(st_hwi_q40[6]);
    st_hwi_g41 = Number(st_hwi_q41[6]);
    st_hwi_g42 = Number(st_hwi_q42[6]);
    st_hwi_g43 = Number(st_hwi_q43[6]);
    st_hwi_g44 = Number(st_hwi_q44[6]); 
    st_hwi_g45 = Number(st_hwi_q45[6]);

    st_hwi_h1 = Number(st_hwi_q1[7]);
    st_hwi_h2 = Number(st_hwi_q2[7]);
    st_hwi_h3 = Number(st_hwi_q3[7]);
    st_hwi_h4 = Number(st_hwi_q4[7]); 
    st_hwi_h5 = Number(st_hwi_q5[7]);
    st_hwi_h6 = Number(st_hwi_q6[7]);
    st_hwi_h7 = Number(st_hwi_q7[7]);
    st_hwi_h8 = Number(st_hwi_q8[7]);
    st_hwi_h9 = Number(st_hwi_q9[7]);
    st_hwi_h10 = Number(st_hwi_q10[7]);
    st_hwi_h11 = Number(st_hwi_q11[7]);
    st_hwi_h12 = Number(st_hwi_q12[7]); 
    st_hwi_h13 = Number(st_hwi_q13[7]);
    st_hwi_h14 = Number(st_hwi_q14[7]);
    st_hwi_h15 = Number(st_hwi_q15[7]);
    st_hwi_h16 = Number(st_hwi_q16[7]);
    st_hwi_h17 = Number(st_hwi_q17[7]);
    st_hwi_h18 = Number(st_hwi_q18[7]);
    st_hwi_h19 = Number(st_hwi_q19[7]);
    st_hwi_h20 = Number(st_hwi_q20[7]); 
    st_hwi_h21 = Number(st_hwi_q21[7]);
    st_hwi_h22 = Number(st_hwi_q22[7]);
    st_hwi_h23 = Number(st_hwi_q23[7]);
    st_hwi_h24 = Number(st_hwi_q24[7]);
    st_hwi_h25 = Number(st_hwi_q25[7]);
    st_hwi_h26 = Number(st_hwi_q26[7]);
    st_hwi_h27 = Number(st_hwi_q27[7]);
    st_hwi_h28 = Number(st_hwi_q28[7]); 
    st_hwi_h29 = Number(st_hwi_q29[7]);
    st_hwi_h30 = Number(st_hwi_q30[7]);
    st_hwi_h31 = Number(st_hwi_q31[7]);
    st_hwi_h32 = Number(st_hwi_q32[7]);
    st_hwi_h33 = Number(st_hwi_q33[7]);
    st_hwi_h34 = Number(st_hwi_q34[7]);
    st_hwi_h35 = Number(st_hwi_q35[7]);
    st_hwi_h36 = Number(st_hwi_q36[7]); 
    st_hwi_h37 = Number(st_hwi_q37[7]);
    st_hwi_h38 = Number(st_hwi_q38[7]);
    st_hwi_h39 = Number(st_hwi_q39[7]);
    st_hwi_h40 = Number(st_hwi_q40[7]);
    st_hwi_h41 = Number(st_hwi_q41[7]);
    st_hwi_h42 = Number(st_hwi_q42[7]);
    st_hwi_h43 = Number(st_hwi_q43[7]);
    st_hwi_h44 = Number(st_hwi_q44[7]); 
    st_hwi_h45 = Number(st_hwi_q45[7]);

    st_hwi_i1 = Number(st_hwi_q1[8]);
    st_hwi_i2 = Number(st_hwi_q2[8]);
    st_hwi_i3 = Number(st_hwi_q3[8]);
    st_hwi_i4 = Number(st_hwi_q4[8]); 
    st_hwi_i5 = Number(st_hwi_q5[8]);
    st_hwi_i6 = Number(st_hwi_q6[8]);
    st_hwi_i7 = Number(st_hwi_q7[8]);
    st_hwi_i8 = Number(st_hwi_q8[8]);
    st_hwi_i9 = Number(st_hwi_q9[8]);
    st_hwi_i10 = Number(st_hwi_q10[8]);
    st_hwi_i11 = Number(st_hwi_q11[8]);
    st_hwi_i12 = Number(st_hwi_q12[8]); 
    st_hwi_i13 = Number(st_hwi_q13[8]);
    st_hwi_i14 = Number(st_hwi_q14[8]);
    st_hwi_i15 = Number(st_hwi_q15[8]);
    st_hwi_i16 = Number(st_hwi_q16[8]);
    st_hwi_i17 = Number(st_hwi_q17[8]);
    st_hwi_i18 = Number(st_hwi_q18[8]);
    st_hwi_i19 = Number(st_hwi_q19[8]);
    st_hwi_i20 = Number(st_hwi_q20[8]); 
    st_hwi_i21 = Number(st_hwi_q21[8]);
    st_hwi_i22 = Number(st_hwi_q22[8]);
    st_hwi_i23 = Number(st_hwi_q23[8]);
    st_hwi_i24 = Number(st_hwi_q24[8]);
    st_hwi_i25 = Number(st_hwi_q25[8]);
    st_hwi_i26 = Number(st_hwi_q26[8]);
    st_hwi_i27 = Number(st_hwi_q27[8]);
    st_hwi_i28 = Number(st_hwi_q28[8]); 
    st_hwi_i29 = Number(st_hwi_q29[8]);
    st_hwi_i30 = Number(st_hwi_q30[8]);
    st_hwi_i31 = Number(st_hwi_q31[8]);
    st_hwi_i32 = Number(st_hwi_q32[8]);
    st_hwi_i33 = Number(st_hwi_q33[8]);
    st_hwi_i34 = Number(st_hwi_q34[8]);
    st_hwi_i35 = Number(st_hwi_q35[8]);
    st_hwi_i36 = Number(st_hwi_q36[8]); 
    st_hwi_i37 = Number(st_hwi_q37[8]);
    st_hwi_i38 = Number(st_hwi_q38[8]);
    st_hwi_i39 = Number(st_hwi_q39[8]);
    st_hwi_i40 = Number(st_hwi_q40[8]);
    st_hwi_i41 = Number(st_hwi_q41[8]);
    st_hwi_i42 = Number(st_hwi_q42[8]);
    st_hwi_i43 = Number(st_hwi_q43[8]);
    st_hwi_i44 = Number(st_hwi_q44[8]); 
    st_hwi_i45 = Number(st_hwi_q45[8]);

    st_hwi_j1 = Number(st_hwi_q1[9]);
    st_hwi_j2 = Number(st_hwi_q2[9]);
    st_hwi_j3 = Number(st_hwi_q3[9]);
    st_hwi_j4 = Number(st_hwi_q4[9]); 
    st_hwi_j5 = Number(st_hwi_q5[9]);
    st_hwi_j6 = Number(st_hwi_q6[9]);
    st_hwi_j7 = Number(st_hwi_q7[9]);
    st_hwi_j8 = Number(st_hwi_q8[9]);
    st_hwi_j9 = Number(st_hwi_q9[9]);
    st_hwi_j10 = Number(st_hwi_q10[9]);
    st_hwi_j11 = Number(st_hwi_q11[9]);
    st_hwi_j12 = Number(st_hwi_q12[9]); 
    st_hwi_j13 = Number(st_hwi_q13[9]);
    st_hwi_j14 = Number(st_hwi_q14[9]);
    st_hwi_j15 = Number(st_hwi_q15[9]);
    st_hwi_j16 = Number(st_hwi_q16[9]);
    st_hwi_j17 = Number(st_hwi_q17[9]);
    st_hwi_j18 = Number(st_hwi_q18[9]);
    st_hwi_j19 = Number(st_hwi_q19[9]);
    st_hwi_j20 = Number(st_hwi_q20[9]); 
    st_hwi_j21 = Number(st_hwi_q21[9]);
    st_hwi_j22 = Number(st_hwi_q22[9]);
    st_hwi_j23 = Number(st_hwi_q23[9]);
    st_hwi_j24 = Number(st_hwi_q24[9]);
    st_hwi_j25 = Number(st_hwi_q25[9]);
    st_hwi_j26 = Number(st_hwi_q26[9]);
    st_hwi_j27 = Number(st_hwi_q27[9]);
    st_hwi_j28 = Number(st_hwi_q28[9]); 
    st_hwi_j29 = Number(st_hwi_q29[9]);
    st_hwi_j30 = Number(st_hwi_q30[9]);
    st_hwi_j31 = Number(st_hwi_q31[9]);
    st_hwi_j32 = Number(st_hwi_q32[9]);
    st_hwi_j33 = Number(st_hwi_q33[9]);
    st_hwi_j34 = Number(st_hwi_q34[9]);
    st_hwi_j35 = Number(st_hwi_q35[9]);
    st_hwi_j36 = Number(st_hwi_q36[9]); 
    st_hwi_j37 = Number(st_hwi_q37[9]);
    st_hwi_j38 = Number(st_hwi_q38[9]);
    st_hwi_j39 = Number(st_hwi_q39[9]);
    st_hwi_j40 = Number(st_hwi_q40[9]);
    st_hwi_j41 = Number(st_hwi_q41[9]);
    st_hwi_j42 = Number(st_hwi_q42[9]);
    st_hwi_j43 = Number(st_hwi_q43[9]);
    st_hwi_j44 = Number(st_hwi_q44[9]); 
    st_hwi_j45 = Number(st_hwi_q45[9]);
}
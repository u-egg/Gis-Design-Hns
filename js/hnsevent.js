//메뉴 버튼 이벤트
function menu_btn(num) {
    $(".menu_on").attr("class", 'menu_off');
    $(".top_menu_on").attr("class", 'top_menu_off');
    $("#menu_btn_" + num).attr("class", 'menu_on');
    $("#top_menu_" + num).attr("class", 'top_menu_on');

    layerclear = "clear";

    if (num == '1') {
        $(".part_1").css("display", "block");
        $(".part_2").css("display", "none");
        $(".part_3").css("display", "none");
        $(".part_4").css("display", "none");
        $(".part_5").css("display", "none");
    } else if (num == '2') {
        $(".part_1").css("display", "none");
        $(".part_2").css("display", "block");
        $(".part_3").css("display", "none");
        $(".part_4").css("display", "none");
        $(".part_5").css("display", "none");
    } else if (num == '3') {
        $(".part_1").css("display", "none");
        $(".part_2").css("display", "none");
        $(".part_3").css("display", "block");
        $(".part_4").css("display", "none");
        $(".part_5").css("display", "none");
    } else if (num == '4') {
        $(".part_1").css("display", "none");
        $(".part_2").css("display", "none");
        $(".part_3").css("display", "none");
        $(".part_4").css("display", "block");
        $(".part_5").css("display", "none");
    } else if (num == '5') {
        $(".part_1").css("display", "none");
        $(".part_2").css("display", "none");
        $(".part_3").css("display", "none");
        $(".part_4").css("display", "none");
        $(".part_5").css("display", "block");
    }
}

//슬라이드 기능
function content_silde() {
    var $s = $('#left_slide');
    var $btn = $('.side_nav_close');
    var $btn2 = $('.side_nav_open');

    if ($s.is(':visible')) {
        $s.hide('slide', {
            direction: 'left'
        }, 530);
        $btn.css("display", "none");
        setTimeout(function () {
            $btn2.css("display", "block");
        }, 530);

        // Other stuff to do on slideUp
    } else {
        $s.show('slide', {
            direction: 'left'
        }, 530);
        $btn2.css("display", "none");
        setTimeout(function () {
            $btn.css("display", "block");
        }, 530);
        // Other stuff to down on slideDown
    }
}

function classSetTime() {

    var objTime = $('.setTime');
    for (var i = 0; i < objTime.length; i++) {
        for (var j = 0; j < 24; j++) {
            var option = $("<option value='" + j + "'>" + j + "시</option>");
            $(objTime[i]).append(option);

            // if (i == 1 && j == 5) {
            //     objTime[i].selectedIndex = j;
            // }
        }
    }
}

//part_1 해양환경 정보 (유속 + 수온)

var L_layerType = "";

function layerChange(value) { // 공간범위 이벤트

    L_layerType = value;

    var mid = "<option value='null'>-</option>"
    var detail = "<option value='YS_layer'>여수산단</option>"
    var all = "<option value='YS_layer'>여수산단</option>"

    if (L_layerType == "mid_layer") {
        document
            .querySelector("#area_select_1")
            .innerHTML = mid;
            //layer_select();
    } else if(L_layerType == "detail_layer"){
        document
            .querySelector("#area_select_1")
            .innerHTML = detail;
            //layer_select();
    } else {
        document
            .querySelector("#area_select_1")
            .innerHTML = all;
            //layer_select();
    }
}

function layer_select() {
    
    if (L_layerType == "mid_layer") {
        $('.mid_box').css('display','block');
        $('.select_detail_box').css('display','none');
        $('.all_box').css('display','none');

    } else if(L_layerType == "detail_layer") {
        $('.select_detail_box').css('display','block');
        $('.mid_box').css('display','none');
        $('.all_box').css('display','none');
    } else if(L_layerType == "" | L_layerType == "all_layer") {
        $('.all_box').css('display','block');
        $('.mid_box').css('display','none');
        $('.select_detail_box').css('display','none');
    }
}

var layerType = "";

function viewYousokLayer(type) {

    setImgType = type;

    layerType = ""

    var chk = document.getElementsByName("yousok_chkbox");

    var chked = false;

    for (var i = 0; i < chk.length; i++) {
        if (chk[i].checked == true) {
            chked = true;
            break;
        }
    }

    layerType = $('input[name=yousok_chkbox]:checked').val();

    if (chked == false) {
        Swal.fire(
            {icon: 'error', title: '경고', text: '레이어를 선택해 주세요.'}
        )
    } 
  
}

var c = null;

var setLon = null;
var setLat = null;
var set_wind_direction = null;

function drawArrow(sbLon, sbLat, sb_wind_direction) {

    if (sbLon == null) {
        return;
    }
    
    setLon = sbLon;
    setLat = sbLat;

    set_wind_direction = sb_wind_direction;
    
    var zoomLevel = map.getZoom();
    var setViewCnt = 0;

    var dataMaxLon = 200;
    var dataMaxLat = 200;
    var dataMinLon = 200;
    var dataMinLat = 200;

    var mapMaxLon = map
        .getBounds()
        ._northEast
        .lng;
    var mapMaxLat = map
        .getBounds()
        ._northEast
        .lat;
    var mapMinLon = map
        .getBounds()
        ._southWest
        .lng;
    var mapMinLat = map
        .getBounds()
        ._southWest
        .lat;

    var setMaxLon = 0;
    var setMaxLat = 0;
    var setMinLon = 0;
    var setMinLat = 0;

    if (layerType == "L1") {

        if (zoomLevel < 7) {
            setViewCnt = 12;
        } else if (zoomLevel == 7) {
            setViewCnt = 8;
        } else if (zoomLevel == 8) {
            setViewCnt = 6;
        } else if (zoomLevel == 9) {
            setViewCnt = 4;
        } else if (zoomLevel == 10) {
            setViewCnt = 2;
        } else {
            setViewCnt = 1;
        }

    } else if (layerType == "L2") {

        if (zoomLevel < 7) {
            setViewCnt = 24;
        } else if (zoomLevel == 7) {
            setViewCnt = 16;
        } else if (zoomLevel == 8) {
            setViewCnt = 12;
        } else if (zoomLevel == 9) {
            setViewCnt = 8;
        } else if (zoomLevel == 10) {
            setViewCnt = 4;
        } else if (zoomLevel == 11) {
            setViewCnt = 2;
        } else {
            setViewCnt = 1;
        }

    } else if (layerType == "L3") {

        if (zoomLevel < 13) {
            setViewCnt = 4;
        } else if (zoomLevel == 13) {
            setViewCnt = 3;
        } else if (zoomLevel == 14) {
            setViewCnt = 2;
        } else {
            setViewCnt = 1;
        }

    }

    setMaxLon = mapMaxLon;
    setMaxLat = mapMaxLat;
    setMinLon = mapMinLon;
    setMinLat = mapMinLat;

    var splitLon = sbLon.split('/');

    var splitLat = sbLat.split('/');

    var split_wind_direction = sb_wind_direction.split('/');

    layerGroup.clearLayers();

    var marker_cnt = 0;

    marker_arrow = new Array();

    for (var i = 0; i < splitLon.length; i++) {
        //if(i == 301){

        var arrLon = splitLon[i].split(',');
        arrLon.pop();

        var arrLat = splitLat[i].split(',');
        arrLat.pop();

        // var arrVal = splitVal[i].split(','); arrVal.pop();

        var arr_wind_direction = split_wind_direction[i].split(',');
        arr_wind_direction.pop();

        for (var j = 0; j < arrLat.length; j++) {
            if (arrLon[j] != "") {

                if (arrLon[j] > setMinLon && arrLon[j] < setMaxLon && arrLat[j] < setMaxLat && arrLat[j] > setMinLat) {

                    if (i % setViewCnt == 0 && j % setViewCnt == 0) {

                        var div_arrow = L.divIcon({
                            className: '',
                            margin: 0,
                            iconSize: null,
                            html: "<div style='transform: rotate(" + (
                                parseFloat(arr_wind_direction[j]) + 180
                            ) + "deg); color:#ff0000;'><i class='fa-solid fa-arrow-down-long'></i></div>"
                        });
                        // marker_arrow[marker_cnt] = L.marker([parseFloat(arrLat[j]),
                        // parseFloat(arrLon[j])], {icon: div_arrow} ).addTo(map);
                        var marker_a = L.marker([
                            parseFloat(arrLat[j]),
                            parseFloat(arrLon[j])
                        ], {icon: div_arrow});
                        layerGroup.addLayer(marker_a);
                        marker_cnt++;
                    }

                }
            }
        }
        map.addLayer(layerGroup);
    }
}

var layerGroup = L.layerGroup();

var setImgType = "";

// part_2 HNS 확산 영역 

// function opacity_redraw(val){ 	if(setImgType == "tif"){
// tifLayer.setOpacity(val / 10); 	}else{ 		imgOverlay.setOpacity(val / 10); 	}
// }

var imgOverlay = null;

function addImagePng(imgPath, minX, minY, maxX, maxY) {
    if (imgOverlay != null) {
        imgOverlay.remove();
    }
    var imageUrl = imgPath,
        imageBounds = [
            [
                parseFloat(minY), parseFloat(minX)
            ],
            [
                parseFloat(maxY), parseFloat(maxX)
            ]
        ];
    imgOverlay = L.imageOverlay(imageUrl, imageBounds);
    imgOverlay.setStyle({
        opacity: parseInt(document.getElementById("lineLange").value) / 10
    });
    imgOverlay.addTo(map);

    // var yAverage = (minY + maxY) / 2; 	var xAverage = (minX + maxX) / 2;
    // map.setView([yAverage,xAverage], 11);

}

var tifLayer = null;
var suonLayerType = "";

function viewYousokLayer2(type) {

    var layerclear = $('input[name=rdoSuon]:checked').val();

    suonLayerType = "";
    setImgType = type;

    var chk = document.getElementsByName("rdoSuon");
    var chked = false;
    for (var i = 0; i < chk.length; i++) {
        if (chk[i].checked == true) {
            chked = true;
            suonLayerType = chk[i].value;
            break;
        }
    }

    if (chked == false) {
        Swal.fire({
            icon: 'error', title: '경고', text: '레이어를 선택해 주세요.'
            //,footer: '<a href="">Why do I have this issue?</a>'
        })
        //alert("레이어를 선택해 주세요.");
    }
    else{
        layer_select_frame_on();
    }
    
    if (layerclear == 'clear') {
        tifLayer.remove();
    } 
    else {
        map.setView([
            34.7599, 127.7594
        ], 11);

        $('#select_menu5').css('display','block');
        $('.select_logo_range').css('display','');

        javascripr : CefCustomObject.func('suon', suonLayerType);

    }
}

function drawTIF(
    binaryDATA,
    bufferSize,
    minLon,
    minLat,
    maxLon,
    maxLat,
    scaleLon,
    scaleLat,
    minVal,
    maxVal
) {
    if (tifLayer != null) {
        tifLayer.remove();
    }
    /*
	document.getElementById("dan").innerHTML = dan;

	document.getElementById("minVal").innerHTML = min;
	document.getElementById("maxVal").innerHTML = max;
*/
    dt = binaryDATA.split(',');
    dt.pop();

    var byteArray = new Array();
    ab = new ArrayBuffer(bufferSize);
    var int8arr = new Int8Array(ab);
    int8arr.set(dt);
    tifLayer = L
        .leafletGeotiff('', {
            band: 0,
            name: 'typhoon',
            renderer: L
                .LeafletGeotiff
                .plotty({
                    
                    displayMin: minVal, displayMax: maxVal, colorScale: 'jet',

                    //colorScale: 'portland',
                    clampLow: false,
                    clampHigh: false,
                    customMinLon: minLon,
                    customMinLat: minLat,
                    customMaxLon: maxLon,
                    customMaxLat: maxLat,
                    customScaleLon: scaleLon,
                    customScaleLat: scaleLat
                })
        })
        .addTo(map);
    // $("#divTyphoonResult").css("display","block");
    // document.getElementById("chkTyphoon").checked = true;
    // document.getElementById("lineLange").value = 10;
    tifLayer.setOpacity(parseInt(document.getElementById("lineLange").value) / 10);

}

//part_3 취약성 var vulnerLayerType = "";

function opacity_redraw2(val) {
    if (setImgType == "tif") {
        tifLayer.setOpacity(val / 10);
    } else {
        imgOverlay.setOpacity(val / 10);
    }
}

function viewYousokLayer3(type) {

    // 중첩 if문 축약 (split 이용한 배열 조건걸기)

    var layertype = $('input[name=vulner]:checked').val();

    var layertypeArr = layertype.split("-");

    setImgType = type;

    var chk = document.getElementsByName("vulner");

    var chked = false;

    for (var i = 0; i < chk.length; i++) {

        if (chk[i].checked == true) {
            chked = true;
            break;
        }
    }

    map.setView([
        34.7599, 127.7594
    ], 11);

    if (chked == false) {
        Swal.fire({icon: 'error', title: '경고', text: '레이어를 선택해 주세요.'})
    }

    if (layertypeArr[0] == "p") {
        layertype = layertypeArr[1];
        javascripr : CefCustomObject.func('vulnerability_protect', layertype);
    } else if (layertypeArr[0] == "s") {
        layertype = layertypeArr[1];
        javascripr : CefCustomObject.func('vulnerability_species', layertype);
    } else if (layertypeArr[0] == "a") {
        layertype = layertypeArr[1];
        javascripr : CefCustomObject.func('vulnerability_area', layertype);
    } else if (layertypeArr[0] == "so") {
        layertype = layertypeArr[1];
        javascripr : CefCustomObject.func('vulnerability_social', layertype);
    } else {
        tifLayer.remove();
    }
}

function cateAnimate(num) {
    $("#cate" + num).slideToggle(300);
    if ($("#sub_img_on" + num).css("display") == "none") {
        $('#sub_img_off' + num).css("display", 'none');
        $('#sub_img_on' + num).css("display", 'block');
    } else {
        $('#sub_img_on' + num).css("display", 'none');
        $('#sub_img_off' + num).css("display", 'block');
    }
}

function drawFileTIF(binaryDATA, bufferSize, maxVal, minVal) {
    if (tifLayer != null) {
        tifLayer.remove();
    }
    /*
	document.getElementById("dan").innerHTML = dan;

	document.getElementById("minVal").innerHTML = min;
	document.getElementById("maxVal").innerHTML = max;
*/
    dt = binaryDATA.split(',');

    // for(var i =0; i < dt.length; i++){     if(dt[i] > 4){         dt[i] = "1";
    // } }

    dt.pop();

    var byteArray = new Array();

    ab = new ArrayBuffer(bufferSize);
    var int8arr = new Int8Array(ab);
    int8arr.set(dt);
    tifLayer = L
        .leafletGeotiff('', {
            band: 0,
            name: 'typhoon',
            renderer: L
                .LeafletGeotiff
                .plotty({
                    displayMin: minVal, displayMax: maxVal, colorScale: 'jet',
                    //colorScale: 'portland',
                    clampLow: false,
                    clampHigh: false

                    /*
					,
					customMinLon: minLon,
					customMinLat: minLat,
					customMaxLon: maxLon,
					customMaxLat: maxLat,
					customScaleLon: scaleLon,
					customScaleLat: scaleLat
					*/
                })
        })
        .addTo(map);

    // $("#divTyphoonResult").css("display","block");
    // document.getElementById("chkTyphoon").checked = true;
    // document.getElementById("lineLange").value = 10; 2022-10-07 주석처리 (뭔지모름)
    // tifLayer.setOpacity(parseInt(document.getElementById("lineLange").value) /
    // 10);

}

/* //part_4 데이터베이스 - 문제없음
    특별관리해역, 조업집중구역(봄), 양식장 영역, 군립공원
    - 문제있음
    국립공원, 도립공원, 수산자원보호구역, 환경보전지역, 어장정보도
 */

var dbLayerType = "";

function viewDatabaseLayer(type) {

    var layerclear = $('input[name=rdoDatabase]:checked').val();

    setImgType = type;

    var chk = document.getElementsByName("rdoDatabase");
    var chked = false;
    for (var i = 0; i < chk.length; i++) {
        if (chk[i].checked == true) {
            chked = true;
            dbLayerType = chk[i].value;
            break;
        }
    }

    if (chked == false) {
        Swal.fire({
            icon: 'error', title: '경고', text: '레이어를 선택해 주세요.'
            //,footer: '<a href="">Why do I have this issue?</a>'
        })
        //alert("레이어를 선택해 주세요.");
    } else if (layerclear == 'clear') {
        map.removeLayer(shpLayer);
    } else {
        map.setView([36.5, 126], 7);
        javascripr : CefCustomObject.func('database', dbLayerType);
    }
}

var shpLayer = null;
function csharpSHP(
    shpByteString,
    dbfByteString,
    prjTxt,
    shpBufferSize,
    dbfBufferSize
) {
    if (shpLayer != null) {

        shpLayer.clearLayers();
        map.removeLayer(shpLayer);

    }

    shpLayer = null;

    var shpByteSplit = shpByteString.split(',');
    shpByteSplit.pop();
    var shpByteArray = new Array();
    var shpArrayByffer = new ArrayBuffer(shpBufferSize);
    var shpInt8arr = new Int8Array(shpArrayByffer);
    shpInt8arr.set(shpByteSplit);

    var dbfByteSplit = dbfByteString.split(',');
    dbfByteSplit.pop();
    var dbfByteArray = new Array();
    var dbfArrayByffer = new ArrayBuffer(dbfBufferSize);
    var dbfInt8arr = new Int8Array(dbfArrayByffer);
    dbfInt8arr.set(dbfByteSplit);

    var cnt = 0;

    loadSharpshp({
        url: "",
        encoding: "UTF-8",
        EPSG: "4326",
        shpBuffer: shpArrayByffer,
        dbfBuffer: dbfArrayByffer,
        prjText: prjTxt,
        num: "9999",
        bytesize: shpByteSplit.length,
        dbfsize: dbfByteSplit.length

    }, function (data) {
        if (typeof data != "undefined") {
            if (cnt == 0) {
                var URL = window.URL || window.webkitURL || window.mozURL || window.msURL,
                    url = URL.createObjectURL(
                        new Blob([JSON.stringify(data)], {type: "application/json"})
                    );

                shpLayer = settingVector();
                shpLayer.name = "shpLayer";
                shpLayer.addData(data);

                map.addLayer(shpLayer);

            }

        }

    });

}

function settingVector() {
    var vectorLayer = L.geoJson([], {
        style: function (feature) {
            // return feature.properties.style;
        },
        onEachFeature: function (feature, layer) {

            layer.on({
                click: function (e) {
                    /*vectorLayer.eachLayer(function(l) {
						vectorLayer.resetStyle(l);
                    });

                    $('.tbodyContent').remove();
                    var tbody = '<tbody class="tbodyContent">';
                    for (var key in e.target.feature.properties) {
                        tbody +=
                            ('<tr class="center aligned"><td>'+ key + '</td><td>' + e.target.feature.properties[key] + '</td></tr>');
                    }

                    $('#attribute').append(tbody + '</tbody>');
                    $('#attr').fadeIn(300);
                    map.panTo(e.latlng);
					//alert(e.target.feature.properties.SIG_KOR_NM);

                    if('setStyle' in e.target) e.target.setStyle({
                        fillColor: '#FF0000',
                        fillOpacity: 0.6
                    });
					*/

                    $('.tbodyContent').remove();
                    var tbody = '<tbody class="tbodyContent">';
                    for (var key in e.target.feature.properties) {
                        tbody += (
                            '<tr class="center aligned"><td>' + key + '</td><td>' + e.target.feature.properties[key] +
                                '</td></tr>'
                        );
                    }

                    // $('#attribute').append(tbody + '</tbody>');
                    // document.getElementById("tbodyData").innerHTML = tbody + '</tbody>';
                    $('#attribute').append(tbody + '</tbody>')
                    $('#attr').fadeIn(300);
                    // map.panTo(e.latlng);
                }
            });

            /*
				layer.on({mouseover: function(e) {
                    if('setStyle' in e.target) e.target.setStyle({
                        fillColor: '#FF0000',
                        fillOpacity: 1
                    });
                }});

				layer.on({mouseout: function(e) {
                    if('setStyle' in e.target) e.target.setStyle({
                        fillColor: e.target.fillColor,
                        fillOpacity: 1
                    });
                }});
				*/
        }
    });

    return vectorLayer;

}

//part_5 HNS 방류 실태 조사

var areaName = "";
var stName = "";

function layerInfo() {
    window.open(
        "./layerinfo.html",
        "Child",
        "width=820, height=1100, top=160, left=1480"
    );
}

var area = "";

function senterChange(value) {

    var center = value;

    var aa = "<option id='op_title'class='area_facility'value='busan'>부산</option><option cla" +
            "ss='area_facility'value='yeosu'>여수</option><option class='area_facility'value=" +
            "'ulsan'>울산</option><option class='area_facility'value='incheon'>인천</option><op" +
            "tion class='area_facility'value='pyeongtaek'>평택</option>"
    var bb = "<option id='op_title'class='area_station'value='gori'>고리</option><option class" +
            "='area_station'value='donghae'>동해</option><option class='area_station'value='b" +
            "oryeong'>보령</option><option class='area_station'value='samcheonpo'>삼천포</option" +
            "><option class='area_station'value='yeonggwang '>영광</option>"

    if (center == "facility") {
        area = "busan";
        document.querySelector("#area_option").innerHTML = aa;
    } else {
        area = "gori";
        document.querySelector("#area_option").innerHTML = bb;
    }
}

function areaChange(value) {
    area = value;
}

function mapsetting() { // 좌표이동

    if (area == "") {
        area = "busan";
    }

    nameMattiong();

    //C# 호출 javascripr: CefCustomObject.func('siltae', area);

    if (base == 1) { // 위성지도

        map.setView([
            35.0568, 129.003
        ], 14);

        map.addLayer(hybridLayer1);
        map.addLayer(hybridLayer2);

    } else { // 일반지도

        map.setView([
            35.0568, 129.003
        ], 14);

        map.addLayer(baseLayer);
    }

    addMarker();
    layerInfo();
}

var dischargelayerType = "";

function viewDischargeLayer(type) {

    layerclear = "clear";

    layerclear_dis = $('input[name=discharge_rdo]:checked').val();

    if (layerclear_dis == 'clear') {
        map.removeLayer(shpLayer);
//        removeMarker();

    } else if (layerclear_dis == 'all') {
        addMarker();
    } else if (layerclear_dis == '해양산업시설_Point') {
        map.setView([36.5, 126], 7);
        javascripr : CefCustomObject.func('database', layerclear_dis);
    }
    setImgType = type;

    dischargelayerType = ""

    var chk = document.getElementsByName("discharge_rdo");
    var chked = false;
    for (var i = 0; i < chk.length; i++) {
        if (chk[i].checked == true) {
            chked = true;
            break;
        }
    }

    if (chked == false) {
        Swal.fire({icon: 'error', title: '경고', text: '레이어를 선택해 주세요.'})
    } else {
        dischargelayerType = $('input[name=discharge_rdo]:checked').val();
    }
}

// leaflet 마커 아이콘 추가 및 변경
var LeafIcon = L
    .Icon
    .extend({
        options: {
            iconSize: [40, 40]
        }
    });

var redMarker = new LeafIcon({iconUrl: './img/redmarker.png'})

var LeafIcon2 = L
    .Icon
    .extend({
        options: {
            iconSize: [36, 36]
        }
    });

var blueMarker = new LeafIcon2({iconUrl: './img/bluemarker.png'})

// 마커 제거용 전역변수

var marker = "";
var marker1 = "";
var marker2 = "";
var marker3 = "";

var st_marker1 = "";
var st_marker2 = "";
var st_marker3 = "";
var st_marker4 = "";
var st_marker5 = "";
var st_marker6 = "";
var st_marker7 = "";
var st_marker8 = "";
var st_marker9 = "";
var st_marker10 = "";

function addMarker(layerclear) {

    marker = L
        .marker([
            35.0686, 128.994
        ], {icon: redMarker})
        .addTo(map);
    marker1 = L
        .marker([
            35.08313, 128.9964
        ], {icon: redMarker})
        .addTo(map);
    marker2 = L
        .marker([
            35.06733, 128.9927
        ], {icon: redMarker})
        .addTo(map);
    marker3 = L
        .marker([
            35.08437, 128.9932
        ], {icon: redMarker})
        .addTo(map);

    st_marker1 = L
        .marker([
            35.0543, 128.9753
        ], {icon: blueMarker})
        .addTo(map);
    st_marker2 = L
        .marker([
            35.05535, 128.9858
        ], {icon: blueMarker})
        .addTo(map);
    st_marker3 = L
        .marker([
            35.0488, 128.9852
        ], {icon: blueMarker})
        .addTo(map);
    st_marker4 = L
        .marker([
            35.08318, 129.0029
        ], {icon: blueMarker})
        .addTo(map);
    st_marker5 = L
        .marker([
            35.07633, 129.0016
        ], {icon: blueMarker})
        .addTo(map);
    st_marker6 = L
        .marker([
            35.07168, 128.9979
        ], {icon: blueMarker})
        .addTo(map);
    st_marker7 = L
        .marker([
            35.06458, 128.9995
        ], {icon: blueMarker})
        .addTo(map);
    st_marker8 = L
        .marker([
            35.0568, 129.003
        ], {icon: blueMarker})
        .addTo(map);
    st_marker9 = L
        .marker([
            35.04195, 128.9931
        ], {icon: blueMarker})
        .addTo(map);
    st_marker10 = L
        .marker([
            35.03748, 129.0062
        ], {icon: blueMarker})
        .addTo(map);

    marker.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>부산탱크터미널㈜-1,2</div><div cl" +
        "ass='popup_text'>Tel:051-264-1400</div><div class='link'onclick='mapsetting();" +
        "'>세부정보보기</div></div><div class='frame_innerbox'><img class='popup_img'src='./a" +
        "ssets/busan_1.jpg'></div>"
    );
    marker1.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>한국남부발전㈜<br>부산발전본부-1,2</di" +
        "v><div class='popup_text'>Tel:070-7713-8000</div><div class='link'onclick='map" +
        "setting();'>세부정보보기</div></div><div class='frame_innerbox'><img class='popup_im" +
        "g'src='./assets/busan_2.jpg'></div>"
    );
    marker2.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>㈜모든</div><div class='popu" +
        "p_text'>Tel:051-264-1400</div><div class='link'onclick='mapsetting();'>세부정보보기<" +
        "/div></div><div class='frame_innerbox'><img class='popup_img'src='./assets/bus" +
        "an_1.jpg'></div>"
    );
    marker3.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>삼한산업㈜<br>제1탱크터미널</div><di" +
        "v class='popup_text'>Tel:051-262-3131</div><div class='link'onclick='mapsettin" +
        "g();'>세부정보보기</div></div><div class='frame_innerbox'><img class='popup_img'src=" +
        "'./assets/busan_3.gif'></div>"
    );

    st_marker1.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.1</div><div class='pop" +
        "up_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></div" +
        "><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></div" +
        ">"
    );
    st_marker2.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.2</div><div class='pop" +
        "up_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></div" +
        "><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></div" +
        ">"
    );
    st_marker3.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.3</div><div class='pop" +
        "up_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></div" +
        "><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></div" +
        ">"
    );
    st_marker4.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.4</div><div class='pop" +
        "up_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></div" +
        "><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></div" +
        ">"
    );
    st_marker5.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.5</div><div class='pop" +
        "up_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></div" +
        "><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></div" +
        ">"
    );
    st_marker6.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.6</div><div class='pop" +
        "up_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></div" +
        "><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></div" +
        ">"
    );
    st_marker7.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.7</div><div class='pop" +
        "up_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></div" +
        "><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></div" +
        ">"
    );
    st_marker8.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.8</div><div class='pop" +
        "up_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></div" +
        "><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></div" +
        ">"
    );
    st_marker9.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.9</div><div class='pop" +
        "up_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></div" +
        "><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></div" +
        ">"
    );
    st_marker10.bindPopup(
        "<div class='frame_innerbox'><div class='popup_title'>St.10</div><div class='po" +
        "pup_text'>Tel:-</div><div class='link'onclick='mapsetting();'>세부정보보기</div></di" +
        "v><div class='frame_innerbox'><img class='popup_img'src='./assets/st.jpg'></di" +
        "v>"
    );
}

function removeMarker() {
    map.removeLayer(marker);
    map.removeLayer(marker1);
    map.removeLayer(marker2);
    map.removeLayer(marker3);

    map.removeLayer(st_marker1);
    map.removeLayer(st_marker2);
    map.removeLayer(st_marker3);
    map.removeLayer(st_marker4);
    map.removeLayer(st_marker5);
    map.removeLayer(st_marker6);
    map.removeLayer(st_marker7);
    map.removeLayer(st_marker8);
    map.removeLayer(st_marker9);
    map.removeLayer(st_marker10);
}

function nameMattiong() {

    if (area == "busan") {
        areaName = "부산 연안";
        stName = "해양산업시설";
    } else if (area == "yeosu") {
        areaName = "여수 연안";
        stName = "해양산업시설";
    } else if (area == "ulsan") {
        areaName = "울산 연안";
        stName = "해양산업시설";
    }

    window
        .localStorage
        .setItem('areaname', areaName);
    window
        .localStorage
        .setItem('stname', stName);
}

function selectLayerIndexAdd(val){

    var index1 = "<div id='select_menu1'style='display: none;'>[해양환경정보]중간역유속레이어<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(1)'></i><i class='fa-solid fa-eye select_logo_midyousok'onclick='select_menu_change(1)'></i><i class='fa-solid fa-eye-slash select_logo_midyousok_off'onclick='select_menu_change(2)'></i></div>";
    var index2 = "<div id='select_menu2'style='display: none;'>[해양환경정보]중간역수온레이어<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(2)'></i><i class='fa-solid fa-eye select_logo_midsuon'onclick='select_menu_change_midsuon(1)'></i><i class='fa-solid fa-eye-slash select_logo_midsuon_off'onclick='select_menu_change_midsuon(2)'></i></div>";
    var index3 = "<div id='select_menu3'style='display: none;'>[해양환경정보](여수산단)세부역유속레이어<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(3)'></i><i class='fa-solid fa-eye select_logo_detailyousok'onclick='select_menu_change_detailyousok(1)'></i><i class='fa-solid fa-eye-slash select_logo_detailyousok_off'onclick='select_menu_change_detailyousok(2)'></i></div>";
    var index4 = "<div id='select_menu4'style='display: none;'>[해양환경정보](여수산단)세부역수온레이어<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(4)'></i><i class='fa-solid fa-eye select_logo_detailsuon'onclick='select_menu_change_detailsuon(1)'></i><i class='fa-solid fa-eye-slash select_logo_detailsuon_off'onclick='select_menu_change_detailsuon(2)'></i></div>";
    var index5 = "<div id='select_menu5'style='display: none;'>[HNS확산영역](여수산단)최대확산범위<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(5)'></i><i class='fa-solid fa-eye select_logo_range'onclick='select_menu_change_range(1)'></i><i class='fa-solid fa-eye-slash select_logo_range_off'onclick='select_menu_change_range(2)'></i></div>";
    var index6 = "<div id='select_menu61'style='display: none;'>[해양환경영향평가]보호구역취약성-SURF-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(61)'></i><i class='fa-solid fa-eye select_logo_protect1'onclick='select_menu_change_protect(1,1,01)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off1'onclick='select_menu_change_protect(2,1,01)'></i></div>";
    var index7 = "<div id='select_menu62'style='display: none;'>[해양환경영향평가]보호구역취약성-SURF-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(62)'></i><i class='fa-solid fa-eye select_logo_protect2'onclick='select_menu_change_protect(1,2,02)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off2'onclick='select_menu_change_protect(2,2,02)'></i></div>";
    var index8 = "<div id='select_menu63'style='display: none;'>[해양환경영향평가]보호구역취약성-SURF-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(63)'></i><i class='fa-solid fa-eye select_logo_protect3'onclick='select_menu_change_protect(1,3,03)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off3'onclick='select_menu_change_protect(2,3,03)'></i></div>";
    var index9 = "<div id='select_menu64'style='display: none;'>[해양환경영향평가]보호구역취약성-SURF-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(64)'></i><i class='fa-solid fa-eye select_logo_protect4'onclick='select_menu_change_protect(1,4,04)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off4'onclick='select_menu_change_protect(2,4,04)'></i></div>";
    var index10 = "<div id='select_menu65'style='display: none;'>[해양환경영향평가]보호구역취약성-COLUMN-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(65)'></i><i class='fa-solid fa-eye select_logo_protect5'onclick='select_menu_change_protect(1,5,05)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off5'onclick='select_menu_change_protect(2,5,05)'></i></div>";

    var index11 = "<div id='select_menu66'style='display: none;'>[해양환경영향평가]보호구역취약성-COLUMN-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(66)'></i><i class='fa-solid fa-eye select_logo_protect6'onclick='select_menu_change_protect(1,6,06)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off6'onclick='select_menu_change_protect(2,6,06)'></i></div>";
    var index12 = "<div id='select_menu67'style='display: none;'>[해양환경영향평가]보호구역취약성-COLUMN-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(67)'></i><i class='fa-solid fa-eye select_logo_protect7'onclick='select_menu_change_protect(1,7,07)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off7'onclick='select_menu_change_protect(2,7,07)'></i></div>";
    var index13 = "<div id='select_menu68'style='display: none;'>[해양환경영향평가]보호구역취약성-COLUMN-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(68)'></i><i class='fa-solid fa-eye select_logo_protect8'onclick='select_menu_change_protect(1,8,08)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off8'onclick='select_menu_change_protect(2,8,08)'></i></div>";
    var index14 = "<div id='select_menu69'style='display: none;'>[해양환경영향평가]보호구역취약성-SEABED-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(69)'></i><i class='fa-solid fa-eye select_logo_protect9'onclick='select_menu_change_protect(1,9,09)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off9'onclick='select_menu_change_protect(2,9,09)'></i></div>";
    var index15 = "<div id='select_menu610'style='display: none;'>[해양환경영향평가]보호구역취약성-SEABED-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(610)'></i><i class='fa-solid fa-eye select_logo_protect10'onclick='select_menu_change_protect(1,10,10)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off10'onclick='select_menu_change_protect(2,10,10)'></i></div>";
    var index16 = "<div id='select_menu611'style='display: none;'>[해양환경영향평가]보호구역취약성-SEABED-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(611)'></i><i class='fa-solid fa-eye select_logo_protect11'onclick='select_menu_change_protect(1,11,11)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off11'onclick='select_menu_change_protect(2,11,11)'></i></div>";
    var index17 = "<div id='select_menu612'style='display: none;'>[해양환경영향평가]보호구역취약성-SEABED-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(612)'></i><i class='fa-solid fa-eye select_logo_protect12'onclick='select_menu_change_protect(1,12,12)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off12'onclick='select_menu_change_protect(2,12,12)'></i></div>";
    var index18 = "<div id='select_menu613'style='display: none;'>[해양환경영향평가]보호구역취약성-AIR-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(613)'></i><i class='fa-solid fa-eye select_logo_protect13'onclick='select_menu_change_protect(1,13,13)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off13'onclick='select_menu_change_protect(2,13,13)'></i></div>";
    var index19 = "<div id='select_menu614'style='display: none;'>[해양환경영향평가]보호구역취약성-AIR-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(614)'></i><i class='fa-solid fa-eye select_logo_protect14'onclick='select_menu_change_protect(1,14,14)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off14'onclick='select_menu_change_protect(2,14,14)'></i></div>";
    var index20 = "<div id='select_menu615'style='display: none;'>[해양환경영향평가]보호구역취약성-AIR-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(615)'></i><i class='fa-solid fa-eye select_logo_protect15'onclick='select_menu_change_protect(1,15,15)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off15'onclick='select_menu_change_protect(2,15,15)'></i></div>";

    var index21 = "<div id='select_menu616'style='display: none;'>[해양환경영향평가]보호구역취약성-AIR-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(616)'></i><i class='fa-solid fa-eye select_logo_protect16'onclick='select_menu_change_protect(1,16,16)'></i><i class='fa-solid fa-eye-slash select_logo_protect_off16'onclick='select_menu_change_protect(2,16,16)'></i></div>";
    var index22 = "<div id='select_menu71'style='display: none;'>[해양환경영향평가]종취약성-SURF-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(71)'></i><i class='fa-solid fa-eye select_logo_species1'onclick='select_menu_change_species(1,1,01)'></i><i class='fa-solid fa-eye-slash select_logo_species_off1'onclick='select_menu_change_species(2,1,01)'></i></div>";
    var index23 = "<div id='select_menu72'style='display: none;'>[해양환경영향평가]종취약성-SURF-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(72)'></i><i class='fa-solid fa-eye select_logo_species2'onclick='select_menu_change_species(1,2,02)'></i><i class='fa-solid fa-eye-slash select_logo_species_off2'onclick='select_menu_change_species(2,2,02)'></i></div>";
    var index24 = "<div id='select_menu73'style='display: none;'>[해양환경영향평가]종취약성-SURF-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(73)'></i><i class='fa-solid fa-eye select_logo_species3'onclick='select_menu_change_species(1,3,03)'></i><i class='fa-solid fa-eye-slash select_logo_species_off3'onclick='select_menu_change_species(2,3,03)'></i></div>";
    var index25 = "<div id='select_menu74'style='display: none;'>[해양환경영향평가]종취약성-SURF-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(74)'></i><i class='fa-solid fa-eye select_logo_species4'onclick='select_menu_change_species(1,4,04)'></i><i class='fa-solid fa-eye-slash select_logo_species_off4'onclick='select_menu_change_species(2,4,04)'></i></div>";
    var index26 = "<div id='select_menu75'style='display: none;'>[해양환경영향평가]종취약성-COLUMN-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(75)'></i><i class='fa-solid fa-eye select_logo_species5'onclick='select_menu_change_species(1,5,05)'></i><i class='fa-solid fa-eye-slash select_logo_species_off5'onclick='select_menu_change_species(2,5,05)'></i></div>";
    var index27 = "<div id='select_menu76'style='display: none;'>[해양환경영향평가]종취약성-COLUMN-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(76)'></i><i class='fa-solid fa-eye select_logo_species6'onclick='select_menu_change_species(1,6,06)'></i><i class='fa-solid fa-eye-slash select_logo_species_off6'onclick='select_menu_change_species(2,6,06)'></i></div>";
    var index28 = "<div id='select_menu77'style='display: none;'>[해양환경영향평가]종취약성-COLUMN-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(77)'></i><i class='fa-solid fa-eye select_logo_species7'onclick='select_menu_change_species(1,7,07)'></i><i class='fa-solid fa-eye-slash select_logo_species_off7'onclick='select_menu_change_species(2,7,07)'></i></div>";
    var index29 = "<div id='select_menu78'style='display: none;'>[해양환경영향평가]종취약성-COLUMN-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(78)'></i><i class='fa-solid fa-eye select_logo_species8'onclick='select_menu_change_species(1,8,08)'></i><i class='fa-solid fa-eye-slash select_logo_species_off8'onclick='select_menu_change_species(2,8,08)'></i></div>";
    var index30 = "<div id='select_menu79'style='display: none;'>[해양환경영향평가]종취약성-SEABED-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(79)'></i><i class='fa-solid fa-eye select_logo_species9'onclick='select_menu_change_species(1,9,09)'></i><i class='fa-solid fa-eye-slash select_logo_species_off9'onclick='select_menu_change_species(2,9,09)'></i></div>";

    var index31 = "<div id='select_menu710'style='display: none;'>[해양환경영향평가]종취약성-SEABED-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(710)'></i><i class='fa-solid fa-eye select_logo_species10'onclick='select_menu_change_species(1,10,10)'></i><i class='fa-solid fa-eye-slash select_logo_species_off10'onclick='select_menu_change_species(2,10,10)'></i></div>";
    var index32 = "<div id='select_menu711'style='display: none;'>[해양환경영향평가]종취약성-SEABED-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(711)'></i><i class='fa-solid fa-eye select_logo_species11'onclick='select_menu_change_species(1,11,11)'></i><i class='fa-solid fa-eye-slash select_logo_species_off11'onclick='select_menu_change_species(2,11,11)'></i></div>";
    var index33 = "<div id='select_menu712'style='display: none;'>[해양환경영향평가]종취약성-SEABED-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(712)'></i><i class='fa-solid fa-eye select_logo_species12'onclick='select_menu_change_species(1,12,12)'></i><i class='fa-solid fa-eye-slash select_logo_species_off12'onclick='select_menu_change_species(2,12,12)'></i></div>";
    var index34 = "<div id='select_menu713'style='display: none;'>[해양환경영향평가]종취약성-AIR-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(713)'></i><i class='fa-solid fa-eye select_logo_species13'onclick='select_menu_change_species(1,13,13)'></i><i class='fa-solid fa-eye-slash select_logo_species_off13'onclick='select_menu_change_species(2,13,13)'></i></div>";
    var index35 = "<div id='select_menu714'style='display: none;'>[해양환경영향평가]종취약성-AIR-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(714)'></i><i class='fa-solid fa-eye select_logo_species14'onclick='select_menu_change_species(1,14,14)'></i><i class='fa-solid fa-eye-slash select_logo_species_off14'onclick='select_menu_change_species(2,14,14)'></i></div>";
    var index36 = "<div id='select_menu715'style='display: none;'>[해양환경영향평가]종취약성-AIR-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(715)'></i><i class='fa-solid fa-eye select_logo_species15'onclick='select_menu_change_species(1,15,15)'></i><i class='fa-solid fa-eye-slash select_logo_species_off15'onclick='select_menu_change_species(2,15,15)'></i></div>";
    var index37 = "<div id='select_menu716'style='display: none;'>[해양환경영향평가]종취약성-AIR-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(716)'></i><i class='fa-solid fa-eye select_logo_species16'onclick='select_menu_change_species(1,16,16)'></i><i class='fa-solid fa-eye-slash select_logo_species_off16'onclick='select_menu_change_species(2,16,16)'></i></div>";
    var index38 = "<div id='select_menu81'style='display: none;'>[해양환경영향평가]서식지취약성-SURF-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(81)'></i><i class='fa-solid fa-eye select_logo_area1'onclick='select_menu_change_area(1,1,01)'></i><i class='fa-solid fa-eye-slash select_logo_area_off1'onclick='select_menu_change_area(2,1,01)'></i></div>";
    var index39 = "<div id='select_menu82'style='display: none;'>[해양환경영향평가]서식지취약성-SURF-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(82)'></i><i class='fa-solid fa-eye select_logo_area2'onclick='select_menu_change_area(1,2,02)'></i><i class='fa-solid fa-eye-slash select_logo_area_off2'onclick='select_menu_change_area(2,2,02)'></i></div>";
    var index40 = "<div id='select_menu83'style='display: none;'>[해양환경영향평가]서식지취약성-SURF-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(83)'></i><i class='fa-solid fa-eye select_logo_area3'onclick='select_menu_change_area(1,3,03)'></i><i class='fa-solid fa-eye-slash select_logo_area_off3'onclick='select_menu_change_area(2,3,03)'></i></div>";

    var index41 = "<div id='select_menu84'style='display: none;'>[해양환경영향평가]서식지취약성-SURF-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(84)'></i><i class='fa-solid fa-eye select_logo_area4'onclick='select_menu_change_area(1,4,04)'></i><i class='fa-solid fa-eye-slash select_logo_area_off4'onclick='select_menu_change_area(2,4,04)'></i></div>";
    var index42 = "<div id='select_menu85'style='display: none;'>[해양환경영향평가]서식지취약성-COLUMN-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(85)'></i><i class='fa-solid fa-eye select_logo_area5'onclick='select_menu_change_area(1,5,05)'></i><i class='fa-solid fa-eye-slash select_logo_area_off5'onclick='select_menu_change_area(2,5,05)'></i></div>";
    var index43 = "<div id='select_menu86'style='display: none;'>[해양환경영향평가]서식지취약성-COLUMN-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(86)'></i><i class='fa-solid fa-eye select_logo_area6'onclick='select_menu_change_area(1,6,06)'></i><i class='fa-solid fa-eye-slash select_logo_area_off6'onclick='select_menu_change_area(2,6,06)'></i></div>";
    var index44 = "<div id='select_menu87'style='display: none;'>[해양환경영향평가]서식지취약성-COLUMN-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(87)'></i><i class='fa-solid fa-eye select_logo_area7'onclick='select_menu_change_area(1,7,07)'></i><i class='fa-solid fa-eye-slash select_logo_area_off7'onclick='select_menu_change_area(2,7,07)'></i></div>";
    var index45 = "<div id='select_menu88'style='display: none;'>[해양환경영향평가]서식지취약성-COLUMN-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(88)'></i><i class='fa-solid fa-eye select_logo_area8'onclick='select_menu_change_area(1,8,08)'></i><i class='fa-solid fa-eye-slash select_logo_area_off8'onclick='select_menu_change_area(2,8,08)'></i></div>";
    var index46 = "<div id='select_menu89'style='display: none;'>[해양환경영향평가]서식지취약성-SEABED-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(89)'></i><i class='fa-solid fa-eye select_logo_area9'onclick='select_menu_change_area(1,9,09)'></i><i class='fa-solid fa-eye-slash select_logo_area_off9'onclick='select_menu_change_area(2,9,09)'></i></div>";
    var index47 = "<div id='select_menu810'style='display: none;'>[해양환경영향평가]서식지취약성-SEABED-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(810)'></i><i class='fa-solid fa-eye select_logo_area10'onclick='select_menu_change_area(1,10,10)'></i><i class='fa-solid fa-eye-slash select_logo_area_off10'onclick='select_menu_change_area(2,10,10)'></i></div>";
    var index48 = "<div id='select_menu811'style='display: none;'>[해양환경영향평가]서식지취약성-SEABED-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(811)'></i><i class='fa-solid fa-eye select_logo_area11'onclick='select_menu_change_area(1,11,11)'></i><i class='fa-solid fa-eye-slash select_logo_area_off11'onclick='select_menu_change_area(2,11,11)'></i></div>";
    var index49 = "<div id='select_menu812'style='display: none;'>[해양환경영향평가]서식지취약성-SEABED-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(812)'></i><i class='fa-solid fa-eye select_logo_area12'onclick='select_menu_change_area(1,12,12)'></i><i class='fa-solid fa-eye-slash select_logo_area_off12'onclick='select_menu_change_area(2,12,12)'></i></div>";
    var index50 = "<div id='select_menu813'style='display: none;'>[해양환경영향평가]서식지취약성-AIR-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(813)'></i><i class='fa-solid fa-eye select_logo_area13'onclick='select_menu_change_area(1,13,13)'></i><i class='fa-solid fa-eye-slash select_logo_area_off13'onclick='select_menu_change_area(2,13,13)'></i></div>";

    var index51 = "<div id='select_menu814'style='display: none;'>[해양환경영향평가]서식지취약성-AIR-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(814)'></i><i class='fa-solid fa-eye select_logo_area14'onclick='select_menu_change_area(1,14,14)'></i><i class='fa-solid fa-eye-slash select_logo_area_off14'onclick='select_menu_change_area(2,14,14)'></i></div>";
    var index52 = "<div id='select_menu815'style='display: none;'>[해양환경영향평가]서식지취약성-AIR-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(815)'></i><i class='fa-solid fa-eye select_logo_area15'onclick='select_menu_change_area(1,15,15)'></i><i class='fa-solid fa-eye-slash select_logo_area_off15'onclick='select_menu_change_area(2,15,15)'></i></div>";
    var index53 = "<div id='select_menu816'style='display: none;'>[해양환경영향평가]서식지취약성-AIR-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(816)'></i><i class='fa-solid fa-eye select_logo_area16'onclick='select_menu_change_area(1,16,16)'></i><i class='fa-solid fa-eye-slash select_logo_area_off16'onclick='select_menu_change_area(2,16,16)'></i></div>";
    var index54 = "<div id='select_menu91'style='display: none;'>[해양환경영향평가]사회·경제취약성-SURF-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(91)'></i><i class='fa-solid fa-eye select_logo_social1'onclick='select_menu_change_social(1,1,01)'></i><i class='fa-solid fa-eye-slash select_logo_social_off1'onclick='select_menu_change_social(2,1,01)'></i></div>";
    var index55 = "<div id='select_menu92'style='display: none;'>[해양환경영향평가]사회·경제취약성-SURF-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(92)'></i><i class='fa-solid fa-eye select_logo_social2'onclick='select_menu_change_social(1,2,02)'></i><i class='fa-solid fa-eye-slash select_logo_social_off2'onclick='select_menu_change_social(2,2,02)'></i></div>";
    var index56 = "<div id='select_menu93'style='display: none;'>[해양환경영향평가]사회·경제취약성-SURF-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(93)'></i><i class='fa-solid fa-eye select_logo_social3'onclick='select_menu_change_social(1,3,03)'></i><i class='fa-solid fa-eye-slash select_logo_social_off3'onclick='select_menu_change_social(2,3,03)'></i></div>";
    var index57 = "<div id='select_menu94'style='display: none;'>[해양환경영향평가]사회·경제취약성-SURF-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(94)'></i><i class='fa-solid fa-eye select_logo_social4'onclick='select_menu_change_social(1,4,04)'></i><i class='fa-solid fa-eye-slash select_logo_social_off4'onclick='select_menu_change_social(2,4,04)'></i></div>";
    var index58 = "<div id='select_menu95'style='display: none;'>[해양환경영향평가]사회·경제취약성-COLUMN-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(95)'></i><i class='fa-solid fa-eye select_logo_social5'onclick='select_menu_change_social(1,5,05)'></i><i class='fa-solid fa-eye-slash select_logo_social_off5'onclick='select_menu_change_social(2,5,05)'></i></div>";
    var index59 = "<div id='select_menu96'style='display: none;'>[해양환경영향평가]사회·경제취약성-COLUMN-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(96)'></i><i class='fa-solid fa-eye select_logo_social6'onclick='select_menu_change_social(1,6,06)'></i><i class='fa-solid fa-eye-slash select_logo_social_off6'onclick='select_menu_change_social(2,6,06)'></i></div>";
    var index60 = "<div id='select_menu97'style='display: none;'>[해양환경영향평가]사회·경제취약성-COLUMN-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(97)'></i><i class='fa-solid fa-eye select_logo_social7'onclick='select_menu_change_social(1,7,07)'></i><i class='fa-solid fa-eye-slash select_logo_social_off7'onclick='select_menu_change_social(2,7,07)'></i></div>";


    var index61 = "<div id='select_menu98'style='display: none;'>[해양환경영향평가]사회·경제취약성-COLUMN-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(98)'></i><i class='fa-solid fa-eye select_logo_social8'onclick='select_menu_change_social(1,8,08)'></i><i class='fa-solid fa-eye-slash select_logo_social_off8'onclick='select_menu_change_social(2,8,08)'></i></div>";
    var index62 = "<div id='select_menu99'style='display: none;'>[해양환경영향평가]사회·경제취약성-SEABED-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(99)'></i><i class='fa-solid fa-eye select_logo_social9'onclick='select_menu_change_social(1,9,09)'></i><i class='fa-solid fa-eye-slash select_logo_social_off9'onclick='select_menu_change_social(2,9,09)'></i></div>";
    var index63 = "<div id='select_menu910'style='display: none;'>[해양환경영향평가]사회·경제취약성-SEABED-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(910)'></i><i class='fa-solid fa-eye select_logo_social10'onclick='select_menu_change_social(1,10,10)'></i><i class='fa-solid fa-eye-slash select_logo_social_off10'onclick='select_menu_change_social(2,10,10)'></i></div>";
    var index64 = "<div id='select_menu911'style='display: none;'>[해양환경영향평가]사회·경제취약성-SEABED-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(911)'></i><i class='fa-solid fa-eye select_logo_social11'onclick='select_menu_change_social(1,11,11)'></i><i class='fa-solid fa-eye-slash select_logo_social_off11'onclick='select_menu_change_social(2,11,11)'></i></div>";
    var index65 = "<div id='select_menu912'style='display: none;'>[해양환경영향평가]사회·경제취약성-SEABED-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(912)'></i><i class='fa-solid fa-eye select_logo_social12'onclick='select_menu_change_social(1,12,12)'></i><i class='fa-solid fa-eye-slash select_logo_social_off12'onclick='select_menu_change_social(2,12,12)'></i></div>";
    var index66 = "<div id='select_menu913'style='display: none;'>[해양환경영향평가]사회·경제취약성-AIR-SPRING<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(913)'></i><i class='fa-solid fa-eye select_logo_social13'onclick='select_menu_change_social(1,13,13)'></i><i class='fa-solid fa-eye-slash select_logo_social_off13'onclick='select_menu_change_social(2,13,13)'></i></div>";
    var index67 = "<div id='select_menu914'style='display: none;'>[해양환경영향평가]사회·경제취약성-AIR-SUMMER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(914)'></i><i class='fa-solid fa-eye select_logo_social14'onclick='select_menu_change_social(1,14,14)'></i><i class='fa-solid fa-eye-slash select_logo_social_off14'onclick='select_menu_change_social(2,14,14)'></i></div>";
    var index68 = "<div id='select_menu915'style='display: none;'>[해양환경영향평가]사회·경제취약성-AIR-AUTUMN<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(915)'></i><i class='fa-solid fa-eye select_logo_social15'onclick='select_menu_change_social(1,15,15)'></i><i class='fa-solid fa-eye-slash select_logo_social_off15'onclick='select_menu_change_social(2,15,15)'></i></div>";
    var index69 = "<div id='select_menu916'style='display: none;'>[해양환경영향평가]사회·경제취약성-AIR-WINTER<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(916)'></i><i class='fa-solid fa-eye select_logo_social16'onclick='select_menu_change_social(1,16,16)'></i><i class='fa-solid fa-eye-slash select_logo_social_off16'onclick='select_menu_change_social(2,16,16)'></i></div>";
    var index70 = "<div id='select_menu10'style='display: none;'>[DATABASE]군립공원<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(10)'></i><i class='fa-solid fa-eye select_logo_db1'onclick='select_menu_change_db(1,1)'></i><i class='fa-solid fa-eye-slash select_logo_db_off1'onclick='select_menu_change_db(2,1)'></i></div>";

    var index71 = "<div id='select_menu11'style='display: none;'>[DATABASE]특별관리해역<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(11)'></i><i class='fa-solid fa-eye select_logo_db2'onclick='select_menu_change_db(1,2)'></i><i class='fa-solid fa-eye-slash select_logo_db_off2'onclick='select_menu_change_db(2,2)'></i></div>";
    var index72 = "<div id='select_menu12'style='display: none;'>[DATABASE]양식장영역<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(12)'></i><i class='fa-solid fa-eye select_logo_db3'onclick='select_menu_change_db(1,3)'></i><i class='fa-solid fa-eye-slash select_logo_db_off3'onclick='select_menu_change_db(2,3)'></i></div>";
    var index73 = "<div id='select_menu13'style='display: none;'>[DATABASE]조업집중구역(봄)<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(13)'></i><i class='fa-solid fa-eye select_logo_db4'onclick='select_menu_change_db(1,4)'></i><i class='fa-solid fa-eye-slash select_logo_db_off4'onclick='select_menu_change_db(2,4)'></i></div>";
    var index74 = "<div id='select_menu999'style='display: none;'>[HNS방류실태조사정보조회]해양산업시설<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(999)'></i><i class='fa-solid fa-eye select_logo_st1'onclick='select_menu_change_info(1,1)'></i><i class='fa-solid fa-eye-slash select_logo_st_off1'onclick='select_menu_change_info(2,1)'></i></div>";

    var index75 = "<div id='select_menu14'style='display: none;'>[DATABASE]국립공원<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(14)'></i><i class='fa-solid fa-eye select_logo_db5'onclick='select_menu_change_db(1,5)'></i><i class='fa-solid fa-eye-slash select_logo_db_off5'onclick='select_menu_change_db(2,5)'></i></div>";
    var index76 = "<div id='select_menu15'style='display: none;'>[DATABASE]도립공원<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(15)'></i><i class='fa-solid fa-eye select_logo_db6'onclick='select_menu_change_db(1,6)'></i><i class='fa-solid fa-eye-slash select_logo_db_off6'onclick='select_menu_change_db(2,6)'></i></div>";
    var index77 = "<div id='select_menu16'style='display: none;'>[DATABASE]수산자원보호구역(봄)<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(16)'></i><i class='fa-solid fa-eye select_logo_db7'onclick='select_menu_change_db(1,7)'></i><i class='fa-solid fa-eye-slash select_logo_db_off7'onclick='select_menu_change_db(2,7)'></i></div>";
    var index78 = "<div id='select_menu17'style='display: none;'>[DATABASE]환경보전지역<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(17)'></i><i class='fa-solid fa-eye select_logo_db8'onclick='select_menu_change_db(1,8)'></i><i class='fa-solid fa-eye-slash select_logo_db_off8'onclick='select_menu_change_db(2,8)'></i></div>";
    var index79 = "<div id='select_menu18'style='display: none;'>[DATABASE]어장정보도<i class='fa-regular fa-trash-can select_logo_1'onclick='select_menu_delete(18)'></i><i class='fa-solid fa-eye select_logo_db9'onclick='select_menu_change_db(1,9)'></i><i class='fa-solid fa-eye-slash select_logo_db_off9'onclick='select_menu_change_db(2,9)'></i></div>";
    
    if(val == '1'){
        $(".layer_text").prepend(index1);
    }
    else if(val == '2'){
        $(".layer_text").prepend(index2);
    }
    else if(val == '3'){
        $(".layer_text").prepend(index3);
    }
    else if(val == '4'){
        $(".layer_text").prepend(index4);
    }
    else if(val == '5'){
        $(".layer_text").prepend(index5);
    }
    else if(val == '6'){
        $(".layer_text").prepend(index6);
    }
    else if(val == '7'){
        $(".layer_text").prepend(index7);
    }
    else if(val == '8'){
        $(".layer_text").prepend(index8);
    }
    else if(val == '9'){
        $(".layer_text").prepend(index9);
    }
    else if(val == '10'){
        $(".layer_text").prepend(index10);
    }


    else if(val == '11'){
        $(".layer_text").prepend(index11);
    }
    else if(val == '12'){
        $(".layer_text").prepend(index12);
    }
    else if(val == '13'){
        $(".layer_text").prepend(index13);
    }
    else if(val == '14'){
        $(".layer_text").prepend(index14);
    }
    else if(val == '15'){
        $(".layer_text").prepend(index15);
    }
    else if(val == '16'){
        $(".layer_text").prepend(index16);
    }
    else if(val == '17'){
        $(".layer_text").prepend(index17);
    }
    else if(val == '18'){
        $(".layer_text").prepend(index18);
    }
    else if(val == '19'){
        $(".layer_text").prepend(index19);
    }
    else if(val == '20'){
        $(".layer_text").prepend(index20);
    }

    
    else if(val == '21'){
        $(".layer_text").prepend(index21);
    }
    else if(val == '22'){
        $(".layer_text").prepend(index22);
    }
    else if(val == '23'){
        $(".layer_text").prepend(index23);
    }
    else if(val == '24'){
        $(".layer_text").prepend(index24);
    }
    else if(val == '25'){
        $(".layer_text").prepend(index25);
    }
    else if(val == '26'){
        $(".layer_text").prepend(index26);
    }
    else if(val == '27'){
        $(".layer_text").prepend(index27);
    }
    else if(val == '28'){
        $(".layer_text").prepend(index28);
    }
    else if(val == '29'){
        $(".layer_text").prepend(index29);
    }
    else if(val == '30'){
        $(".layer_text").prepend(index30);
    }


    else if(val == '31'){
        $(".layer_text").prepend(index31);
    }
    else if(val == '32'){
        $(".layer_text").prepend(index32);
    }
    else if(val == '33'){
        $(".layer_text").prepend(index33);
    }
    else if(val == '34'){
        $(".layer_text").prepend(index34);
    }
    else if(val == '35'){
        $(".layer_text").prepend(index35);
    }
    else if(val == '36'){
        $(".layer_text").prepend(index36);
    }
    else if(val == '37'){
        $(".layer_text").prepend(index37);
    }
    else if(val == '38'){
        $(".layer_text").prepend(index38);
    }
    else if(val == '39'){
        $(".layer_text").prepend(index39);
    }
    else if(val == '40'){
        $(".layer_text").prepend(index40);
    }


    else if(val == '41'){
        $(".layer_text").prepend(index41);
    }
    else if(val == '42'){
        $(".layer_text").prepend(index42);
    }
    else if(val == '43'){
        $(".layer_text").prepend(index43);
    }
    else if(val == '44'){
        $(".layer_text").prepend(index44);
    }
    else if(val == '45'){
        $(".layer_text").prepend(index45);
    }
    else if(val == '46'){
        $(".layer_text").prepend(index46);
    }
    else if(val == '47'){
        $(".layer_text").prepend(index47);
    }
    else if(val == '48'){
        $(".layer_text").prepend(index48);
    }
    else if(val == '49'){
        $(".layer_text").prepend(index49);
    }
    else if(val == '50'){
        $(".layer_text").prepend(index50);
    }


    else if(val == '51'){
        $(".layer_text").prepend(index51);
    }
    else if(val == '52'){
        $(".layer_text").prepend(index52);
    }
    else if(val == '53'){
        $(".layer_text").prepend(index53);
    }
    else if(val == '54'){
        $(".layer_text").prepend(index54);
    }
    else if(val == '55'){
        $(".layer_text").prepend(index55);
    }
    else if(val == '56'){
        $(".layer_text").prepend(index56);
    }
    else if(val == '57'){
        $(".layer_text").prepend(index57);
    }
    else if(val == '58'){
        $(".layer_text").prepend(index58);
    }
    else if(val == '59'){
        $(".layer_text").prepend(index59);
    }
    else if(val == '60'){
        $(".layer_text").prepend(index60);
    }


    else if(val == '61'){
        $(".layer_text").prepend(index61);
    }
    else if(val == '62'){
        $(".layer_text").prepend(index62);
    }
    else if(val == '63'){
        $(".layer_text").prepend(index63);
    }
    else if(val == '64'){
        $(".layer_text").prepend(index64);
    }
    else if(val == '65'){
        $(".layer_text").prepend(index65);
    }
    else if(val == '66'){
        $(".layer_text").prepend(index66);
    }
    else if(val == '67'){
        $(".layer_text").prepend(index67);
    }
    else if(val == '68'){
        $(".layer_text").prepend(index68);
    }
    else if(val == '69'){
        $(".layer_text").prepend(index69);
    }
    else if(val == '70'){
        $(".layer_text").prepend(index70);
    }


    else if(val == '71'){
        $(".layer_text").prepend(index71);
    }
    else if(val == '72'){
        $(".layer_text").prepend(index72);
    }
    else if(val == '73'){
        $(".layer_text").prepend(index73);
    }
    else if(val == '74'){
        $(".layer_text").prepend(index74);
    }


    else if(val == '75'){
        $(".layer_text").prepend(index75);
    }
    else if(val == '76'){
        $(".layer_text").prepend(index76);
    }
    else if(val == '77'){
        $(".layer_text").prepend(index77);
    }
    else if(val == '78'){
        $(".layer_text").prepend(index78);
    }
    else if(val == '79'){
        $(".layer_text").prepend(index79);
    }

}


$(".select_menu_1").click(function() {
    $(this).next(".select_anw_1").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.sub_img_on_select1').css('display') == 'block') {
        $(".sub_img_on_select1").css("display", "none")
        $(".sub_img_off_select1").css("display", "block")
    } 
    else {
        $(".sub_img_on_select1").css("display", "block")
        $(".sub_img_off_select1").css("display", "none")
    }
});


$(".select_menu_2").click(function() {
    $(this).next(".select_anw_2").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.sub_img_on_select2').css('display') == 'block') {
        $(".sub_img_on_select2").css("display", "none")
        $(".sub_img_off_select2").css("display", "block")
    } 
    else {
        $(".sub_img_on_select2").css("display", "block")
        $(".sub_img_off_select2").css("display", "none")
    }
});


// function siltaeInfo(val) {
//     //var sss = array(val);
//     var aaa = val;

//     var bbb = aaa.split('/'); 

//     var busan = [];
//     var yeosu = [];
//     var ulsan = [];

//     for (var i = 0; i < bbb.length; i++) {
//         if (bbb[i] == '부산') {
//             for (var j = 0; j < 7; j++) {
//                 busan[j] = bbb[i];
//                 i++;
//             }
//         } else if (bbb[i] == '여수') {
//             for (var j = 0; j < 7; j++) {
//                 yeosu[j] = bbb[i];
//                 i++;
//             }
//         } else if (bbb[i] == '울산') {
//             for (var j = 0; j < 7; j++) {
//                 ulsan[j] = bbb[i];
//                 i++;
//             }
//         }
//     }

//     const busanString = JSON.stringify(busan); // 배열은 로컬스토리지에 저장 x json형태로 바꿈

//     localStorage.setItem("busan", busanString); // 로컬저장

//     // console.log(busan); console.log(yeosu); console.log(ulsan);

// }

// function select_menu_setting(){

//     for(var i = 1; i < 15; i++){
//         $('#select_menu'+ i ).css('display','none');
//     }

// }



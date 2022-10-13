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

    var mid = "<div class='icheck-greensea'>"+
    "<input type='radio'id='yousok'value='yousok_L2'name='yousok_chkbox'/><label for='yousok'><span class='label_table'>중간역 유속 레이어</span></label></div>"
    +"<div class='icheck-greensea'><input type='radio'id='suon'value='suon_L2'name='yousok_chkbox'/><label for='suon'><span class='label_table'>중간역 수온 레이어</span></label></div>";

    var detail = "<div class='icheck-greensea'><input type='radio'id='yousok2'value='yousok_L3'na" +
            "me='yousok_chkbox'/><label for='yousok2'><span class='label_table'>세부역 유속 레이어</" +
            "span></label></div><div class='icheck-greensea'><input type='radio'id='suon2'va" +
            "lue='suon_L3'name='yousok_chkbox'/><label for='suon2'><span class='label_table'" +
            ">세부역 수온 레이어</span></label></div>";

    var all = "<div class='icheck-greensea'><input type='radio'id='yousok'value='yousok_L2'na" +
            "me='yousok_chkbox'/><label for='yousok'><span class='label_table'>중간역 유속 레이어</" +
            "span></label></div><div class='icheck-greensea'><input type='radio'id='suon'va" +
            "lue='suon_L2'name='yousok_chkbox'/><label for='suon'><span class='label_table'" +
            ">중간역 수온 레이어</span></label></div><div class='icheck-greensea'><input type='radio'id='yousok2'value='yousok_L3'na" +
            "me='yousok_chkbox'/><label for='yousok2'><span class='label_table'>세부역 유속 레이어</" +
            "span></label></div><div class='icheck-greensea'><input type='radio'id='suon2'va" +
            "lue='suon_L3'name='yousok_chkbox'/><label for='suon2'><span class='label_table'" +
            ">세부역 수온 레이어</span></label></div>";
    
    if (L_layerType == "" | L_layerType == "mid_layer") {
        document
            .querySelector("#yousok_layer")
            .innerHTML = mid;
    } else if(L_layerType == "detail_layer") {
        document
            .querySelector("#yousok_layer")
            .innerHTML = detail;
    } else {
        document
            .querySelector("#yousok_layer")
            .innerHTML = all;
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
    else{
        layer_select_frame_on();
    }
    
    if (layerType == "suon_L2") {
        $('.select_logo_midsuon').css('display','');
        layerType = "L2";
        $('#select_menu2').css('display','block');
        map.setView([
            36.5, 126
        ], 7);
        javascripr : CefCustomObject.func('suon', layerType);

        //중복 방지
        $('.select_logo_detailsuon').css('display','none');
        $('.select_logo_detailsuon_off').css('display','');
        tifLayer.remove();


    } else if (layerType == "suon_L3") {
        $('.select_logo_detailsuon').css('display','');
        layerType = "L3";
        $('#select_menu4').css('display','block');
        map.setView([
            34.7599, 127.7594
        ], 11);
        javascripr : CefCustomObject.func('suon', layerType);
        
        //중복 방지
        $('.select_logo_midsuon').css('display','none');
        $('.select_logo_midsuon_off').css('display','');
        tifLayer.remove();


    } else if (layerType == "yousok_L2") {
        $('.select_logo_midyousok').css('display','');
        layerType = "L2";
        $('#select_menu1').css('display','block');
        map.setView([
            36.5, 126
        ], 7);
        javascripr : CefCustomObject.func('yousok', layerType);
        $('.select_logo_detailyousok').css('display','none');
        $('.select_logo_detailyousok_off').css('display','');
        removeWindy(); //중복 방지

    } else if(layerType =="yousok_L3") {
        $('.select_logo_detailyousok').css('display','');
        $('#select_menu3').css('display','block');
        L3_Windy();
        $('.select_logo_midyousok').css('display','none');
        $('.select_logo_midyousok_off').css('display','');
        map.removeLayer(layerGroup); //중복방지
    }

}

// function reload(aa){     window.location.reload(); } function openInfo(val){
// alert(val); } function reload(aa){     location.reload(true); }

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

    /*
    var dataMaxLon = 132;
    var dataMaxLat = 39;
    var dataMinLon = 123;
    var dataMinLat = 32;

*/

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

// part_2 HNS 확산 영역 function opacity_redraw(val){ 	if(setImgType == "tif"){
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
    } else if (layerclear == 'clear') {
        tifLayer.remove();
    } else {
        map.setView([
            34.7599, 127.7594
        ], 11);
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
        /*
			shpLayer.eachLayer(function(e){

				shpLayer._layers[e._leaflet_id].remove();

			});
			*/
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

                //data.features[0].geometry.name = layerType;

                /*

							var arrRangeValue = new Array();
							var arrRangeColor = new Array();

							if(idx == "3"){
								arrRangeValue[0] = "0.00,0.20";
								arrRangeValue[1] = "0.20,0.40";
								arrRangeValue[2] = "0.40,0.60";
								arrRangeValue[3] = "0.60,0.80";
								arrRangeValue[4] = "0.80,1.00";


								document.getElementById("regend1").innerHTML = "&nbsp;&nbsp;0.00 - 0.20";
								document.getElementById("regend2").innerHTML = "&nbsp;&nbsp;0.20 - 0.40";
								document.getElementById("regend3").innerHTML = "&nbsp;&nbsp;0.40 - 0.60";
								document.getElementById("regend4").innerHTML = "&nbsp;&nbsp;0.60 - 0.80";
								document.getElementById("regend5").innerHTML = "&nbsp;&nbsp;0.80 - 1.00";

							}else{
								arrRangeValue[0] = "0.00,0.04";
								arrRangeValue[1] = "0.04,0.16";
								arrRangeValue[2] = "0.16,0.36";
								arrRangeValue[3] = "0.36,0.64";
								arrRangeValue[4] = "0.64,1.00";

								document.getElementById("regend1").innerHTML = "&nbsp;&nbsp;0.00 - 0.04";
								document.getElementById("regend2").innerHTML = "&nbsp;&nbsp;0.04 - 0.16";
								document.getElementById("regend3").innerHTML = "&nbsp;&nbsp;0.16 - 0.36";
								document.getElementById("regend4").innerHTML = "&nbsp;&nbsp;0.36 - 0.64";
								document.getElementById("regend5").innerHTML = "&nbsp;&nbsp;0.64 - 1.00";
							}


							arrRangeColor[0] = "#006100";
							arrRangeColor[1] = "#7aab00";
							arrRangeColor[2] = "#ffff00";
							arrRangeColor[3] = "#ff9900";
							arrRangeColor[4] = "#ff2200";



							shpLayer = settingVector();
							shpLayer.name = "shpLayer";
							//vectorFragilityBuilding.addTo(map);
							shpLayer.addData(data);

							//strObjectID, strObjectTotal
							var splitObjectID = strObjectID.split(",");
							var splitObjectTotal = strObjectTotal.split(",");



							shpLayer.eachLayer(function(e){

								for(var i = 0; i < splitObjectID.length - 1; i++){
									if(shpLayer._layers[e._leaflet_id].feature.properties.TOT_REG_CD == splitObjectID[i]){

										for(var j = 0; j < arrRangeValue.length; j++){
											var splitRange = arrRangeValue[j].split(",");

											if(parseFloat(splitObjectTotal[i]) >= parseFloat(splitRange[0]) && parseFloat(splitObjectTotal[i]) <= parseFloat(splitRange[1])){

												shpLayer._layers[e._leaflet_id].setStyle({ fillColor: arrRangeColor[j], fillOpacity: 1, color : "#000000", weight:0.5 });
												shpLayer._layers[e._leaflet_id].fillColor = arrRangeColor[j];

												break;
											}
										}

									}
								}
							});


						*/

                shpLayer = settingVector();
                shpLayer.name = "shpLayer";
                //vectorFragilityBuilding.addTo(map);
                shpLayer.addData(data);

                // map.setView([35.846228, 129.212677], 10);
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
        document
            .querySelector("#area_option")
            .innerHTML = aa;
    } else {
        area = "gori";
        document
            .querySelector("#area_option")
            .innerHTML = bb;
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

// 레이어 선택 보기 창
dragElement(document.getElementById("layer_select_absolute"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "_title")) {
    document.getElementById(elmnt.id + "_title").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// 레이어 선택 보기 창 이벤트
function layer_select_frame_on(){
    $("#layer_select_absolute").css("display", "block");
}

function layer_select_frame_off(){
    $("#layer_select_absolute").css("display", "none");
}

function select_menu_delete(value){
    for(var i =1; i <15; i++){
        if(i == value){
            $('#select_menu'+ value).css('display','none');
        }
    }
}





// 레이어 선택 보기 이벤트

function select_menu_change(value){
    if(value == '1'){
        $('.select_logo_midyousok').css('display','none');
        $('.select_logo_midyousok_off').css('display','');
        map.removeLayer(layerGroup);

        layerclear = "clear";

    }
    else{
        $('.select_logo_midyousok_off').css('display','none');
        $('.select_logo_midyousok').css('display','');
        layerType = "L2";
        layerclear = "";
        map.setView([
            36.5, 126
        ], 7);
        javascripr : CefCustomObject.func('yousok', layerType);

        $('.select_logo_detailyousok').css('display','none');
        $('.select_logo_detailyousok_off').css('display',''); //중복방지
        removeWindy();
    }
}

function select_menu_change_detailyousok(value){
    if(value == '1'){
        $('.select_logo_detailyousok').css('display','none');
        $('.select_logo_detailyousok_off').css('display','');
        removeWindy();
    }
    else{
        $('.select_logo_detailyousok_off').css('display','none');
        $('.select_logo_detailyousok').css('display','');
        L3_Windy();

        map.removeLayer(layerGroup); //중복방지 
        layerclear ="clear";
        $('.select_logo_midyousok').css('display','none');
        $('.select_logo_midyousok_off').css('display','');

    }
}

function select_menu_change_midsuon(value){
    if(value == '1'){
        $('.select_logo_midsuon').css('display','none');
        $('.select_logo_midsuon_off').css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_midsuon_off').css('display','none');
        $('.select_logo_midsuon').css('display','');
        layerType = "L2";
        map.setView([
            36.5, 126
        ], 7);
        javascripr : CefCustomObject.func('suon', layerType);

        //중복 방지
        $('.select_logo_detailsuon').css('display','none');
        $('.select_logo_detailsuon_off').css('display','');
        tifLayer.remove();
    }
}

function select_menu_change_detailsuon(value){
    if(value == '1'){
        $('.select_logo_detailsuon').css('display','none');
        $('.select_logo_detailsuon_off').css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_detailsuon_off').css('display','none');
        $('.select_logo_detailsuon').css('display','');
        layerType = "L3";
        map.setView([
            34.7599, 127.7594
        ], 11);
        javascripr : CefCustomObject.func('suon', layerType);

        //중복 방지
        $('.select_logo_midsuon').css('display','none');
        $('.select_logo_midsuon_off').css('display','');
        tifLayer.remove();
    }
}

function select_menu_setting(){

    for(var i = 1; i < 15; i++){
        $('#select_menu'+ i ).css('display','none');
    }

}
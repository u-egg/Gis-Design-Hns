//메뉴 버튼 이벤트
function menu_btn(num){
    $(".menu_on").attr("class",'menu_off');
    $(".top_menu_on").attr("class",'top_menu_off');
    $("#menu_btn_" + num).attr("class",'menu_on');
    $("#top_menu_" + num).attr("class",'top_menu_on');

    if(num == '1'){
        $(".part_1").css("display", "block");
        $(".part_2").css("display", "none");
        $(".part_3").css("display", "none");
        $(".part_4").css("display", "none");
        $(".part_5").css("display", "none");
    }
    else if(num =='2'){
        $(".part_1").css("display", "none");
        $(".part_2").css("display", "block");
        $(".part_3").css("display", "none");
        $(".part_4").css("display", "none");
        $(".part_5").css("display", "none");
    }
    else if(num =='3'){
        $(".part_1").css("display", "none");
        $(".part_2").css("display", "none");
        $(".part_3").css("display", "block");
        $(".part_4").css("display", "none");
        $(".part_5").css("display", "none");
    }
    else if(num =='4'){
        $(".part_1").css("display", "none");
        $(".part_2").css("display", "none");
        $(".part_3").css("display", "none");
        $(".part_4").css("display", "block");
        $(".part_5").css("display", "none");
    }
    else if(num =='5'){
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
        $s.hide('slide', { direction: 'left'}, 530);
        $btn.css( "display", "none");
        setTimeout(function() {
            $btn2.css( "display", "block");
          }, 530);

        // Other stuff to do on slideUp
    } else {
        $s.show('slide', { direction: 'left'}, 530);
        $btn2.css( "display", "none");
        setTimeout(function() {
            $btn.css( "display", "block");
          }, 530);
        // Other stuff to down on slideDown
    }
}




//datepicker
function datepicker(){
$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
  });
}

  $(function () {
    $('.datepicker').datepicker({
    });
});

function classSetTime() {

var objTime = $('.setTime');
for (var i = 0; i < objTime.length; i++) {
    for (var j = 0; j < 24; j++) {
        var option = $("<option value='" + j + "'>" + j + "시</option>");
        $(objTime[i]).append(option);

        if (i == 1 && j == 5) {
            objTime[i].selectedIndex = j;
        }
    }
}
}


//part_1 유속

var layerType = "";


function viewYousokLayer(type) {

layerclear = $('input[name=yousok_chkbox]:checked').val();

if(layerclear == 'clear'){
    map.removeLayer(layerGroup);
    return;
}

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

if (chked == false) {
    Swal.fire({
        icon: 'error',
        title: '경고',
        text: '레이어를 선택해 주세요.'
    })
} else {

    layerType = $('input[name=yousok_chkbox]:checked').val();

    javascripr: CefCustomObject.func('yousok', layerType);
}
}

function reload(aa){
    window.location.reload();
}


function openInfo(val){
    alert(val);
}


function reload(aa){
    location.reload(true);
}
var c = null;

var setLon = null;
var setLat = null;
var set_wind_direction = null;

function drawArrow(sbLon, sbLat, sb_wind_direction){
    
    if(sbLon == null){
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

    var mapMaxLon = map.getBounds()._northEast.lng;
    var mapMaxLat = map.getBounds()._northEast.lat;
    var mapMinLon = map.getBounds()._southWest.lng;
    var mapMinLat = map.getBounds()._southWest.lat;

    var setMaxLon = 0;
    var setMaxLat = 0;
    var setMinLon = 0;
    var setMinLat = 0;

    if(layerType == "L1"){

        if(zoomLevel < 7){
            setViewCnt = 12;
        }else if(zoomLevel == 7){
            setViewCnt = 8;
        }else if(zoomLevel == 8){
            setViewCnt = 6;
        }else if(zoomLevel == 9){
            setViewCnt = 4;
        }else if(zoomLevel == 10){
            setViewCnt = 2;
        }else{
            setViewCnt = 1;
        }

    }else if(layerType == "L2"){

        if(zoomLevel < 7){
            setViewCnt = 24;
        }else if(zoomLevel == 7){
            setViewCnt = 16;
        }else if(zoomLevel == 8){
            setViewCnt = 12;
        }else if(zoomLevel == 9){
            setViewCnt = 8;
        }else if(zoomLevel == 10){
            setViewCnt = 4;
        }else if(zoomLevel == 11){
            setViewCnt = 2;
        }else{
            setViewCnt = 1;
        }

    }else if(layerType == "L3"){

        if(zoomLevel < 13){
            setViewCnt = 4;
        }else if(zoomLevel == 13){
            setViewCnt = 3;
        }else if(zoomLevel == 14){
            setViewCnt = 2;
        }else{
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
    for(var i = 0; i < splitLon.length; i++){
        //if(i == 301){

        var arrLon = splitLon[i].split(',');
        arrLon.pop();

        var arrLat = splitLat[i].split(',');
        arrLat.pop();

        // var arrVal = splitVal[i].split(',');
        // arrVal.pop();

        var arr_wind_direction = split_wind_direction[i].split(',');
        arr_wind_direction.pop();
        
        for(var j = 0; j < arrLat.length; j++){
            if(arrLon[j] != ""){
                
                if (arrLon[j] > setMinLon && arrLon[j] < setMaxLon && arrLat[j] < setMaxLat && arrLat[j] > setMinLat){
                    
                    if(i % setViewCnt == 0 && j % setViewCnt == 0){
                        
                        var div_arrow = L.divIcon({ className: '', margin:0,  iconSize: null, html :"<div style='transform: rotate(" + (parseFloat(arr_wind_direction[j]) + 180) + "deg); color:#ff0000;'><i class='fa-solid fa-arrow-down-long'></i></div>"});
                        //marker_arrow[marker_cnt] = L.marker([parseFloat(arrLat[j]), parseFloat(arrLon[j])], {icon: div_arrow} ).addTo(map);
                        var marker_a = L.marker([parseFloat(arrLat[j]), parseFloat(arrLon[j])], {icon: div_arrow} );
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

//part_2 수온

function opacity_redraw(val){
	if(setImgType == "tif"){
		tifLayer.setOpacity(val / 10);
	}else{
		imgOverlay.setOpacity(val / 10);
	}
	
}

var imgOverlay = null;

function addImagePng(imgPath, minX, minY, maxX, maxY){
	if(imgOverlay != null){
		imgOverlay.remove();
	}
	var imageUrl =  imgPath, imageBounds = [ [parseFloat(minY),parseFloat(minX)],[parseFloat(maxY),parseFloat(maxX)]];
	imgOverlay = L.imageOverlay(imageUrl, imageBounds);
	imgOverlay.setStyle({
      opacity: parseInt(document.getElementById("lineLange").value) / 10
    });
	imgOverlay.addTo(map);



//	var yAverage = (minY + maxY) / 2;
//	var xAverage = (minX + maxX) / 2;


	
	// map.setView([yAverage,xAverage], 11);

}



var tifLayer = null;
var suonLayerType = "";
function viewYousokLayer2(type){

    var layerclear = $('input[name=rdoSuon]:checked').val();



    suonLayerType = "";
    setImgType = type;
    
    var chk = document.getElementsByName("rdoSuon");
    var chked = false;
    for(var i = 0; i < chk.length; i++){
        if(chk[i].checked == true){
            chked = true;
            suonLayerType = chk[i].value;
            break;
        }
    }

    if(chked == false){
        Swal.fire({
          icon: 'error',
          title: '경고',
          text: '레이어를 선택해 주세요.'
          //,footer: '<a href="">Why do I have this issue?</a>'
        })
        //alert("레이어를 선택해 주세요.");
    }
    else if(layerclear == 'clear'){
		tifLayer.remove();
    }
    else{
        javascripr:CefCustomObject.func('suon', suonLayerType);
        
    }
}

function drawTIF(binaryDATA, bufferSize, minLon, minLat, maxLon, maxLat, scaleLon, scaleLat, minVal, maxVal){
	if(tifLayer != null){
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
	tifLayer = L.leafletGeotiff(
            '',
            {
				band: 0,
                name: 'typhoon',
                renderer: L.LeafletGeotiff.plotty({
					displayMin: minVal,
					displayMax: maxVal,
					colorScale: 'jet',
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
            }
     ).addTo(map);
	 //$("#divTyphoonResult").css("display","block");
	// document.getElementById("chkTyphoon").checked = true;

	//document.getElementById("lineLange").value = 10;
	tifLayer.setOpacity(parseInt(document.getElementById("lineLange").value) / 10);

}

//part_3 취약성

var vulnerLayerType = "";

function opacity_redraw2(val){
	if(setImgType == "tif"){
		tifLayer.setOpacity(val / 10);
	}else{
		imgOverlay.setOpacity(val / 10);
	}
}

function viewYousokLayer3(type){

    var layerclear = $('input[name=vulner]:checked').val();

    setImgType = type;
    
    var chk = document.getElementsByName("vulner");
    var chked = false;

    for(var i = 0; i < chk.length; i++){

        if(chk[i].checked == true){

            chked = true;
            vulnerLayerType = chk[i].value;
            break;
        }
    }

    if(chked == false){
        Swal.fire({
          icon: 'error',
          title: '경고',
          text: '레이어를 선택해 주세요.'
          //,footer: '<a href="">Why do I have this issue?</a>'
        })
        //alert("레이어를 선택해 주세요.");
    }
    else if(layerclear == 'clear'){
        tifLayer.remove();
    }
    else{
        
        javascripr:CefCustomObject.func('vulnerability', vulnerLayerType);
    
    }
}

function cateAnimate(num){
    $("#cate" + num).slideToggle(300);
    if($("#sub_img_on" + num).css("display") == "none"){
        $('#sub_img_off' + num).css("display",'none');
        $('#sub_img_on' + num).css("display",'block');
    }else{
        $('#sub_img_on' + num).css("display",'none');
        $('#sub_img_off' + num).css("display",'block');
    }
}

function drawFileTIF(binaryDATA, bufferSize, maxVal, minVal){
	if(tifLayer != null){
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
	tifLayer = L.leafletGeotiff(
            '',
            {
				band: 0,
                name: 'typhoon',
                renderer: L.LeafletGeotiff.plotty({
					displayMin: minVal,
					displayMax: maxVal,
					colorScale: 'jet',
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
            }
     ).addTo(map);

	 //$("#divTyphoonResult").css("display","block");
	// document.getElementById("chkTyphoon").checked = true;

	//document.getElementById("lineLange").value = 10;
	tifLayer.setOpacity(parseInt(document.getElementById("lineLange").value) / 10);
	 
}

//part_4 데이터베이스

var dbLayerType = "";

function viewDatabaseLayer(type){

    var layerclear = $('input[name=rdoDatabase]:checked').val();




    setImgType = type;
    
    var chk = document.getElementsByName("rdoDatabase");
    var chked = false;
    for(var i = 0; i < chk.length; i++){
        if(chk[i].checked == true){
            chked = true;
            dbLayerType = chk[i].value;
            break;
        }
    }

    if(chked == false){
        Swal.fire({
          icon: 'error',
          title: '경고',
          text: '레이어를 선택해 주세요.'
          //,footer: '<a href="">Why do I have this issue?</a>'
        })
        //alert("레이어를 선택해 주세요.");
    }else if(layerclear == 'clear'){
        map.removeLayer(shpLayer);
    }
    else{
        
            javascripr:CefCustomObject.func('database', dbLayerType);
        
    }
}

var shpLayer = null;
function csharpSHP(shpByteString, dbfByteString, prjTxt, shpBufferSize, dbfBufferSize){
		if(shpLayer != null){
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
				num : "9999",
				bytesize : shpByteSplit.length,
				dbfsize : dbfByteSplit.length

			
            }, function(data) {
              	if(typeof data != "undefined"){
					if(cnt == 0){
						var URL = window.URL || window.webkitURL || window.mozURL || window.msURL,
						url = URL.createObjectURL(new Blob([JSON.stringify(data)], {type: "application/json"}));
					
					
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

function settingVector () {
       var vectorLayer = L.geoJson([], {
            style: function (feature) {
               // return feature.properties.style;
            },
            onEachFeature: function (feature, layer) {
 
                layer.on({click: function(e) {
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
                        tbody +=
                            ('<tr class="center aligned"><td>'+ key + '</td><td>' + e.target.feature.properties[key] + '</td></tr>');
                    }

                    //$('#attribute').append(tbody + '</tbody>');
					//document.getElementById("tbodyData").innerHTML = tbody + '</tbody>';
						$('#attribute').append(tbody + '</tbody>')
                    $('#attr').fadeIn(300);
                   // map.panTo(e.latlng);
                }});

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
function layerInfo(){
    window.open( "./layerinfo.html", "Child", "width=815, height=1000px, top=160, left=480");
}

function mapsetting(){ // 좌표이동

    if (base == 1) { // 위성지도
        // map.removeLayer(hybridLayer1);
        // map.removeLayer(hybridLayer2);
        // map.removeLayer(baseLayer);

        map.setView([35.0686, 128.994], 11);

        map.addLayer(hybridLayer1);
        map.addLayer(hybridLayer2);

    } else { // 일반지도
        // map.removeLayer(baseLayer);
        // map.removeLayer(hybridLayer1);
        // map.removeLayer(hybridLayer2);

        map.setView([35.0686, 128.994], 11);

        map.addLayer(baseLayer);
    }
}

function areaChange(value){

    var center = value

    if(center == "facility"){
        $("#area_facility").css('display','block');
        $("#area_station").css('display','none');
    }
    else{
        $("#area_facility").css('display','none');
        $("#area_station").css('display','block');
    }
}



// 레이어 선택 이벤트 구현 및 함수 2022-10-13

// 레이어 선택 보기 창 움직임
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

// 레이어 체크박스 시 표출

function layerChecked(obj,val){

    layer_select_frame_on();

	if(obj.checked == true){

        if(val == '1'){ //중간역 유속
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
        }
        else if(val == '2'){ //세부역 유속
            $('.select_logo_detailyousok').css('display','');
            $('#select_menu3').css('display','block');
            L3_Windy();
            $('.select_logo_midyousok').css('display','none');
            $('.select_logo_midyousok_off').css('display','');
            map.removeLayer(layerGroup); //중복방지
        }
        else if(val == '3'){ // 중간역 수온
            $('.select_logo_midsuon').css('display','');
            layerType = "L2";
            $('#select_menu2').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
    
            //중복 방지
            $('.select_logo_detailsuon').css('display','none');
            $('.select_logo_detailsuon_off').css('display','');

            $('.select_logo_range').css('display','none');
            $('.select_logo_range_off').css('display','');

            javascripr : CefCustomObject.func('suon', layerType);

            tifLayer.remove();
        }

        else if(val == '4'){ // 세부역 수온
            $('.select_logo_detailsuon').css('display','');
            layerType = "L3";
            $('#select_menu4').css('display','block');
            map.setView([
                34.7599, 127.7594
            ], 11);
            
            //중복 방지
            $('.select_logo_midsuon').css('display','none');
            $('.select_logo_midsuon_off').css('display','');

            $('.select_logo_range').css('display','none');
            $('.select_logo_range_off').css('display','');

            javascripr : CefCustomObject.func('suon', layerType);

            tifLayer.remove();
        }
        else if(val == '5'){ // HNS 확산영역 최대확산범위 (현재 세부역 수온과 동일)
            $('.select_logo_range').css('display','');
            layerType = "L3";
            $('#select_menu5').css('display','block');
            map.setView([
                34.7599, 127.7594
            ], 11);
            
            //중복 방지
            $('.select_logo_midsuon').css('display','none');
            $('.select_logo_midsuon_off').css('display','');

            $('.select_logo_detailsuon').css('display','none');
            $('.select_logo_detailsuon_off').css('display','');

            javascripr : CefCustomObject.func('suon', layerType);

            tifLayer.remove();
        }

         //데이터베이스

         else if(val == '10'){    

            $('.select_logo_db1').css('display','');

            dbLayerType = "04_군립공원";

            $('#select_menu10').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            $('.select_logo_db2').css('display','none');
            $('.select_logo_db2_off').css('display',''); 
            $('.select_logo_db3').css('display','none');
            $('.select_logo_db3_off').css('display',''); 
            $('.select_logo_db4').css('display','none');
            $('.select_logo_db4_off').css('display','');
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
            
            javascripr : CefCustomObject.func('database', dbLayerType);

        }
        else if(val == '11'){    

            $('.select_logo_db2').css('display','');

            dbLayerType = "16_특별관리해역";

            $('#select_menu11').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            $('.select_logo_db1').css('display','none');
            $('.select_logo_db1_off').css('display',''); 
            $('.select_logo_db3').css('display','none');
            $('.select_logo_db3_off').css('display',''); 
            $('.select_logo_db4').css('display','none');
            $('.select_logo_db4_off').css('display','');
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }
        else if(val == '12'){    

            $('.select_logo_db3').css('display','');

            dbLayerType = "양식장영역";

            $('#select_menu12').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            $('.select_logo_db2').css('display','none');
            $('.select_logo_db2_off').css('display',''); 
            $('.select_logo_db1').css('display','none');
            $('.select_logo_db1_off').css('display',''); 
            $('.select_logo_db4').css('display','none');
            $('.select_logo_db4_off').css('display','');
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }
        else if(val == '13'){    

            $('.select_logo_db4').css('display','');

            dbLayerType = "조업집중구역(봄)";

            $('#select_menu13').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            $('.select_logo_db2').css('display','none');
            $('.select_logo_db2_off').css('display',''); 
            $('.select_logo_db3').css('display','none');
            $('.select_logo_db3_off').css('display',''); 
            $('.select_logo_db1').css('display','none');
            $('.select_logo_db1_off').css('display','');
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }
        else if(val == '999'){    

            $('.select_logo_st1').css('display','');

            dbLayerType = "해양산업시설_Point";

            $('#select_menu999').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            $('.select_logo_db1').css('display','none');
            $('.select_logo_db_off1').css('display',''); 
            $('.select_logo_db2').css('display','none');
            $('.select_logo_db_off2').css('display',''); 
            $('.select_logo_db3').css('display','none');
            $('.select_logo_db_off3').css('display',''); 
            $('.select_logo_db4').css('display','none');
            $('.select_logo_db_off4').css('display','');

            javascripr : CefCustomObject.func('database', dbLayerType);

        }


        // 해양환경영향평가 (보호구역 취약성) , (번호수정필요)
        else if(val == '61'){
            
            var layertype = '01';
            
            $('#select_menu61').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '62'){ 
            
            var layertype = '02';

            $('#select_menu62').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '63'){ 
            
            var layertype = '03';
            
            $('#select_menu63').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '64'){ 
            
            var layertype = '04';
            
            $('#select_menu64').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '65'){
            
            var layertype = '05';
            
            $('#select_menu65').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '66'){ 
            
            var layertype = '06';
            
            $('#select_menu66').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '67'){ 
            
            var layertype = '07';
            
            $('#select_menu67').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '68'){ 
            
            var layertype = '08';
            
            $('#select_menu68').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '69'){
            
            var layertype = '09';
            
            $('#select_menu69').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '610'){ 
            
            var layertype = '10';

            $('#select_menu610').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '611'){ 
            
            var layertype = '11';
            
            $('#select_menu611').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '612'){ 
            
            var layertype = '12';
            
            $('#select_menu612').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '613'){
            
            var layertype = '13';
            
            $('#select_menu613').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '614'){ 
            
            var layertype = '14';
            
            $('#select_menu614').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '615'){ 
            
            var layertype = '15';
            
            $('#select_menu615').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '616'){ 
            
            var layertype = '16';
            
            $('#select_menu616').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }


        // 종 취약성
        else if(val == '71'){
            
            var layertype = '01';
            
            $('#select_menu71').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '72'){ 
            
            var layertype = '02';

            $('#select_menu72').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '73'){ 
            
            var layertype = '03';
            
            $('#select_menu73').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '74'){ 
            
            var layertype = '04';
            
            $('#select_menu74').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '75'){
            
            var layertype = '05';
            
            $('#select_menu75').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '76'){ 
            
            var layertype = '06';
            
            $('#select_menu76').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '77'){ 
            
            var layertype = '07';
            
            $('#select_menu77').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '78'){ 
            
            var layertype = '08';

            $('#select_menu78').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '79'){
            
            var layertype = '09';
            
            $('#select_menu79').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '710'){ 
            
            var layertype = '10';

            $('#select_menu710').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '711'){ 
            
            var layertype = '11';
            
            $('#select_menu711').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '712'){ 
            
            var layertype = '12';
            
            $('#select_menu712').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '713'){
            
            var layertype = '13';
            
            $('#select_menu713').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '714'){ 
            
            var layertype = '14';
            
            $('#select_menu714').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '715'){ 
            
            var layertype = '15';
            
            $('#select_menu715').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '716'){ 
            
            var layertype = '16';
            
            $('#select_menu716').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }


        // 서식지 취약성
        else if(val == '81'){
            
            var layertype = '01';
            
            $('#select_menu81').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '82'){ 
            
            var layertype = '02';

            $('#select_menu82').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '83'){ 
            
            var layertype = '03';
            
            $('#select_menu83').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '84'){ 
            
            var layertype = '04';
            
            $('#select_menu84').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '85'){
            
            var layertype = '05';
            
            $('#select_menu85').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '86'){ 
            
            var layertype = '06';
            
            $('#select_menu86').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '87'){ 
            
            var layertype = '07';
            
            $('#select_menu87').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '88'){ 
            
            var layertype = '08';
            
            $('#select_menu88').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '89'){
            
            var layertype = '09';
            
            $('#select_menu89').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '810'){ 
            
            var layertype = '10';

            $('#select_menu810').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '811'){ 
            
            var layertype = '11';
            
            $('#select_menu811').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '812'){ 
            
            var layertype = '12';
            
            $('#select_menu812').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '813'){
            
            var layertype = '13';
            
            $('#select_menu813').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '814'){ 
            
            var layertype = '14';
            
            $('#select_menu814').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '815'){ 
            
            var layertype = '15';
            
            $('#select_menu815').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '816'){ 
            
            var layertype = '16';
            
            $('#select_menu816').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        // 사회경제 취약성
        else if(val == '91'){
            
            var layertype = '01';
            
            $('#select_menu91').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '92'){ 
            
            var layertype = '02';

            $('#select_menu92').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '93'){ 
            
            var layertype = '03';
            
            $('#select_menu93').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '94'){ 
            
            var layertype = '04';
            
            $('#select_menu94').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '95'){
            
            var layertype = '05';
            
            $('#select_menu95').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '96'){ 
            
            var layertype = '06';
            
            $('#select_menu96').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '97'){ 
            
            var layertype = '07';
            
            $('#select_menu97').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '98'){ 
            
            var layertype = '08';
            
            $('#select_menu98').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '99'){
            
            var layertype = '09';
            
            $('#select_menu99').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '910'){ 
            
            var layertype = '10';

            $('#select_menu910').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '911'){ 
            
            var layertype = '11';
            
            $('#select_menu911').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '912'){ 
            
            var layertype = '12';
            
            $('#select_menu912').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

        else if(val == '913'){
            
            var layertype = '13';
            
            $('#select_menu913').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '914'){ 
            
            var layertype = '14';
            
            $('#select_menu914').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '915'){ 
            
            var layertype = '15';
            
            $('#select_menu915').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }
        else if(val == '916'){ 
            
            var layertype = '16';
            
            $('.select_logo_social').css('display','');
            $('#select_menu916').css('display','block');

            map.setView([
                34.7599, 127.7594
            ], 11);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

            //중복 방지
            // $('.select_logo_midsuon').css('display','none');
            // $('.select_logo_midsuon_off').css('display','');
            // tifLayer.remove();
        }

	}

    else{ // 체크해제시 이벤트
        
        if(val == '1'){
            $('#select_menu1').css('display','none');
            select_menu_change('1');
        }
        else if(val == '2'){
            $('#select_menu3').css('display','none');
            select_menu_change_detailyousok('1');
        }
        else if(val == '3'){
            $('#select_menu2').css('display','none');
            select_menu_change_midsuon('1');
        }
        else if(val == '4'){
            $('#select_menu4').css('display','none');
            select_menu_change_detailsuon('1');
        }
        else if(val == '5'){
            $('#select_menu5').css('display','none');
            select_menu_change_range('1'); 
        }

        else if(val == '10'){
            $('#select_menu10').css('display','none');
            select_menu_change_db('1','1')
        }
        else if(val == '11'){
            $('#select_menu11').css('display','none');
            select_menu_change_db('1','2')
        }
        else if(val == '12'){
            $('#select_menu12').css('display','none');
            select_menu_change_db('1','3')
        }
        else if(val == '13'){
            $('#select_menu13').css('display','none');
            select_menu_change_db('1','4')
        }
        else if(val == '999'){
            $('#select_menu999').css('display','none');
            select_menu_change_info('1','1')
        }
        // 해양환경평가 (번호 수정 필요)
        // 보호구역취약성
        else if(val == '61'){
            $('#select_menu61').css('display','none');
			select_menu_change_protect('1','1','01');
        }
        else if(val == '62'){
            $('#select_menu62').css('display','none');
			select_menu_change_protect('1','2','02');

        }
        else if(val == '63'){
            $('#select_menu63').css('display','none');
			select_menu_change_protect('1','3','03');

        }
        else if(val == '64'){
            $('#select_menu64').css('display','none');
			select_menu_change_protect('1','4','04');

        }


        else if(val == '65'){
            $('#select_menu65').css('display','none');
			select_menu_change_protect('1','5','05');

        }
        else if(val == '66'){
            $('#select_menu66').css('display','none');
			select_menu_change_protect('1','6','06');

        }
        else if(val == '67'){
            $('#select_menu67').css('display','none');
			select_menu_change_protect('1','7','07');

        }
        else if(val == '68'){
            $('#select_menu68').css('display','none');
			select_menu_change_protect('1','8','08');

        }


        else if(val == '69'){
            $('#select_menu69').css('display','none');
			select_menu_change_protect('1','9','09');

        }
        else if(val == '610'){
            $('#select_menu610').css('display','none');
			select_menu_change_protect('1','10','10');

        }
        else if(val == '611'){
            $('#select_menu611').css('display','none');
			select_menu_change_protect('1','11','11');

        }
        else if(val == '612'){
            $('#select_menu612').css('display','none');
			select_menu_change_protect('1','12','12');

        }


        else if(val == '613'){
            $('#select_menu613').css('display','none');
			select_menu_change_protect('1','13','13');

        }
        else if(val == '614'){
            $('#select_menu614').css('display','none');
			select_menu_change_protect('1','14','14');

        }
        else if(val == '615'){
            $('#select_menu615').css('display','none');
			select_menu_change_protect('1','15','15');

        }
        else if(val == '616'){
            $('#select_menu616').css('display','none');
			select_menu_change_protect('1','16','16');

        }


        // 종취약성
        else if(val == '71'){
            $('#select_menu71').css('display','none');
            select_menu_change_species('1','1','01');

        }
        else if(val == '72'){
            $('#select_menu72').css('display','none');
            select_menu_change_species('1','2','02');

        }
        else if(val == '73'){
            $('#select_menu73').css('display','none');
            select_menu_change_species('1','3','03');

        }
        else if(val == '74'){
            $('#select_menu74').css('display','none');
            select_menu_change_species('1','4','04');

        }


        else if(val == '75'){
            $('#select_menu75').css('display','none');
            select_menu_change_species('1','5','05');

        }
        else if(val == '76'){
            $('#select_menu76').css('display','none');
            select_menu_change_species('1','6','06');

        }
        else if(val == '77'){
            $('#select_menu77').css('display','none');
            select_menu_change_species('1','7','07');

        }
        else if(val == '78'){
            $('#select_menu78').css('display','none');
            select_menu_change_species('1','8','08');

        }


        else if(val == '79'){
            $('#select_menu79').css('display','none');
            select_menu_change_species('1','9','09');

        }
        else if(val == '710'){
            $('#select_menu710').css('display','none');
            select_menu_change_species('1','10','10');

        }
        else if(val == '711'){
            $('#select_menu711').css('display','none');
            select_menu_change_species('1','11','11');

        }
        else if(val == '712'){
            $('#select_menu712').css('display','none');
            select_menu_change_species('1','12','12');

        }


        else if(val == '713'){
            $('#select_menu713').css('display','none');
            select_menu_change_species('1','13','13');

        }
        else if(val == '714'){
            $('#select_menu714').css('display','none');
            select_menu_change_species('1','14','14');

        }
        else if(val == '715'){
            $('#select_menu715').css('display','none');
            select_menu_change_species('1','15','15');

        }
        else if(val == '716'){
            $('#select_menu716').css('display','none');
            select_menu_change_species('1','16','16');

        }


        // 서식지 취약성
        else if(val == '81'){
            $('#select_menu81').css('display','none');
            select_menu_change_area('1','1','01');

        }
        else if(val == '82'){
            $('#select_menu82').css('display','none');
            select_menu_change_area('1','2','02');

        }
        else if(val == '83'){
            $('#select_menu83').css('display','none');
            select_menu_change_area('1','3','03');

        }
        else if(val == '84'){
            $('#select_menu84').css('display','none');
            select_menu_change_area('1','4','04');

        }


        else if(val == '85'){
            $('#select_menu85').css('display','none');
            select_menu_change_area('1','5','05');

        }
        else if(val == '86'){
            $('#select_menu86').css('display','none');
            select_menu_change_area('1','6','06');

        }
        else if(val == '87'){
            $('#select_menu87').css('display','none');
            select_menu_change_area('1','7','07');

        }
        else if(val == '88'){
            $('#select_menu88').css('display','none');
            select_menu_change_area('1','8','08');

        }


        else if(val == '89'){
            $('#select_menu89').css('display','none');
            select_menu_change_area('1','9','09');

        }
        else if(val == '810'){
            $('#select_menu810').css('display','none');
            select_menu_change_area('1','10','10');

        }
        else if(val == '811'){
            $('#select_menu811').css('display','none');
            select_menu_change_area('1','11','11');

        }
        else if(val == '812'){
            $('#select_menu812').css('display','none');
            select_menu_change_area('1','12','12');

        }


        else if(val == '813'){
            $('#select_menu813').css('display','none');
            select_menu_change_area('1','13','13');

        }
        else if(val == '814'){
            $('#select_menu814').css('display','none');
            select_menu_change_area('1','14','14');

        }
        else if(val == '815'){
            $('#select_menu815').css('display','none');
            select_menu_change_area('1','15','15');

        }
        else if(val == '816'){
            $('#select_menu816').css('display','none');
            select_menu_change_area('1','16','16');

        }

        // 사회경제 취약성
        else if(val == '91'){
            $('#select_menu91').css('display','none');
            select_menu_change_social('1','1','01');

        }
        else if(val == '92'){
            $('#select_menu92').css('display','none');
            select_menu_change_social('1','2','02');

        }
        else if(val == '93'){
            $('#select_menu93').css('display','none');
            select_menu_change_social('1','3','03');

        }
        else if(val == '94'){
            $('#select_menu94').css('display','none');
            select_menu_change_social('1','4','04');

        }


        else if(val == '95'){
            $('#select_menu95').css('display','none');
            select_menu_change_social('1','5','05');

        }
        else if(val == '96'){
            $('#select_menu96').css('display','none');
            select_menu_change_social('1','6','06');

        }
        else if(val == '97'){
            $('#select_menu97').css('display','none');
            select_menu_change_social('1','7','07');

        }
        else if(val == '98'){
            $('#select_menu98').css('display','none');
            select_menu_change_social('1','8','08');

        }

        else if(val == '99'){
            $('#select_menu99').css('display','none');
            select_menu_change_social('1','09','09');

        }
        else if(val == '910'){
            $('#select_menu910').css('display','none');
            select_menu_change_social('1','10','10');

        }
        else if(val == '911'){
            $('#select_menu911').css('display','none');
            select_menu_change_social('1','11','11');

        }
        else if(val == '912'){
            $('#select_menu912').css('display','none');
            select_menu_change_social('1','12','12');

        }

        else if(val == '913'){
            $('#select_menu913').css('display','none');
            select_menu_change_social('1','13','13');

        }
        else if(val == '914'){
            $('#select_menu914').css('display','none');
            select_menu_change_social('1','14','14');

        }
        else if(val == '915'){
            $('#select_menu915').css('display','none');
            select_menu_change_social('1','15','15');

        }
        else if(val == '916'){
            $('#select_menu916').css('display','none');
            select_menu_change_social('1','16','16');

        }
    }
}


// 레이어 선택 보기 창 이벤트
function layer_select_frame_on(){
    //$("#layer_select_absolute").css("display", "block");
    $("#layer_select_absolute").removeClass('removeLayerbox');
}

function layer_select_frame_off(){
    $("#layer_select_absolute").addClass('removeLayerbox');
}

function select_menu_delete(value){
    for(var i =1; i < 1000; i++){
        if(i == value){
            $('#select_menu'+ value).css('display','none');
            $("input:checkbox[id='layer_"+i+"']").prop('checked',false); //체크박스 해제
           

            //체크박스 해제 시 만약 그려져 있다면 레이어 제거

            if(i == 1){
                select_menu_change('1');
            }
            else if(i == 2){
                select_menu_change_midsuon('1');
            }
            else if(i == 3){
                select_menu_change_detailyousok('1');
            }
            else if(i == 4){
                select_menu_change_detailsuon('1');
            }
            else if(i == 5){
                select_menu_change_range('1'); 
            }
            else if(i == 10){
                select_menu_change_db('1','1'); 
            }
            else if(i == 11){
                select_menu_change_db('1','2'); 
            }
            else if(i == 12){
                select_menu_change_db('1','3'); 
            }
            else if(i == 13){
                select_menu_change_db('1','4'); 
            }

            //해양산업시설 (임시)
            else if(i == 999){
                select_menu_change_info('1','1'); 
            }

            //보호구역취약성
            else if(i == 61){
                $("input:checkbox[id='layer_6_01']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }
            else if(i == 62){
                $("input:checkbox[id='layer_6_02']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }
            else if(i == 63){
                $("input:checkbox[id='layer_6_03']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }            
            else if(i == 64){
                $("input:checkbox[id='layer_6_04']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }

            else if(i == 65){
                $("input:checkbox[id='layer_6_05']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }
            else if(i == 66){
                $("input:checkbox[id='layer_6_06']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }
            else if(i == 67){
                $("input:checkbox[id='layer_6_07']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }            
            else if(i == 68){
                $("input:checkbox[id='layer_6_08']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }


            else if(i == 69){
                $("input:checkbox[id='layer_6_09']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }
            else if(i == 610){
                $("input:checkbox[id='layer_6_10']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }
            else if(i == 611){
                $("input:checkbox[id='layer_6_11']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }            
            else if(i == 612){
                $("input:checkbox[id='layer_6_12']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }

            else if(i == 613){
                $("input:checkbox[id='layer_6_13']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }
            else if(i == 614){
                $("input:checkbox[id='layer_6_14']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }
            else if(i == 615){
                $("input:checkbox[id='layer_6_15']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }            
            else if(i == 616){
                $("input:checkbox[id='layer_6_16']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1');
            }



            //종취약성
            else if(i == 71){
                $("input:checkbox[id='layer_7_01']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }
            else if(i == 72){
                $("input:checkbox[id='layer_7_02']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }
            else if(i == 73){
                $("input:checkbox[id='layer_7_03']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }            
            else if(i == 74){
                $("input:checkbox[id='layer_7_04']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }

            else if(i == 75){
                $("input:checkbox[id='layer_7_05']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }
            else if(i == 76){
                $("input:checkbox[id='layer_7_06']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }
            else if(i == 77){
                $("input:checkbox[id='layer_7_07']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }            
            else if(i == 78){
                $("input:checkbox[id='layer_7_08']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }


            else if(i == 79){
                $("input:checkbox[id='layer_7_09']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }
            else if(i == 710){
                $("input:checkbox[id='layer_7_10']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }
            else if(i == 711){
                $("input:checkbox[id='layer_7_11']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }            
            else if(i == 712){
                $("input:checkbox[id='layer_7_12']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }

            else if(i == 713){
                $("input:checkbox[id='layer_7_13']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }
            else if(i == 714){
                $("input:checkbox[id='layer_7_14']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }
            else if(i == 715){
                $("input:checkbox[id='layer_7_15']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }            
            else if(i == 716){
                $("input:checkbox[id='layer_7_16']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1');
            }


            //서식지 취약성
            else if(i == 81){
                $("input:checkbox[id='layer_8_01']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }
            else if(i == 82){
                $("input:checkbox[id='layer_8_02']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }
            else if(i == 83){
                $("input:checkbox[id='layer_8_03']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }            
            else if(i == 84){
                $("input:checkbox[id='layer_8_04']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }

            else if(i == 85){
                $("input:checkbox[id='layer_8_05']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }
            else if(i == 86){
                $("input:checkbox[id='layer_8_06']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }
            else if(i == 87){
                $("input:checkbox[id='layer_8_07']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }            
            else if(i == 88){
                $("input:checkbox[id='layer_8_08']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }

            else if(i == 89){
                $("input:checkbox[id='layer_8_09']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }
            else if(i == 810){
                $("input:checkbox[id='layer_8_10']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }
            else if(i == 811){
                $("input:checkbox[id='layer_8_11']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }            
            else if(i == 812){
                $("input:checkbox[id='layer_8_12']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }

            else if(i == 813){
                $("input:checkbox[id='layer_8_13']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }
            else if(i == 814){
                $("input:checkbox[id='layer_8_14']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }
            else if(i == 815){
                $("input:checkbox[id='layer_8_15']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }            
            else if(i == 816){
                $("input:checkbox[id='layer_8_16']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1');
            }

            //사회경제 취약성
            else if(i == 91){
                $("input:checkbox[id='layer_9_01']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }
            else if(i == 92){
                $("input:checkbox[id='layer_9_02']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }
            else if(i == 93){
                $("input:checkbox[id='layer_9_03']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }            
            else if(i == 94){
                $("input:checkbox[id='layer_9_04']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }

            else if(i == 95){
                $("input:checkbox[id='layer_9_05']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }
            else if(i == 96){
                $("input:checkbox[id='layer_9_06']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }
            else if(i == 97){
                $("input:checkbox[id='layer_9_07']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }            
            else if(i == 98){
                $("input:checkbox[id='layer_9_08']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }

            else if(i == 99){
                $("input:checkbox[id='layer_9_09']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }
            else if(i == 910){
                $("input:checkbox[id='layer_9_10']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }
            else if(i == 911){
                $("input:checkbox[id='layer_9_11']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }            
            else if(i == 912){
                $("input:checkbox[id='layer_9_12']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }

            else if(i == 913){
                $("input:checkbox[id='layer_9_13']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }
            else if(i == 914){
                $("input:checkbox[id='layer_9_14']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }
            else if(i == 915){
                $("input:checkbox[id='layer_9_15']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }            
            else if(i == 916){
                $("input:checkbox[id='layer_9_16']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1');
            }
        }
    }
}


// 레이어 선택 보기 이벤트 (해양환경정보)

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

        //중복 방지
        $('.select_logo_detailsuon').css('display','none');
        $('.select_logo_detailsuon_off').css('display','');

        $('.select_logo_range').css('display','none');
        $('.select_logo_range_off').css('display','');

        javascripr : CefCustomObject.func('suon', layerType);

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

        //중복 방지
        $('.select_logo_midsuon').css('display','none');
        $('.select_logo_midsuon_off').css('display','');

        $('.select_logo_range').css('display','none');
        $('.select_logo_range_off').css('display','');

        javascripr : CefCustomObject.func('suon', layerType);

        tifLayer.remove();
    }
}

// 레이어 선택 보기 이벤트 (HNS 확산영역) - 중복처리 미구현 및 데이터 x
function select_menu_change_range(value){
    if(value == '1'){
        $('.select_logo_range').css('display','none');
        $('.select_logo_range_off').css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_range_off').css('display','none');
        $('.select_logo_range').css('display','');

        map.setView([
            34.7599, 127.7594
        ], 11);

        suonLayerType = "L3"

        //중복 방지
        $('.select_logo_midsuon').css('display','none');
        $('.select_logo_midsuon_off').css('display','');

        $('.select_logo_detailsuon').css('display','none');
        $('.select_logo_detailsuon_off').css('display','');

        javascripr : CefCustomObject.func('suon', suonLayerType);

    }
}

// 데이터베이스
function select_menu_change_db(value,val){
    if(value == '1'){
        $('.select_logo_db' + val).css('display','none');
        $('.select_logo_db_off' + val).css('display','');
        map.removeLayer(shpLayer);
    }
    else{
        $('.select_logo_db_off' + val).css('display','none');
        $('.select_logo_db' + val).css('display','');


        if(val == '1'){
            dbLayerType = "04_군립공원";

            $('.select_logo_db2').css('display','none');
            $('.select_logo_db_off2').css('display',''); 
            $('.select_logo_db3').css('display','none');
            $('.select_logo_db_off3').css('display',''); 
            $('.select_logo_db4').css('display','none');
            $('.select_logo_db_off4').css('display','');
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }
        else if(val == '2'){
            dbLayerType = "16_특별관리해역";
            
            $('.select_logo_db1').css('display','none');
            $('.select_logo_db_off1').css('display',''); 
            $('.select_logo_db3').css('display','none');
            $('.select_logo_db_off3').css('display',''); 
            $('.select_logo_db4').css('display','none');
            $('.select_logo_db_off4').css('display','');
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }
        else if(val == '3'){
            dbLayerType = "양식장영역";

            $('.select_logo_db2').css('display','none');
            $('.select_logo_db_off2').css('display',''); 
            $('.select_logo_db1').css('display','none');
            $('.select_logo_db_off1').css('display',''); 
            $('.select_logo_db4').css('display','none');
            $('.select_logo_db_off4').css('display','');
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }

        else if(val =='4'){
            dbLayerType = "조업집중구역(봄)";

            $('.select_logo_db2').css('display','none');
            $('.select_logo_db_off2').css('display',''); 
            $('.select_logo_db3').css('display','none');
            $('.select_logo_db_off3').css('display',''); 
            $('.select_logo_db1').css('display','none');
            $('.select_logo_db_off1').css('display','');
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }

        map.setView([
            36.5, 126
        ], 7);

        javascripr : CefCustomObject.func('database', dbLayerType);

    }
}

function select_menu_change_info(value,val){



    if(value == '1'){
        $('.select_logo_st' + val).css('display','none');
        $('.select_logo_st_off' + val).css('display','');
        map.removeLayer(shpLayer);
    }

    else{

        
        $('.select_logo_st_off' + val).css('display','none');
        $('.select_logo_st' + val).css('display','');

        if (val =='1'){

            dbLayerType = "해양산업시설_Point";

            $('.select_logo_db1').css('display','none');
            $('.select_logo_db_off1').css('display',''); 
            $('.select_logo_db2').css('display','none');
            $('.select_logo_db_off2').css('display',''); 
            $('.select_logo_db3').css('display','none');
            $('.select_logo_db_off3').css('display',''); 
            $('.select_logo_db4').css('display','none');
            $('.select_logo_db_off4').css('display','');

        }

        map.setView([
            36.5, 126
        ], 7);

        javascripr : CefCustomObject.func('database', dbLayerType);

        
    }
}

// 레이어 선택 보기 이벤트 (해양환경 영향평가)

// 보호구역취약성 (건드릴 필요 x)
function select_menu_change_protect(value,val,c_val){
    
    // var layertype = $('input[name=vulner]:checked').val();
    // var layertypeArr = layertype.split("-");

    if(value == '1'){
        $('.select_logo_protect' + val).css('display','none');
        $('.select_logo_protect_off' + val).css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_protect_off' + val).css('display','none');
        $('.select_logo_protect' + val).css('display','');

        map.setView([
            34.7599, 127.7594
        ], 11);

        layertype = c_val;
        javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        // suonLayerType = "L3"
        // javascripr : CefCustomObject.func('suon', suonLayerType);

    }
}

// 종취약성 (건드릴 필요 x)
function select_menu_change_species(value,val,c_val){
    
    // var layertype = $('input[name=vulner]:checked').val();
    // var layertypeArr = layertype.split("-");

    if(value == '1'){
        $('.select_logo_species' + val).css('display','none');
        $('.select_logo_species_off' + val).css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_species_off' + val).css('display','none');
        $('.select_logo_species' + val).css('display','');

        map.setView([
            34.7599, 127.7594
        ], 11);

        layertype = c_val;
        javascripr : CefCustomObject.func('vulnerability_species', layertype);

        // suonLayerType = "L3"
        // javascripr : CefCustomObject.func('suon', suonLayerType);

    }
}

// 서식지 취약성 (건드릴 필요 x)
function select_menu_change_area(value,val,c_val){
    
    // var layertype = $('input[name=vulner]:checked').val();
    // var layertypeArr = layertype.split("-");

    if(value == '1'){
        $('.select_logo_area' + val).css('display','none');
        $('.select_logo_area_off' + val).css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_area_off' + val).css('display','none');
        $('.select_logo_area' + val).css('display','');

        map.setView([
            34.7599, 127.7594
        ], 11);

        layertype = c_val;
        javascripr : CefCustomObject.func('vulnerability_area', layertype);

        // suonLayerType = "L3"
        // javascripr : CefCustomObject.func('suon', suonLayerType);

    }
}

// 사회경제 취약성 (건드릴 필요 x)
function select_menu_change_social(value,val,c_val){
    
    // var layertype = $('input[name=vulner]:checked').val();
    // var layertypeArr = layertype.split("-");

    if(value == '1'){
        $('.select_logo_social' + val).css('display','none');
        $('.select_logo_social_off' + val).css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_social_off' + val).css('display','none');
        $('.select_logo_social' + val).css('display','');

        map.setView([
            34.7599, 127.7594
        ], 11);

        layertype = c_val;
        javascripr : CefCustomObject.func('vulnerability_social', layertype);

        // suonLayerType = "L3"
        // javascripr : CefCustomObject.func('suon', suonLayerType);

    }
}

function deleteLayer(){

}
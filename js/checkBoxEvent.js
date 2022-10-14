
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
            javascripr : CefCustomObject.func('suon', layerType);
    
            //중복 방지
            $('.select_logo_detailsuon').css('display','none');
            $('.select_logo_detailsuon_off').css('display','');
            tifLayer.remove();
        }

        else if(val == '4'){ // 세부역 수온
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
        }
        else if(val == '5'){ // HNS 확산영역 최대확산범위 (현재 세부역 수온과 동일)
            $('.select_logo_range').css('display','');
            layerType = "L3";
            $('#select_menu5').css('display','block');
            map.setView([
                34.7599, 127.7594
            ], 11);
            javascripr : CefCustomObject.func('suon', layerType);
            
            //중복 방지
            $('.select_logo_midsuon').css('display','none');
            $('.select_logo_midsuon_off').css('display','');
            tifLayer.remove();
        }



        // 해양환경영향평가 (보호구역 취약성) , (번호수정필요)
        else if(val == '61'){
            
            var layertype = 01;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 02;

            $('.select_logo_protect').css('display','');
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
            
            var layertype = 03;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 04;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 05;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 06;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 07;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 08;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 09;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 10;

            $('.select_logo_protect').css('display','');
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
            
            var layertype = 11;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 12;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 13;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 14;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 15;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 16;
            
            $('.select_logo_protect').css('display','');
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
            
            var layertype = 01;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 02;

            $('.select_logo_species').css('display','');
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
            
            var layertype = 03;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 04;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 05;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 06;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 07;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 08;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 09;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 10;

            $('.select_logo_species').css('display','');
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
            
            var layertype = 11;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 12;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 13;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 14;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 15;
            
            $('.select_logo_species').css('display','');
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
            
            var layertype = 16;
            
            $('.select_logo_species').css('display','');
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



        // 해양환경평가 (번호 수정 필요)
        // 보호구역취약성
        else if(val == '61'){
            $('#select_menu61').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '62'){
            $('#select_menu62').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '63'){
            $('#select_menu63').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '64'){
            $('#select_menu64').css('display','none');
            //select_menu_change_range('1'); 
        }


        else if(val == '65'){
            $('#select_menu65').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '66'){
            $('#select_menu66').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '67'){
            $('#select_menu67').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '68'){
            $('#select_menu68').css('display','none');
            //select_menu_change_range('1'); 
        }


        else if(val == '69'){
            $('#select_menu69').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '610'){
            $('#select_menu610').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '611'){
            $('#select_menu611').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '612'){
            $('#select_menu612').css('display','none');
            //select_menu_change_range('1'); 
        }


        else if(val == '613'){
            $('#select_menu613').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '614'){
            $('#select_menu614').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '615'){
            $('#select_menu615').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '616'){
            $('#select_menu616').css('display','none');
            //select_menu_change_range('1'); 
        }


        // 종취약성
        else if(val == '71'){
            $('#select_menu71').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '72'){
            $('#select_menu72').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '73'){
            $('#select_menu73').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '74'){
            $('#select_menu74').css('display','none');
            //select_menu_change_range('1'); 
        }


        else if(val == '75'){
            $('#select_menu75').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '76'){
            $('#select_menu76').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '77'){
            $('#select_menu77').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '78'){
            $('#select_menu78').css('display','none');
            //select_menu_change_range('1'); 
        }


        else if(val == '79'){
            $('#select_menu79').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '710'){
            $('#select_menu710').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '711'){
            $('#select_menu711').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '712'){
            $('#select_menu712').css('display','none');
            //select_menu_change_range('1'); 
        }


        else if(val == '713'){
            $('#select_menu713').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '714'){
            $('#select_menu714').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '715'){
            $('#select_menu715').css('display','none');
            //select_menu_change_range('1'); 
        }
        else if(val == '716'){
            $('#select_menu716').css('display','none');
            //select_menu_change_range('1'); 
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
    for(var i =1; i < 999; i++){
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
        javascripr : CefCustomObject.func('suon', suonLayerType);

    }
}

// 레이어 선택 보기 이벤트 (해양환경 영향평가)
// 보호구역 (건드릴 필요 x)
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


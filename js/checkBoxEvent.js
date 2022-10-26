
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

            selectLayerIndexAdd('1');
           
            $('.select_logo_midyousok').css('display','');

            layerType = "L2";
            
            $('#select_menu1').css('display','block');
            $('.select_logo_detailyousok').css('display','none');
            $('.select_logo_detailyousok_off').css('display','');

            $('.legend_yousok_frame').css('display','none');
            javascripr : CefCustomObject.func('yousok', layerType);

            removeWindy(); //중복 방지

        }
        else if(val == '2'){ //세부역 유속

            selectLayerIndexAdd('3');

            $('.select_logo_detailyousok').css('display','');

            layerType = "L3";

            $('#select_menu3').css('display','block');
            $('.select_logo_midyousok').css('display','none');
            $('.select_logo_midyousok_off').css('display','');
            $('.legend_yousok_frame').css('display','none');

            javascripr : CefCustomObject.func('yousok', layerType);

            removeWindy() // 중복방지
        }
        else if(val == '3'){ // 중간역 수온

            selectLayerIndexAdd('2');

            $('.select_logo_midsuon').css('display','');

            layerType = "L2";
            $('.legend_yousok_frame').css('display','block');

            document.querySelector('#legend_text1').innerHTML = "-1.87℃"
            document.querySelector('#legend_text2').innerHTML = "22.07℃"

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

            selectLayerIndexAdd('4');

            $('.select_logo_detailsuon').css('display','');
            layerType = "L3";
            $('#select_menu4').css('display','block');
            $('.legend_yousok_frame').css('display','block');

            document.querySelector('#legend_text1').innerHTML = "0℃"
            document.querySelector('#legend_text2').innerHTML = "9.15℃"

            map.setView([
                34.7599, 127.7594
            ], 11);
            
            //중복 방지
            $('.select_logo_midsuon').css('display','none');
            $('.select_logo_midsuon_off').css('display','');

            $('.select_logo_range').css('display','none');
            $('.select_logo_range_off').css('display','');

            for(var i = 1; i < 17; i++){
                deleteLayer(i);
                deleteLayer_species(i);
                deleteLayer_area(i);
                deleteLayer_social(i);
            }

            javascripr : CefCustomObject.func('suon', layerType);

            tifLayer.remove();
        }
        else if(val == '5'){ // HNS 확산영역 최대확산범위 (현재 세부역 수온과 동일)

            selectLayerIndexAdd(5);

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

            for(var i = 1; i < 17; i++){
                deleteLayer(i);
                deleteLayer_species(i);
                deleteLayer_area(i);
                deleteLayer_social(i);
            }

            javascripr : CefCustomObject.func('suon', layerType);

            tifLayer.remove();
        }

         //데이터베이스

         else if(val == '10'){    

                        
            selectLayerIndexAdd('70');

            $('.select_logo_db1').css('display','');

            dbLayerType = "04_군립공원";

            $('#select_menu10').css('display','block');
            map.setView([
                36.5, 126
            ], 7);

            for(var i = 2; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
            
            javascripr : CefCustomObject.func('database', dbLayerType);

        }
        else if(val == '11'){    
            
            selectLayerIndexAdd('71');

            $('.select_logo_db2').css('display','');

            dbLayerType = "16_특별관리해역";

            $('#select_menu11').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            for(var i = 1; i<2; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            for(var i = 3; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }
        else if(val == '12'){    
                        
            selectLayerIndexAdd('72');

            $('.select_logo_db3').css('display','');

            dbLayerType = "양식장영역";

            $('#select_menu12').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            for(var i = 1; i<3; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            for(var i = 4; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }
        else if(val == '13'){    
                        
            selectLayerIndexAdd('73');

            $('.select_logo_db4').css('display','');

            dbLayerType = "조업집중구역(봄)";

            $('#select_menu13').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            for(var i = 1; i<4; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            for(var i = 5; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }

 
        else if(val == '17'){    

            selectLayerIndexAdd('78');

            $('.select_logo_db8').css('display','');

            dbLayerType = "18_환경보전지역";

            $('#select_menu17').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            for(var i = 1; i<8; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            for(var i = 9; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }

        /*   제대로 작동 안하는 DATABASE 데이터 추가 구현 필요 */

        else if(val == '14'){    

            selectLayerIndexAdd('75');

            $('.select_logo_db5').css('display','');

            dbLayerType = "03_국립공원";

            $('#select_menu14').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            for(var i = 1; i<5; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            for(var i = 6; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }

        else if(val == '15'){    

            selectLayerIndexAdd('76');

            $('.select_logo_db6').css('display','');

            dbLayerType = "05_도립공원";

            $('#select_menu15').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            for(var i = 1; i<6; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            for(var i = 7; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }


        else if(val == '16'){    

            selectLayerIndexAdd('77');

            $('.select_logo_db7').css('display','');

            dbLayerType = "17_수산자원보호구역";

            $('#select_menu16').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            for(var i = 1; i<7; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            for(var i = 8; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            
            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }

        else if(val == '18'){    

            selectLayerIndexAdd('79');

            $('.select_logo_db9').css('display','');

            dbLayerType = "어장정보도";

            $('#select_menu18').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            for(var i = 1; i<9; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 

            javascripr : CefCustomObject.func('database', dbLayerType);

        }



        else if(val == '999'){    
            
            selectLayerIndexAdd('74');

            $('.select_logo_st1').css('display','');

            dbLayerType = "해양산업시설_Point";

            $('#select_menu999').css('display','block');
            map.setView([
                36.5, 126
            ], 7);
            
            for(var i = 1; i<5; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            javascripr : CefCustomObject.func('database', dbLayerType);

        }


        // 해양환경영향평가 (보호구역 취약성) , (번호수정필요)
        else if(val == '61'){
                        
            selectLayerIndexAdd('6');

            var layertype = '01';
            var num = '1';

            $('#select_menu61').css('display','block');
            $('.select_logo_protect' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(num);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '62'){ 
                        
            selectLayerIndexAdd('7');

            var layertype = '02';
            var num ='2';

            $('#select_menu62').css('display','block');
            $('.select_logo_protect' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(num);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '63'){ 
                        
            selectLayerIndexAdd('8');

            var layertype = '03';
            var num = '3';

            $('#select_menu63').css('display','block');
            $('.select_logo_protect' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(num);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '64'){ 
                        
            selectLayerIndexAdd('9');

            var layertype = '04';
            var num = '4';

            $('#select_menu64').css('display','block');
            $('.select_logo_protect4').css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(num);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }

        else if(val == '65'){
                        
            selectLayerIndexAdd(10);

            var layertype = '05';
            var num = '5';

            $('#select_menu65').css('display','block');
            $('.select_logo_protect' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(num);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '66'){ 
                        
            selectLayerIndexAdd('11');

            var layertype = '06';
            var num = '6';
            
            $('#select_menu66').css('display','block');
            $('.select_logo_protect' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(num);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '67'){ 
                        
            selectLayerIndexAdd('12');

            var layertype = '07';
            var num = '7';
            
            $('#select_menu67').css('display','block');
            $('.select_logo_protect' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(num);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '68'){ 
                        
            selectLayerIndexAdd('13');

            var layertype = '08';
            var num = '8';
            
            $('#select_menu68').css('display','block');
            $('.select_logo_protect' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(num);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }

        else if(val == '69'){
                        
            selectLayerIndexAdd('14');

            var layertype = '09';
            var num = '9';

            $('#select_menu69').css('display','block');
            $('.select_logo_protect' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(num);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '610'){ 
                        
            selectLayerIndexAdd('15');

            var layertype = '10';

            $('#select_menu610').css('display','block');
            $('.select_logo_protect' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(layertype);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '611'){ 
                        
            selectLayerIndexAdd('16');

            var layertype = '11';
            
            $('#select_menu611').css('display','block');
            $('.select_logo_protect' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(layertype);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '612'){ 
                        
            selectLayerIndexAdd('17');

            var layertype = '12';
            
            $('#select_menu612').css('display','block');
            $('.select_logo_protect' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(layertype);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }

        else if(val == '613'){
                        
            selectLayerIndexAdd('18');

            var layertype = '13';
            
            $('#select_menu613').css('display','block');
            $('.select_logo_protect' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(layertype);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '614'){ 
                        
            selectLayerIndexAdd('19');

            var layertype = '14';
            
            $('#select_menu614').css('display','block');
            $('.select_logo_protect' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(layertype);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '615'){ 
                        
            selectLayerIndexAdd('20');

            var layertype = '15';
            
            $('#select_menu615').css('display','block');
            $('.select_logo_protect' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(layertype);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }
        else if(val == '616'){ 
                        
            selectLayerIndexAdd('21');

            var layertype = '16';
            
            $('#select_menu616').css('display','block');
            $('.select_logo_protect'  + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer(layertype);

            javascripr : CefCustomObject.func('vulnerability_protect', layertype);

        }


        // 종 취약성
        else if(val == '71'){
                        
            selectLayerIndexAdd('22');

            var layertype = '01';
            var num = '1';

            $('#select_menu71').css('display','block');
            $('.select_logo_species' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(num);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '72'){ 
                        
            selectLayerIndexAdd('23');

            var layertype = '02';
            var num ='2';

            $('#select_menu72').css('display','block');
            $('.select_logo_species' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(num);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '73'){ 
                        
            selectLayerIndexAdd('24');

            var layertype = '03';
            var num = '3';

            $('#select_menu73').css('display','block');
            $('.select_logo_species' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(num);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '74'){ 
                        
            selectLayerIndexAdd('25');

            var layertype = '04';
            var num = '4';

            $('#select_menu74').css('display','block');
            $('.select_logo_species4').css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(num);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }

        else if(val == '75'){
                        
            selectLayerIndexAdd('26');

            var layertype = '05';
            var num = '5';

            $('#select_menu75').css('display','block');
            $('.select_logo_species' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(num);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '76'){ 
                        
            selectLayerIndexAdd('27');

            var layertype = '06';
            var num = '6';
            
            $('#select_menu76').css('display','block');
            $('.select_logo_species' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(num);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '77'){ 
                        
            selectLayerIndexAdd('28');

            var layertype = '07';
            var num = '7';
            
            $('#select_menu77').css('display','block');
            $('.select_logo_species' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(num);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '78'){ 
                        
            selectLayerIndexAdd('29');

            var layertype = '08';
            var num = '8';
            
            $('#select_menu78').css('display','block');
            $('.select_logo_species' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(num);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }

        else if(val == '79'){
                        
            selectLayerIndexAdd('30');

            var layertype = '09';
            var num = '9';

            $('#select_menu79').css('display','block');
            $('.select_logo_species' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(num);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '710'){ 
                        
            selectLayerIndexAdd('31');

            var layertype = '10';

            $('#select_menu710').css('display','block');
            $('.select_logo_species' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(layertype);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '711'){ 
                        
            selectLayerIndexAdd('32');

            var layertype = '11';
            
            $('#select_menu711').css('display','block');
            $('.select_logo_species' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(layertype);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '712'){ 
                        
            selectLayerIndexAdd('33');

            var layertype = '12';
            
            $('#select_menu712').css('display','block');
            $('.select_logo_species' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(layertype);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }

        else if(val == '713'){
                        
            selectLayerIndexAdd('34');

            var layertype = '13';
            
            $('#select_menu713').css('display','block');
            $('.select_logo_species' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(layertype);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '714'){ 
                        
            selectLayerIndexAdd('35');

            var layertype = '14';
            
            $('#select_menu714').css('display','block');
            $('.select_logo_species' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(layertype);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '715'){ 
                        
            selectLayerIndexAdd('36');

            var layertype = '15';
            
            $('#select_menu715').css('display','block');
            $('.select_logo_species' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(layertype);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }
        else if(val == '716'){ 
                        
            selectLayerIndexAdd('37');

            var layertype = '16';
            
            $('#select_menu716').css('display','block');
            $('.select_logo_species'  + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_species(layertype);

            javascripr : CefCustomObject.func('vulnerability_species', layertype);

        }

        // 서식지 취약성
        else if(val == '81'){
                        
            selectLayerIndexAdd('38');

            var layertype = '01';
            var num = '1';

            $('#select_menu81').css('display','block');
            $('.select_logo_area' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(num);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '82'){ 
                        
            selectLayerIndexAdd('39');

            var layertype = '02';
            var num ='2';

            $('#select_menu82').css('display','block');
            $('.select_logo_area' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(num);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '83'){ 
                        
            selectLayerIndexAdd('40');

            var layertype = '03';
            var num = '3';

            $('#select_menu83').css('display','block');
            $('.select_logo_area' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(num);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '84'){ 
                        
            selectLayerIndexAdd('41');

            var layertype = '04';
            var num = '4';

            $('#select_menu84').css('display','block');
            $('.select_logo_area4').css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(num);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }

        else if(val == '85'){
                        
            selectLayerIndexAdd('42');

            var layertype = '05';
            var num = '5';

            $('#select_menu85').css('display','block');
            $('.select_logo_area' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(num);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '86'){ 
                        
            selectLayerIndexAdd('43');

            var layertype = '06';
            var num = '6';
            
            $('#select_menu86').css('display','block');
            $('.select_logo_area' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(num);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '87'){ 
                        
            selectLayerIndexAdd('44');

            var layertype = '07';
            var num = '7';
            
            $('#select_menu87').css('display','block');
            $('.select_logo_area' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(num);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '88'){ 
                        
            selectLayerIndexAdd('45');

            var layertype = '08';
            var num = '8';
            
            $('#select_menu88').css('display','block');
            $('.select_logo_area' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(num);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }

        else if(val == '89'){
                        
            selectLayerIndexAdd('46');

            var layertype = '09';
            var num = '9';

            $('#select_menu89').css('display','block');
            $('.select_logo_area' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(num);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '810'){ 
                        
            selectLayerIndexAdd('47');

            var layertype = '10';

            $('#select_menu810').css('display','block');
            $('.select_logo_area' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(layertype);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '811'){ 
                        
            selectLayerIndexAdd('48');

            var layertype = '11';
            
            $('#select_menu811').css('display','block');
            $('.select_logo_area' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(layertype);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '812'){ 
                        
            selectLayerIndexAdd('49');

            var layertype = '12';
            
            $('#select_menu812').css('display','block');
            $('.select_logo_area' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(layertype);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }

        else if(val == '813'){
                        
            selectLayerIndexAdd('50');

            var layertype = '13';
            
            $('#select_menu813').css('display','block');
            $('.select_logo_area' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(layertype);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '814'){ 
                        
            selectLayerIndexAdd('51');

            var layertype = '14';
            
            $('#select_menu814').css('display','block');
            $('.select_logo_area' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(layertype);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '815'){ 
                        
            selectLayerIndexAdd('52');

            var layertype = '15';
            
            $('#select_menu815').css('display','block');
            $('.select_logo_area' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(layertype);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }
        else if(val == '816'){ 
                        
            selectLayerIndexAdd('53');

            var layertype = '16';
            
            $('#select_menu816').css('display','block');
            $('.select_logo_area'  + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_area(layertype);

            javascripr : CefCustomObject.func('vulnerability_area', layertype);

        }

        // 사회경제 취약성

        else if(val == '91'){
                        
            selectLayerIndexAdd('54');

            var layertype = '01';
            var num = '1';

            $('#select_menu91').css('display','block');
            $('.select_logo_social' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(num);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '92'){ 
                        
            selectLayerIndexAdd('55');

            var layertype = '02';
            var num ='2';

            $('#select_menu92').css('display','block');
            $('.select_logo_social' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(num);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '93'){ 
                        
            selectLayerIndexAdd('56');

            var layertype = '03';
            var num = '3';

            $('#select_menu93').css('display','block');
            $('.select_logo_social' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(num);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '94'){ 
                        
            selectLayerIndexAdd('57');

            var layertype = '04';
            var num = '4';

            $('#select_menu94').css('display','block');
            $('.select_logo_social4').css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(num);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }

        else if(val == '95'){
                        
            selectLayerIndexAdd('58');

            var layertype = '05';
            var num = '5';

            $('#select_menu95').css('display','block');
            $('.select_logo_social' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(num);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '96'){ 
                        
            selectLayerIndexAdd('59');

            var layertype = '06';
            var num = '6';
            
            $('#select_menu96').css('display','block');
            $('.select_logo_social' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(num);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '97'){ 
                        
            selectLayerIndexAdd('60');

            var layertype = '07';
            var num = '7';
            
            $('#select_menu97').css('display','block');
            $('.select_logo_social' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(num);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '98'){ 
                        
            selectLayerIndexAdd('61');

            var layertype = '08';
            var num = '8';
            
            $('#select_menu98').css('display','block');
            $('.select_logo_social' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(num);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }

        else if(val == '99'){
                        
            selectLayerIndexAdd('62');

            var layertype = '09';
            var num = '9';

            $('#select_menu99').css('display','block');
            $('.select_logo_social' + num).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(num);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '910'){ 
                        
            selectLayerIndexAdd('63');

            var layertype = '10';

            $('#select_menu910').css('display','block');
            $('.select_logo_social' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(layertype);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '911'){ 
                        
            selectLayerIndexAdd('64');

            var layertype = '11';
            
            $('#select_menu911').css('display','block');
            $('.select_logo_social' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(layertype);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '912'){ 
                        
            selectLayerIndexAdd('65');

            var layertype = '12';
            
            $('#select_menu912').css('display','block');
            $('.select_logo_social' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(layertype);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }

        else if(val == '913'){
                        
            selectLayerIndexAdd('66');

            var layertype = '13';
            
            $('#select_menu913').css('display','block');
            $('.select_logo_social' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(layertype);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '914'){ 
                        
            selectLayerIndexAdd('67');

            var layertype = '14';
            
            $('#select_menu914').css('display','block');
            $('.select_logo_social' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(layertype);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '915'){ 
                        
            selectLayerIndexAdd('68');

            var layertype = '15';
            
            $('#select_menu915').css('display','block');
            $('.select_logo_social' + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(layertype);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

        }
        else if(val == '916'){ 
                        
            selectLayerIndexAdd('69');

            var layertype = '16';
            
            $('#select_menu916').css('display','block');
            $('.select_logo_social'  + layertype).css('display','');

            map.setView([
                34.7599, 127.7594
            ], 11);

            $('.select_logo_range').css('display', 'none');
            $('.select_logo_range_off').css('display', '');
            $('.select_logo_detailsuon').css('display', 'none');
            $('.select_logo_detailsuon_off').css('display', '');

            deleteLayer_social(layertype);

            javascripr : CefCustomObject.func('vulnerability_social', layertype);

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
            $('.legend_yousok_frame').css('display','none');
            select_menu_change_midsuon('1');

        }
        else if(val == '4'){
            $('#select_menu4').css('display','none');
            $('.legend_yousok_frame').css('display','none');
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


        else if(val == '14'){
            $('#select_menu14').css('display','none');
            select_menu_change_db('1','5')
        }
        else if(val == '15'){
            $('#select_menu15').css('display','none');
            select_menu_change_db('1','6')
        }
        else if(val == '16'){
            $('#select_menu16').css('display','none');
            select_menu_change_db('1','7')
        }
        else if(val == '17'){
            $('#select_menu17').css('display','none');
            select_menu_change_db('1','8')
        }
        else if(val == '18'){
            $('#select_menu13').css('display','none');
            select_menu_change_db('1','9')
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


            $("input:checkbox[id='layer_all"+i+"']").prop('checked',false); //10-26 해양선택(전체)체크박스 해제
           

            //체크박스 해제 시 만약 그려져 있다면 레이어 제거 (수정필요성 ?)

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

            else if(i == 14){
                select_menu_change_db('1','5'); 
            }

            else if(i == 15){
                select_menu_change_db('1','6'); 
            }

            else if(i == 16){
                select_menu_change_db('1','7'); 
            }

            else if(i == 17){
                select_menu_change_db('1','8'); 
            }

            else if(i == 18){
                select_menu_change_db('1','9'); 
            }

            //해양산업시설 (임시)
            else if(i == 999){
                select_menu_change_info('1','1'); 
            }

            //보호구역취약성
            else if(i == 61){
                $("input:checkbox[id='layer_6_01']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','1','01');
            }
            else if(i == 62){
                $("input:checkbox[id='layer_6_02']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','2','02');
            }
            else if(i == 63){
                $("input:checkbox[id='layer_6_03']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','3','03');
            }            
            else if(i == 64){
                $("input:checkbox[id='layer_6_04']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','4','04');
            }

            else if(i == 65){
                $("input:checkbox[id='layer_6_05']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','5','05');
            }
            else if(i == 66){
                $("input:checkbox[id='layer_6_06']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','6','06');
            }
            else if(i == 67){
                $("input:checkbox[id='layer_6_07']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','7','07');
            }            
            else if(i == 68){
                $("input:checkbox[id='layer_6_08']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','8','08');
            }


            else if(i == 69){
                $("input:checkbox[id='layer_6_09']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','9','09');
            }
            else if(i == 610){
                $("input:checkbox[id='layer_6_10']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','10','10');
            }
            else if(i == 611){
                $("input:checkbox[id='layer_6_11']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','11','11');
            }            
            else if(i == 612){
                $("input:checkbox[id='layer_6_12']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','12','12');
            }

            else if(i == 613){
                $("input:checkbox[id='layer_6_13']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','13','13');
            }
            else if(i == 614){
                $("input:checkbox[id='layer_6_14']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','14','14');
            }
            else if(i == 615){
                $("input:checkbox[id='layer_6_15']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','15','15');
            }            
            else if(i == 616){
                $("input:checkbox[id='layer_6_16']").prop('checked',false); //체크박스 해제
                select_menu_change_protect('1','16','16');
            }

            //종취약성
            else if(i == 71){
                $("input:checkbox[id='layer_7_01']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','1','01');
            }
            else if(i == 72){
                $("input:checkbox[id='layer_7_02']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','2','02');
            }
            else if(i == 73){
                $("input:checkbox[id='layer_7_03']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','3','03');
            }            
            else if(i == 74){
                $("input:checkbox[id='layer_7_04']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','4','04');
            }

            else if(i == 75){
                $("input:checkbox[id='layer_7_05']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','5','05');
            }
            else if(i == 76){
                $("input:checkbox[id='layer_7_06']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','6','06');
            }
            else if(i == 77){
                $("input:checkbox[id='layer_7_07']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','7','07');
            }            
            else if(i == 78){
                $("input:checkbox[id='layer_7_08']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','8','08');
            }


            else if(i == 79){
                $("input:checkbox[id='layer_7_09']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','9','09');
            }
            else if(i == 710){
                $("input:checkbox[id='layer_7_10']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','10','10');
            }
            else if(i == 711){
                $("input:checkbox[id='layer_7_11']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','11','11');
            }            
            else if(i == 712){
                $("input:checkbox[id='layer_7_12']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','12','12');
            }

            else if(i == 713){
                $("input:checkbox[id='layer_7_13']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','13','13');
            }
            else if(i == 714){
                $("input:checkbox[id='layer_7_14']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','14','14');
            }
            else if(i == 715){
                $("input:checkbox[id='layer_7_15']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','15','15');
            }            
            else if(i == 716){
                $("input:checkbox[id='layer_7_16']").prop('checked',false); //체크박스 해제
                select_menu_change_species('1','16','16');
            }

            //서식지 취약성
            else if(i == 81){
                $("input:checkbox[id='layer_8_01']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','1','01');
            }
            else if(i == 82){
                $("input:checkbox[id='layer_8_02']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','2','02');
            }
            else if(i == 83){
                $("input:checkbox[id='layer_8_03']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','3','03');
            }            
            else if(i == 84){
                $("input:checkbox[id='layer_8_04']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','4','04');
            }

            else if(i == 85){
                $("input:checkbox[id='layer_8_05']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','5','05');
            }
            else if(i == 86){
                $("input:checkbox[id='layer_8_06']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','6','06');
            }
            else if(i == 87){
                $("input:checkbox[id='layer_8_07']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','7','07');
            }            
            else if(i == 88){
                $("input:checkbox[id='layer_8_08']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','8','08');
            }


            else if(i == 89){
                $("input:checkbox[id='layer_8_09']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','9','09');
            }
            else if(i == 810){
                $("input:checkbox[id='layer_8_10']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','10','10');
            }
            else if(i == 811){
                $("input:checkbox[id='layer_8_11']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','11','11');
            }            
            else if(i == 812){
                $("input:checkbox[id='layer_8_12']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','12','12');
            }

            else if(i == 813){
                $("input:checkbox[id='layer_8_13']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','13','13');
            }
            else if(i == 814){
                $("input:checkbox[id='layer_8_14']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','14','14');
            }
            else if(i == 815){
                $("input:checkbox[id='layer_8_15']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','15','15');
            }            
            else if(i == 816){
                $("input:checkbox[id='layer_8_16']").prop('checked',false); //체크박스 해제
                select_menu_change_area('1','16','16');
            }
            
            //사회경제 취약성
            else if(i == 91){
                $("input:checkbox[id='layer_9_01']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','1','01');
            }
            else if(i == 92){
                $("input:checkbox[id='layer_9_02']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','2','02');
            }
            else if(i == 93){
                $("input:checkbox[id='layer_9_03']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','3','03');
            }            
            else if(i == 94){
                $("input:checkbox[id='layer_9_04']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','4','04');
            }

            else if(i == 95){
                $("input:checkbox[id='layer_9_05']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','5','05');
            }
            else if(i == 96){
                $("input:checkbox[id='layer_9_06']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','6','06');
            }
            else if(i == 97){
                $("input:checkbox[id='layer_9_07']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','7','07');
            }            
            else if(i == 98){
                $("input:checkbox[id='layer_9_08']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','8','08');
            }


            else if(i == 99){
                $("input:checkbox[id='layer_9_09']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','9','09');
            }
            else if(i == 910){
                $("input:checkbox[id='layer_9_10']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','10','10');
            }
            else if(i == 911){
                $("input:checkbox[id='layer_9_11']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','11','11');
            }            
            else if(i == 912){
                $("input:checkbox[id='layer_9_12']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','12','12');
            }

            else if(i == 913){
                $("input:checkbox[id='layer_9_13']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','13','13');
            }
            else if(i == 914){
                $("input:checkbox[id='layer_9_14']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','14','14');
            }
            else if(i == 915){
                $("input:checkbox[id='layer_9_15']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','15','15');
            }            
            else if(i == 916){
                $("input:checkbox[id='layer_9_16']").prop('checked',false); //체크박스 해제
                select_menu_change_social('1','16','16');
            }
        
        }
    }
}


// 레이어 선택 보기 이벤트 (해양환경정보)

function select_menu_change(value){
    if(value == '1'){
        $('.select_logo_midyousok').css('display','none');
        $('.select_logo_midyousok_off').css('display','');

        removeWindy();
    }
    else{

        $('.select_logo_midyousok_off').css('display','none');
        $('.select_logo_midyousok').css('display','');
        
        layerType = "L2";

        $('.select_logo_detailyousok').css('display','none');
        $('.select_logo_detailyousok_off').css('display',''); //중복방지

        javascripr : CefCustomObject.func('yousok', layerType);

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
        layerType = "L3";


        $('.select_logo_midyousok').css('display','none');
        $('.select_logo_midyousok_off').css('display','');

        javascripr : CefCustomObject.func('yousok', layerType);

        removeWindy();
    }
}

function select_menu_change_midsuon(value){
    if(value == '1'){
        $('.select_logo_midsuon').css('display','none');
        $('.legend_yousok_frame').css('display','none');
        $('.select_logo_midsuon_off').css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_midsuon_off').css('display','none');
        $('.select_logo_midsuon').css('display','');
        $('.legend_yousok_frame').css('display','block');
        
        document.querySelector('#legend_text1').innerHTML = "-1.87℃"
        document.querySelector('#legend_text2').innerHTML = "22.07℃"

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
        $('.legend_yousok_frame').css('display','none');
        $('.select_logo_detailsuon_off').css('display','');

        tifLayer.remove();
    }
    else{
        $('.select_logo_detailsuon_off').css('display','none');
        $('.select_logo_detailsuon').css('display','');
        $('.legend_yousok_frame').css('display','block');

        layerType = "L3";
        map.setView([
            34.7599, 127.7594
        ], 11);
        
        document.querySelector('#legend_text1').innerHTML = "0℃"
        document.querySelector('#legend_text2').innerHTML = "9.15℃"

        //중복 방지
        $('.select_logo_midsuon').css('display','none');
        $('.select_logo_midsuon_off').css('display','');

        $('.select_logo_range').css('display','none');
        $('.select_logo_range_off').css('display','');

        for(var i = 1; i < 17; i++){
            deleteLayer(i);
            deleteLayer_species(i);
            deleteLayer_area(i);
            deleteLayer_social(i);
        }

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

        for(var i = 1; i < 17; i++){
            deleteLayer(i);
            deleteLayer_species(i);
            deleteLayer_area(i);
            deleteLayer_social(i);
        }

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

            for(var i = 2; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }
        else if(val == '2'){
            dbLayerType = "16_특별관리해역";
            
            for(var i = 1; i<2; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            for(var i = 3; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }
        else if(val == '3'){
            dbLayerType = "양식장영역";

            for(var i = 1; i<3; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            for(var i = 4; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }

        else if(val =='4'){
            dbLayerType = "조업집중구역(봄)";

            for(var i = 1; i<4; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            for(var i = 5; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }



        else if(val =='5'){
            dbLayerType = "03_국립공원";

            for(var i = 1; i<5; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            for(var i = 6; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }

        else if(val =='6'){
            dbLayerType = "05_도립공원";

            for(var i = 1; i<6; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            for(var i = 7; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }

        else if(val =='7'){
            dbLayerType = "17_수산자원보호구역";

            for(var i = 1; i<7; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            for(var i = 8; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }

        else if(val =='8'){
            dbLayerType = "18_환경보전지역";

            for(var i = 1; i<8; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
            for(var i = 9; i<10; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

            $('.select_logo_st1').css('display','none');
            $('.select_logo_st_off1').css('display',''); 
        }

        else if(val =='9'){
            dbLayerType = "어장정보도";

            for(var i = 1; i<9; i++){
                $('.select_logo_db' + i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }

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

            for(var i = 1; i<5; i++){
                $('.select_logo_db'+ i).css('display','none');
                $('.select_logo_db_off' + i).css('display',''); 
            }
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
    
    if(value == '1'){
        $('.select_logo_protect' + val).css('display','none');
        $('.select_logo_protect_off' + val).css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_protect_off' + val).css('display','none');
        $('.select_logo_protect' + val).css('display','');

        $('.select_logo_range').css('display', 'none');
        $('.select_logo_range_off').css('display', '');
        $('.select_logo_detailsuon').css('display', 'none');
        $('.select_logo_detailsuon_off').css('display', '');

        map.setView([
            34.7599, 127.7594
        ], 11);

        for(var j =1; j<17; j++){
            if (val == j){
                deleteLayer(val);
            }
        }

        for(var i = 1; i<10; i++){
            if(c_val == i){
                c_val = "0" + i;
            }
        }

        layertype = c_val;
        javascripr : CefCustomObject.func('vulnerability_protect', layertype);
    }
}

// 종취약성 (건드릴 필요 x)
function select_menu_change_species(value,val,c_val){
    
    if(value == '1'){
        $('.select_logo_species' + val).css('display','none');
        $('.select_logo_species_off' + val).css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_species_off' + val).css('display','none');
        $('.select_logo_species' + val).css('display','');

        $('.select_logo_range').css('display', 'none');
        $('.select_logo_range_off').css('display', '');
        $('.select_logo_detailsuon').css('display', 'none');
        $('.select_logo_detailsuon_off').css('display', '');

        map.setView([
            34.7599, 127.7594
        ], 11);


        for(var j =1; j<17; j++){
            if (val == j){
                deleteLayer_species(val);
            }
        }

        for(var i = 1; i<10; i++){
            if(c_val == i){
                c_val = "0" + i;
            }
        }

        layertype = c_val;
        javascripr : CefCustomObject.func('vulnerability_species', layertype);
    }

}

// 서식지 취약성 (건드릴 필요 x)
function select_menu_change_area(value,val,c_val){

    if(value == '1'){
        $('.select_logo_area' + val).css('display','none');
        $('.select_logo_area_off' + val).css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_area_off' + val).css('display','none');
        $('.select_logo_area' + val).css('display','');

        $('.select_logo_range').css('display', 'none');
        $('.select_logo_range_off').css('display', '');
        $('.select_logo_detailsuon').css('display', 'none');
        $('.select_logo_detailsuon_off').css('display', '');

        map.setView([
            34.7599, 127.7594
        ], 11);

        for(var j =1; j<17; j++){
            if (val == j){
                deleteLayer_area(val);
            }
        }

        for(var i = 1; i<10; i++){
            if(c_val == i){
                c_val = "0" + i;
            }
        }

        layertype = c_val;
        javascripr : CefCustomObject.func('vulnerability_area', layertype);
    }
}

// 사회경제 취약성 (건드릴 필요 x)
function select_menu_change_social(value,val,c_val){
    
    if(value == '1'){
        $('.select_logo_social' + val).css('display','none');
        $('.select_logo_social_off' + val).css('display','');
        tifLayer.remove();
    }
    else{
        $('.select_logo_social_off' + val).css('display','none');
        $('.select_logo_social' + val).css('display','');

        $('.select_logo_range').css('display', 'none');
        $('.select_logo_range_off').css('display', '');
        $('.select_logo_detailsuon').css('display', 'none');
        $('.select_logo_detailsuon_off').css('display', '');

        map.setView([
            34.7599, 127.7594
        ], 11);

        for(var j =1; j<17; j++){
            if (val == j){
                deleteLayer_social(val);
            }
        }

        for(var i = 1; i<10; i++){
            if(c_val == i){
                c_val = "0" + i;
            }
        }

        layertype = c_val;
        javascripr : CefCustomObject.func('vulnerability_social', layertype);
    }

}

var velocityLayer = "";

var c_maxLon = "";
var c_maxLat = "";
var c_minLon = "";
var c_minLat = "";

var c_nx = "";
var c_ny = "";
var c_gu = "";
var c_gv = "";
var view = "";

function windyValue(max_lon,max_lat,min_lon,min_lat,nx,ny,gu,gv,view){

    c_maxLon = "";
    c_maxLat = "";
    c_minLon = "";
    c_minLat = "";

    c_nx = "";
    c_ny = "";
    c_gu = "";
    c_gv = "";

    var view = parseInt(view);

    c_maxLon = parseFloat(max_lon);
    c_maxLat = parseFloat(max_lat);

    c_minLon = parseFloat(min_lon);
    c_minLat = parseFloat(min_lat);

    c_nx = parseInt(nx);
    c_ny = parseInt(ny);   

    c_gu = gu.split(',');
    c_gv = gv.split(',');

    L3_Windy(view);

}

function L3_Windy(view) {
    if(view == 1){
        map.setView([
            36.5, 126
        ], 7);
    }
    else{
        map.setView([
            34.7599, 127.7594
        ], 11);
    }

    const data = [
        {
            header: {
                parameterNumber: 2, // 고정

                dx: (c_maxLat - c_minLat) / c_ny, 
                dy: (c_maxLon - c_minLon) / c_nx,

                la1: c_maxLat, // 최대
                la2: c_minLat, // 최소 la / ny

                parameterCategory: 2, // 고정

                lo1: c_minLon, // 최소
                lo2: c_maxLon, // 최대 lo / nx

                nx: c_nx, // lo
                ny: c_ny, // la

                
            },

            data: 
            c_gu

            },

            {
                header:{

                    parameterNumber:3,
                    parameterCategory:2,

                },

                data:
                c_gv
            }
        ];
            

    velocityLayer = L.velocityLayer({
        displayValues: true,
        displayOptions: {
          // 라벨 접두사
          velocityType: "Global Wind",
      
          // leaflet 제어 위치
          position: "bottomleft",
      
          // 커서 데이터 없음
          emptyString: "No velocity data", 
      
          // see explanation below
          angleConvention: "bearingCW",
      
          // display cardinal direction alongside degrees
          showCardinal: false,
      
          // one of: ['ms', 'k/h', 'mph', 'kt']
          speedUnit: "ms",
      
          // direction label prefix
          directionString: "Direction",
      
          // speed label prefix
          speedString: "Speed",
        },

        data: data,


        minVelocity: 0, // used to align color scale
        maxVelocity: 10, // used to align color scale
        velocityScale: 0.005, // modifier for particle animations, arbitrarily defaults to 0.005
        colorScale: [], // define your own array of hex/rgb colors
        onAdd: null, // callback function
        onRemove: null, // callback function
        opacity: 0.97, // layer opacity, default 0.97

        // optional pane to add the layer, will be created if doesn't exist
        // leaflet v1+ only (falls back to overlayPane for < v1)
        paneName: "overlayPane",
    });

    map.addLayer(velocityLayer);
}

function removeWindy(){
  map.removeLayer(velocityLayer);
}
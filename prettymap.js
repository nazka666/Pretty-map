jQuery.fn.extend({  
        Gmap: function(options){ 
            var parentObj=$(this).parent();

            //Default configuration
            var defaults={
                 styles:{
                    width_parent:parentObj.width(),
                    height_parent:parentObj.height()
                },
                google_opts:{
                    mapstyle:null,
                    mapTypeId:google.maps.MapTypeId.ROADMAP,
                    zoom:8,
                    center:{
                        lat:39.00000,
                        lng:39.00000
                    }  
                }
                
            };


            /*Search the map container layer*/
            var maplayer=$("body").find("#map");
            var mapstyles=defaults.mapstyle;
            /*If not exist the map container layer, we must create it*/
            if(!maplayer.length){
                /*Catch the mother layer size*/
                $(this).append("<div id='map'></div>");
                $("div#map").css({'width':defaults.styles.width_parent+'px','height':defaults.styles.height_parent+'px'});
            }
            else{
                if(maplayer.css("height")=="0px"){maplayer.css({"height":defaults.styles.width_parent+'px'});}
            }


            //Create the google map object
            var map = new google.maps.Map(document.getElementById("map"));

            if(typeof(options)=="undefined"){
               
            }
            else{
                if(typeof(options.positions)=="undefined"){defaults.google_opts.center.lat=options.positions.lat;defaults.google_opts.center.lng=options.positions.lng;}
                if(typeof(options.mapstyle)!="undefined"){
                    defaults.google_opts.mapstyle=options.mapstyle;
                    defaults.google_opts.mapTypeId='Styled';
                    var styledMapType = new google.maps.StyledMapType(defaults.google_opts.mapstyle, { name: 'Styled' });
                    
                }
                if(typeof(options.zoom)!="undefined")defaults.google_opts.zoom=options.zoom;

            } 

            //Create the map with the configuration

            var gmapCenter=new google.maps.LatLng(defaults.google_opts.center.lat,defaults.google_opts.center.lng);
            map.setCenter(gmapCenter);
            map.setZoom(defaults.google_opts.zoom);
            map.mapTypes.set(defaults.google_opts.mapTypeId, styledMapType);
            map.setMapTypeId(defaults.google_opts.mapTypeId);
        }
             
});  

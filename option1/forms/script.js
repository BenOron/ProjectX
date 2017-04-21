/*
https://codepen.io/agrimsrud/pen/vtoqy*/
/*
http://tesseract.projectnaptha.com/
*/

$(document).ready(function () {
    $("#gosh").autocomplete({
        delay: 30,
        source: function (request, response) {
            
            // Suggest URL
            var suggestURL = "//www.govmap.gov.il/Handlers/AutoComplete.ashx?cb=block&term=%QUERY";
            //suggestURL = request.term.trim >3 ? suggestURL.replace('%QUERY', request.term): returm ;
            //debugger;
            if(request.term.trim().length >2){
                suggestURL  =suggestURL.replace('%QUERY', request.term);
            }else{
                 return;
            }
            // JSONP Request
            $.ajax({
                method: 'GET',
                dataType: 'json',
                jsonpCallback: 'jsonCallback',
                url: suggestURL
            })
            .success(function(data){
                response(data);
            });
        }
    });
    
    
     $("#hilka").autocomplete({
        delay: 30,
        source: function (request, response) {
            // Suggest URL
            var suggestURL = "//www.govmap.gov.il/Handlers/AutoComplete.ashx?cb=parcel&cv="+ $("#gosh").val() +"&term=%QUERY";
            //suggestURL = request.term.trim >3 ? suggestURL.replace('%QUERY', request.term): returm ;
            //debugger;
            if(request.term.trim().length >1){
                suggestURL  =suggestURL.replace('%QUERY', request.term);
            }else{
                 return;
            }
            // JSONP Request
            $.ajax({
                method: 'GET',
                dataType: 'json',
                jsonpCallback: 'jsonCallback',
                url: suggestURL
            })
            .success(function(data){
                response(data);
            });
        }
    });

});
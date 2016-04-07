var API_PATH = "https://twweatherapi.herokuapp.com/week2?location=all&output=json";
var API_PATH2 = "https://twweatherapi.herokuapp.com/warning?output=json";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}

function getData2(cb) {
  $.ajax({
    url : API_PATH2,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 23.973875, lng: 120.982024},
    zoom: 7
  });
}

var map;

//Custom style
var styleCustom = [
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.arterial",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.local",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }]
  }
];

//Gmaps style
var styleBasic = [
  { featureType: "all", elementType: "all", stylers: [{ visibility: "off" }] },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "road",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "transit.station",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ visibility: "simplified" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  }
];
var customType = new google.maps.StyledMapType(styleCustom, { name: "Custom" });
var basicType = new google.maps.StyledMapType(styleBasic, { name: "Basic" });

//Latitude/longitude preset
const lat = 25.046771,
  lng = 121.535064;

const $center = document.getElementById("center");

//寵物友善地區分類
var customLabel = {
  restaurant: {
    label: "R"
  },
  stay: {
    label: "S"
  },
  point: {
    label: "P"
  }
};

$(function() {
  initialize();
});

/*** Gmaps initialize ***/
function initialize() {
  //獲取設備當前的位置
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: {
      lat: lat,
      lng: lng
    },
    zoom: 14,
    styles: styleCustom,
    mapTypeControl: false,
    zoomControl: false,
    panControl: false,
    scaleControl: false,
    streetViewControl: false,
    scrollwheel: false,
    draggable: true
  });

  //Draw overlay
  var overlay = new google.maps.OverlayView();
  overlay.draw = function() {};
  overlay.setMap(map);

  //Gmap skin
  map.mapTypes.set("Custom", customType);
  map.mapTypes.set("Basic", basicType);

  //Zoom control
  zoomControl();

  //Add custom markers
  setMarkers();

  //友善動物地區分類
  friendlyArea()
}

function geoSuccess(pos) {
  var crd = pos.coords;
  //Add center marker
  centerMarker(crd.latitude, crd.longitude);
}

function geoError(err) {
  $center.style.display = "none";
  console.warn("ERROR(" + err.code + "): " + err.message);
}

/*** Center marker ***/
function centerMarker(latitude, longitude) {
  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    icon: {
      url: "https://img.icons8.com/ios/40/2466fa/street-view-filled.png",
      size: new google.maps.Size(40, 40), //icon px
      origin: new google.maps.Point(0, 0), //icon ori pos
      anchor: new google.maps.Point(20, 20) //icon center
    },
    zIndex: 1,
    position: new google.maps.LatLng(latitude, longitude)
  });
  marker.setMap();

  //click event
  google.maps.event.addDomListener(center, "click", function() {
    map.setZoom(15);
    map.setCenter(new google.maps.LatLng(latitude, longitude));
  });
}
/*** Zoom control ***/
function zoomControl() {
  var zoomIn = document.getElementById("zoomIn");
  var zoomOut = document.getElementById("zoomOut");

  google.maps.event.addDomListener(zoomOut, "click", function() {
    var currentZoomLevel = map.getZoom();
    if (currentZoomLevel != 0) {
      map.setZoom(currentZoomLevel - 1);
    }
  });

  google.maps.event.addDomListener(zoomIn, "click", function() {
    var currentZoomLevel = map.getZoom();
    if (currentZoomLevel != 21) {
      map.setZoom(currentZoomLevel + 1);
    }
  });
}

/*** Custom marker event ***/
var markerData = [
  { id: 1, name: "松山文創園區", x: "25.0440459", y: "121.5578874" },
  { id: 2, name: "台北車站", x: "25.0475419", y: "121.5139815" },
  { id: 3, name: "台北小巨蛋", x: "25.051659", y: "121.5496839" },
  { id: 4, name: "捷運中山國小站", x: "25.0627672", y: "121.523779" }
];
var markers = [],
  oldMarker = "",
  infowindows = [];

function setMarkers() {
  $.each(markerData, function(i, el) {
    //Set marker
    var marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP, //google.maps.Animation.DROP
      icon: {
        url: "https://img.icons8.com/material-rounded/48/b93939/marker.png",
        size: new google.maps.Size(48, 48), //icon px
        origin: new google.maps.Point(0, 0), //icon ori pos
        anchor: new google.maps.Point(24, 24) //icon center
      },
      zIndex: 2,
      position: new google.maps.LatLng(el.x, el.y)
    });
    markers[el.id] = marker;

    //Set infowindow
    var info = '<div id="infoBox"><div><h6> ' + el.name + "</h6></div></div>";
    var infowindow = new google.maps.InfoWindow({
      pixelOffset: new google.maps.Size(0, -18),
      content: info
    });
    infowindows[el.id] = infowindow;

    //Markers click event
    google.maps.event.addListener(markers[el.id], "click", function() {
      //Infobox show/hide
      if (infowindow) infowindow.close();

      //Marker on/off
      if (oldMarker == "") {
        markerOn(el.id);
      } else {
        if (oldMarker != el.id) {
          markerOff(oldMarker);
          markerOn(el.id);
        }
      }
    });
  });
}

function markerOff(old) {
  infowindows[old].close(map, markers[old]);
  markers[old].setAnimation(null);
  markers[old].setIcon(
    "https://img.icons8.com/material-rounded/48/b93939/marker.png"
  );
  markers[old].setZIndex(1);
}

function markerOn(now) {
  map.setCenter(markers[now].getPosition());
  infowindows[now].open(map, markers[now]);
  markers[now].setAnimation(google.maps.Animation.BOUNCE);
  markers[now].setIcon(
    "https://img.icons8.com/material-rounded/48/d04a4a/marker.png"
  );
  markers[now].setZIndex(10);
  oldMarker = now;
}

function friendlyArea(){
  // Change this depending on the name of your PHP or XML file
  downloadUrl('../php/map_googleMap.php', function(data) {
    var xml = data.responseXML;
    var markers = xml.documentElement.getElementsByTagName('marker');
    Array.prototype.forEach.call(markers, function(markerElem) {
      var id = markerElem.getAttribute('id');
      var name = markerElem.getAttribute('name');
      var address = markerElem.getAttribute('address');
      var type = markerElem.getAttribute('type');
      var point = new google.maps.LatLng(
          parseFloat(markerElem.getAttribute('lat')),
          parseFloat(markerElem.getAttribute('lng')));

      var infowincontent = document.createElement('div');
      var strong = document.createElement('strong');
      strong.textContent = name
      infowincontent.appendChild(strong);
      infowincontent.appendChild(document.createElement('br'));

      var text = document.createElement('text');
      text.textContent = address
      infowincontent.appendChild(text);
      var icon = customLabel[type] || {};
      var marker = new google.maps.Marker({
        map: map,
        position: point,
        label: icon.label
      });
      marker.addListener('click', function() {
        infoWindow.setContent(infowincontent);
        infoWindow.open(map, marker);
      });
    });
  });
}



function downloadUrl(url, callback) {
var request = window.ActiveXObject ?
    new ActiveXObject('Microsoft.XMLHTTP') :
    new XMLHttpRequest;

request.onreadystatechange = function() {
  if (request.readyState == 4) {
    request.onreadystatechange = doNothing;
    callback(request, request.status);
  }
};

request.open('GET', url, true);
request.send(null);
}

function doNothing() {}
}

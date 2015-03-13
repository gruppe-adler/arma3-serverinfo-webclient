/*global google, $, _ */
/*
* Ursprung: (links unten): {lat: -2.8115, lng: -0}
* 1km lat === 0.188 ===>
* 1km lng === 0.189
*/
(function () {

    var initialZoom = 7;
    var tileSize = 256;
    var map;
    var markers = {};

    function isOutOfBounds(x, y, numTiles) {
        if (y < 0 || y >= numTiles) {
            return true;
        }
        if (x < 0 || x >= numTiles) {
            return true;
        }
    }
    var armaMapType = new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            var x = coord.x;
            var y = coord.y;
            var numTiles = Math.pow(2, zoom - 1);
            var tileZoom = zoom - initialZoom;
            x = x - numTiles;
            y = y - numTiles;

            var myY = Math.pow(2, tileZoom) - (y + 1);

            if (isOutOfBounds(x, myY, numTiles)) {
                return null;
            }

            var baseURL = 'maptiles/stratis_18022/';
            baseURL += [tileZoom, x, myY].join('/') + '.png';
            return baseURL;
        },
        tileSize: new google.maps.Size(tileSize, tileSize),
        isPng: true,
        minZoom: initialZoom + 2,
        maxZoom: initialZoom + 7,
        name: 'Stratis T10'
    });
    function init() {
        map = new google.maps.Map(document.querySelector('#map'), {
            zoom: 7,
            center: gameCoordsToLatLng(5000, 5000),
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'armaMapType']
            }
        });
        map.mapTypes.set('map', armaMapType);
        map.setMapTypeId('map');
    }

    /**
     * in-game coordinates are in meters, with 0,0 at south west corner of map
     * @param x
     * @param y
     *
     * For simplicity's sake, I will translate
     *
     */
    function gameCoordsToLatLng(x, y) {
        return new google.maps.LatLng(y * 0.000189 + +-2.8115, x * 0.000188);
    }
    function latLngToGameCoords(latLng) {
        return {
            x: latLng.lat() / 0.000188,
            y: latLng.lng() + 2.8115 / 0.000189,
            z: 0
        };
    }

    var moveMarkerSmoothlyInOneSecond = (function () {
        var
            currentlyMovingMarkers = [],
            currentlyMovingMarkerTargets = [];
        return function (marker, targetPos) {

            var existingIndex = currentlyMovingMarkers.indexOf(marker);
            if (existingIndex !== -1) {
                clearInterval(existingIndex);
                marker.setPosition(currentlyMovingMarkerTargets[existingIndex]);
                delete currentlyMovingMarkers[existingIndex];
                delete currentlyMovingMarkerTargets[existingIndex];
            }

            var
                targetTime = 1000,
                steps = 10,
                oldPos = marker.getPosition(),
                oldLat = oldPos.lat(),
                oldLng = oldPos.lng(),
                latDiff = (targetPos.lat() - oldLat) / steps,
                lngDiff = (targetPos.lng() - oldLng) / steps,
                cnt = 0,
                intervalId;

            intervalId = setInterval(function () {
                if (!currentlyMovingMarkers[intervalId]) {
                    return;
                }
                if (cnt >= steps) {
                    clearInterval(intervalId);
                    marker.setPosition(targetPos);
                    return;
                }
                cnt += 1;

                marker.setPosition(new google.maps.LatLng(oldLat + cnt * latDiff, oldLng + cnt * lngDiff));

            }, targetTime / steps);

            currentlyMovingMarkers[intervalId] = marker;
            currentlyMovingMarkerTargets[intervalId] = targetPos;
        };
    }());


    function updateMap(data) {
        _.each(data, function (val, name) {
            var m = markers[name] || new google.maps.Marker({
                    position: { lat: 0, lng: 0 },
                    map: map,
                    title: name
                });

            moveMarkerSmoothlyInOneSecond(m, gameCoordsToLatLng(val.position.x, val.position.y));
            //m.setPosition(gameCoordsToLatLng(val.position.x, val.position.y));

            m.setIcon('images/player-' + (val.side || 'unknown') + '.png');
            m.infowindow = m.infowindow || new google.maps.InfoWindow({
                content: '?'
            });
            m.infowindow.content = '<div>' + name + '</div>';
            markers[name] = m;
        });
    }

    function markerAction(methodName) {
        _.each(markers, function (m) {
            m.infowindow[methodName](map, m);
        });
    }

    function clearMap() {
        _.each(markers, function (marker, idx) {
            marker.setMap(null);
            delete markers[idx];
        });
    }

    window.map = {
        init: init,
        updateMap: updateMap,
        clearMap: clearMap,
        showMarkers: function () {markerAction('open'); },
        hideMarkers: function () {markerAction('close'); }
    };
}());

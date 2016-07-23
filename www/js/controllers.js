angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
   $scope.vehicules = [
      {
         name:'Toyota Prius',
         licence:'SMR-95-43'
      },
      {
         name:'Toyota Prius',
         licence:'SMR-95-43'
      },
      {
         name:'Toyota Prius',
         licence:'SMR-95-43'
      },
      {
         name:'Toyota Prius',
         licence:'SMR-95-43'
      },
      {
         name:'Toyota Prius',
         licence:'SMR-95-43'
      },
      {
         name:'Toyota Prius',
         licence:'SMR-95-43'
      },
      {
         name:'Toyota Prius',
         licence:'SMR-95-43'
      }
   ]
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
     // When the window has finished loading create our google map below
     google.maps.event.addDomListener(window, 'load', init);
         // Basic options for a simple Google Map
         // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
         var mapOptions = {
             // How zoomed in you want the map to start at (always required)
             zoom: 11,

             // The latitude and longitude to center the map (always required)
             center: new google.maps.LatLng(40.6700, -73.9400), // New York

             // How you would like to style the map.
             // This is where you would paste any style found on Snazzy Maps.
             styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"saturation":"4"},{"color":"#888888"},{"visibility":"simplified"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1},{"color":"#29dbdb"},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-1.0989010989011234},{"lightness":"-12"},{"gamma":1},{"visibility":"off"},{"color":"#888888"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"100"},{"lightness":"100"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"saturation":"3"},{"color":"#000000"},{"lightness":"9"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"saturation":"-11"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"saturation":"44"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#00ffff"},{"saturation":"-28"},{"lightness":"32"},{"gamma":1}]}]
         };

         // Get the HTML DOM element that will contain your map
         // We are using a div with id="map" seen below in the <body>
         var mapElement = document.getElementById('map');

         // Create the Google Map using our element and options defined above
         var map = new google.maps.Map(mapElement, mapOptions);

         // Let's also add a marker while we're at it
         var marker = new google.maps.Marker({
             position: new google.maps.LatLng(40.6700, -73.9400),
             map: map,
             title: 'Snazzy!'
         });

      $scope.chats = Chats.all();
      $scope.remove = function(chat) {
         Chats.remove(chat);
      };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('HomeCtrl', function($scope, $stateParams, Chats) {
   alert();
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

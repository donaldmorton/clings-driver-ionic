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

.controller('ChatsCtrl', function($scope,Chats,$cordovaGeolocation,$interval) {
     // With the new view caching in Ionic, Controllers are only called
     // when they are recreated or on app start, instead of every page change.
     // To listen for when this page is active (for example, to refresh data),
     // listen for the $ionicView.enter event:
     //
     //$scope.$on('$ionicView.enter', function(e) {
     //});

      $scope.options= {'styles': [
          {
              "stylers": [
                  {
                      "hue": "#2c3e50"
                  },
                  {
                      "saturation": 250
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": 50
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          }
      ]}

      $scope.marker={}
      $scope.markerOption={icon:'https://2q72xc49mze8bkcog2f01nlh-wpengine.netdna-ssl.com/wp-content/uploads/2012/07/mapblack80px_v4.png'}

      var posOptions = {timeout: 10000, enableHighAccuracy: false};
      $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
         console.log(position);
         var lat  = position.coords.latitude
         var long = position.coords.longitude
         $scope.map = { center: { latitude: lat, longitude: long }, zoom: 40 };
         $scope.marker.latitude = lat
         $scope.marker.longitude = long
      }, function(err) {
         // error
      });

     $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
      $interval(function(){
      },1000)



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
})
.controller('orderCtrl',function($scope){
  $scope.shownGroup = null;

  $scope.items=[
    {
      name:'Shirt',
      price:'49.99'
    },
    {
      name:'Blouse',
      price:'49.99'
    },
    {
      name:'Pants',
      price:'49.99'
    }
  ]

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

});

musicApp.controller('MainController',
  function displayMusic($scope, GetMusicLists, GetMusic, $sce) {

    SC.initialize({
      client_id: '33bd0ccbdd917e2575a37fc7c744fe5c'
    });

    GetMusicLists.getHype().then(function(data) {
      $scope.hypem = data;
    });


    GetMusicLists.getItunes().then(function(data) {
      $scope.itunes = data;
    });

    GetMusicLists.getLastFM().then(function(data) {
      $scope.lastfm = data;

    });
    $scope.quantity = 20;


    $scope.play = SC.oEmbed('https://api.soundcloud.com/tracks/227352995', {
      auto_play: false,
      maxwidth: 500,
      maxheight: 200
    }).then(function(oEmbed) {
      $scope.$apply($scope.scWidget = $sce.trustAsHtml(oEmbed.html));
    });

    GetMusic.hypeMusic().then(function(data) {
      console.log(data);
    });


  });

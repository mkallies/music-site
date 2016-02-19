musicApp.factory('GetMusicLists', function($http) {
  return {
    getHype: function() {
      return $http.get('http://hypem.com/playlist/popular/3day/json/1/data.js')
        .then(function(response) {
          return response.data;
      });
    },
    getItunes: function() {
      return   $http.get('https://itunes.apple.com/us/rss/topsongs/limit=20/explicit=true/json')
        .then(function(response) {
          return response.data.feed.entry;
        });
    },
    getLastFM: function() {
      return $http.get('http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&format=json&api_key=c920361653455b3f809b6c38bcfc5a43').then(function(response) {
          return response.data.tracks.track;
        });
    }
  };
});

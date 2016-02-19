musicApp.factory('GetMusic', function($http) {
  return {
    hypeMusic: function() {
      return $http.get('http://hypem.com/playlist/popular/3day/json/1/data.js')
        .then(function(response) {
          var list = [], songQ = '';
          for (var i = 0; i < response.length; i++) {
            songQ = response.data[i].artist + ' ' + response.data[i].title;
            $http.get('/tracks', {q: songQ}).then(function(tracks) {
              console.log(tracks);
            })
          }

      });
    },
    itunesMusic: function() {
      return   $http.get('https://itunes.apple.com/us/rss/topsongs/limit=20/explicit=true/json')
        .then(function(response) {
          return response.data.feed.entry;
        });
    },
    lastfmMusic: function() {
      return $http.get('http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&format=json&api_key=c920361653455b3f809b6c38bcfc5a43').then(function(response) {
          return response.data.tracks.track;
        });
    }
  };
});

var searchbar = document.getElementById('searchbar');
var google = "http://www.google.com.au/search?q=";
var searchprovider = google;

var searches = [

  ['/m ', 'google maps', 'https://www.google.com.au/maps/search/'],
  ['/i ', 'google images',	'https://www.google.com.au/search?site=imghp&tbm=isch&source=hp&biw=1540&bih=762&q='],
  ['/a ', 'amazon', 'https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords='],
  ['/f ', 'facebook', 'https://www.facebook.com/search/top/?q='],
  ['/t ', 'twitter', 'https://twitter.com/search?q='],
  ['/w ', 'wikipedia', 'https://www.google.com.au/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=site:wikipedia.org+'],
  ['/wa ', 'wolfram alpha', 'http://www.wolframalpha.com/input/?i='],
  ['/y ', 'youtube', 'https://www.youtube.com/results?search_query='],
  ['/n ', 'netflix', 'https://www.netflix.com/search?q='],
  ['/stan ', 'stan', 'https://play.stan.com.au/feed?url=https%3A%2F%2Fv12.search.api.stan.com.au%2Fsearch%3Fq%3D'],
  ['/av ', 'amazon video', 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dinstant-video&field-keywords='],
  ['/imdb ', 'imdb', 'http://www.imdb.com/find?ref_=nv_sr_fn&s=all&q='],
  ['/r ', 'reddit', 'https://www.google.com.au/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=site:reddit.com+'],
  ['/s ', 'subreddit', 'https://www.reddit.com/r/'],
  ['/h ', 'hacker news', 'https://www.google.com.au/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=site:news.ycombinator.com+'],
  ['/hr ', 'hacker news and reddit', 'https://www.google.com.au/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=site:reddit.com+OR+site:news.ycombinator.com+'],
  ['/g ', 'github', 'https://www.google.com.au/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=site:github.com+'],

]

searchbar.addEventListener('keyup', function(event){

  var value = searchbar.value;

  if (value == "/?") {
    document.getElementById('help').style.display = 'block';
    searchbar.value = "";
    searchbar.setAttribute("placeholder", "");
    document.getElementById('help').innerHTML = "";
    for (i=0;i<searches.length;i++) {
      var com = String(searches[i][0] + "    ").slice(0,6);
      document.getElementById('help').innerHTML += "<li>"+com+"- "+searches[i][1]+"</li>";
    }
  }

  else if (event.keyCode == 13 || event.which == 13){
    if (value.indexOf(" ") == -1 && value.indexOf(".") > 0) {
      window.location.href = "http://"+encodeURIComponent(searchbar.value);
    } else {
      window.location.href = searchprovider+encodeURIComponent(searchbar.value);
    }
	}

  else if (value.charAt(0) == "/" && value.indexOf(" ") > 0) {
    for (i=0;i<searches.length;i++) {
      if (value == searches[i][0]) {
        searchprovider = searches[i][2];
        searchbar.value = "";
        document.getElementById('searchlabel').style.width = '400px';
        window.setTimeout(resetSize,100, searches[i][1]);
      }
    }
  }
})

searchbar.addEventListener('keydown', function(event){
  if ((event.keyCode == 8 || event.which == 8) && searchbar.value == "") {
    document.getElementById('searchlabel').style.width = '400px';
    window.setTimeout(resetSize,100, "search");
    searchprovider = google;
  }
})

function resetSize(text) {
  document.getElementById('searchlabel').style.width = '200px';
  document.getElementById('searchlabel').innerHTML = text + ": ";
}

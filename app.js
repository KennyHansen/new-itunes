function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList){
    // console.log(songList);
    // This is where you task begins
    var songDisplay = document.getElementById("song-list")
    songDisplay.innerHTML = `<div class="row">`

    for(key in songList) {
      var song = songList[key]
      if (song.id === 'song') {
         songDisplay.innerHTML +=
        `
          <div class="col-xs-12 col-md-6 col-lg-4">
              <div class="flex-it">
                  <img src=${song.albumArt}>
                  <audio controls preload="none">
                  <source src="${song.preview}" type="audio/mp4" /></audio>
              </div>
              <h3>${song.title}</h3>
              
              <p>Album: ${song.collection}</p>
              <p>By: ${song.artist}</p>
              <p>Price: $${song.price}</p>
          </div>
        `
      }
    } 
    songDisplay.innerHTML += `</div>`
  }
  
  // event listeners :O
  function onlyPlayOneIn(container) {
    container.addEventListener("play", function(event) {
    audio_elements = container.getElementsByTagName("audio")
      for(i=0; i < audio_elements.length; i++) {
        audio_element = audio_elements[i];
        if (audio_element !== event.target) {
          audio_element.pause();
        }
      }
    }, true);
  }

  document.addEventListener("DOMContentLoaded", function() {
    onlyPlayOneIn(document.body);
  });
}



var itunesCtrl = new ItunesController()

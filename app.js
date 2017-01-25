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
    songDisplay.innerHTML += `</div>`
  }
  
  function previewMusic(songName) {
      
  }
}



var itunesCtrl = new ItunesController()

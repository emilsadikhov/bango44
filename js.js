
var audio = document.getElementById("myAudio");
  var playBtn = document.getElementById("playBtn");
  var muteBtn = document.getElementById("muteBtn");
  var currentTimeSpan = document.getElementById("currentTime");
  var tracks = ["путь_к_аудиофайлу1.mp3", "путь_к_аудиофайлу2.mp3", "путь_к_аудиофайлу3.mp3"];
  var currentTrackIndex = 0;

  audio.loop = false;
  audio.addEventListener("timeupdate", updateTime);

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = "Pause";
    } else {
      audio.pause();
      playBtn.innerHTML = "Play";
    }
  }

  function toggleMute() {
    if (audio.muted) {
      audio.muted = false;
      muteBtn.innerHTML = "Mute";
    } else {
      audio.muted = true;
      muteBtn.innerHTML = "Unmute";
    }
  }

  function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrackIndex];
    audio.play();
    playBtn.innerHTML = "Pause";
  }

  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audio.src = tracks[currentTrackIndex];
    audio.play();
    playBtn.innerHTML = "Pause";
  }

  function updateTime() {
    var minutes = Math.floor(audio.currentTime / 60);
    var seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
    currentTimeSpan.innerHTML = minutes + ":" + seconds;
  }
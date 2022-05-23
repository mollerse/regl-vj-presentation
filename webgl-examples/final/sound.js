const createAnalyser = require('web-audio-analyser');

module.exports = function() {
  return function(songUrl, fftSize, cb) {
    let audioEl = new Audio(songUrl);
    audioEl.addEventListener('loadeddata', () => {
      audioEl.play();
      window.audioEl = audioEl;

      var analyser = createAnalyser(audioEl, { stereo: false });
      analyser.analyser.fftSize = fftSize;

      cb(analyser);
    })
  };
};

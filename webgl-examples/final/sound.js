const soundcloud = require('soundcloud-badge');
const createAnalyser = require('web-audio-analyser');

module.exports = function() {
  return function(songUrl, fftSize, cb) {
    soundcloud(
      {
        client_id: 'b95f61a90da961736c03f659c03cb0cc',
        song: songUrl,
        dark: false,
        getFonts: true
      },
      function(err, src, data, div) {
        if (err) throw err;

        const scbInfoEl = document.querySelector('.npm-scb-info');
        scbInfoEl.style.width = `${window.innerWidth}px`;
        scbInfoEl.style.top = '-6px';

        var audioEl = new Audio();
        audioEl.crossOrigin = 'Anonymous';
        audioEl.src = src;
        audioEl.play();

        window.audioEl = audioEl;
        window.scbEl = div;

        var analyser = createAnalyser(audioEl, { stereo: false });
        analyser.analyser.fftSize = fftSize;

        cb(analyser);
      }
    );
  };
};

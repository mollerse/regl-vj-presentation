const getUserMedia = require('getusermedia');
const createAnalyser = require('web-audio-analyser');

module.exports = function() {
  return function(fftSize, cb) {
    getUserMedia({video: false, audio: true}, function (err, stream) {
      if (err) {
         console.log('failed');
      } else {

        var analyser = createAnalyser(stream, { stereo: false, audible: false });
        analyser.analyser.fftSize = fftSize;

        cb(analyser);
      }
    });
  }
}

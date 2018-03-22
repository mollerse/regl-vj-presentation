const regl = require('regl')();

const camera = require('./camera')(regl);
const drawGround = require('./ground')(regl, { width: 9, depth: 6 });
const drawCube = require('./cube')(regl, {
  placement: [0, 0],
  height: 1,
  width: 1
});
const loadSound = require('./sound')(regl);

function rand2(l, u) {
  return l + Math.random() * (u - l);
}

const numCubes = Math.pow(2, 9);

const randomXZs = Array(numCubes)
  .fill(1)
  .map(() => [rand2(-3.75, 3.75), rand2(-2.5, 2.5)]);

const randomWs = Array(numCubes).fill(1).map(() => rand2(0.1, 0.75));

function getOffsets(freqs) {
  const ret = Array(numCubes);
  for (let i = 0; i < ret.length; i++) {
    ret[i] = {
      offsetXZ: randomXZs[i],
      scaleXZ: randomWs[i],
      scaleY: freqs[i] * 0.01
    };
  }

  return ret;
}

function draw(analyser) {
  regl.frame(function() {
    const freqs = analyser.frequencies();
    const offsets = getOffsets(freqs);

    regl.clear({
      color: [0.0, 0.0, 0.0, 1]
    });

    camera(function() {
      drawGround();
      drawCube(offsets);
    });
  });
}

loadSound(
  'https://soundcloud.com/nightcrawlermusic/nightcrawler-metropolis-feat-1',
  numCubes * 2, //fftSize
  draw //onDone
);

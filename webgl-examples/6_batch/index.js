const regl = require('regl')();

const camera = require('./camera')(regl);
const drawGround = require('./ground')(regl, { width: 9, depth: 6 });
const drawTower = require('./tower')(regl, {
  placement: [0, 0],
  height: 1,
  width: 1
});

function rand2(l, u) {
  return l + Math.random() * (u - l);
}

const numTowers = Math.pow(2, 9);

const randomXZs = Array(numTowers)
  .fill(1)
  .map(() => [rand2(-3.75, 3.75), rand2(-2.5, 2.5)]);

const randomWs = Array(numTowers).fill(1).map(() => rand2(0.1, 0.75));
const randomHs = Array(numTowers).fill(1).map(() => rand2(0.0, 2));

function getOffsets() {
  const ret = Array(numTowers);
  for (let i = 0; i < ret.length; i++) {
    ret[i] = {
      offsetXZ: randomXZs[i],
      scaleXZ: randomWs[i],
      scaleY: randomHs[i]
    };
  }

  return ret;
}

function draw() {
  regl.frame(function() {
    const offsets = getOffsets();

    regl.clear({
      color: [0.0, 0.0, 0.0, 1]
    });

    camera(function() {
      drawGround();
      drawTower(offsets);
    });
  });
}

draw();

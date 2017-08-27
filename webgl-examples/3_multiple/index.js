const regl = require('regl')();

const camera = require('./camera')(regl);
const drawGround = require('./ground')(regl, { width: 8, depth: 5 });
const drawTower = require('./tower')(regl, {
  placement: [0, 0],
  width: 1,
  height: 3
});

function draw() {
  regl.frame(function() {
    regl.clear({
      color: [0.0, 0.0, 0.0, 1]
    });

    camera(function() {
      drawGround();
      drawTower();
    });
  });
}

draw();

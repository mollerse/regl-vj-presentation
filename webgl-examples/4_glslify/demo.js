const reglFn = require('regl');

module.exports = function(ctx) {
  const regl = reglFn(ctx);
  const camera = require('./camera')(regl);
  const drawGround = require('./ground')(regl, { width: 8, depth: 5 });
  const drawCube = require('./cube')(regl, {
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
        drawCube();
      });
    });
  }

  draw();

  return regl;
};

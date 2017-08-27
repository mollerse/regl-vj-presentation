const mat4 = require('gl-mat4');

function view({ tick }) {
  const t = 0.01 * tick;
  return mat4.lookAt(
    [],
    [8 * Math.cos(t), 3 + 3 * Math.sin(t), 8],
    [0, 0, 0],
    [0, 1, 0]
  );
}

function projection({ viewportWidth, viewportHeight }) {
  return mat4.perspective(
    [],
    Math.PI / 4,
    viewportWidth / viewportHeight,
    0.01,
    100
  );
}

module.exports = function(regl) {
  return regl({
    uniforms: { view, projection }
  });
};

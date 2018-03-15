const regl = require('regl')();

const cameraProps = {
  uniforms: {
    view: [],
    projection: []
  }
};
const camera = regl(cameraProps);

const cubeProps = {
  frag: '',
  vert: '',
  attributes: {},
  elements: []
};
const drawCube = regl(cubeProps);

camera(function() {
  drawCube();
});

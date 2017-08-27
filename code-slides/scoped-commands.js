const regl = require('regl')();

const cameraProps = {
  uniforms: {
    view: [],
    projection: []
  }
};
const camera = regl(cameraProps);

const towerProps = {
  frag: '',
  vert: '',
  attributes: {},
  elements: []
};
const drawTower = regl(towerProps);

camera(function() {
  drawTower();
});

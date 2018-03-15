const glsl = require('glslify');

function ground(w, d) {
  const punkter = [
    [0 - w / 2, 0.01, 0 - d / 2],
    [0 + w / 2, 0.01, 0 - d / 2],
    [0 - w / 2, 0.01, 0 + d / 2],
    [0 + w / 2, 0.01, 0 + d / 2]
  ];

  const elementBuffer = [[0, 1, 2], [1, 2, 3]];

  const farger = Array(punkter.length).fill([0.2, 0.2, 0.2, 1.0]);

  return { punkter, elementBuffer, farger };
}

module.exports = function(regl, config = { width: 8, depth: 5 }) {
  const g = ground(config.width, config.depth);
  return regl({
    frag: glsl(`
      precision mediump float;
      #pragma glslify: random = require(glsl-random/lowp)

      varying vec4 punktFarge;
      void main () {
        gl_FragColor = vec4(punktFarge.xyz, 0.9 + random(gl_FragCoord.xy));
      }
    `),
    vert: glsl(`
      precision mediump float;
      attribute vec3 posisjon;
      attribute vec4 farge;
      uniform mat4 projection, view;
      varying lowp vec4 punktFarge;

      void main() {
        gl_Position = projection * view * vec4(posisjon, 1);
        punktFarge = farge;
      }
    `),
    attributes: {
      posisjon: g.punkter,
      farge: g.farger
    },
    elements: g.elementBuffer
  });
};

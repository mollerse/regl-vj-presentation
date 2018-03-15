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
  const aGround = ground(config.width, config.depth);
  return regl({
    frag: `
      precision mediump float;

      varying vec4 punktParge;
      void main () {
        gl_FragColor = punktParge;
      }
    `,
    vert: `
      precision mediump float;
      attribute vec3 posisjon;
      attribute vec4 farge;
      uniform mat4 projection, view;
      varying lowp vec4 punktParge;

      void main() {
        gl_Position = projection * view * vec4(posisjon, 1);
        punktParge = farge;
      }
    `,
    attributes: {
      posisjon: aGround.punkter,
      farge: aGround.farger
    },
    elements: aGround.elementBuffer
  });
};

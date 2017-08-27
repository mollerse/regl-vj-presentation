function ground(w, d) {
  const vert = [
    [0 - w / 2, 0.01, 0 - d / 2],
    [0 + w / 2, 0.01, 0 - d / 2],
    [0 - w / 2, 0.01, 0 + d / 2],
    [0 + w / 2, 0.01, 0 + d / 2]
  ];

  const els = [[0, 1, 2], [1, 2, 3]];

  const colors = Array(vert.length).fill([0.2, 0.2, 0.2, 1.0]);

  return { vert, els, colors };
}

module.exports = function(regl, config = { width: 8, depth: 5 }) {
  const g = ground(config.width, config.depth);
  return regl({
    frag: `
      precision mediump float;

      varying vec4 pColor;
      void main () {
        gl_FragColor = pColor;
      }
    `,
    vert: `
      precision mediump float;
      attribute vec3 position;
      attribute vec4 color;
      uniform mat4 projection, view;
      varying lowp vec4 pColor;

      void main() {
        gl_Position = projection * view * vec4(position, 1);
        pColor = color;
      }
    `,
    attributes: {
      position: g.vert,
      color: g.colors
    },
    elements: g.els
  });
};

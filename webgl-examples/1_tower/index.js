const regl = require('regl')();
const mat4 = require('gl-mat4');

function rand2(l, u) {
  return l + Math.random() * (u - l);
}

function cube([x0, z0], w, h) {
  var w2 = w / 2;
  const punkter = [
    [x0 - w2, 0, z0 - w2],
    [x0 + w2, 0, z0 - w2],
    [x0 - w2, 0, z0 + w2],
    [x0 + w2, 0, z0 + w2],

    [x0 - w2, 0, z0 - w2],
    [x0 + w2, 0, z0 - w2],
    [x0 - w2, h, z0 - w2],
    [x0 + w2, h, z0 - w2],

    [x0 + w2, 0, z0 - w2],
    [x0 + w2, 0, z0 + w2],
    [x0 + w2, h, z0 - w2],
    [x0 + w2, h, z0 + w2],

    [x0 - w2, 0, z0 + w2],
    [x0 + w2, 0, z0 + w2],
    [x0 - w2, h, z0 + w2],
    [x0 + w2, h, z0 + w2],

    [x0 - w2, 0, z0 - w2],
    [x0 - w2, 0, z0 + w2],
    [x0 - w2, h, z0 - w2],
    [x0 - w2, h, z0 + w2],

    [x0 - w2, h, z0 - w2],
    [x0 + w2, h, z0 - w2],
    [x0 - w2, h, z0 + w2],
    [x0 + w2, h, z0 + w2]
  ];

  const elementBuffer = [
    [0, 1, 2],
    [1, 2, 3],
    [4, 5, 6],
    [5, 6, 7],
    [8, 9, 10],
    [9, 10, 11],
    [12, 13, 14],
    [13, 14, 15],
    [16, 17, 18],
    [17, 18, 19],
    [20, 21, 22],
    [21, 22, 23]
  ];

  const farger = Array(punkter.length / 4)
    .fill(0)
    .map(() => {
      const c = [rand2(0.0, 1.0), rand2(0.0, 1.0), rand2(0.0, 1.0), 1.0];
      return Array(4).fill(c);
    })
    .reduce((a, e) => a.concat(e));

  return { punkter, elementBuffer, farger };
}

const aCube = cube([0, 0], 1, 3);

function draw() {
  regl.clear({
    color: [0.0, 0.0, 0.0, 1]
  });

  regl({
    frag: `
      precision mediump float;

      varying vec4 punktFarge;

      void main () {
        gl_FragColor = punktFarge;
      }
    `,
    vert: `
      precision mediump float;
      attribute vec4 farge;
      attribute vec3 posisjon;
      varying lowp vec4 punktFarge;

      void main() {
        gl_Position = vec4(posisjon, 1);

        punktFarge = farge;
      }
    `,
    attributes: {
      posisjon: aCube.punkter,
      farge: aCube.farger
    },
    elements: aCube.elementBuffer
  })();
}

draw();

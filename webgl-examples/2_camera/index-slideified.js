const reglFn = require('regl');
const mat4 = require('gl-mat4');

function rand2(l, u) {
  return l + Math.random() * (u - l);
}

function tower([x0, z0], w, h) {
  var w2 = w / 2;
  const vert = [
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

  const els = [
    [0, 1, 2],
    [1, 2, 3], //bottom
    [4, 5, 6],
    [5, 6, 7], //front
    [8, 9, 10],
    [9, 10, 11], //right
    [12, 13, 14],
    [13, 14, 15], //back
    [16, 17, 18],
    [17, 18, 19], //left
    [20, 21, 22],
    [21, 22, 23] //top
  ];

  const colors = Array(vert.length / 4)
    .fill(0)
    .map(() => {
      const c = [rand2(0.0, 1.0), rand2(0.0, 1.0), rand2(0.0, 1.0), 1.0];
      return Array(4).fill(c);
    })
    .reduce((a, e) => a.concat(e));

  return { vert, els, colors };
}

const t = tower([0, 0], 1, 3);

export default function draw(ctx) {
  const regl = reglFn(ctx);
  regl.frame(function() {
    regl.clear({
      color: [0.0, 0.0, 0.0, 1]
    });

    regl({
      frag: `
      precision mediump float;

      varying vec4 pColor;

      void main () {
        gl_FragColor = pColor;
      }
      `,
      vert: `
      precision mediump float;
      attribute vec4 color;
      attribute vec3 position;
      uniform mat4 projection, view;
      varying lowp vec4 pColor;

      void main() {
        gl_Position = projection * view * vec4(position, 1);

        pColor = color;
      }
      `,
      attributes: {
        position: t.vert,
        color: t.colors
      },
      elements: t.els,
      uniforms: {
        view: function({ tick }) {
          const t = 0.01 * tick;
          return mat4.lookAt(
            [],
            [8 * Math.cos(t), 3 + 3 * Math.sin(t), 8],
            [0, 0, 0],
            [0, 1, 0]
          );
        },

        projection: function({ viewportWidth, viewportHeight }) {
          return mat4.perspective(
            [],
            Math.PI / 4,
            viewportWidth / viewportHeight,
            0.01,
            100
          );
        }
      }
    })();
  });

  return regl;
}

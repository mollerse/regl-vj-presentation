const glsl = require('glslify');

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

  const colors = Array(vert.length).fill([
    rand2(0.8, 0.9),
    rand2(0.1, 0.2),
    rand2(0.35, 0.45),
    1.0
  ]);

  return { vert, els, colors };
}

module.exports = function(
  regl,
  config = { placement: [0, 0], width: 1, height: 1 }
) {
  const t = tower(config.placement, config.width, config.height);

  return regl({
    frag: glsl(`
      precision mediump float;
      #pragma glslify: random = require(glsl-random/lowp)

      varying vec4 pColor;

      void main () {
        if (mod(gl_FragCoord.y, 1.5) < 1.0) {
          gl_FragColor = vec4(0, 0, 0, 1);
        } else {
          gl_FragColor = vec4(pColor.x + 0.3*random( gl_FragCoord.xy ), pColor.yzw);
        }

      }
    `),
    vert: glsl(`
      precision mediump float;
      attribute vec4 color;
      attribute vec3 position;
      uniform mat4 projection, view;
      varying lowp vec4 pColor;

      void main() {
        gl_Position = projection * view * vec4(position, 1);

        pColor = color;
      }
    `),
    attributes: {
      position: t.vert,
      color: t.colors
    },
    elements: t.els
  });
};

const glsl = require('glslify');

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

  const farger = Array(punkter.length).fill([
    rand2(0.8, 0.9),
    rand2(0.1, 0.2),
    rand2(0.35, 0.45),
    1.0
  ]);

  return { punkter, elementBuffer, farger };
}

module.exports = function(
  regl,
  config = { placement: [0, 0], width: 1, height: 1 }
) {
  const aCube = cube(config.placement, config.width, config.height);

  return regl({
    frag: glsl(`
      precision mediump float;
      #pragma glslify: random = require(glsl-random/lowp)

      varying vec4 punktFarge;

      void main () {
        if (mod(gl_FragCoord.y, 1.5) < 1.0) {
          gl_FragColor = vec4(0, 0, 0, 1);
        } else {
          gl_FragColor = vec4(punktFarge.x + 0.3*random( gl_FragCoord.xy ), punktFarge.yzw);
        }

      }
    `),
    vert: glsl(`
      precision mediump float;
      attribute vec4 farge;
      attribute vec3 posisjon;
      uniform mat4 projection, view;
      varying lowp vec4 punktFarge;

      void main() {
        gl_Position = projection * view * vec4(posisjon, 1);

        punktFarge = farge;
      }
    `),
    attributes: {
      posisjon: aCube.punkter,
      farge: aCube.farger
    },
    elements: aCube.elementBuffer
  });
};

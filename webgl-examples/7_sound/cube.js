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

  const normaler = [
    [0, -1, 0],
    [0, -1, 0],
    [0, -1, 0],
    [0, -1, 0],
    [0, -1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, 1],
    [0, -1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, 1],
    [0, -1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, 1],
    [0, -1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ];

  return { punkter, elementBuffer, farger, normaler };
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
      varying vec3 punktNormal, punktPosisjon;

      void main () {
        vec3 normal = normalize(punktNormal);
        vec3 lysPosisjon = vec3(0, -10, 0);
        vec4 lysFarge = vec4(1.0, 0.0, 0.0, 0.9);

        vec3 lysRetning = normalize(lysPosisjon - punktPosisjon);
        float diffusjon = max(0.0, dot(lysRetning, normal));

        if (mod(gl_FragCoord.y, 1.5) < 1.0) {
          gl_FragColor = vec4(0, 0, 0, 1) + diffusjon*lysFarge;
        } else {
          gl_FragColor = vec4(punktFarge.x + 0.3*random( gl_FragCoord.xy ), punktFarge.yzw) + diffusjon*lysFarge;
        }

      }
    `),
    vert: glsl(`
      precision mediump float;
      attribute vec3 posisjon, normal;
      attribute vec4 farge;
      uniform float scaleXZ, scaleY;
      uniform vec2 offsetXZ;
      uniform mat4 projection, view;
      varying lowp vec4 punktFarge;
      varying vec3 punktNormal, punktPosisjon;

      void main() {
        float posX = posisjon.x*scaleXZ + offsetXZ.x;
        float posY = posisjon.y*scaleY;
        float posZ = posisjon.z*scaleXZ + offsetXZ.y;

        gl_Position = projection * view * vec4(posX, posY, posZ, 1);

        punktFarge = farge;
        punktNormal = normal;
        punktPosisjon = vec3(posX, posY, posZ);
      }
    `),
    attributes: {
      posisjon: aCube.punkter,
      farge: aCube.farger,
      normal: aCube.normaler
    },
    elements: aCube.elementBuffer,
    uniforms: {
      scaleXZ: regl.prop('scaleXZ'),
      offsetXZ: regl.prop('offsetXZ'),
      scaleY: regl.prop('scaleY')
    }
  });
};

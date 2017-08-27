const regl = require('regl')(Canvas | Context | Div);

const props = {
  frag: string,
  vert: string,
  attributes: Object,
  elements: Buffer | BufferLike,
  uniforms: Object
};

const drawProps = regl(props);

drawProps();

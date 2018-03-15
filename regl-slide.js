import React, { Component } from 'react';

export default class WebGLSlide extends Component {
  componentDidMount() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('webgl');

    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = '-20px';

    this.regl = this.props.fn(ctx);
    this.canvas = canvas;
    this._output.appendChild(canvas);
  }

  componentWillUnmount() {
    this._output.removeChild(this.canvas);
    this.regl.destroy();

    if (window.audioEl) {
      window.audioEl.pause();
      delete window.audioEl;
    }

    if (window.scbEl) {
      document.body.removeChild(scbEl);
    }
  }

  render() {
    return <div ref={el => (this._output = el)} />;
  }
}

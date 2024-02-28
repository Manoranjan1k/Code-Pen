import { Component } from 'react';
import Typed from 'typed.js';

class TypedAnimation extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return <span ref={(el) => { this.el = el; }} />;
  }
}

export default TypedAnimation;


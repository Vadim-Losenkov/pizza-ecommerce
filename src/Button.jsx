import React from 'react'

class Button extends React.Component {

  render() {
    return <button>{this.props.text || 'Привет'}</button>
  }
}

export default Button;
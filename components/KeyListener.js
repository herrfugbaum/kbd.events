import React from 'react'

class KeyListener extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentKey: {}
    }

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleKeyDown(e) {
    console.log(e)
    this.setState({
      currentKey: {
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        key: e.key,
        keyCode: e.keyCode,
        code: e.code
      }
    })
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { currentKey: this.state.currentKey })
    })
    return (
      <div>{children}</div>
    )
  }
}

export default KeyListener
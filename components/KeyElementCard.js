import React from 'react'

const KeyElementCardStyles = {
  border: '1px solid'
}

class KeyElementCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const key = this.props.currentKey
    return (
      <div className="periodicCard" style={KeyElementCardStyles}>
        <div>{key.key}</div>
        <div>{key.keyCode}</div>
      </div>
    )
  }
}

export default KeyElementCard
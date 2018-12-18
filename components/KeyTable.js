import React from 'react'

class KeyTable extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const key = this.props.currentKey
    return (

        <table>
          <thead>
            <tr>
              <th>Alt Key</th>
              <th>Ctrl Key</th>
              <th>Shift Key</th>
              <th>Meta Key</th>
              <th>Key</th>
              <th>Key Code</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`${key.altKey}`}</td>
              <td>{`${key.ctrlKey}`}</td>
              <td>{`${key.shiftKey}`}</td>
              <td>{`${key.metaKey}`}</td>
              <td>{key.key}</td>
              <td>{key.keyCode}</td>
              <td>{key.code}</td>
            </tr>
          </tbody>
        </table>
    )
  }
}

export default KeyTable
import React from 'react'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class KeyTable extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const key = this.props.currentKey
    return Object.keys(key).length > 0 ? (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Alt Key</TableCell>
              <TableCell>Ctrl Key</TableCell>
              <TableCell>Shift Key</TableCell>
              <TableCell>Meta Key</TableCell>
              <TableCell>Key</TableCell>
              <TableCell>Key Code</TableCell>
              <TableCell>Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{`${key.altKey}`}</TableCell>
              <TableCell>{`${key.ctrlKey}`}</TableCell>
              <TableCell>{`${key.shiftKey}`}</TableCell>
              <TableCell>{`${key.metaKey}`}</TableCell>
              <TableCell>{key.key}</TableCell>
              <TableCell>{key.keyCode}</TableCell>
              <TableCell>{key.code}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    ) : null
  }
}

export default KeyTable

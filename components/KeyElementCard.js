import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const keyCodeStyles = {
  fontSize: '3em',
}

const letterStyles = {
  fontSize: '7em',
}

class KeyElementCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const key = this.props.currentKey
    return Object.keys(key).length > 0 ? (
      <Card className="periodicCard">
        <CardContent>
          <Typography color="textSecondary" style={keyCodeStyles}>
            {key.keyCode}
          </Typography>
          <Typography color="textPrimary" style={letterStyles}>
            {key.key}
          </Typography>
        </CardContent>
      </Card>
    ) : null
  }
}

export default KeyElementCard

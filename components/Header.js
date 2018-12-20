import React from 'react'
import Typography from '@material-ui/core/Typography'

const Header = () => (
  <React.Fragment>
    <Typography component="h1" variant="h1" align="center">
      JavaScript Keyboard Events
    </Typography>
    Press any key to get the corresponding event keycode.
  </React.Fragment>
)

export default Header

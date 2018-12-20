import { withRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'

import Grid from '@material-ui/core/Grid'

import withLayout from '../lib/withLayout'
import KeyTable from '../components/KeyTable'
import KeyElementCard from '../components/KeyElementCard'

class Index extends React.Component {
  constructor() {
    super()

    this.state = {
      currentKey: {},
    }

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown(e) {
    console.log(e)
    e.preventDefault()
    this.setState({
      currentKey: {
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        key: e.key,
        keyCode: e.keyCode,
        code: e.code,
        location: e.location,
      },
    })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>kbd.events</title>
          <meta
            name="description"
            content="Keyboard event codes for JavaScript."
          />
        </Head>
        <Grid container spacing={24} justify="space-evenly">
          <Grid item xs={8}>
            <KeyTable currentKey={this.state.currentKey} />
          </Grid>
          <Grid item xs={4}>
            <KeyElementCard currentKey={this.state.currentKey} />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
export default withRouter(withLayout(Index))

import * as React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/index'

// render(<App />, document.getElementById('root'))

hydrate(<App />, document.getElementById('root'));
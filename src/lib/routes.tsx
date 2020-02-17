import React from 'react'

import Home from '../components/Home/index'
import Midi from '../components/Midi/index'

export const routes = {
  "/": () => <Home />,
  "/midi": () => <Midi />
}

import { FC } from 'react'
import { globalStyles } from '../styles/global'

import Home from '@/pages/Home'

const App: FC = () => {
  globalStyles()

  return <Home />
}

export default App

import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <Body/>
    </div>
  )
}

export default App

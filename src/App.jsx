import Header from './components/Header'
import Post from './components/Post'
import Sidebar from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

 function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar>
          sidebar
        </Sidebar>
        <main>
      <Post author="Erico" content="Bla bla bla bla bla bla"/>
      <Post author="Erico" content="Bla bla bla bla bla bla"/>
        </main>
      </div>
    </div>
  )
}

export default App
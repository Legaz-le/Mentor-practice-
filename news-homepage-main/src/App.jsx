import React from 'react'
import Header from './header'
import "./css/App.css"
import Article from './Article'
import Secondarticle from './SecondArticle'

const App = () => {
  return (
    <body className='container'>
      <Header />
      <Article/>
      <Secondarticle />
    </body>
  )
}

export default App

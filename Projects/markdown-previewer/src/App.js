import React from 'react'
import ReactDOM from 'react-dom/client'
import 'https://cdnjs.cloudflare.com/ajax/libs/marked/11.0.0/marked.min.js'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='App'>
        <div className='editorWrap'>
          <div className='toolbar'>
            <i className='fa fa-free-code-camp'></i>
            Editor
            <i className='fa fa-arrows-alt'></i>
          </div>
          <textarea id='editor' type='text'>
            Welcome
          </textarea>
        </div>
        <div className='previewWrap'>
          <div className='toolbar'>
            <i className='fa fa-free-code-camp'></i>
            Previewer
            <i className='fa fa-arrows-alt'></i>
          </div>
          <div id='preview'>
            Welcome
          </div>
          
        </div>
      </div>
    )
  }
}

export default App

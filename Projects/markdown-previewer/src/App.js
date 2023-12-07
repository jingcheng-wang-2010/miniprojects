import React from 'react'
import ReactDOM from 'react-dom/client'
import { marked } from 'marked'
//import 'https://cdnjs.cloudflare.com/ajax/libs/marked/11.0.0/marked.min.js'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: '### Enter Markdown Here'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState(() => ({
      content: e.target.value
    }))
  }

  rawMarkup () {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
      //highlight: function (code) {
      //  return hljs.highlightAuto(code).value
      //}
    })

    var rawMarkup = marked(this.state.content, { sanitize: true })
    return {
      __html: rawMarkup
    }
  }

  render () {
    console.log(this.rawMarkup)
    return (
      <div className='App'>
        <div className='editorWrap'>
          <div className='toolbar'>
            <i className='fa fa-free-code-camp'></i>
            Editor
            <i className='fa fa-arrows-alt'></i>
          </div>
          <textarea
            id='editor'
            type='text'
            defaultValue={this.state.content}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className='previewWrap'>
          <div className='toolbar'>
            <i className='fa fa-free-code-camp'></i>
            Previewer
            <i className='fa fa-arrows-alt'></i>
          </div>
          <div id='preview' dangerouslySetInnerHTML={this.rawMarkup()}></div>
        </div>
      </div>
    )
  }
}

export default App

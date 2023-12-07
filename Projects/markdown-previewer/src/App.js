import React from 'react'
import ReactDOM from 'react-dom/client'
import { marked } from 'marked'
//import 'https://cdnjs.cloudflare.com/ajax/libs/marked/11.0.0/marked.min.js'
import './App.css'

const defaultContent = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

` +
"Heres some code, `<div></div>`, between 2 backticks." +
`
` +
"```" +
`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    return multiLineCode;
}
` +
"```" +
`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
console.log(defaultContent);

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: defaultContent
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
      breaks: true,
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

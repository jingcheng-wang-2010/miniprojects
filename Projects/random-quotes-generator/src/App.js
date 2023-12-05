import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

const quotes = [
  {
    text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison, type.fit'
  },
  {
    text: 'You can observe a lot just by watching.',
    author: 'Yogi Berra, type.fit'
  },
  {
    text: 'A house divided against itself cannot stand.',
    author: 'Abraham Lincoln, type.fit'
  },
  {
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe, type.fit'
  },
  {
    text: 'Fate is in your hands and no one elses',
    author: 'Byron Pulsifer, type.fit'
  },
  {
    text: 'Be the chief but never the lord.',
    author: 'Lao Tzu, type.fit'
  },
  {
    text: 'Nothing happens unless first we dream.',
    author: 'Carl Sandburg, type.fit'
  },
  {
    text: 'Well begun is half done.',
    author: 'Aristotle, type.fit'
  },
  {
    text: 'Life is a learning experience, only if you learn.',
    author: 'Yogi Berra'
  },
  {
    text: 'Self-complacency is fatal to progress.',
    author: 'Margaret Sangster, type.fit'
  },
  {
    text: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha, type.fit'
  },
  {
    text: 'What you give is what you get.',
    author: 'Byron Pulsifer, type.fit'
  },
  {
    text: 'We can only learn to love by loving.',
    author: 'Iris Murdoch, type.fit'
  },
  {
    text: 'Life is change. Growth is optional. Choose wisely.',
    author: 'Karen Clark, type.fit'
  },
  {
    text: "You'll see it when you believe it.",
    author: 'Wayne Dyer, type.fit'
  },
  {
    text: 'Today is the tomorrow we worried about yesterday.',
    author: 'type.fit'
  }
]

const getColorTheme = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}

const getRandomQuote = list => {
  return list[Math.floor(Math.random() * list.length)]
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      colorTheme: getColorTheme(),
      quote: getRandomQuote(quotes)
    }
    this.renderNewQuote = this.renderNewQuote.bind(this)
  }

  renderNewQuote () {
    this.setState(() => ({
      colorTheme: getColorTheme(),
      quote: getRandomQuote(quotes)
    }))
  }

  render () {
    document.body.style.backgroundColor = this.state.colorTheme
    document.body.style.color = this.state.colorTheme
    return (
      <div>
        <div id='quote-box'>
          <div className='quote-text' style={{ color: this.state.colorTheme }}>
            <i class='fa fa-quote-left'> </i>{' '}
            <span id='text'>{this.state.quote.text}</span>
          </div>
          <div
            className='quote-author'
            style={{ color: this.state.colorTheme }}
          >
            <span id='author'>- {this.state.quote.author.split(',')[0]}</span>
          </div>
          <div className='buttons'>
            <a
              id='tweet-quote'
              className='button'
              title='Tweet this quote!'
              style={{ backgroundColor: this.state.colorTheme }}
            >
              <i class='fa fa-twitter'></i>
            </a>
            <button
              id='new-quote'
              className='button'
              style={{ backgroundColor: this.state.colorTheme }}
              onClick={this.renderNewQuote}
            >
              New Quote
            </button>
          </div>
        </div>
        <div className='footer'>
          by <a href='https://codepen.io/jingchengwang'>Jing</a>
        </div>
      </div>
    )
  }
}

export default App

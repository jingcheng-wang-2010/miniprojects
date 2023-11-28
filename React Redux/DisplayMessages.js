class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e){
    this.setState({
      input: e.target.value,
      messages: this.state.messages
    });
  }
  submitMessage(e) {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <div>{this.state.input}</div>
        <input onChange={this.handleChange.bind(this)} value={this.state.input} />
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul></ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};
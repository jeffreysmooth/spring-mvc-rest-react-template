const React = require('react');
const ReactDOM = require('react-dom');



class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {messageModel: []};
	}

	componentDidMount() {
		
		 fetch("http://localhost:8080/api/greeting/json")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            messageModel: result
	          });
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )
		
	}

	render() {
		return (
			<GreetingComp messages={this.state.messageModel}/>
		)
	}
}


class GreetingComp extends React.Component{
	render() {
		return (
			(this.props.messages==null)?<h1>No Message available</h1>:<h1>{this.props.messages.message}</h1>
		)
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('react')
)
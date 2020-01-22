import React, { Component } from "react"; //리액트에서 리액트 컴포넌트를 포함하여 import한다.
// 필요에 따라서 css import
import "./test2.css";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }
  componentWillMount() {
    setTimeout(() => {
      alert("이게므야")
    }, 5000);
    console.log("what?")
  }
  componentDidMount() {
    setTimeout(() => {
      alert("이게므야2");
    }, 1000);
  };

  render() {
    return (
      <div className="Movielist">
        <MovieImage image={this.props.image} />
        <div className="moname">
          <span></span>
          <h1>{this.props.title}</h1>
          <h3>좋아요 : {this.state.likes}</h3>
        </div>
        <button
          onClick={() => {
            this.setState({
              likes: this.state.likes + 1
            });
          }}
        >
          좋아요
        </button>
        <button
          onClick={() => {
            this.setState({
              likes: this.state.likes - 1
            });
          }}
        >
          싫어요
        </button>
      </div>
    );
  }
}
class MovieImage extends Component {
  render() {
    return <img src={this.props.image} />;
  }
}

export default Test;

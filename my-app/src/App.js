import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Samh Karoui',
        bio: 'A software engineer with a passion for coding and teaching.',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cQ0Ox5ZbpZldXRuuWsw6xkMaABWvBa1azg&s',
        profession: 'Software Engineer'
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountedTime } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Show Profile</button>
        {shows && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.profession}</h2>
          </div>
        )}
        <p className="time">Time since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;

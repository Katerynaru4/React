import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  
  fetchUserData = (id) => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        } else {
          return res.json();
        }
      })
      .then((userData) => {
        this.setState({
          data: userData,
        });
      });
  };

  componentDidMount() {
    this.fetchUserData(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.fetchUserData(this.props.match.params.userId);
    }
  }

  render() {
    if (!this.state.data) return null;

    let { name, location, avatar_url } = this.state.data;

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;

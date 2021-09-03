import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  state = {
    searchValue: '',
  };
  changeSearchValue = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };
  render() {
    let filteredUsers = this.props.users.filter((user) =>
      user.name.includes(this.state.searchValue)
    );
    return (
      <div>
        <Filter
          filterText={this.state.searchValue}
          count={filteredUsers.length}
          onChange={this.changeSearchValue}
        />
        <ul className="users">
          {filteredUsers.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;

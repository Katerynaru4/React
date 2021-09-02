import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };
  goPrev = () => {
    this.setState({
      currentPage: --this.state.currentPage,
    });
  };
  goNext = () => {
    this.setState({
      currentPage: ++this.state.currentPage,
    });
  };

  render() {
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={3}
        />
        <ul className="users">
          {this.props.users
            .filter((user, index) => {
              const [cp, ipp] = [this.state.currentPage, 3];
              return index >= (cp - 1) * ipp && index < (cp - 1) * ipp + ipp;
            })
            .map((user) => (
              <User key={user.id} key={user.id} {...user} />
            ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;

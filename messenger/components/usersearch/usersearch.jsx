import React from 'react';
import ReactDOM from 'react-dom';

class FilteredUsers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      querystring: '',
    };

    this.filterList = this.filterList.bind(this);
    this.userClicked = this.userClicked.bind(this);
  }

  filterList(e) {
    this.setState({
      querystring: e.target.value,
    })
  }

  userClicked(user) {
    this.props.addUser(user);
    this.setState({
      querystring: '',
    });
  }

  render() {
    let querystring = this.state.querystring.toLowerCase();
    let users = this.props.users || [];
    users = querystring ? users.filter((user) => (user.display_name).toLowerCase().search(querystring) !== -1) : null;

    return (
      <div className="filter-list">
        <form>
          <fieldset className="form-group">
            <input type="text" value={this.state.querystring} className="form-control form-control-lg" placeholder="Search" onChange={this.filterList} />
          </fieldset>
        </form>
        {users && <UserList users={users} userClicked={this.userClicked} />}
      </div>
    );
  }
}

class UserList extends React.Component {

  userClicked(user) {
    return (e) => {
      return this.props.userClicked(user);
    }
  }

  render(){
    let users = this.props.users;
    return (
      <ul className="list-group">
      {users.map((user) => {
        return (
          <li key={user.id}
            className="list-group-item"
            data-category={user.display_name}
            onClick={this.userClicked(user)}>
            {user.display_name}
          </li>
        );
      })}
      </ul>
    );
  }
}
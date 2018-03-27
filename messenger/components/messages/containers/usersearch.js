import React from 'react';
import { connect } from 'react-redux';

import UserSearch from '../components/usersearch';

class UserSearchContainer extends React.Component {
  render() {
    return (
      <UserSearch
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
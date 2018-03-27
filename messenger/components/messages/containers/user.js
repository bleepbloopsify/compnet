import React from 'react';
import { connect } from 'react-redux';

// Pass this an id and it'll render the user
class User extends React.Component {
  render() {

    let { user } = this.props;
    if (!user) return null;

    let { display_name } = user;
    let { active } = this.props;
    return (
      <div>
        {display_name}
        <i className="fa fa-circle" style={{
          color: active ? 'green' : 'gray',
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  return {
    user: state.users[props.id],
    active: true,
  };
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(User);
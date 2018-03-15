import React from 'react';

import Searchbar from './searchbar';

export default class ConversationModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      added_users: []
    };
  }
  render() {
    let { requestClose, users } = this.props;
    let { added_users } = this.state;

    return (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create Conversation</h5>
          <button type="button" className="close" aria-label="Close" onClick={requestClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="added_users" className="form-control-label">Added Users</label>
              <div className="list-group">
                {added_users.map(user_id =>
                  <button key={user_id}
                    className="list-group-item"
                    onClick={() => {
                      this.setState({
                        added_users: added_users.filter(id => id != user_id),
                      });
                    }}>
                    {users[user_id].display_name}
                  </button>
                )}
              </div>
            </div>
            <Searchbar
              list={users}
              filter={qs => user => {
                if (qs !== '' && !user.display_name.toLowerCase().includes(qs.toLowerCase())) {
                  return false;
                }
                if (added_users.includes(user.id)) {
                  return false;
                }
                return true;
              }}
              addItem={(id) => this.setState({added_users: [...added_users, id]})}
              />
          </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={requestClose}>Close</button>
        </div>
      </div>
    );
  }
}
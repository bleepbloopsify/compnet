import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import ConversationModal from '../components/conversationmodal';

import { closeCreateConversationModal } from '../actions';

Modal.setAppElement(document.getElementById('react-container'));
class ModalRoot extends React.Component {
  render() {
    const { open, users } = this.props;
    const { requestClose } = this.props;
    return (
      <div>
        <Modal isOpen={open}
          className="Modal_Bootstrap modal-dialog fade show">
          <ConversationModal
            requestClose={requestClose}
            users={users}
            />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return Object.assign({}, {users: state.users}, state.modal);
};

const mapDispatchToProps = dispatch => {
  return {
    requestClose: () => dispatch(closeCreateConversationModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);
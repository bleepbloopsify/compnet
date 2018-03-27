import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';



Modal.setAppElement(document.getElementById('react-container'));
class ModalRoot extends React.Component {
  render() {
    return (
      const { open } = this.props;
      const { requestClose } = this.props;
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);
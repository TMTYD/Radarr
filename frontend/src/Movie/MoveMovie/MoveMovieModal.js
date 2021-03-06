import PropTypes from 'prop-types';
import React from 'react';
import { kinds, sizes } from 'Helpers/Props';
import Button from 'Components/Link/Button';
import Modal from 'Components/Modal/Modal';
import ModalContent from 'Components/Modal/ModalContent';
import ModalHeader from 'Components/Modal/ModalHeader';
import ModalBody from 'Components/Modal/ModalBody';
import ModalFooter from 'Components/Modal/ModalFooter';
import styles from './MoveMovieModal.css';

function MoveMovieModal(props) {
  const {
    originalPath,
    destinationPath,
    destinationRootFolder,
    isOpen,
    onSavePress,
    onMoveMoviePress
  } = props;

  if (
    isOpen &&
    !originalPath &&
    !destinationPath &&
    !destinationRootFolder
  ) {
    console.error('orginalPath and destinationPath OR destinationRootFolder must be provided');
  }

  return (
    <Modal
      isOpen={isOpen}
      size={sizes.MEDIUM}
      closeOnBackgroundClick={false}
      onModalClose={onSavePress}
    >
      <ModalContent
        showCloseButton={true}
        onModalClose={onSavePress}
      >
        <ModalHeader>
          Move Files
        </ModalHeader>

        <ModalBody>
          {
            destinationRootFolder ?
              `Would you like to move the movie folders to '${destinationRootFolder}'?` :
              `Would you like to move the movie files from '${originalPath}' to '${destinationPath}'?`
          }
          {
            destinationRootFolder ?
              <div>
                This will also rename the movie folder per the movie folder format in settings.
              </div> :
              null
          }
        </ModalBody>

        <ModalFooter>
          <Button
            className={styles.doNotMoveButton}
            onPress={onSavePress}
          >
            No, I'll Move the Files Myself
          </Button>

          <Button
            kind={kinds.DANGER}
            onPress={onMoveMoviePress}
          >
            Yes, Move the Files
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

MoveMovieModal.propTypes = {
  originalPath: PropTypes.string,
  destinationPath: PropTypes.string,
  destinationRootFolder: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onSavePress: PropTypes.func.isRequired,
  onMoveMoviePress: PropTypes.func.isRequired
};

export default MoveMovieModal;

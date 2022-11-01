import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    show,
    onClose,
    onSave,
    confirmationText
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{confirmationText.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{confirmationText.body}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>{confirmationText.close}</Button>
                <Button variant="primary" onClick={onSave}>{confirmationText.confirm}</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;

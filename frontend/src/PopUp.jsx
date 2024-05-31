import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './PopUp.css'; // Importa el archivo CSS para los estilos adicionales

const PopUp = ({ show, book, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{book.volumeInfo.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <div className="flex-shrink-0 me-3">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="img-fluid mb-3" />
          </div>
          <div className="flex-grow-1">
            <p><strong>Autor/es:</strong> {book.volumeInfo.authors?.join(', ')}</p>
            <p><strong>Lenguaje:</strong> {book.volumeInfo.language}</p>
            <p><strong>Páginas:</strong> {book.volumeInfo.pageCount}</p>
            <p><strong>Editorial:</strong> {book.volumeInfo.publisher}</p>
          </div>
        </div>
        <h5 className="mt-3"><strong>Descripción</strong></h5>
        <p>{book.volumeInfo.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;

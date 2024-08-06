import React from 'react';
import '../styles/ModalStyles.css';

const Modal = ({ user, onClose }) => {
  if (!user) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>Детали пользователя</h4>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <div><strong>ФИО:</strong> {`${user.firstName} ${user.lastName} ${user.maidenName}`}</div>
          <div><strong>Возраст:</strong> {user.age}</div>
          <div><strong>Адрес:</strong> {`${user.address.city}, ${user.address.address}`}</div>
          <div><strong>Рост:</strong> {user.height} см</div>
          <div><strong>Вес:</strong> {user.weight} кг</div>
          <div><strong>Телефон:</strong> {user.phone}</div>
          <div><strong>Email:</strong> {user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
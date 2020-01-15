import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const elementRef = useRef(null);

  if (!elementRef.current) {
    const div = document.createElement('div');
    elementRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');

    modalRoot.appendChild(elementRef.current);

    return () => modalRoot.removeChild(elementRef.current);
  }, []); // run it once

  return createPortal(
    <div className="modal-wrapper">{children}</div>,
    elementRef.current
  );
};

export default Modal;

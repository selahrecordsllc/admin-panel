import React, { useEffect, useState } from 'react';
import { ModalWindow, Overlay } from './styled';

export type TModal = {
  children: React.ReactNode;
  closeModal: () => void;
  isOpen: boolean;
  justifyContent?: 'center' | 'left' | 'right' | 'top' | 'bottom';
};

export const Modal: React.FC<TModal> = ({
  children,
  closeModal,
  isOpen,
  justifyContent = 'center',
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    document.body.style.overscrollBehavior = 'contain';

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.overscrollBehavior = '';
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, closeModal]);

  if (!shouldRender) return null;

  return (
    <Overlay
      onClick={e => e.target === e.currentTarget && closeModal()}
      className={!isOpen ? 'closing' : ''}
      $justifyContent={justifyContent}
    >
      <ModalWindow
        $justifyContent={justifyContent}
        className={!isOpen ? 'closing' : ''}
      >
        {children}
      </ModalWindow>
    </Overlay>
  );
};

import { useEffect, useRef } from 'react';
import {
  ErrorMessage,
  FilterButton,
  FilterWrap,
  ModalContainer,
} from './styled';
import { RiEqualizerLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useToggle } from 'shared/hooks/useToggle';
import { createPortal } from 'react-dom';

type TProps = {
  filterValue?: number | string;
  children?: React.ReactNode;
  visibleIcon?: boolean;
  title?: string;
  Icon?: React.ReactNode;
  height?: string;
  closeOnmenuClick?: boolean;
  error?: string;
};

export const FilterBtn = ({
  filterValue,
  closeOnmenuClick = true,
  children,
  visibleIcon = true,
  title,
  Icon,
  height = '44px',
  error,
}: TProps) => {
  const { isOpen, toggle } = useToggle();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { t } = useTranslation('menu');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        toggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggle]);

  return (
    <FilterWrap>
      <FilterButton
        $error={!!error}
        type="button"
        $height={height}
        ref={buttonRef}
        onClick={toggle}
        $isOpen={isOpen}
      >
        {visibleIcon && (Icon || <RiEqualizerLine />)}
        {title || t('filter')} {filterValue ? `(${filterValue})` : null}
      </FilterButton>
      {isOpen &&
        createPortal(
          (() => {
            const rect = buttonRef.current?.getBoundingClientRect();

            if (!rect) return null;

            return (
              <ModalContainer
                ref={modalRef}
                style={{
                  top: rect.bottom + window.scrollY,
                  left: rect.left + window.scrollX,
                  width: rect.width,
                }}
                onClick={closeOnmenuClick ? () => toggle() : undefined}
              >
                {children}
              </ModalContainer>
            );
          })(),
          document.getElementById('portal-root')!
        )}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </FilterWrap>
  );
};

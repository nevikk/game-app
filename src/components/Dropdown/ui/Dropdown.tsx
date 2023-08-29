import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Mods, classNames } from '../../../helpers/ClassNames/ClassNames';
import cls from './Dropdown.module.scss';
import { handleClickOutside } from '../../../helpers/handleClickOutside/handleClickOutside';

interface DropdownProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  btnElement?: HTMLElement | null;
}

export const Dropdown = (props: DropdownProps) => {

  const {
    className,
    children,
    isOpen,
    onClose,
    btnElement
  } = props;

  console.log('isOpen', isOpen);
  

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const dropdownRef = useRef(null);

  const closeHandler = useCallback(() => {
    if (onClose) {
        onClose();
    }
  }, [])

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if(event.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const clickOutsideHandler = (event: MouseEvent) => {
    if (dropdownRef.current && btnElement) {
      handleClickOutside(dropdownRef.current, btnElement, event, onClose)
    }
  }

  useEffect(() => {
    if(isOpen) {
      console.log('dropdownUseEffect');
      
      window.addEventListener('keydown', onKeyDown);
      document.addEventListener('click', clickOutsideHandler);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
      console.log('return dropdownUseEffect');
      
      document.removeEventListener('click', clickOutsideHandler);
    }
  }, [isOpen, onKeyDown]);

  const mods: Mods = {
    [cls.open]: isOpen,
  };

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  }

  return (
    <div
      ref={dropdownRef}
      className={classNames(cls.Dropdown, mods, [className])}
    >
      <div 
        className={cls.content}
        onClick={(event) => onContentClick(event)}
      >
        {children}
      </div>
    </div>
  );
}
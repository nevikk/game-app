import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '../../../../helpers/ClassNames/ClassNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    disabled,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
import { ReactNode } from 'react';
import cls from './Container.module.scss';
import { classNames } from '../../../../helpers/ClassNames/ClassNames';

interface ContainerProps {
  className?: string
  children: ReactNode;
}

export const Container = (props: ContainerProps) => {
  const {
    className,
    children
   } = props

  return (
    <div className={classNames(cls.Container, {}, [className])}>
      {children}
    </div>
  );
}
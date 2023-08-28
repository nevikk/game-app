import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = () => {
  return (
    <div className={cls.Loader}></div>
  );
}
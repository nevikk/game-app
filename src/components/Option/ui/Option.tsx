import { classNames } from '../../../helpers/ClassNames/ClassNames';
import cls from './Option.module.scss';
import ArrowDown from '../../../assets/icons/arrDown.svg';
import { MouseEvent, useCallback, useRef, useState } from 'react';
import { Dropdown } from '../../Dropdown';
import { Param } from '../../../reduxSlices/GameListSlice';

interface OptionProps {
  className?: string;
  name?: string;
  text?: string;
  items: Param[];
  onSelect: (param: Param) => void;
}

export const Option = (props: OptionProps) => {
  const {
    className,
    name,
    text,
    items,
    onSelect
  } = props;

  const [isActive, setIsActive] = useState(false);
  const btnRef = useRef(null);

  const clickHandler = useCallback(() => {
    setIsActive(prev => !prev);
  }, [])

  const onCloseDropdown = useCallback(() => {
    setIsActive(false);
  }, [])

  const clickOptionHandler = (param: Param) => {
    setIsActive(false);
    onSelect(param);
  }

  return (
    <div className={classNames(cls.Option, {}, [className])}>
      <div className={cls.head}>
        <div className={cls.name}>{name}:</div>
        <button
          ref={btnRef}
          className={cls.btn}
          onClick={clickHandler}
        >
          {text}
        </button>
      </div>
      <Dropdown
        isOpen={isActive}
        onClose={onCloseDropdown}
        btnElement={btnRef.current}
      >
        <ul className={cls.list}>
          {items.map(item => (
            <li
              key={item.name}
              className={cls.item}
              onClick={() => {clickOptionHandler(item)}}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
}
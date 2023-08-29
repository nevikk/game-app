import { useSelector } from 'react-redux';
import { category, platforms, sortBy } from '../../../tools/tools';
import { Option } from '../../Option';
import cls from './OptionsBlock.module.scss';
import { GameListActions, Param, getGameListparamsNames } from '../../../reduxSlices/GameListSlice';
import { useCallback } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch/useAppDispatch';

interface OptionsBlockProps {
  className?: string;
}

export const OptionsBlock = () => {

  const paramsNames = useSelector(getGameListparamsNames);
  const dispatch = useAppDispatch();

  const selectPlatformHandler = useCallback((param: Param) => {
    dispatch(GameListActions.setPlatform(param))
  }, [dispatch])

  const selectCategoryHandler = useCallback((param: Param) => {
    dispatch(GameListActions.setCategory(param))
  }, [dispatch])

  const selectSortByHandler = useCallback((param: Param) => {
    dispatch(GameListActions.setSortBy(param))
  }, [dispatch])

  return (
    <div className={cls.OptionsBlock}>
      <Option
        items={platforms}
        className={cls.option}
        name={'Platform'}
        text={paramsNames.platform}
        onSelect={selectPlatformHandler}
        />
      <Option
        items={category}
        className={cls.option}
        name={'Genre/Tag'}
        text={paramsNames.category}
        onSelect={selectCategoryHandler}
        />
      <Option
        items={sortBy}
        className={cls.option}
        name={'Sort By'}
        text={paramsNames.sortBy}
        onSelect={selectSortByHandler}
      />
    </div>
  );
}
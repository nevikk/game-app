import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../providers/StoreProvider';
import { getGameListparamsNames } from './getParamsName';


describe('getGameListparamsNames', () => {
  test('should return params array', () => {
    const expectedObject = {
      'platform': 'test',
      'sortBy': 'test',
      'category': 'test'
    };
    const state: DeepPartial<StateSchema> = {
      gameList: { paramsNames: expectedObject }
    }

    expect(getGameListparamsNames(state as StateSchema)).toStrictEqual(expectedObject)
  })

  test('should return empty object', () => {
    const state: DeepPartial<StateSchema> = {
      gameList: {}
    }

    expect(getGameListparamsNames(state as StateSchema)).toStrictEqual({})
  })
})
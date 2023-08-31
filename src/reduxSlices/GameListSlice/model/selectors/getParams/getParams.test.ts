import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../providers/StoreProvider';
import { getGameListParams } from './getParams';


describe('getGameListParams', () => {
  test('should return params array', () => {
    const expectedObject = {
      'platform': 'test',
      'sort-by': 'test',
      'category': 'test'
    };
    const state: DeepPartial<StateSchema> = {
      gameList: { params: expectedObject }
    }

    expect(getGameListParams(state as StateSchema)).toStrictEqual(expectedObject)
  })

  test('should return empty object', () => {
    const state: DeepPartial<StateSchema> = {
      gameList: {}
    }

    expect(getGameListParams(state as StateSchema)).toStrictEqual({})
  })
})
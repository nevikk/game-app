import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../providers/StoreProvider';
import { getGameListData } from './getData';


describe('getGameListData', () => {
  test('should return data array', () => {
    const expectedArray = [{
      id: 1,
      title: 'title',
      release_date: 'date',
      publisher: 'publisher',
      genre: 'genre',
      thumbnail: 'thumbnail',
      freetogame_profile_url: 'url',
    }]
    const state: DeepPartial<StateSchema> = {
      gameList: { data: expectedArray }
    }

    expect(getGameListData(state as StateSchema)).toStrictEqual(expectedArray)
  })

  test('should return empty array', () => {
    const state: DeepPartial<StateSchema> = {
      gameList: {}
    }

    expect(getGameListData(state as StateSchema)).toStrictEqual([])
  })
})
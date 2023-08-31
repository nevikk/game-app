import { DeepPartial } from "@reduxjs/toolkit"
import { GameListSchema } from "../types/gameList"
import { GameListActions, GameListReducer } from "./gameListSlice"


describe('gameListSliceTest', () => {
  test('set Data', () => {
    const state: DeepPartial<GameListSchema> = {}
    const expectedArray = [
      {
        id: 1,
        title: 'title',
        release_date: 'date',
        publisher: 'publisher',
        genre: 'genre',
        thumbnail: 'thumbnail',
        freetogame_profile_url: 'url',
      }
    ];

    expect(GameListReducer(
      state as GameListSchema,
      GameListActions.setData(expectedArray)
    )).toStrictEqual({ data: expectedArray });
  })

  test('set sort-by', () => {
    const state: DeepPartial<GameListSchema> = {
      rejectCount: 1,
      params: { 'sort-by': 'test' },
      paramsNames: { 'sortBy': 'test' }
    }

    expect(GameListReducer(
      state as GameListSchema,
      GameListActions.setSortBy({ param: 'param', name: 'name' })
    )).toStrictEqual({
      rejectCount: 0,
      params: { 'sort-by': 'param' },
      paramsNames: { 'sortBy': 'name' }
    });
  })

  test('set platform', () => {
    const state: DeepPartial<GameListSchema> = {
      rejectCount: 1,
      params: { 'platform': 'test' },
      paramsNames: { 'platform': 'test' }
    }

    expect(GameListReducer(
      state as GameListSchema,
      GameListActions.setPlatform({ param: 'param', name: 'name' })
    )).toStrictEqual({
      rejectCount: 0,
      params: { 'platform': 'param' },
      paramsNames: { 'platform': 'name' }
    });
  })

  test('set Category with Param', () => {
    const state: DeepPartial<GameListSchema> = {
      rejectCount: 1,
      params: {
        'sort-by': 'test',
        'platform': 'test'
      },
      paramsNames: {
        'platform': 'test',
        'sortBy': 'test'
      }
    }

    expect(GameListReducer(
      state as GameListSchema,
      GameListActions.setCategory({ param: 'param', name: 'name' })
    )).toStrictEqual({
      rejectCount: 0,
      params: {
        'sort-by': 'test',
        'platform': 'test',
        'category': 'param'
      },
      paramsNames: {
        'platform': 'test',
        'sortBy': 'test',
        'category': 'name'
      }
    });
  })

  test('set Category with empty Param', () => {
    const state: DeepPartial<GameListSchema> = {
      rejectCount: 1,
      params: {
        'sort-by': 'test',
        'platform': 'test',
        'category': 'test'
      },
      paramsNames: {
        'platform': 'test',
        'sortBy': 'test',
        'category': 'test'
      }
    }

    expect(GameListReducer(
      state as GameListSchema,
      GameListActions.setCategory({ param: '', name: 'name' })
    )).toStrictEqual({
      rejectCount: 0,
      params: {
        'sort-by': 'test',
        'platform': 'test',
      },
      paramsNames: {
        'platform': 'test',
        'sortBy': 'test',
        'category': 'name'
      }
    });
  })
})
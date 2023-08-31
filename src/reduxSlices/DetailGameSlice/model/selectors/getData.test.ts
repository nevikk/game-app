import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "../../../../providers/StoreProvider"
import { getDetailGameData } from "./getData";

describe('getDetailGameData', () => {
  test('should return data object', () => {
    const expectedObject = {
      id: 1,
      title: 'title',
      thumbnail: 'link',
      genre: 'genre',
      publisher: 'publisher',
      developer: 'developer',
      release_date: 'date',
      minimum_system_requirements: {
        os: 'os',
        processor: 'processor',
        memory: 'memory',
        graphics: 'graphics',
        storage: 'storage',
      },
      screenshots: [
        {
          id: 1,
          image: 'image'
        }
      ]
    };
    const state: DeepPartial<StateSchema> = {
      detailGame: {
        data: expectedObject
      }
    }

    expect(getDetailGameData(state as StateSchema)).toStrictEqual(expectedObject);
  })

  test('should return empty object', () => {
    const state: DeepPartial<StateSchema> = {
      detailGame: {}
    }

    expect(getDetailGameData(state as StateSchema)).toStrictEqual({});
  })
})
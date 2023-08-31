import { DeepPartial } from "@reduxjs/toolkit"
import { DetailGameSchema } from "../types/detailGame"
import { DetailGameActions, DetailGameReducer } from "./detailGameSlice";


describe('detailGameSlice', () => {
  test('setData', () => {
    const state: DeepPartial<DetailGameSchema> = {};
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


    expect(DetailGameReducer(
      state as DetailGameSchema,
      DetailGameActions.setData(expectedObject)
    )).toStrictEqual({ data: expectedObject })
  })
})
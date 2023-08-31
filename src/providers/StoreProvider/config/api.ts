import axios from "axios";

export const $api = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    'X-RapidAPI-Key': '3fab9e77ffmsh953555528161421p1efba4jsn4579ed68046c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
})
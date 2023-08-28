import axios from "axios";

export const $api = axios.create({
  baseURL: "https://www.freetogame.com/api",
  // headers: {
  //   'X-RapidAPI-Key': 'f5b2cc48aemsh5a3f800dff20aacp1bda94jsn668f3f5d16cb',
  //   'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  // }
})
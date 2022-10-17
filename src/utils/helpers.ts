import axios from "axios";

const baseURL = "http://localhost:8080/movies/";

export async function getMoviesByName(searchedMovie: string) {
  return axios.get(`${baseURL}search`, {
    params: {
      query: searchedMovie,
    },
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "content-type": "application/json",
    },
  });
}

export async function getMoviesDetails(id: number) {
  return axios.get(`${baseURL}${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "content-type": "application/json",
    },
  });
}

export function formatMinutes(mins: number) {
  var num = mins;
  var hours = num / 60;
  var roundedHours = Math.floor(hours);
  var minutes = (hours - roundedHours) * 60;
  var roundedMinutes = Math.round(minutes);
  return roundedHours
    ? roundedHours + " hours and " + roundedMinutes + " minutes"
    : mins + " minutes";
}

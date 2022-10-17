// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/movies/search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Incubyte's Movie",
          id: 12,
          releaseDate: "12-10-2022",
          image: "/sdsd",
        },
        {
          name: "Abdul's Movie",
          id: 14,
          releaseDate: "12-10-2022",
          image: "/sdsd",
        },
        {
          name: "Ranajay's Movie",
          id: 15,
          releaseDate: "12-10-2022",
          image: "/sdsd",
        },

        {
          name: "Sapan's Movie",
          id: 16,
          releaseDate: "12-10-2022",
          image: "/sdsd",
        },
        {
          name: "Umang's Movie",
          id: 17,
          releaseDate: "12-10-2022",
          image: "/sdsd",
        },
        {
          name: "Abhineet's Movie",
          id: 11232,
          releaseDate: "12-10-2022",
          image: "/sdsd",
        },
        {
          name: "Huzefa's Movie",
          id: 1233432,
          releaseDate: "12-10-2022",
          image: "/sdsd",
        },
        {
          name: "TDD Movie",
          id: 134342,
          releaseDate: "12-10-2022",
          image: "/sdsd",
        },
        {
          name: "Movie?",
          id: 1244,
          releaseDate: "12-10-2022",
          image: "/sdsd",
        },
      ])
    );
  }),

  rest.get("http://localhost:8080/movies/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        overview: "This is an overview",
        originalLanguage: "en",
        duration: 120,
        name: "Movie 1",
      })
    );
  }),
];

import * as TRPC from "@trpc/server";
import fetch from "node-fetch";

export type StarWarsPerson = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

const router2 = TRPC.router().query("people", {
  resolve: async () => {
    const res = await fetch("https://swapi.dev/api/people/");
    const people = await res.json();

    return { people: (people as any).results as StarWarsPerson[] };
  },
});

const router = TRPC.router().merge("starWars.", router2);

export type AppRouter = typeof router;

export { router };

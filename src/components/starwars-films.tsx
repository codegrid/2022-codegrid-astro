import type { FunctionComponent } from "preact";

const response = await fetch("https://swapi.dev/api/films");
const data: { results: { title: string }[] } = await response.json();
const films = data.results;

type Props = unknown;
export const StarwarsFilms: FunctionComponent<Props> = () => (
  <ul>
    {films.map((film) => (
      <li>{film.title}</li>
    ))}
  </ul>
);

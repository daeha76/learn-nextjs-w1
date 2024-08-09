import { PersonThumbnail } from "@/comonent/person/person";
import personInterface from "@/public/Interfaces/person";
import styles from "./app.module.css";

export const metadata = {
  title: "Billions",
};

export const URL = "https://billions-api.nomadcoders.workers.dev/";

async function getPersons() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function PersonsPage() {
  const persons: personInterface[] = await getPersons();
  return (
    <ul className={styles.personUl}>
      {persons.map((person) => (
        <li key={person.id} className={styles.personLi}>
          <PersonThumbnail person={person} />
        </li>
      ))}
    </ul>
  );
}

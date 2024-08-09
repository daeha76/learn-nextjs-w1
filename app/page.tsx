import { PersonThumbnail } from "@/comonent/person/person";
import personInterface from "@/public/Interfaces/person";
import styles from "./app.module.css";
import { BaseUrl as URL } from "@/public/urls";

export const metadata = {
  title: "Billions",
};

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

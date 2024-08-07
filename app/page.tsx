import personInterface from "@/public/Interfaces/person";
import Link from "next/link";

export const metadata = {
  title: "Persons",
};

export const URL = "https://billions-api.nomadcoders.workers.dev/";

async function getPersons() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function PersonsPage() {
  const persons: personInterface[] = await getPersons();
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          <Link href={`/person/${person.id}`}>{person.name}</Link>
        </li>
      ))}
    </ul>
  );
}

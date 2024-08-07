import { URL as API_URL } from "@/app/page";
import personDetailInterface from "@/public/Interfaces/personDetail";

export const metadata = {};

const URL = `${API_URL}person/`;

async function getPersonDetail(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${URL}${id}`);
  const json = await response.json();
  return json;
}

export default async function PersonDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const personDetail: personDetailInterface = await getPersonDetail(id);
  return (
    <div>
      <h1>Person id : {id}</h1>
      <h2>state: {personDetail.state}</h2>
    </div>
  );
}

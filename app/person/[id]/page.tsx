import { URL as API_URL } from "@/app/page";
import { PersonDetailThumbnail } from "@/comonent/person/personDetail";
import { personDetailInterface } from "@/public/Interfaces/personDetail";

export const metadata = {};

const URL = `${API_URL}person/`;

async function getPersonDetail(id: string) {
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
  return <PersonDetailThumbnail personDetail={personDetail} />;
}

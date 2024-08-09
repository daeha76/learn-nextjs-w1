import { BaseUrl } from "@/public/urls";
import { PersonDetailThumbnail } from "@/comonent/person/personDetail";
import { personDetailInterface } from "@/public/Interfaces/personDetail";

export const metadata = {};

const BillionDetailUrl = (id: string) => {
  return `${BaseUrl}person/${id}`;
};

async function getPersonDetail(id: string) {
  const response = await fetch(`${BillionDetailUrl(id)}`);
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

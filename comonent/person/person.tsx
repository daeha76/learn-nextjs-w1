import personInterface from "@/public/Interfaces/person";
import Image from "next/image";
import Link from "next/link";

export const PersonThumbnail = ({ person }: { person: personInterface }) => {
  const ImageScr =
    person.squareImage === "https:undefined" ? "" : person.squareImage;
  return (
    <Link href={`/person/${person.id}`}>
      <Image
        src={ImageScr}
        alt={`${person.name} image`}
        width={250}
        height={250}
      />
      {person.name}
    </Link>
  );
};

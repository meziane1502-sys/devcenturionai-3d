import Image from "next/image";
import Link from "next/link";

import { BASE_PATH } from "@/constants";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#f9731630] hover:border-[#f97316] transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] group"
    >
      <Image
        src={`${BASE_PATH}${src}`}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain group-hover:scale-105 transition-transform duration-300"
      />

      <div className="relative p-4 bg-gradient-to-t from-[#09090b] to-transparent">
        <h1 className="text-2xl font-semibold text-white group-hover:text-[#f97316] transition-colors">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

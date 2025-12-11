import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-[#09090b] text-gray-200 shadow-lg p-[15px] border-t border-[#f9731620]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* Logo */}
        <div className="mb-8">
          <span className="text-2xl font-bold text-white">Dev<span className="text-[#f97316]">Centurion</span><span className="text-[#a855f7]">Ai</span></span>
        </div>

        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px] text-[#f97316]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => {
                const isExternal = link.startsWith("http");
                const isAnchor = link.startsWith("#");

                if (isExternal) {
                  return (
                    <a
                      key={`${column.title}-${name}`}
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-row items-center my-[15px] hover:text-[#f97316] transition-colors"
                    >
                      {Icon && <Icon className="text-[#a855f7]" />}
                      <span className="text-[15px] ml-[6px]">{name}</span>
                    </a>
                  );
                }

                if (isAnchor) {
                  return (
                    <a
                      key={`${column.title}-${name}`}
                      href={link}
                      className="flex flex-row items-center my-[15px] hover:text-[#f97316] transition-colors"
                    >
                      {Icon && <Icon className="text-[#a855f7]" />}
                      <span className="text-[15px] ml-[6px]">{name}</span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    className="flex flex-row items-center my-[15px] hover:text-[#f97316] transition-colors"
                  >
                    {Icon && <Icon className="text-[#a855f7]" />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center text-gray-400">
          &copy; DevCenturionAi {new Date().getFullYear()}. Tous droits réservés.
        </div>
      </div>
    </div>
  );
};

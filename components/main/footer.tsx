import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-start justify-around flex-wrap gap-6 py-6">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] flex flex-col items-center justify-center gap-4"
            >
              <h3 className="text-[20px] font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {column.title}
              </h3>
              <div className="flex flex-row flex-wrap gap-4">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center hover:underline mr-3 text-gray-300 transition duration-200"
                  >
                    {Icon && <Icon className="mr-1" />}
                    <span className="text-[20px]">{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 text-[15px] text-center">
          &copy; N Akhil Rakesh {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

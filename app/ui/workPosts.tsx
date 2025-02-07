import Link from "next/link";
import { getWorkPosts } from "@/app/work/utils";
import getIcon from "@/app/ui/icons";
import { IoMdTimer } from "react-icons/io";
import { FaClipboardUser } from "react-icons/fa6";
import Image from "next/image";

type IconName =
  | "react"
  | "nextjs"
  | "nodejs"
  | "java"
  | "typescript"
  | "javascript"
  | "html5"
  | "css3"
  | "mongodb"
  | "tailwindcss"
  | "git";

export function WorkPosts() {
  const allWorks = getWorkPosts();

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 xl:p-16">
      <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-10">
        {allWorks.map((post) => (
          <Link
            key={post.slug}
            href={`/work/${post.slug}`}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96"
              src={post.metadata.imageUrl}
              alt=""
              width={400}
              height={300}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.metadata.title}
              </h5>
              <div className="flex space-x-1 text-4xl text-gray-300">
                {post.metadata.technology.split(", ").map((tech) => (
                  <span key={tech} className="flex">
                    {getIcon(tech as IconName)}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-2 mt-4 mb-3 text-lg text-gray-600 dark:text-gray-300">
                <IoMdTimer /> {"  "}
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {post.metadata.duration}
                </span>{" "}
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.metadata.summary}
              </p>
              <div className="flex items-center space-x-2 mt-2 mb-3 text-lg text-gray-600 dark:text-gray-300">
                <FaClipboardUser />{" "}
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {post.metadata.role}{" "}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

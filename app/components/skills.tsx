import { languages, technologies } from "../data/data";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-5 mt-10 mb-10">
      <h3 className="mt-5">Skills</h3>
      <h6 className="dark:text-zinc-400">Programming Languages :</h6>
      <div className="flex flex-row gap-2">
        {languages.map((language, index) => {
          return (
            <div
              key={index}
              className="border border-teal-600 rounded-lg px-3 py-1 text-teal-500 hover:bg-black dark:hover:bg-teal-600 hover:text-teal-300 dark:hover:text-white"
            >
              {language}
            </div>
          );
        })}
      </div>
      <h6 className="dark:text-zinc-400">Technologies :</h6>
      <div className="flex flex-row flex-wrap gap-2">
        {technologies.map((technology, index) => {
          return (
            <div
              key={index}
              className="border border-teal-600 rounded-lg px-3 py-1 text-teal-500 hover:bg-black dark:hover:bg-teal-600 hover:text-teal-300 dark:hover:text-white"
            >
              {technology}
            </div>
          );
        })}
      </div>
    </div>
  );
};

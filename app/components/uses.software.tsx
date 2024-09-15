import { softwares } from "~/data/data";

const Software = () => {
  return (
    <div className="flex flex-col gap-5 mb-2 p-10">
      <h3>Software</h3>
      {softwares.map((item, index) => (
        <ul className="dark:text-zinc-400" key={index}>
          <li className="font-bold italic dark:text-teal-500">
            {item.category}
          </li>
          {item.list.map((list, index) => (
            <li key={index}>⌖ {list}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export const SoftwareWrapper = () => {
  return <Software />;
};

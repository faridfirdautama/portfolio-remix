import { hardwares } from "~/data/data";

const Hardware = () => {
  return (
    <div className="flex flex-col gap-5 mb-2 p-10">
      <h3>Hardware</h3>
      {hardwares.map((item, index) => (
        <ul className="dark:text-zinc-400" key={index}>
          <li className="font-bold italic dark:text-teal-500">{item.unit}</li>
          <li>⌖ {item.specs}</li>
        </ul>
      ))}
    </div>
  );
};

export const HardwareWrapper = () => {
  return <Hardware />;
};

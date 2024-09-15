import { ICertificate } from "~/data/types";
import { certificates } from "~/data/data";

const Certificate = (data: ICertificate) => {
  return (
    <div className="hover:scale-105 transform duration-300">
      {" "}
      <a
        href={data.url}
        className="flex flex-row justify-center gap-3"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={80}
          className="rounded-lg"
          src="/dicoding_logo.jpeg"
          alt="ios-dicoding"
        />
        <div>
          <h6 className="font-bold">{data.title}</h6>
          <p className="mb-1 text-sm">{data.company}</p>
          <p className="border border-teal-600 px-3 py-0.5 w-[135px] rounded-full hover:bg-black dark:hover:bg-teal-600 hover:text-teal-300 dark:hover:text-white text-sm text-teal-500">
            Show certificate
          </p>
        </div>
      </a>
    </div>
  );
};

const CardCertificate = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 md:flex-row md:flex-wrap">
      {certificates.map((data, index) => (
        <Certificate key={index} {...data} />
      ))}
    </div>
  );
};

export const CertificateWrapper = () => {
  return <CardCertificate />;
};

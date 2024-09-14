interface ICertificate {
  url: string;
  title: string;
  company: string;
}

export const CardCertificate = (data: ICertificate) => {
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

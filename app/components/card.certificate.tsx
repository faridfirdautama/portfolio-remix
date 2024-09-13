interface ICertificate {
  url: string;
  title: string;
  company: string;
}

export const CardCertificate = (data: ICertificate) => {
  return (
    <div>
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
          src="../../public/dicoding_logo.jpeg"
          alt="ios-dicoding"
        />
        <div>
          <h5 className="font-bold">{data.title}</h5>
          <p className="mb-1 text-sm">{data.company}</p>
          <p className="border border-teal-600 px-3 py-0.5 w-[135px] rounded-full hover:bg-black hover:text-teal-300 text-sm text-teal-500">
            Show certificate
          </p>
        </div>
      </a>
    </div>
  );
};

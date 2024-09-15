import type { MetaFunction } from "@remix-run/node";
import { CertificateWrapper } from "~/components/certificate";
import { Skills } from "~/components/skills";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | FFU" },
    {
      name: "Personal website",
      content: "Personal website of farid-utama.my.id",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row md:gap-24 justify-center gap-10 items-center border-t border-b border-zinc-700 h-[400px]">
        <div className="text-center md:text-right md:scale-125">
          <h5>A Software Developer</h5>
          <h1 className="">Farid Firda Utama</h1>
        </div>
        <div className="flex flex-col justify-center items-center h-[108px] w-[108px] bg-teal-500 rounded-full md:scale-125">
          <img
            width={100}
            className="rounded-full "
            src="/profile.jpeg"
            alt="profile"
          />
        </div>
      </div>

      {/* About me */}
      <div className="flex flex-col gap-5 mt-10 mb-10 p-10">
        <h3>About Me</h3>
        <p className="dark:text-zinc-400">
          A Software Developer whose passion lies in creating a good quality
          code and software for humans, including but not limited to design and
          product development (fulstack web and ios app).
        </p>
        <p className="dark:text-zinc-400">
          As a self-taught learner, I passioned to learn a new technology
          related to software development. I am certified by{" "}
          <a
            href="https://dicoding.com"
            target="_blank"
            className="text-teal-500 dark:text-teal-200 font-bold italic"
            rel="noreferrer"
          >
            Dicoding
          </a>{" "}
          as a DevOps Engineer in 2023 and iOS Developer in 2024.
        </p>

        <h6>Certificates :</h6>
        <CertificateWrapper />
        <Skills />
      </div>
    </div>
  );
}

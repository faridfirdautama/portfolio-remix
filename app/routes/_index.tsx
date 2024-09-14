import type { MetaFunction } from "@remix-run/node";
import { CardCertificate } from "~/components/card.certificate";
import { Input } from "~/components/input";
import { Textarea } from "~/components/textarea";
import { Button } from "~/components/button";
import { languages, technologies } from "~/data/data";

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
    <>
      <div className="flex flex-col-reverse md:flex-row md:gap-24 justify-center gap-10 items-center border-t border-b border-zinc-700 h-[400px]">
        <div className="text-center md:text-right md:scale-125">
          <h5>A Fullstack Web Developer</h5>
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
          A Fullstack Web Developer whose passion lies in creating a good
          quality code and software for humans, including but not limited to
          design and product development.
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
        <div className="flex flex-col justify-start items-start gap-6 md:flex-row md:flex-wrap">
          {/* DICODING CARD */}
          <CardCertificate
            url="https://www.dicoding.com/certificates/98XW2OLM9PM3"
            title="iOS Developer"
            company="Dicoding Indonesia"
          />
          <CardCertificate
            url="https://www.dicoding.com/certificates/QLZ97M0V9P5D"
            title="DevOps CI / CD"
            company="Dicoding Indonesia"
          />
          <CardCertificate
            url="https://www.dicoding.com/certificates/KEXL821O4ZG2"
            title="Microservices Architecture"
            company="Dicoding Indonesia"
          />
        </div>

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

      {/* CONTACT ME */}
      <div className="flex flex-col gap-5 p-10">
        <h3>Contact Me</h3>
        <form className="flex flex-col gap-5 md:max-w-[600px]">
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your email" />
          <Textarea placeholder="Enter your message" rows={5} />
          <Button variant="primaryGr" size="md">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

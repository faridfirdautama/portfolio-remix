export default function About() {
  const languages: string[] = ["Javascript", "Typescript", "Swift"];
  const technologies: string[] = [
    "CSS",
    "Tailwind",
    "NVIM",
    "VSCode",
    "React",
    "Next",
    "Remix",
    "Storybook",
    "Github Action",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "SwiftUI",
  ];
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center border-t border-b border-red-100 h-[400px]">
        <div className="text-center md:text-right">
          <h5>A Fullstack Web Developer</h5>
          <h1 className="">Farid Firda Utama</h1>
        </div>
        <div className="flex flex-col justify-center items-center h-[108px] w-[108px] bg-teal-500 rounded-full">
          <img
            width={100}
            className="rounded-full "
            src="/profile.jpeg"
            alt="profile"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 mb-10 p-10">
        <h3>About Me</h3>
        <p>
          A Fullstack Web Developer whose passion lies in creating a good
          quality code and software for humans, including but not limited to
          design and product development.
        </p>
        <h3>Programming Languages</h3>
        <div className="flex flex-row gap-2">
          {languages.map((language, index) => {
            return (
              <div
                key={index}
                className="border border-teal-600 rounded-lg px-3 py-1 text-teal-500 hover:bg-black hover:text-teal-300"
              >
                {language}
              </div>
            );
          })}
        </div>
        <h3>Technologies</h3>
        <div className="flex flex-row flex-wrap gap-2">
          {technologies.map((technology, index) => {
            return (
              <div
                key={index}
                className="border border-teal-600 rounded-lg px-3 py-1 text-teal-500 hover:bg-black hover:text-teal-300"
              >
                {technology}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

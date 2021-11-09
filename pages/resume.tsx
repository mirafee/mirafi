import Bar from "../components/Bar";
import { languages, tools } from "../data";
import Head from "next/head";

const Resume = () => {
  return (
    <section className="px-6 py-2">
    <Head>
    <title>resume - MIR</title>
    </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
             English Literature
            </h5>
            <p className="font-semibold">Govt. Hazi Muhammad Mohsin College</p>
            <p className="my-3">
              I am currently pursuing <b>English Literature</b> from one of the best institution of Bangladesh.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Trainer</h5>
            <p className="font-semibold">Arabian Computers</p>
            <p className="my-3">I prefer talented youths and better future for my country. Hence i've joined teaching profession.</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

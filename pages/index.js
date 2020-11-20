import Head from "next/head";

function ApplyToCourse() {
  return (
    <div className="flex">
      <a
        className="uppercase block px-10 py-4 bg-black text-lg text-white font-extrabold font-inter rounded-full"
        href="/apply"
      >
        Apply to course
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>CoronaSafe Programming Course</title>
        <link rel="icon" href="/favicon.ico"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={"text-xl pb-24"}>
        <section className="HeroWithPartnerLogos">
          <div className="ContentSection">
            <div className="Hero">
              <div className="md:flex flex-shrink-0 items-baseline justify-center">
                <div className="flex-shrink-0">
                  <img src="hero/corona.png" alt="Corona Virus" className={"bg-contain"}/>
                  <p
                    className="text-3xl md:text-4xl text-black font-monogame border-black mb-4">Corona
                  </p>
                </div>

                <p
                  className="Versus text-3xl md:text-4xl font-monogame border-black mb-4">v.
                </p>

                <div className="flex-shrink-0 ">
                  <img src="hero/code.png" alt="Code" className={"bg-contain"}/>
                  <p
                    className="text-3xl md:text-4xl text-black font-monogame border-black mb-4">Code
                  </p>
                </div>
              </div>

              <div className="md:flex justify-between items-center mt-8">
                <p className="WelcomeText font-medium mb-8 md:w-1/2">
                <span className="font-bold text-black">
                  Welcome to the CoronaSafe Engineering Fellowship!{" "}
                </span>
                  CoronaSafe Engineering Fellowship is a national programme to identify the top 30 students in
                  software engineering for an industry-led training to become full-stack developers.
                </p>
                <ApplyToCourse/>
              </div>
            </div>
          </div>

          <section className="PartnerLogos p-8 md:p-20 md:flex justify-center items-center">
            <img className="block mb-8" src="logos/dell.png"/>
            <img className="block mb-8 md:ml-32" src="logos/freshworks.png"/>
            <img className="block mb-8 md:ml-32" src="logos/aicte.png"/>
          </section>

        </section>


        <section className="ContentSection">
          <div className="max-w-3xl mx-auto text-2xl md:text-3xl font-inter font-bold leading-snug">
            <p className="">
              <span className="text-gray-700">
                Build real-world, modern web apps.&nbsp;
              </span>
              Create open-source software.&nbsp;
              <span className="text-gray-700">
                Practical lessons drawn from 15+ years of industry
                experience.&nbsp;
              </span>
              Learn Typed Functional Programming with ReScript/OCaml.&nbsp;
              <span className="text-gray-700">
                1:1 mentorships & 1:many friendships.&nbsp;
              </span>
            </p>
          </div>
        </section>

        <section className="EverythingToKnow">
          <div className="ContentSection">
            <div className="max-w-2xl mx-auto leading-normal">
              <h2 className="font-extrabold text-3xl mb-8">
                Everything you need to know
              </h2>
              <p className="mb-2">
                <span className="font-extrabold">What is this? </span>
                Industry-led full-stack web development training to
                contribute open-source code for CoronaSafe disaster management.
              </p>
              <p className="mb-2">
                <span className="font-extrabold">Who’s this for? </span>
                Age 18+ students. You should have written
                non-trivial code before; for your own or college projects.
              </p>
              <p className="mb-2">
                <span className="font-extrabold">When? </span>
                Jan 02 - Mar 15, 2021
              </p>
              <p className="mb-2">
                <span className="font-extrabold">Effort? </span>
                120 hours of highly enjoyable study. About 10 weekends worth.
              </p>
              <p className="mb-2">
                <span className="font-extrabold">Format? </span>
                Self-paced learning via video tutorials, but between specified
                assignment submission dates.
              </p>
              <p className="mb-2">
                <span className="font-extrabold">Mentorship? </span>
                Code reviews, dedicated Q&A forum, weekly sessions with mentors and fellow students,
                AMAs with industry veterans.
              </p>
              <p className="mb-2">
                <span className="font-extrabold">Stack? </span>
                ReScript / OCaml. Ruby on Rails. React. PostgreSQL. Typed FP.
                Relax! You'll learn all these in the course and no prior knowledge of them is required.
              </p>
              <p className="mb-12">
                <span className="font-extrabold">Certificate? </span>
                Yes!
              </p>
              <ApplyToCourse/>
            </div>
          </div>
        </section>

        <section className="SupportedBy mb-16 text-center">
          <div className="ContentSection">
            <h2 className="font-black text-2xl md:text-3xl text-center mb-16">
              An initiative supported by
            </h2>
            <div className="grid md:grid-cols-3 justify-center md:justify-between w-4/5 mx-auto">
              <div className="text-center mb-12">
                <img src="people/mekin.png" alt="Mekin" className="mb-8 inline"/>
                <p className={"font-medium text-xl mb-4"}>Mekin Maheshwari</p>
                <p className={"font-medium SupportedBy-desc"}>
                  Founder, Udhyam.org <br/>
                  ex-CTO, Flipkart
                </p>
              </div>
              <div className="text-center mb-12">
                <img src="people/girish.png" alt="Girish" className="mb-8 inline"/>
                <p className={"font-medium text-xl mb-4"}>Girish Mathrubhootham</p>
                <p className={"font-medium SupportedBy-desc"}>
                  Founder & CEO, <br/>
                  Freshworks Inc
                </p>
              </div>
              <div className="text-center mb-12">
                <img src="people/sanjay.png" alt="Sanjay" className="mb-8 inline"/>
                <p className={"font-medium text-xl mb-4"}>Sanjay Vijayakumar</p>
                <p className={"font-medium SupportedBy-desc"}>
                  Founder & CEO,<br/>
                  PupilFirst.org
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="Testimonials">
          <div className="ContentSection">
            <div className="md:flex justify-between font-inter font-medium italic">
              <div>
                <blockquote className={"mr-4 mb-4"}>
                  This workshop was very intriguing. The instructors went to the extra mile by providing us with so much
                  references to books, blogs and talks we could refer to. The most impressive thing was the effort they
                  took to print out research papers and hand out a spiral bound copy to every one!!

                  I mean the kind of commitment they have towards this just swayed us and shows their love for
                  programming
                  and how keen they are towards building a community. This workshop was very inspiring and a significant
                  memory to hold on to.
                </blockquote>
                <blockquote className={"mr-4 mb-4"}>
                  The final product that we were asked to build was amazing. There were plenty of things that
                  we were able to learn ourselves towards that journey. I am glad that we were able to create such a
                  good product.
                </blockquote>
              </div>
              <div>
                <blockquote className={"mr-4 mb-4"}>
                  The experience which I had while doing the course was different, interesting, enjoyable and a bit
                  difficult at the same time from the rest of the courses which I have done so far. The PupilFirst
                  platform helped a lot in better understanding of the course and also the faculties, teaching
                  assistants and course co-ordinators were reachable at any time and responsive even in this pandemic
                  situation.
                </blockquote>
                <blockquote className={"mr-4 mb-4"}>
                  Loved everything about this course.
                  It was great to receive feedback from industry professionals. We learned a lot outside the curriculum
                  while doing the project - Github, CSS, JS, and the assignments were exceptionally good in testing our
                  knowledge about that week's syllabus.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="Longform ContentSection">
          <div className="max-w-2xl mx-auto">
            <div className="mb-16">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/RYAu0CmB-TA" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>

            <div className="mb-16">
              <h2>Free</h2>
              <p>
                This program is created by a team of over a dozen people from across multiple companies, with
                funding from the Michael &amp; Dell Foundation, the ACT
                foundation, and support from FreshWorks. This funding enables us
                to offer the course to you for free.{" "}
              </p>
            </div>

            <div className="mb-16">
              <h2>Write open-source code for Corona disaster management</h2>
              <p>
                This course is part of the CoronaSafe initiative that will let
                you create open-source software used by government agencies for
                public health and disaster management.
              </p>

              <p>
                The Corona Care software is currently being used in over 100
                hospitals to record patient intake and availability of
                facilities. This results in a central dashboard used by the
                Ernakulam district collector’s office for monitoring and
                allocating resources. The software is also guided by the Central
                government’s National Health Mission.
              </p>

              <p>
                This course is created to find and train students to help contribute to the CoronaSafe open-source
                project. Once the course is over, you'll be invited to the project to help us create open-source
                software built for public utility.
              </p>
            </div>

            <div className="mb-16">
              <h2>1-to-1 coaching from industry programmers</h2>

              <p>
                This is an industry-backed course and it will prepare you for a
                career in building production software. This reflects in what
                you will learn, and how you learn it. Each of your code
                submission will be reviewed in depth by a coach and your code
                will get kind, courteous feedback. You will gain hard-earned insights
                about abstraction boundaries, data modelling,
                layering, and program design.{" "}
              </p>
            </div>
            <div className="mb-16">
              <h2>Ask Me Anything (AMA) with devs, designers, and founders</h2>

              <p>
                You will hear experience reports from people in the industry.
                There will be no long, boring introductions; instead you will
                hear raw stories of how folks got started, what they’d advice
                their younger selves, and how the industry works today. The best
                things about these AMAs are the free-wheeling question and
                answer session where you talk with the speakers about the most
                pressing questions in your mind.
              </p>
            </div>

            <div className="mb-16">
              <h2>
                Fellowship with a small group of students from across the
                country
              </h2>

              <p>
                This course is open to students from across the country and you
                will team up with them for some of the programming projects in
                the course. You will learn to collaborate with them through git,
                GitHub and the pull request workflow. You will have access to a
                community forum for discussions as well as a Discord server for
                conversations. There will be a kind and respectful code of
                conduct to make the experience welcoming for everyone.{" "}
              </p>
            </div>

            <div className="mb-16">
              <h2>Skills</h2>

              <p>
                You will learn a host of practical skills that will help you in
                kickstarting your career and some lessons that will stay with
                you even long after.
              </p>

              <h3>Build live, real-world software with Ruby on Rails</h3>

              <p>
                Ruby on Rails pioneered the modern web framework revolution. It
                is a fully integrated package that has everything we need to
                build complete web applications. GitHub is built on Rails and so
                is Shopify. Thousands of startups build their systems in Rails
                every year, and it has also become a mainstream solution for
                large companies.{" "}
              </p>

              <h3>Create advanced front-ends with React and ReScript/OCaml</h3>

              <p>
                You’ll learn to program in the Typed Functional paradigm in
                ReScript/OCaml. ReScript compiles down to efficient JavaScript
                and has excellent support for building front-end with React.
                During the course you will create everything from simple
                interactive UIs to user input forms, games, and single-page
                applications.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

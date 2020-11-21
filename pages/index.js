import Head from "next/head";

function ApplyToCourse() {
  return (
    <div className="flex justify-center xl:justify-start">
      <a
        className="uppercase block px-10 py-4 bg-black text-lg text-white font-extrabold font-inter rounded-full"
        href="https://svlabs.typeform.com/to/CSv0H294"
      >
        Apply for Fellowship
      </a>
    </div>
  );
}


function HeroCharacter({caption, imgSrc}) {
  return (
    <div className="flex-shrink-0">
      <img src={imgSrc} alt={caption} className={"bg-contain w-40 lg:w-auto mx-auto"}/>
      <p className="text-3xl lg:text-4xl text-black font-monogame border-black mb-4">
        {caption}
      </p>
    </div>
  )
}

function ImageWithDescription({name, caption, imgSrc}) {
  return (
    <div className="text-center text-base lg:text-lg xl:text-xl mb-12">
      <img src={imgSrc} alt="Mekin" className="mb-8 inline w-32 xl:w-auto"/>
      <p className={"font-medium mb-2 lg:mb-4"}>{name}</p>
      <p className={"font-medium SupportedBy-desc"}>
        {caption}
      </p>
    </div>
  )
}

function StatsWithTitleAndDescription({title, description}) {
  return (
      <div className="text-center">
        <div className="font-semibold text-2xl">
          {title}
        </div>
        <div className="text-sm">
          {description}
        </div>
      </div>
  )
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
              <div className="lg:flex flex-shrink-0 items-baseline justify-center text-center">
                <HeroCharacter caption={"Corona"} imgSrc={"hero/corona.png"}/>
                <p
                  className="Versus text-3xl lg:text-4xl font-monogame border-black mb-4">v.
                </p>
                <HeroCharacter caption={"Code"} imgSrc={"hero/code.png"}/>
              </div>

              <div className="xl:flex justify-between items-center mt-12 xl:mt-8 text-center xl:text-left">
                <p className="WelcomeText font-medium mb-8 xl:w-1/2">
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

          <section className="PartnerLogos">
            <div className="ContentSection xl:flex justify-center items-center text-center">
              <img className="block mx-auto mb-8 " src="logos/dell.png"/>
              <img className="block mx-auto mb-8 xl:ml-32" src="logos/freshworks.png"/>
              <img className="block mx-auto mb-8 xl:ml-32" src="logos/aicte.png"/>
              <img className="block mx-auto mb-8 xl:ml-32" src="logos/wadhwani.png"/>
            </div>
          </section>
        </section>


        <section className="ContentSection">
          <div className="max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl font-inter font-bold leading-snug">
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
              <h2 className="font-extrabold text-2xl md:text-3xl mb-8">
                Everything you need to know
              </h2>
              <p className="mb-2">
                <span className="font-extrabold">What is this? </span>
                Industry-led advanced programming training for students.
              </p>
              <p className="mb-2">
                <span className="font-extrabold">Why? </span>
                To train you to help contribute open-source code for CoronaSafe disaster management.
              </p>
              <p className="mb-2">
                <span className="font-extrabold">Who is this for? </span>
                Age 18+ students who enjoy programming. You should have written
                non-trivial code before; for personal or college projects.
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
                programming assignment dates.
              </p>
              <p className="mb-2">
                <span className="font-extrabold">Mentorship? </span>
                Weekly sessions with mentors and fellow students,
                AMAs with industry veterans, code reviews, and dedicated Q&A forum.
              </p>
              <p className="mb-2">
                <span className="font-extrabold">Stack? </span>
                ReScript/OCaml. Ruby on Rails. React. PostgreSQL. Typed FP.
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
            <h2 className="font-black text-xl md:text-2xl lg:text-3xl text-center mb-16">
              An initiative supported by
            </h2>
            <div className="grid lg:grid-cols-3 justify-center lg:justify-between mx-auto">
              <ImageWithDescription name="Mekin Maheshwari"
                                    caption={<>
                                      Founder, Udhyam.org <br/>
                                      ex-CTO, Flipkart</>}
                                    imgSrc="people/mekin.png"
              />
              <ImageWithDescription name="Girish Mathrubhootham"
                                    caption={<>
                                      Founder & CEO, <br/>
                                      Freshworks Inc</>}
                                    imgSrc="people/girish.png"
              />
              <ImageWithDescription name="Sanjay Vijayakumar"
                                    caption={<>
                                      Founder & CEO,<br/>
                                      PupilFirst.org</>}
                                    imgSrc="people/sanjay.png"
              />
            </div>
          </div>
        </section>

        <section className="Testimonials text-base md:text-lg lg:text-xl">
          <div className="ContentSection">
            <div className="xl:flex justify-between font-inter font-medium italic">
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
            <div className="mb-16 hidden md:block">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/RYAu0CmB-TA" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>

            <div className="mb-16">
              <h2>Free</h2>
              <p>
                This program is created by a team of over a dozen people from across multiple companies, with
                funding from the Michael &amp; Dell Foundation, the ACT
                foundation, and support from FreshWorks.
              </p>
              <p>
                ACT is an 100Crore fund setup by india’s leading tech entrepreneurs and venture capitalists
                for supporting efforts. CoronaSafe is a recipient of ACT grants.
              </p>
              <p>
                This funding enables us to offer the course to you for free.
              </p>
            </div>

            <div className="mb-16">
              <h2>Write open-source code for Corona disaster management</h2>
              <p>
                CoronaSafe Network codebase is a national asset created by india’s leading software industry
                engineers along with National Health Mission, Government of India and Department of Health,
                Government of Kerala.
              </p>

              <p>
                Over 300+ industry software engineers have voluntarily contributed to build CoronaSafe Network.
                The Corona Care software is currently being used in over 200 hospitals to record patient intake
                and availability of facilities. This results in a central dashboard used by the Ernakulam
                district collector’s office for monitoring and allocating resources.
              </p>
            </div>

            <div className="mb-16">
              <h2>Impact</h2>
              <div className="mb-4">
              <img className="mb-4 object-cover rounded-md " src="https://assets.zyrosite.com//Yyve4DOKXjcZ8bJ0/Screenshot-from-mp8Bw5WPbBHGrWPO-w1370.png"/>
                <div className="text-xs mb-2">
                  Stats as of November 20, 2020
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatsWithTitleAndDescription title="200+" description="Hospitals Using the platform"/>
                <StatsWithTitleAndDescription title="62K+" description="Patients Managed"/>
                <StatsWithTitleAndDescription title="28K+" description="Shifting Managed"/>
                <StatsWithTitleAndDescription title="2l+" description="Telemedicine Calls"/>
                </div>
              </div>
              <p>
                We are now looking to select 30 of the best student developers in India to become full stack
                developers under industry guidance.
              </p>
              <p>
                Successful students who complete the programme shall get a semester long internships with
                CoronaSafe to contribute code to further develop this national asset.
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

              <h3>Create real-world Rails webapps</h3>

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

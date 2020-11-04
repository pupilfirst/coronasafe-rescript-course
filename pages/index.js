import Head from "next/head";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>CoronaSafe Programming Course</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={"MAIN"}>
        <section className="">
          <div className="SK">
            <div className="flex justify-center">
              <h2 className="text-4xl text-black font-monogame border-b-4 border-black mb-4 text-center">
                Fight Corona with Code!
            </h2>
            </div>
            <h3 className="text-xl text-gray-500 font-monogame text-center">
              Training & Internship Course
            </h3>
            <img src="hero.png" className="bg-contain mt-8" />

            <div className="flex justify-between items-center mt-8">
              <p className="text-gray-700 w-1/2">
                <span className="font-bold text-black">Hello Programmers! </span>
                Join for a practical, in-depth course focused on typed
                functional programming. After training, you’ll work on live
                projects building software to help India’s corona-fighting
                efforts.
              </p>
              <a
                className="uppercase block px-10 py-4 bg-black text-white font-extrabold font-inter rounded-full"
                href="/apply"
              >
                Apply to course
              </a>
            </div>
          </div>
        </section>

        <section className="logos-bg p-20 flex justify-center items-center">
          <img className="block" src="logos/dell.png" />
          <img className="block ml-32" src="logos/freshworks.png" />
          <img className="block ml-32" src="logos/aicte.png" />
        </section>

        <section className="highlights-bg p-32 font-inter font-bold text-3xl leading-snug">
          <div className="w-2/3 mx-auto">
            <span className="text-gray-700">
              Worth 3 AICTE credits.&nbsp;
            </span>
            Internship opportunities with Freshworks, Truecaller, GoJek, Big-binary.&nbsp;
            <span className="text-gray-700">
              Practical lessons drawn from 15+ years of industry experience.&nbsp;
            </span>
            Build real world, modern web applications.&nbsp;
            <span className="text-gray-700">
              1:1 mentorships & 1:many friendships.&nbsp;
            </span>
          </div>
        </section>
        <section className="LP">
          <h2>Features of this course</h2>

          <h3>
            You will create open-source software for Corona disaster management
          </h3>

          <p>
            This course is part of the CoronaSafe initiative that will let you
            create open-source software used by government agencies for public
            health and disaster management.
          </p>

          <p>
            The Corona Care software is currently being used in over 100
            hospitals to record patient intake and availability of facilities.
            This results in a central dashboard used by the Ernakulam district
            collector’s office for monitoring and allocating resources. The
            software is also guided by the Central government’s National Health
            Mission.
          </p>

          <p>
            As part of the course you will create software like CoronaSafe Care,
            and all of it will be open-source and built for public utility. They
            will be real-world software shipped to production and delivering
            real value.
          </p>

          <h3>You will get 1-to-1 coaching from industry programmers</h3>

          <p>
            This is an industry-backed course and it will prepare you for a
            career in building production software. This reflects in what you
            will learn, and how you will learn. Each of your code submission
            will be reviewed in depth by a coach and your code will get kind,
            courteous feedback. We will look at basics like automated code
            formatting, naming, and programming idioms. Those are but table
            stakes. More importantly, you will learn high-level design around
            abstraction boundaries, data modelling, layering, and so on.{" "}
          </p>

          <h3>
            Ask Me Anything (AMA) sessions with developers, designers, and
            founders
          </h3>

          <p>
            You will hear experience reports from people in the industry. There
            will be no long, boring introductions; instead you will hear raw
            stories of how folks got started, what they’d advice their younger
            selves, and how the industry works today. The best things about
            these AMAs are the free-wheeling question and answer session where
            you talk with the speakers about the most pressing questions in your
            mind.
          </p>

          <h3>
            You will be part of a small group of students like you from across
            the country
          </h3>

          <p>
            This course is open to students from across the country and you will
            team up with them for some of the programming projects in the
            course. You will learn to collaborate with them through git, GitHub
            and the pull request workflow. You will have access to a community
            forum for discussions as well as a Discord server for conversations.
            There will be a kind and respectful code of conduct to make the
            experience welcoming for everyone.{" "}
          </p>

          <h2>Free</h2>

          <p>
            This course is created by a team of over a dozen people with funding
            from the Michael &amp; Dell Foundation, the ACT foundation, and
            support from FreshWorks. This funding enables us to offer this
            course to you for free.{" "}
          </p>

          <h2>Skills</h2>

          <p>
            You will learn a host of practical skills that will help you in
            kickstarting your career and some lessons that will stay with you
            even long after.
          </p>

          <h3>
            You will be able to build full stack web applications with Ruby on
            Rails
          </h3>

          <p>
            Ruby on Rails pioneered the modern web framework revolution. It is a
            fully integrated package that has everything we need to build
            complete web applications. GitHub is built on Rails and so is
            Shopify. Thousands of startups build their systems in Rails every
            year, and it has also become a mainstream solution for large
            companies.{" "}
          </p>

          <h3>
            You will be able to build sophisticated front-end applications with
            React and ReScript/OCaml
          </h3>

          <p>
            You’ll learn to program in the Typed Functional paradigm in
            ReScript/OCaml. ReScript compiles down to efficient JavaScript and
            has excellent support for building front-end with React. During the
            course you will create everything from simple interactive UIs to
            user input forms, games, and single-page applications.
          </p>

          <h2>This course has a theme: data-first programming</h2>

          <p>
            This course will teach you to design programs well by thinking about
            data first. It is an old technique, but unfortunately it takes most
            of us many years of programming before we truly appreciate it.{" "}
          </p>

          <p>
            But why should you retrace that same circuitous path? Why repeat the
            same mistakes and spend years re-learning the same lessons that
            programmers before you have painfully learnt?
          </p>

          <p>
            And what is that lesson? It is this: “if you get the data structures
            and their invariants right, most of the code will just kind of write
            itself”. Linus Torvalds once claimed that the difference between a
            bad programmer and a good one is whether they consider their code or
            their data structures more important.
          </p>

          <p>
            And when we say data structure, we don’t mean low-level primitives
            like stacks, queues, and trees. Instead, we’re talking about data
            models used for application programming. If you were to create a
            multi-player platformer game, how would you model the game entities?
            Or if you wanted to create an image gallery with search, infinite
            scrolling and robust error handling and retry, how would you model
            it? If you wanted to build a Twitter-like platform, how would you
            design its data model?{" "}
          </p>

          <p>
            The key here is that irrespective of what software you want to
            build, you should spend time upfront designing how your data is
            organized. You should model your operations as a series of
            transformations of data from one type to another. And sometimes you
            should synthesize your own intermediate data structures to suit the
            task at hand.
          </p>

          <p>
            Data-oriented programming is a cognitive skill that will increase
            your range as makers - you will be able to build software that you
            previously couldn’t even imagine attempting. Where you would have to
            rewrite your entire codebase many times before converging to a good
            design, you would be able to come out with a better implementation
            in your very first attempt.
          </p>

          <p>
            We chose the typed functional programming paradigm to teach this
            because it has all the right features to support this mode of
            thinking. Of course you can do data-first programming in any
            programming language, but just like a knife is a more practical tool
            for slicing onions than a spoon, the typed functional programming
            paradigm is the right tool for thought for data-first programming.
          </p>

          <p>
            What makes Typed FP special here? To list just two: this paradigm
            lets you describe the shape and structure of your data using types,
            and the compiler sits along with you as you program, spotting gaps
            in your thinking and helping you fill them. And it allows you to
            describe a value as being one of many - this is called “sum types”,
            a feature that is still lacking in mainstream programming languages,
            but essential to a data-first style of programming.
          </p>

          <p>
            If you did not understand the above paragraph, don’t worry, that is
            what this course is about. These concepts are not difficult to
            learn; they are just new to you and not covered in mainstream
            literature. Remember: this course is created by programmers who’ve
            been writing code for their daily bread. There is no fluff, no
            difficult academic jargon, just sheer programming and the fun of
            becoming better at it.
          </p>
        </section>
      </main>
    </div>
  );
}

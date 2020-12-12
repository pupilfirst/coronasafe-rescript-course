import Head from "next/head";

function ApplyToCourse() {
  return (
    <div className="flex">
      <a
        className="block w-full md:w-auto text-center px-10 py-4 bg-gray-900 text-primary-500 border border-primary-500 font-bold font-montserrat rounded shadow-lg hover:shadow-xl hover:bg-primary-500 hover:text-gray-900 transition duration-250 ease-in-out"
        href="https://apply.pupilfirst.org"
      >
        Apply for Fellowship
      </a>
    </div>
  );
}


function HeroCharacter({ caption, imgSrc }) {
  return (
    <div className="flex-shrink-0">
      <img src={imgSrc} alt={caption} className={"bg-contain w-40 lg:w-auto mx-auto"} />
      <p className="text-3xl lg:text-4xl text-black border-black mb-4">
        {caption}
      </p>
    </div>
  )
}

function ImageWithDescription({ name, caption, imgSrc }) {
  return (
    <div>
      <div className="rounded-lg border-2 border-primary-500 ">
        <img src={imgSrc} alt={caption} className="block object-contain rounded-lg" />
      </div>
      <h4 className={"text-lg text-primary-500 pt-2"}>{name}</h4>
      <p className={"text-white leading-tight pt-1"}>
        {caption}
      </p>
    </div>
  )
}

function StatsWithTitleAndDescription({ title, description }) {
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-gray-800 mx-auto">
        <section className="bg-gray-900 pb-20">
          <header className="max-w-6xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-between items-center">
              <img className="block w-36 md:w-44" src="logos/coronaSafe-engineering-fellowship-logo.svg" />
              <img className="block w-20 md:w-24" src="logos/aicte-logo.png" />
            </div>
          </header>
          <div className="max-w-6xl flex flex-col md:flex-row justify-between mx-auto text-white pt-2 pb-12 px-4 xl:px-0">
            <div className="w-full md:w-8/12">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight lg:pt-16">Welcome to the CoronaSafe <br />Engineering Fellowship!</h1>
              <p className="font-spacemono text-sm md:text-base lg:text-lg pt-2 lg:pt-4 lg:pr-12">CoronaSafe Engineering Fellowship is a national programme to identify the top 30 students in software engineering for an industry-led training to become full-stack developers.</p>
              <div className="mt-4 md:mt-8"><ApplyToCourse /></div>
            </div>
            <div className="hidden md:block md:w-4/12">
              <picture>
                <source srcset="hero/cef-hero-image.webp" type="image/webp" />
                <source srcset="hero/cef-hero-image.png" type="image/png" />
                <img src="hero/cef-hero-image.png" alt="CoronaSafe Engineering Fellowship Icon" />
              </picture>
            </div>
          </div>
        </section>
        <section className="-mt-20 mx-4 xl:mx-0">
          <div className="bg-white rounded-lg shadow-md max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-y-8 lg:gap-y-0 gap-4 md:grid-cols-3 lg:grid-cols-6">
              <div className="flex justify-center">
                <div className="w-44 flex items-center">
                  <img className="h-full object-contain" src="logos/NSTEDB-logo.svg" alt="National Science and Technology Entrepreneurship Development Board" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 flex items-center">
                  <img className="h-full object-contain" src="logos/act-grants-logo.png" alt="Act grants - Action COVID-19 Team" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-36 flex items-center">
                  <img className="h-full object-contain" src="logos/msdf-logo.png" alt="Michael &amp; Susan Dell Foundation" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 flex items-center">
                  <img className="h-full object-contain" src="logos/wadhwani-foundation-logo.png" alt="Wadhwani Foundation" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 flex items-center">
                  <img className="h-full object-contain" src="logos/freshworks-logo.svg" alt="Freshworks" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 flex items-center">
                  <img className="h-full object-contain" src="logos/pupilfirst-logo.svg" alt="Pupilfirst" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-800 py-10 lg:py-20 relative">
          <div className="max-w-xl mx-auto text-white">
            <div className="space-y-6 lg:space-y-10 text-base lg:text-xl px-4 xl:px-0">
              <p>Build <span className="text-primary-500">real-world</span>, modern web apps.</p>
              <p>Create <span className="text-primary-500">open-source</span> software.</p>
              <p>Practical lessons drawn from 15+ years of <span className="text-primary-500">industry experience.</span></p>
              <p>Learn <span className="text-primary-500">Typed Functional Programming</span> with ReScript/OCaml.</p>
              <p>1:1 <span className="text-primary-500">mentorships</span> &amp; 1:many <span className="text-primary-500">friendships.</span></p>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 py-10 lg:py-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="lg:grid lg:grid-cols-5 lg:gap-8 px-4 xl:px-0">
              <div className="lg:col-span-3">
                <h2 className="font-bold text-2xl md:text-5xl font-montserrat text-white leading-tight">Everything you<br /> need to know</h2>
                <div className="space-y-6 md:space-y-10 md:pr-12 pt-4 md:pt-10">
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">What is this?</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">Industry-led advanced programming training for students.</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">Why?</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">To train you to help contribute open-source code for CoronaSafe disaster management.</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">Who is this for?</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">Age 18+ students who enjoy programming. You should have written at least some amount of code yourselves before, either on personal projects or college projects.</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">When?</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">January 15 - March 25, 2021</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">Effort?</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">120 hours of highly enjoyable study & programming. About 10 weekends worth.</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">Format?</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">Self-paced learning via video tutorials, but between specified programming assignment dates.</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">Mentorship?</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">Weekly sessions with mentors and fellow students, AMAs with industry veterans, code reviews, and dedicated Q&amp;A forum.</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">Stack?</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">ReScript/OCaml. Ruby on Rails. React. PostgreSQL. Typed FP. Relax! You'll learn all these in the course and no prior knowledge of them is required.</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">Certificate?</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">Yes</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">Cost</h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">Free</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="sticky top-0 pt-12">
                  <div className="border rounded-lg border-primary-500 bg-black">
                    <div className="flex space-x-2 px-6 py-3 border-b border-primary-500">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <p className="text-white p-6">Are you a student developer who wants to learn advanced, industry-oriented programming skills and join the National Engineering Leadership Cadre for Public Service?</p>
                    <div className="px-6 pb-6">
                      <a
                        className="block px-10 py-4 text-center bg-gradient-to-b from-primary-500 to-primary-700 text-gray-900 border border-primary-500 font-bold font-montserrat rounded shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-900 hover:text-primary-500 transition duration-250 ease-in-out"
                        href="https://apply.pupilfirst.org">Apply for Fellowship</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">An initiative <br />supported by</h2>
                </div>
              </div>
              <svg className="absolute right-0 top-1/4 object-center" width="120" height="400" fill="none" viewBox="0 0 120 400">
                <defs>
                  <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-700" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="120" height="400" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
              </svg>
              <div className="max-w-3xl mx-auto relative z-10 pl-4 lg:pl-0">
                <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-12 pt-12 pb-20">
                  <ImageWithDescription name="Mekin Maheshwari"
                    caption={<>
                      Founder, Udhyam.org <br />ex-CTO, Flipkart</>}
                    imgSrc="people/mekin-maheshwari.jpg"
                  />
                  <ImageWithDescription name="Girish Mathrubootham"
                    caption={<>
                      Founder &amp; CEO, <br />Freshworks Inc</>}
                    imgSrc="people/girish-mathrubootham.jpg"
                  />
                  <ImageWithDescription name="Sanjay Vijayakumar"
                    caption={<>
                      Founder &amp; CEO,<br />PupilFirst.org</>}
                    imgSrc="people/sanjay-vijayakumar.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 relative overflow-hidden">
          <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
            <div className="relative h-full max-w-7xl mx-auto">
              <div className="absolute left-0 top-0 h-80 w-80 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 79.6"><path d="M70.2 19.9v59.7H110V39.8H90.1V19.9zm19.9 0H110V0H90.1zM0 19.9v59.7h39.8V39.8H19.9V19.9zm19.9 0h19.9V0H19.9z" fill="#28292d" /></svg>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">Testimonials</h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto text-white">
                <div className="pt-8 pb-20 space-y-20">
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">This workshop was very intriguing. The instructors went to the extra mile by providing us with so much references to books, blogs and talks we could refer to. The most impressive thing was the effort they took to print out research papers and hand out a spiral bound copy to every one!! I mean the kind of commitment they have towards this just swayed us and shows their love for programming and how keen they are towards building a community. This workshop was very inspiring and a significant memory to hold on to.</blockquote>
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">The final product that we were asked to build was amazing. There were plenty of things that we were able to learn ourselves towards that journey. I am glad that we were able to create such a good product</blockquote>
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">The experience which I had while doing the course was different, interesting, enjoyable and a bit difficult at the same time from the rest of the courses which I have done so far. The PupilFirst platform helped a lot in better understanding of the course and also the faculties, teaching assistants and course co-ordinators were reachable at any time and responsive even in this pandemic situation.</blockquote>
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">Loved everything about this course. It was great to receive feedback from industry professionals. We learned a lot outside the curriculum while doing the project including git, GitHub, CSS, and JavaScript. And the assignments were exceptionally good in testing our knowledge about that week's syllabus.</blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="max-w-3xl ml-4 lg:mx-auto text-white pt-0 lg:pt-20">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border border-primary-700">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BjrPsEOZyi4" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">Free</h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4">This program is created by a team of over a dozen people from across multiple companies, with funding from the Michael &amp; Dell Foundation, the ACT foundation, and support from FreshWorks.</p>
                  <p>ACT is a 100 crore fund setup by India’s leading tech entrepreneurs and venture capitalists for supporting efforts combating COVID-19. CoronaSafe is a recipient of ACT grants.</p>
                  <p>This funding enables us to offer the course to you for free.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">Write open-source code for Corona disaster management</h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4">CoronaSafe Network codebase is a national asset created by India’s leading software industry engineers along with the National Health Mission, Government of India and Department of Health, Government of Kerala.</p>
                  <p>Over 300+ industry software engineers have voluntarily contributed to build CoronaSafe Network. The Corona Care software is currently being used in over 200 hospitals to record patient intake and availability of facilities. This results in a central dashboard used by the Ernakulam district collector’s office for monitoring and allocating resources.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">Impact</h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="mt-4 pl-4 lg:pl-0">
                  <img className="object-cover rounded-md " src="csn/impact.png" />
                </div>
                <div className="space-y-8 md:grid md:grid-col-2 lg:grid-cols-4 lg:gap-8 lg:space-y-0 lg:space-x-5 pt-8 pl-4 lg:pl-0">
                  <div>
                    <h4 className="text-xl text-primary-500">
                      200+
                </h4>
                    <p className="pt-1 text-sm text-white">Hospitals Using the platform</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-primary-500">
                      62K+
                </h4>
                    <p className="pt-1 text-sm text-white">Patients Managed</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-primary-500">
                      28K+
                </h4>
                    <p className="pt-1 text-sm text-white">Shifting Managed</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-primary-500">
                      2L+
                </h4>
                    <p className="pt-1 text-sm text-white">Telemedicine Calls</p>
                  </div>
                </div>
                <p className="text-xs italic pt-6 text-gray-200 pl-4 xl:pl-0">* Stats as of November 20, 2020</p>
                <div className="py-10 lg:pb-20 pl-4 lg:pl-0">
                  <div className="border rounded-lg border-primary-500 bg-black">
                    <div className="flex space-x-1.5 px-6 py-3 border-b border-primary-500">
                      <div className="w-2.5 h-2.5 bg-gray-900 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-gray-900 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="text-white p-6 space-y-6 text-base lg:text-lg">
                      <p>We are now looking to select 30 of the best student developers in India to become full stack developers under industry guidance.</p>
                      <p>Successful students who complete the programme shall get a semester long internship with CoronaSafe to contribute code to further develop this national asset.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="max-w-3xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-12 pt-10 lg:pt-20">
                  <div>
                    <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">1-to-1 coaching from industry programmers</h4>
                    <p className="text-white pt-2">This is an industry-backed course and it will prepare you for a career in building production software. This reflects in what you will learn, and how you will learn it. Each of your code submission will be reviewed in depth by a coach and your code will get kind, courteous feedback. You will gain hard-earned insights about abstraction boundaries, data modelling, layering, and program design.</p>
                  </div>
                  <div>
                    <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">Ask Me Anything (AMA) with devs, designers, and founders</h4>
                    <p className="text-white pt-2">You will hear experience reports from people in the industry. There will be no long, boring introductions; instead you will hear raw stories of how folks got started, what they’d advice their younger selves, and how the industry works today. The best things about these AMAs are the free-wheeling question and answer session where you talk with the speakers about the most pressing questions in your mind.</p>
                  </div>
                  <div>
                    <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">Fellowship with a small group of students from across the country</h4>
                    <p className="text-white pt-2">This course is open to students from across the country and you will team up with them for some of the programming projects in the course. You will learn to collaborate with them through git, GitHub and the pull request workflow. You will have access to a community forum for discussions as well as a Discord server for conversations. There will be a kind and respectful code of conduct to make the experience welcoming for everyone.</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">Skills</h4>
                      <p className="text-white pt-2">You will learn a host of practical skills that will help you in kickstarting your career and some lessons that will stay with you even long after.</p>
                    </div>
                    <div>
                      <p className="text-base lg:text-lg font-bold text-white">Create real-world Rails webapps</p>
                      <p className="pt-2 text-white">Ruby on Rails pioneered the modern web framework revolution. It is a fully integrated package that has everything we need to build complete web applications. GitHub is built on Rails and so is Shopify. Thousands of startups build their systems in Rails every year, and it has also become a mainstream solution for large companies.</p>
                    </div>
                    <div>
                      <p className="text-base lg:text-lg font-bold text-white">Create advanced front-ends with React and ReScript/OCaml</p>
                      <p className="pt-2 text-white">You’ll learn to program in the Typed Functional paradigm in ReScript/OCaml. You'll create UIs in React and deploy your own single-page applications. You'll also learn practical functional programming and learn to model complex domains with Hindley-Milner types. ReScript/OCaml will also help you see what programming languages are really made of. That means you will then be able to learn and be productive with any other programming language much faster.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">Schedule</h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto pl-4 lg:pl-0">
                <div className="border rounded-lg bg-gray-900 shadow-xl border-primary-500 divide-y divide-primary-500 mt-4">
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">December 14, 2020</p>
                    <p className="col-span-9 ml-8 text-white">- Application Opens</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">January 05, 2021</p>
                    <p className="col-span-9 ml-8 text-white">- Application Ends</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">January 10, 2021</p>
                    <p className="col-span-9 ml-8 text-white">- Announcement of 30 selected students </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">January 15, 2021</p>
                    <p className="col-span-9 ml-8 text-white">- Program Begins</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">March 25, 2021</p>
                    <p className="col-span-9 ml-8 text-white">- Program Ends</p>
                  </div>
                </div>
                <div className="pt-10 lg:pt-16">
                  <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">Questions?</h4>
                  <p className="text-white pt-2">Email us at
                  <a href="mailto:fullstack@pupilfirst.org" className={"text-primary-700 underline pl-2 tracking-wide font-montserrat font-medium"}>fullstack@pupilfirst.org</a>
                  </p>
                </div>
              </div>
              <div className="max-w-3xl mx-auto py-10 lg:pb-24 pl-4 xl:pl-0">
                <div className="rounded-lg bg-gradient-to-b from-primary-400 to-primary-700 p-6 lg:p-12">
                  <h4 className="text-xl lg:text-3xl font-montserrat font-bold text-center">Apply now for<br /> CoronaSafe Engineering Fellowship!</h4>
                  <div className="mt-4 flex justify-center">
                    <a
                      className="block text-center px-10 py-4 bg-gray-900 text-primary-500 border border-primary-500 font-bold font-montserrat rounded shadow-lg hover:shadow-xl hover:bg-primary-900 hover:text-gray-900 transition duration-250 ease-in-out"
                      href="https://apply.pupilfirst.org"
                    >
                      Apply for Fellowship</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

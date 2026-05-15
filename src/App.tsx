// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import "/public/assets/css/particles.css"; 

const Portfolio = () => {
  return (
    <>
      <main id="home" className="w-full">
       {/* Minimal Hero Background/Container */}
      <section className="pt-20 md:pt-0 flex items-center justify-center min-h-[80vh]">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-16 text-center flex flex-col items-center justify-center">
          <div className="mb-8 overflow-hidden rounded-full border-4 border-green-300 shadow-xl size-48 md:size-56 transition-transform duration-300 hover:scale-105 mx-auto">
            <img src="./assets/images/pranav.jpeg" alt="Pranav Chauhan" className="w-full h-full object-cover" />
          </div>
          <h1 className="mb-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight dark:text-white md:text-6xl xl:text-7xl">
            Hi, I'm Pranav Chauhan.{" "}
            <span className="font-bold text-green-500 block mt-4">
              Software Developer
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-2xl font-medium text-gray-500 dark:text-gray-400">
            Specializing in full-stack development, LLM pipeline engineering, and autonomous AI agents.
          </p>
        </div>
      </section>



        {/* #### SERVICES SECTION #### */}
          <section id="services" className="flex items-center justify-center bg-white pb-12 pt-8 dark:bg-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">

              <div className="mx-auto mb-8 max-w-screen-md lg:mb-12">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                Engineering at the Edge of AI
                </h2>
                <p className="text-2xl text-gray-500 dark:text-gray-400">
                Building production-grade full-stack applications, distributed autonomous agents, and robust LLM pipelines.
                </p>
              </div>

              <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              <div className="group transition-all duration-300 hover:scale-105">
                  <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                    <svg 
                      className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white"
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1" 
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Full-Stack Development</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-400">
                    Architecting high-performance applications across the stack using React.js, Next.js, Node.js, Express, and PostgreSQL with robust REST APIs.
                  </p>
                </div>

                <div className="group transition-all duration-300 hover:scale-105">
                  <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">LLM Pipeline Engineering</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-400">
                    Designing production-ready RAG systems utilizing AWS Transcribe, LangChain chunking, Gemini embeddings, and pgvector for semantic search.
                  </p>
                </div>
                <div className="group transition-all duration-300 hover:scale-105">
                  <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
                  </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Autonomous AI Agents</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-400">
                    Building robust, distributed orchestrators with multi-state machines and heartbeat-based crash recovery for executing AI coding tasks.
                  </p>
                </div>
                <div className="group transition-all duration-300 hover:scale-105">
                  <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.7141 15h4.268c.4043 0 .732-.3838.732-.8571V3.85714c0-.47338-.3277-.85714-.732-.85714H6.71411c-.55228 0-1 .44772-1 1v4m10.99999 7v-3h3v3h-3Zm-3 6H6.71411c-.55228 0-1-.4477-1-1 0-1.6569 1.34315-3 3-3h2.99999c1.6569 0 3 1.3431 3 3 0 .5523-.4477 1-1 1Zm-1-9.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.49999-1.1193-2.49999-2.5S8.8334 9 10.2141 9s2.5 1.1193 2.5 2.5Z"/>
                  </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Secure Authentication</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-400">
                    Implementing OAuth 2.0 Authorization Code Flow, cryptographic token security, and JWT refresh rotation to ensure secure access.
                  </p>
                </div>
                <div className="group transition-all duration-300 hover:scale-105">
                  <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5-5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"/>
                </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Database Architecture</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-400">
                    Designing scalable database schemas using PostgreSQL, MongoDB, and SQLite, integrated flawlessly with modern ORMs like Prisma and Drizzle.
                  </p>
                </div>
                <div className="group transition-all duration-300 hover:scale-105">
                  <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"/>
                </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Cloud Infrastructure</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-400">
                    Deploying architectures using AWS S3 for secure media delivery and automating pipelines with AWS Transcribe.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* #### LOGOS SECTION #### */}

          <section className="lg:py-18 relative z-20 border-y-4 border-solid border-green-700 bg-gray-100 bg-white dark:bg-black lg:px-6">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16 overflow-hidden">
                <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">Technologies I Know</h2>
                <div className="marquee-container w-full overflow-hidden flex whitespace-nowrap">
                  <div className="animate-marquee flex space-x-16 min-w-full text-gray-500 dark:text-gray-400 items-center justify-around">
                    <span className="text-3xl font-bold">React</span>
                    <span className="text-3xl font-bold">Next.js</span>
                    <span className="text-3xl font-bold">Node.js</span>
                    <span className="text-3xl font-bold">PostgreSQL</span>
                    <span className="text-3xl font-bold">AWS</span>
                    <span className="text-3xl font-bold">TypeScript</span>
                  </div>
                  <div className="animate-marquee flex space-x-16 min-w-full text-gray-500 dark:text-gray-400 items-center justify-around" aria-hidden="true">
                    <span className="text-3xl font-bold">React</span>
                    <span className="text-3xl font-bold">Next.js</span>
                    <span className="text-3xl font-bold">Node.js</span>
                    <span className="text-3xl font-bold">PostgreSQL</span>
                    <span className="text-3xl font-bold">AWS</span>
                    <span className="text-3xl font-bold">TypeScript</span>
                  </div>
                </div>
            </div>
        </section>

          {/* #### SERVICES SECTION #### */}
          {/* #### PROJECTS SECTION #### */}
          <section id="projects" className="bg-white pt-8 dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
              <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                  My Projects
                </h2>
                <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl text-2xl">
                  Here are some of the impactful projects I've built.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                
                <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col">
                  <a href="#bytelearn" className="h-48 overflow-hidden block">
                      <img className="w-full h-full object-cover" src="https://placehold.co/600x400/16a34a/white?text=ByteLearn" alt="ByteLearn" />
                  </a>
                  <div className="p-5 flex-1 flex flex-col">
                      <a href="#bytelearn">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ByteLearn</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-lg flex-1">AI-Powered Learning Platform with a 4-stage AI pipeline. Features RAG Q&A over video transcripts and AI-generated quizzes.</p>
                      <div className="flex gap-2 flex-wrap mt-auto">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">React 19</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Node.js</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">AWS</span>
                      </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col">
                  <a href="#aetherid" className="h-48 overflow-hidden block">
                      <img className="w-full h-full object-cover" src="https://placehold.co/600x400/16a34a/white?text=AetherID" alt="AetherID" />
                  </a>
                  <div className="p-5 flex-1 flex flex-col">
                      <a href="#aetherid">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AetherID</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-lg flex-1">OAuth 2.0 Identity Provider. Implemented the full Authorization Code Flow from scratch with a cryptographic token security model.</p>
                      <div className="flex gap-2 flex-wrap mt-auto">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Next.js</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">MongoDB</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">OAuth 2.0</span>
                      </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col">
                  <a href="#beav" className="h-48 overflow-hidden block">
                      <img className="w-full h-full object-cover" src="./assets/images/Beav.png" alt="Beav" />
                  </a>
                  <div className="p-5 flex-1 flex flex-col">
                      <a href="#beav">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Beav</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-lg flex-1">Autonomous AI Engineer Orchestrator. TypeScript monorepo that autonomously detects GitHub issues and runs an LLM coding agent.</p>
                      <div className="flex gap-2 flex-wrap mt-auto">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">TypeScript</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Drizzle ORM</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Codex API</span>
                      </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        {/* #### CONTACT SECTION #### */}
        <section id="contact" className="bg-green-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-screen-md px-4 py-16 text-center lg:py-24">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
              Let's Build Something Great
            </h2>
            <p className="mb-8 text-xl font-light text-gray-500 dark:text-gray-400 sm:text-2xl">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:focus:ring-green-900 inline-flex items-center justify-center px-8 py-4 text-center text-xl font-medium text-white focus:ring-4 rounded-lg shadow-lg transition-all hover:scale-105 w-full sm:w-auto"
              >
                Say Hello
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-c-6160a1269"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-green-300 px-8 py-4 text-center text-xl font-medium text-gray-900 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:border-green-700 dark:text-white dark:hover:bg-green-900 dark:focus:ring-gray-800 rounded-lg shadow-sm transition-all hover:scale-105 w-full sm:w-auto"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const ProjectPage = ({ title, github, live, description, tech }: any) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="w-full min-h-[90vh] pt-32 pb-16 px-4 max-w-screen-xl mx-auto dark:text-white">
      <a href="#" className="text-green-500 font-bold mb-8 inline-block transition-transform hover:-translate-x-2">&larr; Back to Portfolio</a>
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">{title}</h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl">{description}</p>
      
      <div className="flex flex-wrap gap-4 mb-12">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-medium shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/></svg>
            View Source Code
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="border-2 border-green-300 dark:border-green-700 px-8 py-4 rounded-lg font-medium text-gray-900 dark:text-white hover:bg-green-50 dark:hover:bg-green-900 transition-transform hover:scale-105 inline-flex items-center">
            Visit Live Site
          </a>
        )}
      </div>
      
      <div className="mb-8">
        <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Built With</h3>
        <div className="flex gap-3 flex-wrap">
          {tech.map((t: string) => (
            <span key={t} className="bg-green-100 text-green-800 px-4 py-2 text-lg font-semibold rounded-md dark:bg-green-900 dark:text-green-100">{t}</span>
          ))}
        </div>
      </div>
    </main>
  );
};

const App: React.FC = () => {
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <>
      <Nav />
      {hash === '#bytelearn' ? (
        <ProjectPage 
          title="ByteLearn"
          github="https://github.com/Pranav04027/bytelearnAI"
          live="https://bytelearnai.pranavch.tech/"
          description="AI-Powered Learning Platform with a 4-stage AI pipeline. Features RAG Q&A over video transcripts and AI-generated quizzes. This platform aims to revolutionize how students interact with educational video content."
          tech={['React 19', 'Node.js', 'AWS', 'LLM Pipelines', 'RAG']}
        />
      ) : hash === '#aetherid' ? (
        <ProjectPage 
          title="AetherID"
          github="https://github.com/Pranav04027/AetherID"
          live="https://aetherid.pranavch.tech/"
          description="OAuth 2.0 Identity Provider built from the ground up. Implemented the full Authorization Code Flow with a robust cryptographic token security model to provide secure third-party authentications."
          tech={['Next.js', 'MongoDB', 'OAuth 2.0', 'Cryptography', 'TypeScript']}
        />
      ) : hash === '#beav' ? (
        <ProjectPage 
          title="Beav"
          github="https://github.com/Pranav04027/Beav"
          live={null}
          description="Autonomous AI Engineer Orchestrator. This advanced TypeScript monorepo autonomously detects GitHub issues within a repository and spins up a dedicated LLM coding agent to fix them."
          tech={['TypeScript', 'Drizzle ORM', 'Codex API', 'Autonomous Agents', 'Monorepo']}
        />
      ) : (
        <Portfolio />
      )}
    </>
  );
};

export default App;

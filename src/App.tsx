import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css";

const Portfolio = () => {
  return (
    <>
      <main id="home" className="w-full">
        {/* HERO */}
        <section className="flex min-h-[90vh] items-center justify-center pt-20 md:pt-0">
          <div className="relative z-10 mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 py-16 text-center">
            <div className="mb-6 flex items-center gap-2">
              <span className="pulse-dot inline-block size-2 rounded-full bg-green-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 sm:text-sm">
                Available for Internships &middot; India
              </span>
            </div>

            <h1 className="mb-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight dark:text-white sm:text-5xl md:text-7xl">
              Pranav Chauhan
            </h1>

            <p className="mb-8 text-xl text-green-500 sm:text-2xl md:text-3xl">
              Full-Stack Engineer &middot; LLM Pipelines &middot; Autonomous Agents
            </p>

            <p className="mb-8 max-w-2xl font-sans text-base text-gray-500 dark:text-gray-400 sm:text-lg">
              I build production-grade systems where AI does real work &mdash;
              <br />
              not demos. RAG pipelines, distributed agent orchestrators,
              <br />
              and secure authentication infrastructure.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-8 py-4 text-center text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 sm:text-lg"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg border-2 border-green-500 px-8 py-4 text-center text-base font-medium text-green-600 transition-all hover:scale-105 hover:bg-green-50 focus:ring-4 focus:ring-green-100 dark:text-green-400 dark:hover:bg-green-900/20 dark:focus:ring-green-900 sm:text-lg"
              >
                Download Resume
              </a>
            </div>

            <p className="text-sm italic text-gray-400 dark:text-gray-500 sm:text-base">
              Building systems where AI does real work &mdash; not demos.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="services" className="flex items-center justify-center bg-white pb-12 pt-8 dark:bg-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-md lg:mb-12">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
                Engineering at the Edge of AI
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl">
                Building production-grade full-stack applications, distributed autonomous agents, and robust LLM pipelines.
              </p>
            </div>

            <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              {/* Box 1 */}
              <div className="group transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 490 490">
                    <g>
                      <rect x="155.039" y="97.251" width="122.5" height="30.625"/>
                      <rect x="197.148" y="142.232" width="122.5" height="30.625"/>
                      <rect x="155.039" y="187.212" width="122.5" height="30.625"/>
                      <rect x="197.148" y="232.193" width="122.5" height="30.632"/>
                      <rect x="155.039" y="277.166" width="122.5" height="30.625"/>
                      <path d="M22.969,362.717h183.75v52.951h-69.863v30.625h216.289v-30.625h-69.863v-52.951h183.75c12.633,0,22.969-10.336,22.969-22.969V66.676c0-12.633-10.336-22.969-22.969-22.969H22.969C10.336,43.707,0,54.043,0,66.676v273.073C0,352.381,10.336,362.717,22.969,362.717z M30.625,74.332h428.75v257.76H30.625V74.332z"/>
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white sm:text-3xl">Full-Stack Development</h3>
                <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
                  Building end-to-end applications with React 19, Next.js, Node.js, and Express &mdash; from protected frontend routes with role-based rendering to modular REST APIs with 60+ endpoints across layered controllers.
                </p>
              </div>

              {/* Box 2 */}
              <div className="group transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white sm:text-3xl">LLM Pipeline Engineering</h3>
                <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
                  Designing production RAG systems: AWS Transcribe &rarr; LangChain chunking (500-char segments) &rarr; 768-dim Gemini embeddings &rarr; pgvector similarity search &rarr; streamed generation via SSE.
                </p>
              </div>

              {/* Box 3 */}
              <div className="group transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
                    <path d="M97.8357 54.6682C177.199 59.5311 213.038 52.9891 238.043 52.9891C261.298 52.9891 272.24 129.465 262.683 152.048C253.672 173.341 100.331 174.196 93.1919 165.763C84.9363 156.008 89.7095 115.275 89.7095 101.301" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M98.3318 190.694C-10.6597 291.485 121.25 273.498 148.233 295.083" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M98.3301 190.694C99.7917 213.702 101.164 265.697 100.263 272.898" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M208.308 136.239C208.308 131.959 208.308 127.678 208.308 123.396" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M177.299 137.271C177.035 133.883 177.3 126.121 177.3 123.396" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M203.398 241.72C352.097 239.921 374.881 226.73 312.524 341.851" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M285.55 345.448C196.81 341.85 136.851 374.229 178.223 264.504" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M180.018 345.448C160.77 331.385 139.302 320.213 120.658 304.675" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M218.395 190.156C219.024 205.562 219.594 220.898 219.594 236.324" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M218.395 190.156C225.896 202.037 232.97 209.77 241.777 230.327" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M80.1174 119.041C75.5996 120.222 71.0489 119.99 66.4414 120.41" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M59.5935 109.469C59.6539 117.756 59.5918 125.915 58.9102 134.086" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M277.741 115.622C281.155 115.268 284.589 114.823 287.997 114.255" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M291.412 104.682C292.382 110.109 292.095 115.612 292.095 121.093" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M225.768 116.466C203.362 113.993 181.657 115.175 160.124 118.568" stroke="currentColor" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white sm:text-3xl">Autonomous AI Agents</h3>
                <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
                  Architecting distributed agent orchestrators with 7-state machines, JSON-RPC 2.0 tool communication, heartbeat-based crash detection, and exponential backoff retry logic.
                </p>
              </div>

              {/* Box 4 */}
              <div className="group transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5ZM13.5058 11.565C14.4281 10.6579 15 9.39576 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 9.39827 5.57396 10.6625 6.49914 11.5699C3.74942 12.5366 2 14.6259 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 15.2701 5.93073 13 10 13C12.6152 13 14.4051 13.9719 15.2988 15.1157C15.6389 15.5509 16.2673 15.628 16.7025 15.288C17.1377 14.9479 17.2148 14.3195 16.8748 13.8843C16.0904 12.8804 14.9401 12.0686 13.5058 11.565ZM22.6139 15.2106C23.0499 15.5497 23.1284 16.178 22.7894 16.6139L18.1227 22.6139C17.9485 22.8379 17.6875 22.9773 17.4045 22.9975C17.1216 23.0177 16.8434 22.9167 16.6392 22.7198L14.3059 20.4698C13.9083 20.0865 13.8968 19.4534 14.2802 19.0559C14.6635 18.6583 15.2966 18.6468 15.6941 19.0302L17.2268 20.5081L21.2106 15.3861C21.5497 14.9501 22.178 14.8716 22.6139 15.2106Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white sm:text-3xl">Secure Authentication</h3>
                <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
                  Implementing OAuth 2.0 Authorization Code Flow from scratch &mdash; SHA-256 hashed tokens, refresh token rotation, reuse detection, and OIDC-compliant userinfo endpoints.
                </p>
              </div>

              {/* Box 5 */}
              <div className="group transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M192.14062,42.54736C174.94238,33.1665,152.16357,28,128,28S81.05762,33.1665,63.85938,42.54736C45.894,52.34668,36,65.64746,36,80v96c0,14.35254,9.894,27.65332,27.85938,37.45264C81.05762,222.834,103.83643,228,128,228s46.94238-5.166,64.14062-14.54736C210.106,203.65332,220,190.35254,220,176V80C220,65.64746,210.106,52.34668,192.14062,42.54736Zm-124.45068,7.023C83.7334,40.81934,105.15186,36,128,36s44.2666,4.81934,60.31006,13.57031C203.58691,57.90332,212,68.71,212,80s-8.41309,22.09668-23.68994,30.42969C172.2666,119.18066,150.84814,124,128,124s-44.2666-4.81934-60.31006-13.57031C52.41309,102.09668,44,91.29,44,80S52.41309,57.90332,67.68994,49.57031ZM212,176c0,11.29-8.41309,22.09668-23.68994,30.42969C172.2666,215.18066,150.84814,220,128,220s-44.2666-4.81934-60.31006-13.57031C52.41309,198.09668,44,187.29,44,176V149.48193c4.69214,5.93213,11.374,11.34229,19.85938,15.97071C81.05762,174.834,103.83643,180,128,180s46.94238-5.166,64.14062-14.54736C200.626,160.82422,207.30786,155.41406,212,149.48193Zm0-48c0,11.29-8.41309,22.09668-23.68994,30.42969C172.2666,167.18066,150.84814,172,128,172s-44.2666-4.81934-60.31006-13.57031C52.41309,150.09668,44,139.29,44,128V101.48193c4.69214,5.93213,11.374,11.34229,19.85938,15.97071C81.05762,126.8335,103.83643,132,128,132s46.94238-5.1665,64.14062-14.54736C200.626,112.82422,207.30786,107.41406,212,101.48193Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white sm:text-3xl">Database Architecture</h3>
                <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
                  Designing relational schemas across PostgreSQL (pgvector), MongoDB, and SQLite &mdash; with Prisma and Drizzle ORM, WAL-mode concurrency, and vector similarity search integrated into the same DB layer.
                </p>
              </div>

              {/* Box 6 */}
              <div className="group transition-all duration-300 hover:scale-105">
                <div className="bg-primary-100 dark:bg-primary-900 mx-auto mb-4 flex size-10 items-center justify-center rounded-full lg:size-12">
                  <svg className="size-[48px] text-gray-800 transition-colors duration-300 group-hover:scale-125 group-hover:text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M9 13.2222L10.8462 15L15 11M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white sm:text-3xl">Cloud Infrastructure</h3>
                <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
                  Private media delivery via time-limited S3 presigned URLs, automated transcription with AWS Transcribe, and background polling pipelines that connect upload to semantic search with zero manual intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECH TICKER */}
        <section className="relative z-20 border-y-4 border-solid border-green-700 bg-white dark:bg-black lg:px-6">
          <div className="mx-auto max-w-screen-xl overflow-hidden px-4 py-8 lg:py-16">
            <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">Technologies I Know</h2>
            <div className="marquee-container flex w-full overflow-hidden whitespace-nowrap">
              <div className="animate-marquee flex min-w-max shrink-0 items-center gap-4 pr-4 text-gray-500 dark:text-gray-400 sm:gap-6 md:gap-10">
                {["React 19", "·", "Next.js", "·", "Node.js", "·", "TypeScript", "·", "PostgreSQL", "·", "pgvector", "·", "AWS S3", "·", "AWS Transcribe", "·", "LangChain", "·", "Google Gemini", "·", "Prisma", "·", "Drizzle ORM", "·", "MongoDB", "·", "SQLite", "·", "OAuth 2.0", "·", "JWT", "·", "Python", "·", "C++", "·", "Git", "·", "REST APIs"].map((item, i) => (
                  <span key={i} className="shrink-0 text-sm font-bold sm:text-base md:text-lg lg:text-xl">{item}</span>
                ))}
              </div>
              <div className="animate-marquee flex min-w-max shrink-0 items-center gap-4 pr-4 text-gray-500 dark:text-gray-400 sm:gap-6 md:gap-10" aria-hidden="true">
                {["React 19", "·", "Next.js", "·", "Node.js", "·", "TypeScript", "·", "PostgreSQL", "·", "pgvector", "·", "AWS S3", "·", "AWS Transcribe", "·", "LangChain", "·", "Google Gemini", "·", "Prisma", "·", "Drizzle ORM", "·", "MongoDB", "·", "SQLite", "·", "OAuth 2.0", "·", "JWT", "·", "Python", "·", "C++", "·", "Git", "·", "REST APIs"].map((item, i) => (
                  <span key={i} className="shrink-0 text-sm font-bold sm:text-base md:text-lg lg:text-xl">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="text-left">
                <p className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
                  <span className="block">I'm a final-year Computer Science student at IIIT Vadodara, graduating in 2026. I build systems where the hard part isn't calling an API &mdash; it's everything around it.</span>
                  <span className="block">For ByteLearn, that meant designing a pipeline where a video upload automatically flows through transcription, chunking, embedding, and retrieval so learners can ask questions about any lesson. For Beav, it meant making an autonomous agent reliable enough to run unsupervised &mdash; heartbeats, crash recovery, state machines, and all.</span>
                  <span className="block">I'm actively looking for software engineering internships where I can work on backend systems, AI infrastructure, or full-stack products. I learn fast, I ship real things, and I'm comfortable going deep.</span>
                </p>
              </div>
              <div className="text-left">
                <ul className="space-y-4 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                  <li className="flex items-start gap-3"><span className="shrink-0 text-lg">🎓</span> IIIT Vadodara &mdash; B.Tech CS, 2026</li>
                  <li className="flex items-start gap-3"><span className="shrink-0 text-lg">📍</span> Gandhinagar, Gujarat, India</li>
                  <li className="flex items-start gap-3"><span className="shrink-0 text-lg">💼</span> Open to internships (remote or on-site)</li>
                  <li className="flex items-start gap-3"><span className="shrink-0 text-lg">⚡</span> Strong in: Node.js, PostgreSQL, LLM pipelines</li>
                  <li className="flex items-start gap-3"><span className="shrink-0 text-lg">🔨</span> Currently learning: LangGraph, system design depth</li>
                  <li className="flex items-start gap-3"><span className="shrink-0 text-lg">📬</span> <a href="mailto:chauhanpranav040@gmail.com" className="text-green-600 hover:underline dark:text-green-400">chauhanpranav040@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-white pt-8 dark:bg-black">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
                My Projects
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {/* ByteLearn */}
              <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-800">
                <div className="relative block h-48 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center font-mono">
                    <span className="mb-1 text-sm font-bold tracking-wider text-green-400">4-Stage AI Pipeline</span>
                    <span className="text-xs text-green-300/70">AWS Transcribe &rarr; LangChain &rarr; pgvector &rarr; Gemini</span>
                  </div>
                  <div className="absolute right-2 top-2 size-2 animate-pulse rounded-full bg-green-500" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">ByteLearn &mdash; AI-Powered Learning Platform</h5>
                  <p className="mb-3 flex-1 text-sm font-normal text-gray-700 dark:text-gray-400 sm:text-base">
                    An educational video platform where AI does real work. Learners ask natural language questions about any video &mdash; the system retrieves the most relevant transcript segments via pgvector similarity search and generates grounded answers streamed via SSE. Ships 7 AI features including RAG Q&amp;A, AI-generated MCQ quizzes, a learner memory system (Supermemory + Gemini), and engagement-based recommendations. Built on a 19-model PostgreSQL schema with 60+ REST endpoints.
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">19 DB Models</span>
                    <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">60+ API Endpoints</span>
                    <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">7 AI Features</span>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">React 19</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">Node.js</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">PostgreSQL</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">pgvector</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">AWS</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">LangChain</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">Gemini</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">Prisma</span>
                  </div>
                  <div className="mt-auto flex gap-2">
                    <a href="https://github.com/Pranav04027/bytelearnAI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-4 py-2 text-xs font-medium text-white transition-all hover:scale-105 hover:bg-gray-700 sm:text-sm">
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/></svg>
                      GitHub
                    </a>
                    <a href="https://bytelearnai.pranavch.tech/" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-700 px-4 py-2 text-xs font-medium text-white transition-all hover:scale-105 hover:bg-green-800 sm:text-sm">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* AetherID */}
              <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-800">
                <div className="relative block h-48 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center font-mono">
                    <span className="mb-1 text-sm font-bold tracking-wider text-blue-400">OAuth 2.0 Authorization Code Flow</span>
                    <span className="text-xs text-blue-300/70">Client &rarr; Auth Code &rarr; Token Exchange &rarr; OIDC UserInfo</span>
                  </div>
                  <div className="absolute left-2 top-2">
                    <svg className="size-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">AetherID &mdash; OAuth 2.0 Identity Provider</h5>
                  <p className="mb-3 flex-1 text-sm font-normal text-gray-700 dark:text-gray-400 sm:text-base">
                    A self-hosted Identity Provider implementing OAuth 2.0 Authorization Code Flow from scratch &mdash; the kind of thing Auth0 and Okta do, but built to understand every layer. SHA-256 hashing applied across all sensitive tokens (auth codes, refresh tokens, verify and reset tokens) so a full database breach yields nothing exploitable. Refresh token rotation with aggressive reuse detection: replay a rotated token and all user sessions are immediately invalidated.
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">Full Auth Code Flow</span>
                    <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">SHA-256 All Tokens</span>
                    <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">Reuse Detection</span>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">Next.js</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">TypeScript</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">MongoDB</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">JWT</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">OAuth 2.0</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">SHA-256</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">bcrypt</span>
                  </div>
                  <div className="mt-auto flex gap-2">
                    <a href="https://github.com/Pranav04027/AetherID" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-4 py-2 text-xs font-medium text-white transition-all hover:scale-105 hover:bg-gray-700 sm:text-sm">
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/></svg>
                      GitHub
                    </a>
                    <a href="https://aetherid.pranavch.tech/" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-700 px-4 py-2 text-xs font-medium text-white transition-all hover:scale-105 hover:bg-green-800 sm:text-sm">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Beav */}
              <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-800">
                <div className="relative block h-48 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center font-mono">
                    <div className="text-[10px] leading-tight text-amber-400">pending &rarr; claimed &rarr; running &rarr; verifying &rarr; done</div>
                    <div className="mt-[2px] text-[10px] leading-tight text-amber-400/50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</div>
                    <div className="text-[10px] leading-tight text-amber-400/50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crashed &rarr; (retry) &rarr; pending</div>
                    <div className="text-[10px] leading-tight text-amber-400/50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</div>
                    <div className="text-[10px] leading-tight text-amber-400/50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;failed</div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Beav &mdash; Autonomous AI Engineer Orchestrator</h5>
                  <p className="mb-3 flex-1 text-sm font-normal text-gray-700 dark:text-gray-400 sm:text-base">
                    A fully autonomous agent that watches GitHub for labeled issues, spins up isolated workspaces, drives an LLM coding agent via JSON-RPC 2.0, and submits pull requests &mdash; then verifies CI passes before marking the task done. The interesting engineering is the reliability layer: a 7-state machine preventing double-claiming, heartbeat-based crash detection (workers emit IPC pulses every 15s, stale PIDs force-killed after 45s), exponential backoff retries (10s &times; 2&#x207F;), SQLite WAL mode for concurrent workers, and path-traversal-protected sandboxed workspaces.
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">7-State Machine</span>
                    <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">3 Concurrent Workers</span>
                    <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">Auto PR + CI Verify</span>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">TypeScript</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">Node.js</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">SQLite</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">Drizzle ORM</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">Octokit</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">JSON-RPC 2.0</span>
                    <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">pnpm monorepo</span>
                  </div>
                  <div className="mt-auto flex gap-2">
                    <a href="https://github.com/Pranav04027/Beav" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-4 py-2 text-xs font-medium text-white transition-all hover:scale-105 hover:bg-gray-700 sm:text-sm">
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/></svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-gray-200 bg-green-50 dark:border-gray-800 dark:bg-black">
          <div className="mx-auto max-w-screen-md px-4 py-16 text-center lg:py-24">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              Open to Internship Opportunities
            </h2>
            <p className="mb-8 text-base font-light text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl">
              I'm actively looking for software engineering internships &mdash; full-stack, backend, or AI/ML infrastructure. If you're building something interesting, let's talk.
            </p>
            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:chauhanpranav040@gmail.com"
                className="inline-flex w-full items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-center text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                Say Hello
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-c-6160a1269"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg border-2 border-green-300 px-6 py-3 text-center text-base font-medium text-gray-900 shadow-sm transition-all hover:scale-105 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:border-green-700 dark:text-white dark:hover:bg-green-900 dark:focus:ring-gray-800 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                LinkedIn
              </a>
            </div>
            <a
              href="mailto:chauhanpranav040@gmail.com"
              className="text-base font-medium text-green-600 hover:underline dark:text-green-400 sm:text-lg"
            >
              📧 chauhanpranav040@gmail.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

const ResumePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mx-auto w-full min-h-screen max-w-screen-xl px-4 pb-16 pt-32 dark:text-white">
      <a href="#" className="mb-8 inline-block font-bold text-green-500 transition-transform hover:-translate-x-2">&larr; Back to Portfolio</a>
      <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">Resume</h1>
      <div className="mb-8 flex flex-wrap gap-4">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-8 py-4 font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-800"
        >
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"/></svg>
          Download PDF
        </a>
      </div>
      <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-lg dark:border-gray-700" style={{ height: "80vh" }}>
        <embed src="/resume.pdf" type="application/pdf" className="h-full w-full" />
      </div>
    </main>
  );
};

const App: React.FC = () => {
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <>
      <Nav />
      {hash === "#resume" ? (
        <ResumePage />
      ) : (
        <Portfolio />
      )}
      <Footer />
    </>
  );
};

export default App;

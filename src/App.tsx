function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight">
            Tech<span className="text-indigo-400">Forge</span>
          </span>
          <div className="hidden gap-8 text-sm text-gray-400 sm:flex">
            <a href="#products" className="transition hover:text-white">Products</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">
          Software Publishing Company
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Building tools that{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            empower creators
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-400">
          TechForge publishes software across creative and educational domains —
          from AI-powered voice tools to quality assurance training platforms.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#products"
            className="rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-gray-500 hover:text-white"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Our Products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            We build and publish software that helps people create, learn, and grow.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* VV-Studio */}
            <a href="https://vv-studio.us/" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Live
              </span>
              <h3 className="mt-4 text-xl font-semibold">VV-Studio</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Transform text into natural-sounding voiceovers for your videos.
                AI-powered text-to-voice technology with professional quality output.
              </p>
            </a>

            {/* Mobile Apps */}
            <div className="group rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:border-indigo-500/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                Coming Soon
              </span>
              <h3 className="mt-4 text-xl font-semibold">Mobile Apps</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Our creative tools, reimagined for mobile. Native Android and iOS
                apps designed for on-the-go content creation.
              </p>
            </div>

            {/* QA Education Platform */}
            <div className="group rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:border-indigo-500/50 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                Coming Soon
              </span>
              <h3 className="mt-4 text-xl font-semibold">QA Education Platform</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                A comprehensive learning platform for aspiring QA engineers.
                Courses, hands-on labs, and certification paths to launch your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-gray-800 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">About TechForge</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            TechForge is a software publishing company focused on building
            high-quality digital products. We believe great software should be
            accessible, intuitive, and genuinely useful. From AI-driven creative
            tools to education platforms, we publish applications that help people
            do their best work.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Based in the intersection of technology and creativity, we're committed
            to shipping products that make a real difference for our users.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-800 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <span className="text-lg font-bold tracking-tight">
                Tech<span className="text-indigo-400">Forge</span>
              </span>
              <p className="mt-1 text-sm text-gray-500">Software Publishing Company</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-400 sm:items-end">
              <a href="mailto:tanyakars@techforgeapp.com" className="transition hover:text-white">
                tanyakars@techforgeapp.com
              </a>
              <div className="flex gap-6">
                <a href="#products" className="transition hover:text-white">Products</a>
                <a href="#about" className="transition hover:text-white">About</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} TechForge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

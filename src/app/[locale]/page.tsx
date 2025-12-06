import Header from "@/components/Header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="bg-white text-gray-900 antialiased">
      <Header />

      <section className="relative flex h-screen items-center bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="relative z-10 container mx-auto max-w-2xl px-6 text-white">
          <h1 className="mb-4 text-5xl font-extrabold drop-shadow-lg md:text-6xl">
            {t("landingPage.MainTitle")}
          </h1>
          <p className="mb-6 text-lg drop-shadow-md md:text-xl">
            Partnering with brands to build immersive web, mobile and branding
            solutions that delight your users and drive growth.
          </p>
          <a
            href="#work"
            className="rounded bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
          >
            See Our Work
          </a>
        </div>
        <div className="bg-opacity-30 absolute inset-0 bg-black"></div>
      </section>

      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold text-emerald-600 md:text-4xl">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow transition hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-semibold">
                Branding & Identity
              </h3>
              <p className="text-gray-600">
                We craft unique brand identities that resonate with your
                audience and stand out in the market.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow transition hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-semibold">
                Web & Mobile Development
              </h3>
              <p className="text-gray-600">
                From responsive websites to mobile apps, we deliver seamless
                digital experiences across platforms.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow transition hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-semibold">
                Marketing & Growth
              </h3>
              <p className="text-gray-600">
                Grow your business with our strategic marketing, SEO and
                performance-driven campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold text-emerald-600 md:text-4xl">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group relative h-64 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="project1.jpg"
                alt="Project 1"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="bg-opacity-30 absolute inset-0 flex items-center justify-center bg-black text-2xl font-bold text-white opacity-0 transition group-hover:opacity-100">
                Project 1
              </div>
            </div>
            <div className="group relative h-64 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="project2.jpg"
                alt="Project 2"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="bg-opacity-30 absolute inset-0 flex items-center justify-center bg-black text-2xl font-bold text-white opacity-0 transition group-hover:opacity-100">
                Project 2
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="#contact"
              className="rounded bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 py-20">
        <div className="container mx-auto flex flex-col items-center gap-12 px-6 md:flex-row">
          <div className="transform-hover:translate-y--2 mb-8 transition md:mb-0 md:w-1/2">
            <img
              src="about-team.jpg"
              alt="Our team"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="mb-4 text-3xl font-bold text-emerald-600 md:text-4xl">
              About Us
            </h2>
            <p className="mb-4 text-gray-600">
              We’re a full-service digital agency passionate about helping
              brands connect, engage, and grow. Our multidisciplinary team of
              designers, developers, and strategists bring fresh ideas and deep
              expertise.
            </p>
            <p className="text-gray-600">
              From startups to established brands, we tailor solutions to your
              unique needs and work collaboratively to deliver results that
              matter.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-emerald-600 md:text-4xl">
            Let’s Talk
          </h2>
          <p className="mb-8 text-gray-600">
            Ready to start your project? Drop us a message and we’ll get back to
            you soon.
          </p>
          <form className="mx-auto max-w-2xl space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full rounded border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="rounded bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-emerald-600 py-6 text-gray-300">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-200">
            &copy; 2025 YourAgency. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="transition hover:text-white">
              Twitter
            </a>
            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
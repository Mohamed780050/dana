import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Header />

      <section className="h-screen flex items-center relative  bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-6 text-white max-w-2xl relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            We Create Digital Experiences
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">
            Partnering with brands to build immersive web, mobile and branding
            solutions that delight your users and drive growth.
          </p>
          <a
            href="#work"
            className="px-8 py-3 bg-emerald-600 rounded text-white font-semibold hover:bg-emerald-700 transition shadow-lg"
          >
            See Our Work
          </a>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-emerald-600">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">
                Branding & Identity
              </h3>
              <p className="text-gray-600">
                We craft unique brand identities that resonate with your
                audience and stand out in the market.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">
                Web & Mobile Development
              </h3>
              <p className="text-gray-600">
                From responsive websites to mobile apps, we deliver seamless
                digital experiences across platforms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-emerald-600">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative bg-gray-200 h-64 rounded-lg overflow-hidden group">
              <img
                src="project1.jpg"
                alt="Project 1"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition">
                Project 1
              </div>
            </div>
            <div className="relative bg-gray-200 h-64 rounded-lg overflow-hidden group">
              <img
                src="project2.jpg"
                alt="Project 2"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition">
                Project 2
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="#contact"
              className="px-8 py-3 bg-emerald-600 rounded text-white font-semibold hover:bg-emerald-700 transition shadow-lg"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0 transform-hover:translate-y--2 transition">
            <img
              src="about-team.jpg"
              alt="Our team"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-600">
              About Us
            </h2>
            <p className="text-gray-600 mb-4">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-600">
            Let’s Talk
          </h2>
          <p className="text-gray-600 mb-8">
            Ready to start your project? Drop us a message and we’ll get back to
            you soon.
          </p>
          <form className="max-w-2xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-600 text-white rounded font-semibold hover:bg-emerald-700 transition shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-emerald-600 text-gray-300 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-200">
            &copy; 2025 YourAgency. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

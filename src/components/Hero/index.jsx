const Hero = () => {
  return (
    <section className="min-h-screen pt-24 flex-col md:flex-row items-center justify-between
    dark:bg-gray-800 px-6 md:px-12 lg:px-24 py-12 gap-12 flex">
      {/* Left side: Text */}
      <div className="max-w-lg space-y-4">
        <p className="text-lg">Hello, I am</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold
        text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform">
          V.Reddysekhar
        </h1>
        <p className="text-gray-600 dark:text-gray-300 md:text-2xl text-xl">Full Stack Developer</p>
        <div className="flex gap-4">
          <a href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-md
            hover:bg-blue-700 hover:shadow-lg transition-all">
            Let's Connect
          </a>
          <a href="#cv"
            className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-md
            hover:bg-blue-600 hover:text-white transition-all">
            Download CV
          </a>
        </div>
      </div>
      {/* Right side */}

      <div className= "relative mt-10 md:mt-0">
       <img
       src="/images/nature.jpg"
       alt="Profile"
       className="rounded-full shadow-lg"
       width={300}
       height={300}
       />
       {/* Top */}
       <div className="absolute top-[-20px] left-1/2 -translate-x-1/2">
        <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md">
          <img src="/images/nature.jpg" alt="Flutter" className="w-8 h-8" />
        </div>
       </div>
       {/* Bottom */}
       <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2">
        <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md">
          <img src="/images/nature.jpg" alt="React" className="w-8 h-8" />
        </div>
       </div>
       {/* Left */}
       <div className="absolute left-[-20px] top-1/2 -translate-y-1/2">
        <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md">
          <img src="/images/nature.jpg" alt="Node" className="w-8 h-8" />
        </div>
       </div>
       {/* Right */}
       <div className="absolute right-[-20px] top-1/2 -translate-y-1/2">
        <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md">
          <img src="/images/nature.jpg" alt="JavaScript" className="w-8 h-8" />
        </div>
       </div>
      </div>
    </section>
  );
};
export default Hero;

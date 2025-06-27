
const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
          Brewed to Perfection
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-coffee-200 max-w-2xl mx-auto">
          Experience the perfect blend of tradition and innovation in every cup. 
          Handcrafted with passion, served with love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-coffee-600 hover:bg-coffee-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
            Explore Menu
          </button>
          <button className="border-2 border-coffee-200 text-coffee-200 hover:bg-coffee-200 hover:text-coffee-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

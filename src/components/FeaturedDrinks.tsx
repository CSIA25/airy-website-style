
const drinks = [
  {
    name: "Espresso Masterpieces",
    description: "Bold and intense flavors extracted to perfection. Experience the pure essence of premium coffee beans.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Iced Favorites",
    description: "Refreshing cold beverages crafted with our signature blends. Perfect for any season.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Organic Beans",
    description: "Sustainably sourced, ethically traded beans from the world's finest coffee regions.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedDrinks = () => {
  return (
    <section className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-900 mb-4">
            FEATURED DRINKS
          </h2>
          <p className="text-coffee-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover our carefully curated selection of signature beverages. Each drink tells a story 
            of craftsmanship, quality, and passion for the perfect cup.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {drinks.map((drink, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={drink.image} 
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-playfair text-2xl font-semibold text-coffee-900 mb-3">
                  {drink.name}
                </h3>
                <p className="text-coffee-700 mb-6 leading-relaxed">
                  {drink.description}
                </p>
                <button className="bg-coffee-800 hover:bg-coffee-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;


const DailyDeals = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-coffee-900/85"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Daily Deal
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-coffee-100 rounded-2xl p-6 text-center">
            <h3 className="font-playfair text-2xl font-semibold text-coffee-900 mb-4">
              Daily Deal
            </h3>
            <p className="text-coffee-700 mb-6">
              Enjoy our special combination deal with freshly brewed coffee and pastries.
            </p>
            <button className="bg-coffee-800 hover:bg-coffee-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Order Deal
            </button>
          </div>
          
          <div className="bg-coffee-100 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coffee and croissant"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="font-playfair text-xl font-semibold text-coffee-900">
                Coffee & Croissant
              </h4>
            </div>
          </div>
          
          <div className="bg-coffee-100 rounded-2xl p-6 text-center">
            <h3 className="font-playfair text-2xl font-semibold text-coffee-900 mb-4">
              Newsletter Sign
            </h3>
            <p className="text-coffee-700 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <div className="text-2xl font-bold text-coffee-800 mb-4">₹50 OFF</div>
            <button className="bg-coffee-800 hover:bg-coffee-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyDeals;

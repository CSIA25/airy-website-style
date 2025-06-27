
const PromoBanners = () => {
  return (
    <section className="py-16 bg-coffee-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative bg-coffee-800 rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coffee promotion"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-coffee-900/60 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="font-playfair text-3xl font-bold mb-2">Get 1st Coffee</h3>
                <p className="text-coffee-200 mb-4">Free for new customers</p>
                <button className="bg-white text-coffee-900 px-6 py-2 rounded-lg hover:bg-coffee-100 transition-colors duration-200">
                  Claim Offer
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative bg-coffee-700 rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Premium coffee"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-coffee-900/60 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="font-playfair text-3xl font-bold mb-2">₹80,500</h3>
                <p className="text-coffee-200 mb-4">Premium Coffee Collection</p>
                <button className="bg-white text-coffee-900 px-6 py-2 rounded-lg hover:bg-coffee-100 transition-colors duration-200">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;

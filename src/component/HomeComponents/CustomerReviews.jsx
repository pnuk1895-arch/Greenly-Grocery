import { Star, ChevronRight } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "Great quality and super fast delivery!",
    },
    {
      name: "Rahul Mehta",
      role: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "Fresh products at reasonable prices.",
    },
    {
      name: "Anjali Verma",
      role: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review: "Best grocery app I have ever used.",
    },
  ];

  return (
    <section className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-14">
      
      {/* Section Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#1f2937] sm:text-2xl">
          What Our Customers Say
        </h2>

        <button className="flex items-center gap-1 text-sm font-medium text-[#176b35] transition hover:text-green-800">
          View All
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex min-h-38.75 flex-col justify-between rounded-xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className="h-4 w-4 fill-[#f5b301] text-[#f5b301]"
                />
              ))}
            </div>

            {/* Review */}
            <p className="mt-3 text-sm leading-relaxed text-[#4b5563] sm:text-base">
              "{review.review}"
            </p>

            {/* Customer */}
            <div className="mt-5 flex items-center gap-3">
              <img
                src={review.image}
                alt={review.name}
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <h3 className="text-sm font-semibold text-[#1f2937]">
                  {review.name}
                </h3>

                <p className="text-xs text-[#6b7280]">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider Dots */}
      <div className="mt-6 flex justify-center gap-2 lg:hidden">
        <span className="h-2 w-2 rounded-full bg-[#176b35]"></span>
        <span className="h-2 w-2 rounded-full bg-[#cbd5c7]"></span>
        <span className="h-2 w-2 rounded-full bg-[#cbd5c7]"></span>
      </div>
    </section>
  );
}
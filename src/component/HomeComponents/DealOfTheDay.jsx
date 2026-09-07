import { ArrowRight, Clock } from "lucide-react";

import fruitsImage from "../../asset/fruitImage.png";
import vegetablesImage from "../../asset/VegatableImage.png";
import dairyImage from "../../asset/DairyImage.png";

export default function DealOfDay() {
  const deals = [
    {
      title: "Fresh Fruits",
      discount: "Up to 40% OFF",
      image: fruitsImage,
      color: "from-orange-100 to-orange-50",
    },
    {
      title: "Organic Vegetables",
      discount: "30% OFF",
      image: vegetablesImage,
      color: "from-green-100 to-green-50",
    },
    {
      title: "Dairy Products",
      discount: "25% OFF",
      image: dairyImage,
      color: "from-blue-100 to-blue-50",
    },
  ];

  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-9">

      {/* Section Heading */}

      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <h2 className="text-xl font-bold text-[#222] sm:text-2xl">
          Today's Deals
        </h2>

        <div className="flex items-center gap-2 text-sm text-gray-600">

          <Clock className="h-4 w-4 text-green-700" />

          <span>Offer ends in:</span>

          <div className="flex gap-2 font-semibold text-[#222]">

            <span>02</span>
            <span>:</span>

            <span>14</span>
            <span>:</span>

            <span>36</span>
            <span>:</span>

            <span>22</span>

          </div>

        </div>

      </div>


      {/* Deals Grid */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {deals.map((deal) => (

          <div
            key={deal.title}
            className={`relative min-h-52 overflow-hidden rounded-xl bg-linear-to-br ${deal.color}`}
          >

            {/* Content */}

            <div className="relative z-10 flex h-full w-[60%] flex-col justify-center p-6">

              <p className="text-sm font-medium text-gray-600">
                {deal.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#174d25]">
                {deal.discount}
              </h3>

              <button className="mt-5 flex w-fit items-center gap-2 rounded-lg bg-[#08751d] px-4 py-2 text-sm font-medium text-white transition hover:bg-green-900">

                Shop Now

                <ArrowRight className="h-4 w-4" />

              </button>

            </div>


            {/* Product Image */}

            <img
              src={deal.image}
              alt={deal.title}
              className="absolute bottom-0 right-0 h-[95%] w-[66%] object-fill object-right"
            />

          </div>

        ))}

      </div>


      {/* View All */}

      <div className="mt-5 flex justify-end">

        <button className="flex items-center gap-2 text-sm font-semibold text-green-800 hover:text-green-950">

          View All

          <ArrowRight className="h-4 w-4" />

        </button>

      </div>

    </section>
  );
}
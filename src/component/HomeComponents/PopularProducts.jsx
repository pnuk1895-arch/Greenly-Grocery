import { Heart, ShoppingCart, Star, ArrowRight } from "lucide-react";

// import apple from "../../asset/apple.png";
// import banana from "../../asset/banana.png";
// import broccoli from "../../asset/broccoli.png";
// import tomato from "../../asset/tomato.png";
// import avocado from "../../asset/avocado.png";
// import carrot from "../../asset/carrot.png";

export default function PopularProducts() {
  const products = [
    {
      id: 1,
      name: "Fresh Red Apples",
      category: "Fruits",
      weight: "1 kg",
      price: 179,
      oldPrice: 220,
      rating: 4.8,
      // image: apple,
      discount: "18% OFF",
    },
    {
      id: 2,
      name: "Organic Bananas",
      category: "Fruits",
      weight: "1 kg",
      price: 49,
      oldPrice: 60,
      rating: 4.7,
      image: "https://images.pexels.com/photos/7105220/pexels-photo-7105220.jpeg",
      discount: "15% OFF",
    },
    {
      id: 3,
      name: "Fresh Broccoli",
      category: "Vegetables",
      weight: "500 g",
      price: 79,
      oldPrice: 99,
      rating: 4.9,
      // image: broccoli,
      discount: "20% OFF",
    },
    {
      id: 4,
      name: "Farm Fresh Tomatoes",
      category: "Vegetables",
      weight: "1 kg",
      price: 99,
      oldPrice: 120,
      rating: 4.6,
      // image: tomato,
      discount: "17% OFF",
    },
    {
      id: 5,
      name: "Fresh Avocados",
      category: "Fruits",
      weight: "500 g",
      price: 120,
      oldPrice: 150,
      rating: 4.8,
      // image: avocado,
      discount: "20% OFF",
    },
    {
      id: 6,
      name: "Organic Carrots",
      category: "Vegetables",
      weight: "1 kg",
      price: 70,
      oldPrice: 85,
      rating: 4.7,
      // image: carrot,
      discount: "18% OFF",
    },
  ];

  return (
    <section className="mx-auto w-[95%] py-4 sm:py-6 md:py-8 ">

      {/* ================= SECTION HEADER ================= */}

      <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#1e8e3e] sm:text-sm">
            Fresh & Healthy
          </p>

          <h2 className="text-2xl font-bold text-[#222222] sm:text-3xl lg:text-4xl">
            Popular Products
          </h2>

          <p className="mt-2 text-sm text-[#666666] sm:text-base">
            Discover our customers' favourite products
          </p>
        </div>

        <button className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-[#1e8e3e] transition-colors duration-200 hover:text-[#176b30] sm:flex">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* ================= CATEGORY BUTTONS ================= */}

      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 sm:mb-8 sm:gap-3">

        <button className="shrink-0 rounded-lg bg-[#1e8e3e] px-4 py-2 text-sm font-medium text-white sm:px-5">
          All Products
        </button>

        <button className="shrink-0 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#555555] transition-colors hover:border-[#1e8e3e] hover:text-[#1e8e3e] sm:px-5">
          Fruits
        </button>

        <button className="shrink-0 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#555555] transition-colors hover:border-[#1e8e3e] hover:text-[#1e8e3e] sm:px-5">
          Vegetables
        </button>

        <button className="shrink-0 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#555555] transition-colors hover:border-[#1e8e3e] hover:text-[#1e8e3e] sm:px-5">
          Dairy
        </button>

        <button className="shrink-0 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#555555] transition-colors hover:border-[#1e8e3e] hover:text-[#1e8e3e] sm:px-5">
          Snacks
        </button>
      </div>

      {/* ================= PRODUCTS ================= */}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-5 xl:grid-cols-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-4"
          >

            {/* Discount Badge */}

            <span className="absolute left-2 top-2 z-10 rounded-md bg-[#e8f5e9] px-2 py-1 text-[9px] font-semibold text-[#1e8e3e] sm:left-3 sm:top-3 sm:text-xs">
              {product.discount}
            </span>

            {/* Wishlist */}

            <button className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#777777] shadow-sm transition-colors hover:text-red-500 sm:right-3 sm:top-3">
              <Heart className="h-4 w-4" />
            </button>

            {/* Product Image */}

            <div className="flex h-24 items-center justify-center overflow-hidden sm:h-32 md:h-36 lg:h-40">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Information */}

            <div className="mt-3 flex flex-1 flex-col">

              <p className="text-[10px] font-medium text-[#1e8e3e] sm:text-xs">
                {product.category}
              </p>

              <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[#222222] sm:text-base">
                {product.name}
              </h3>

              <p className=" text-xs text-[#888888]">
                {product.weight}
              </p>

              {/* Rating */}

              <div className=" flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-[#f4b400] text-[#f4b400]" />

                <span className="text-xs font-medium text-[#555555]">
                  {product.rating}
                </span>
              </div>

              {/* Price */}

              <div className=" flex items-center justify-between gap-2">

                <div className="flex flex-col">
                  <span className="text-base font-bold text-[#1e8e3e] sm:text-lg">
                    ₹{product.price}
                  </span>

                  <span className="text-xs text-[#999999] line-through">
                    ₹{product.oldPrice}
                  </span>
                </div>

                {/* Add to Cart */}

                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1e8e3e] text-white transition-colors duration-200 hover:bg-[#176b30] sm:h-10 sm:w-10">
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MOBILE VIEW ALL ================= */}

      <div className="mt-7 flex justify-center sm:hidden">
        <button className="flex items-center gap-2 rounded-lg border border-[#1e8e3e] px-5 py-2.5 text-sm font-semibold text-[#1e8e3e]">
          View All Products
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

    </section>
  );
}
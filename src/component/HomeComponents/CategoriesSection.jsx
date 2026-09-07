import {
  Apple,
  Milk,
  Sandwich,
  CookingPot,
  Beef,
  CupSoda,
  Wheat,
  ShoppingBasket,
} from "lucide-react";

export default function CategorySection() {
  const categories = [
    {
      name: "Fruits",
      icon: Apple,
    },
    {
      name: "Vegetables",
      icon: CookingPot,
    },
    {
      name: "Dairy",
      icon: Milk,
    },
    {
      name: "Bakery",
      icon: Sandwich,
    },
    {
      name: "Beverages",
      icon: CupSoda,
    },
    {
      name: "Snacks",
      icon: ShoppingBasket,
    },
    {
      name: "Meat & Seafood",
      icon: Beef,
    },
    {
      name: "Organic",
      icon: Wheat,
    },
  ];

  return (
    <section className="w-full px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      
      {/* Section Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Shop by Category
        </h2>

        <button className="flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-900 sm:text-base">
          View All
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div
        className="
          grid
          grid-cols-3
          gap-3

          sm:grid-cols-4
          sm:gap-4

          md:grid-cols-5

          lg:grid-cols-6

          xl:grid-cols-8
        "
      >
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <button
              key={index}
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                gap-2

                rounded-xl
                border
                border-gray-200

                bg-white

                px-3
                py-4

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-green-300
                hover:shadow-md
              "
            >
              {/* Icon Container */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-full

                  bg-green-50

                  transition
                  duration-300

                  group-hover:bg-green-100

                  sm:h-14
                  sm:w-14
                "
              >
                <Icon
                  className="
                    h-6
                    w-6
                    text-green-700

                    sm:h-7
                    sm:w-7
                  "
                />
              </div>

              {/* Category Name */}
              <p
                className="
                  text-center
                  text-xs
                  font-medium
                  text-gray-700

                  sm:text-sm
                "
              >
                {category.name}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
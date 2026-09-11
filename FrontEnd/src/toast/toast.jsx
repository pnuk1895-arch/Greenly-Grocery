// utils/toast.jsx

import toast from "react-hot-toast";

export const successToast = (message) => {
  toast.custom(
    <div className="bg-white shadow-lg rounded-lg border border-green-200 px-4 py-3 flex items-center gap-3 w-80">
      <div className="bg-green-100 text-green-600 rounded-full p-2">
        ✓
      </div>

      <p className="text-gray-800 font-medium">
        {message}
      </p>
    </div>
  );
};

export const errorToast = (message) => {
  toast.custom(
    <div className="bg-white shadow-lg rounded-lg border border-red-200 px-4 py-3 flex items-center gap-3 w-80">
      <div className="bg-red-100 text-red-600 rounded-full p-2">
        ✕
      </div>

      <p className="text-gray-800 font-medium">
        {message}
      </p>
    </div>
  );
};
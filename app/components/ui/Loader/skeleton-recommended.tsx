import React from "react";

const RecommendedProductsSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl h-[550px] mb-8 relative p-4 mx-auto">
      <div className="flex flex-col w-full h-full gap-4 rounded">
        <div className="relative m-auto flex flex-col justify-start items-center w-full h-full border shadow-lg animate-pulse">
          <div className="absolute right-2 top-0 h-10 bg-gray-400 rounded-full"></div>
          <div className="absolute right-2 top-2 h-10 bg-gray-400 rounded"></div>

          <div className="w-full h-56 mt-6 bg-gray-400 rounded"></div>

          <div className="w-full flex flex-col items-center justify-center px-2 md:px-4 gap-3 mt-6">
            <div className="w-20 h-4 bg-gray-400 rounded"></div>

            <div className="w-32 h-6 bg-gray-400 rounded"></div>
          </div>

          <div className="w-full px-2 md:px-4 mt-4">
            <div className="w-full h-6 bg-gray-400 rounded"></div>
          </div>

          <div className="mt-auto w-full h-12 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProductsSkeleton;

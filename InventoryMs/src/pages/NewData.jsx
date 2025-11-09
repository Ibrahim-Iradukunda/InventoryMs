import React, { useState } from 'react';

function NewData() {
  const [showCustomLabelsInfo, setShowCustomLabelsInfo] = useState(true);
  const [showCustomNumbersInfo, setShowCustomNumbersInfo] = useState(true);

  // Subsection toggles
  const [showLabel0, setShowLabel0] = useState(true);
  const [showNum1, setShowNum1] = useState(true);
  const [showNum2, setShowNum2] = useState(true);
  const [showNum3, setShowNum3] = useState(true);
  const [showNum4, setShowNum4] = useState(true);

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto text-xs">
      {/* Hero header with CTA */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-gray-100 dark:bg-gray-100 rounded-md px-4 py-3">
        <div className="flex-1">
          <h1 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">
            Integrate KPIs into your product feed and optimise your dynamic product ads
          </h1>
          <p className="text-xs text-gray-700">
            Below you will find the differences and KPIs / data, that we have integrated for you, using Custom Label Fields (0-4) and Custom Number Fields (0-4) to contain your constantly updated performance metrics.
          </p>
        </div>
        <button
          type="button"
          className="self-start sm:self-auto inline-flex items-center justify-center rounded-md bg-blue-700 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
        >
          GENERATE A SUPERCHARGED DATA FEED
        </button>
      </div>

      {/* ------------------- Custom Labels Section ------------------- */}
      <div className="bg-white dark:bg-white rounded-lg shadow-lg p-6">
        {/* Header with chevron toggle */}
        <div
          className="flex items-center justify-between mb-2 cursor-pointer select-none w-full border-b border-gray-300 pb-2"
          onClick={() => setShowCustomLabelsInfo(!showCustomLabelsInfo)}
        >
          <h2 className="text-sm text-gray-700 font-bold">Custom Labels:</h2>
          <span className="flex items-center text-gray-800 text-xs font-medium">
            {showCustomLabelsInfo ? 'SEE LESS' : 'SEE MORE'}
            <svg
              className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${showCustomLabelsInfo ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>

        {/* Collapsible content */}
        {showCustomLabelsInfo && (
          <div className="transition-all duration-300 ease-in-out">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-gray-800 mb-4">
                  Click on this card to learn, which KPIs are matched to the five available custom labels 0-4.
                  For custom labels the metrics are grouped into 10 quantiles (ranging from low 0.1 to high 1.00).
                </p>
                <h2 className="text-sm text-gray-800 font-semibold mb-3">For Example:</h2>
                <p className="text-gray-800 italic mb-4">
                  This will help to select grouped products within a dataset, such as
                  "only show Products, who's add-to-cart rate is 'is any of these' Quantile 0.7 or above" —
                  this product set would now only show the best performing 30% products according to their past 7 days add-to-cart rate.
                </p>
              </div>

              <div>
                <p className="text-gray-800 font-semibold mb-3 ml-45">Can be matched with the following rules:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-800 ml-50">
                  <li>is any of these</li>
                  <li>is not</li>
                  <li>contains</li>
                  <li>does not contain</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Subsection: Custom Label 0 */}
        <div className={`${showCustomLabelsInfo ? ' ' : ''}pt-0`}>
          <div className="bg-gray-100 border border-gray-300 rounded">
            <div
              className="flex items-center justify-between cursor-pointer select-none px-3 py-2"
              onClick={() => setShowLabel0(!showLabel0)}
            >
              <h3 className="text-sm text-gray-800 font-bold">Custom Label 0: Release Date</h3>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${showLabel0 ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {showLabel0 && (
              <div className="transition-all duration-300 ease-in-out">
                <div className="w-full border-t border-gray-300"></div>
                <div className="p-3">
                  <p className="text-gray-800 mb-3">
                    Make sure that newly launched products receive their fair share, by creating product sets based on the "Contains" rule, by selecting the desired date.
                  </p>
                  <h4 className="text-xs text-gray-800 font-semibold mb-2">For Example:</h4>
                  <p className="text-gray-800 italic">
                    Lets say its June 2022, create a product set using custom label 0, select "is any of these" and then choose 0622 from the drop down menu,
                    to automatically group all products that have been released during the selected month. 
                    Additionally you can already select 0722 and 0822, so that once July starts the newly launched products will automatically be included in the product set.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ------------------- Custom Numbers Section ------------------- */}
      <div className="bg-white dark:bg-white rounded-lg shadow-lg p-6">
        <div
          className="flex items-center justify-between mb-2 cursor-pointer select-none w-full border-b border-gray-300 pb-2"
          onClick={() => setShowCustomNumbersInfo(!showCustomNumbersInfo)}
        >
          <h2 className="text-sm text-gray-800 font-bold">Custom Numbers:</h2>
          <span className="flex items-center text-gray-800 text-xs font-medium">
            {showCustomNumbersInfo ? 'SEE LESS' : 'SEE MORE'}
            <svg
              className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${showCustomNumbersInfo ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>

        {showCustomNumbersInfo && (
          <div className="transition-all duration-300 ease-in-out">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-gray-800 mb-4">
                  Click on this card to learn, which KPIs are matched to the five available custom numbers 0-4.
                  For custom numbers the metrics are displayed as values.
                </p>
                <h2 className="text-sm text-gray-800 font-semibold mb-3">For Example:</h2>
                <p className="text-gray-800 italic mb-4">
                  This will help to select products that achieved certain KPI such as 
                  "only show Products, who's add-to-cart rate is 'greater than' 0.27" — 
                  this product set would now only show products whose past 7 days add-to-cart rate is above 27%. 
                  Or mix custom numbers to create the most useful product sets, for example 
                  "only show Products, who's impression volume 'is less than' 950 — AND — add-to-cart rate 'is greater than' 0.27".
                </p>
              </div>

              <div>
                <p className="text-gray-800 font-semibold mb-3 ml-45">Can be matched with the following rules:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-800 ml-50">
                  <li>is any of these</li>
                  <li>is not</li>
                  <li>is greater than</li>
                  <li>is less than</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Subsections: Custom Numbers 1–4 */}
        <div className={`${showCustomNumbersInfo ? ' ' : ''}pt-0 space-y-2`}>
          {/* Custom Number 1 */}
          <div className="bg-gray-100 border border-gray-300 rounded">
            <div
              className="flex items-center justify-between cursor-pointer select-none px-3 py-2"
              onClick={() => setShowNum1(!showNum1)}
            >
              <h3 className="text-sm text-gray-800 font-bold">Custom Numbers 1: 7 Day Sales Volume</h3>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${showNum1 ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {showNum1 && (
              <div className="transition-all duration-300 ease-in-out">
                <div className="w-full border-t border-gray-300"></div>
                <div className="p-3">
                  <p className="text-gray-800">
                    This will help to select products that achieved certain sales volumes in the past 7 days, 
                    by selecting "is greater than" for example 100, only products that have sold more than 100 times in the past 7 days will be selected. 
                    This custom number is great to be mixed with custom number 3 (Impressions) to group a product set of products with significant sales volumes and great conversion rates.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Custom Number 2 */}
          <div className="bg-gray-100 border border-gray-300 rounded">
            <div
              className="flex items-center justify-between cursor-pointer select-none px-3 py-2"
              onClick={() => setShowNum2(!showNum2)}
            >
              <h3 className="text-sm text-gray-800 font-bold">Custom Numbers 2: 7 Day Add to Cart Rate</h3>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${showNum2 ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {showNum2 && (
              <div className="transition-all duration-300 ease-in-out">
                <div className="w-full border-t border-gray-300"></div>
                <div className="p-3">
                  <p className="text-gray-800">
                    This will help to select products that achieved certain add-to-cart rates in the past 7 days, 
                    by selecting "is greater than" for example 0.24, only products that have at least 24% add-to-cart rate in the past 7 days will be selected. 
                    This custom number is great to be mixed with custom number 3 (Impressions) to group a product set of products with high purchase intent but low impression volume.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Custom Number 3 */}
          <div className="bg-gray-100 border border-gray-300 rounded">
            <div
              className="flex items-center justify-between cursor-pointer select-none px-3 py-2"
              onClick={() => setShowNum3(!showNum3)}
            >
              <h3 className="text-sm text-gray-800 font-bold">Custom Numbers 3: 7 Day Impressions</h3>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${showNum3 ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {showNum3 && (
              <div className="transition-all duration-300 ease-in-out">
                <div className="w-full border-t border-gray-300"></div>
                <div className="p-3">
                  <p className="text-gray-800">
                    This will help to select products that achieved certain amount of impressions in the past 7 days, 
                    by selecting "is less than" for example 750, only products that have had below 750 product impressions in the past 7 days will be selected. 
                    This custom number is great to be mixed with custom number 2 (Add-to-Cart Rate) to group a product set of products with high purchase intent and low impression volume.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Custom Number 4 */}
          <div className="bg-gray-100 border border-gray-300 rounded">
            <div
              className="flex items-center justify-between cursor-pointer select-none px-3 py-2"
              onClick={() => setShowNum4(!showNum4)}
            >
              <h3 className="text-sm text-gray-800 font-bold">Custom Numbers 4: 7 Day Profitability Score</h3>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${showNum4 ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {showNum4 && (
              <div className="transition-all duration-300 ease-in-out">
                <div className="w-full border-t border-gray-300"></div>
                <div className="p-3">
                  <p className="text-gray-800">
                    Automatically select products that achieved a certain profitability score in the past 7 days, 
                    by selecting "is greater than" for example 0.80, only products that have a profitability score of 0.80 or higher in the past 7 days will be selected. 
                    This custom number is great to be combined with custom number 3 (7 Day Impressions), when selecting high impressions and high profitability values, 
                    as this product set then only entails products that have possessed a great profitability level whilst handling many product impressions and therefore is ready to be scaled.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewData;

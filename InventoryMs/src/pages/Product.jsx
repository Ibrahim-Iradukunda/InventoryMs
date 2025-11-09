import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDarkMode } from '../contexts/DarkModeContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Product() {
  const { isDarkMode } = useDarkMode();
  const [showInactive, setShowInactive] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState("7 days");
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [showKPI, setShowKPI] = useState(new Set());
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showKPIModal, setShowKPIModal] = useState(false);
  const [selectedKPIProduct, setSelectedKPIProduct] = useState(null);

  const toggleRowExpansion = (index) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRows(newExpanded);
  };

  const toggleKPIVisibility = (index) => {
    const newShowKPI = new Set(showKPI);
    if (newShowKPI.has(index)) {
      newShowKPI.delete(index);
    } else {
      newShowKPI.add(index);
    }
    setShowKPI(newShowKPI);
  };

  const handleViewKPI = (item) => {
    setSelectedKPIProduct(item);
    setShowKPIModal(true);
  };

  const handleProductClick = (item) => {
    setSelectedProduct(item);
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    setSelectedProduct(null);
  };

  const closeKPIModal = () => {
    setShowKPIModal(false);
    setSelectedKPIProduct(null);
  };

  // KPI Chart Data
  const kpiData = [
    { day: 'Monday', impressions: 1200, conversionRate: 15, addToCartRate: 25, purchases: 180, priceChanges: 0 },
    { day: 'Tuesday', impressions: 1320, conversionRate: 18, addToCartRate: 22, purchases: 240, priceChanges: 5 },
    { day: 'Wednesday', impressions: 980, conversionRate: 12, addToCartRate: 18, purchases: 120, priceChanges: 0 },
    { day: 'Thursday', impressions: 1450, conversionRate: 20, addToCartRate: 28, purchases: 290, priceChanges: 10 },
    { day: 'Friday', impressions: 1100, conversionRate: 16, addToCartRate: 20, purchases: 176, priceChanges: 0 },
    { day: 'Saturday', impressions: 1350, conversionRate: 19, addToCartRate: 26, purchases: 257, priceChanges: 15 },
    { day: 'Sunday', impressions: 1280, conversionRate: 17, addToCartRate: 24, purchases: 218, priceChanges: 0 }
  ];

  const getScoreCardStyle = (score) => {
    if (score.includes("Highest") || score.includes("Very High")) {
      return "bg-green-600 text-white border-green-600";
    }
    if (score.includes("High")) {
      return "bg-green-500 text-white border-green-500";
    }
    if (score.includes("Medium")) {
      return "bg-yellow-500 text-white border-yellow-500";
    }
    if (score.includes("Low")) {
      return "bg-yellow-500 text-white border-yellow-500";
    }
    if (score.includes("Very Low") || score.includes("Lowest")) {
      return "bg-orange-500 text-white border-orange-500";
    }
    return "bg-gray-500 text-white border-gray-500";
  };

  const data = [
    {
      id: 1,
      name: "Asymmetrisches Crop-Shirt, orange",
      sku: "SC123",
      date: "05.07.2022",
      stock: 200,
      price: "€29.99",
      margin: "2.50",
      returnRate: "38.62%",
      atc: "13.11%",
      cvr: "5.69%",
      purchases: 152,
      impressions: 2670,
      profitability: "55 - Medium",
      impressionScore: "100 - Highest",
      image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
      hasSubItems: false,
      isActive: true,
    },
    {
      id: 2,
      name: "Netz-Pullover, beige",
      sku: "SC124",
      date: "23.06.2022",
      stock: 30,
      price: "€49.99",
      margin: "3.57",
      returnRate: "24.09%",
      atc: "27.20%",
      cvr: "6.24%",
      purchases: 78,
      impressions: 1250,
      profitability: "85 - Very High",
      impressionScore: "46 - Medium",
      image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
      hasSubItems: false,
      isActive: true,
    },
    {
      id: 3,
      name: "Spitzen-Bustier, weiß",
      sku: "SC126",
      date: "02.07.2022",
      stock: 310,
      price: "€24.99",
      margin: "3.12",
      returnRate: "23.33%",
      atc: "22.05%",
      cvr: "6.15%",
      purchases: 224,
      impressions: 1950,
      profitability: "89 - Very High",
      impressionScore: "73 - High",
      image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
      hasSubItems: true,
      subItems: [
    {
      name: "Spitzen-Bustier, weiß, S",
      sku: "SC126.1",
      date: "02.07.2022",
      stock: 130,
      price: "€24.99",
      margin: "3.12",
      returnRate: "17.47%",
      atc: "16.36%",
      cvr: "3.90%",
      purchases: 76,
      impressions: 1950,
      profitability: "69 - High",
      impressionScore: "73 - High",
          image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
    },
    {
      name: "Spitzen-Bustier, weiß, M",
      sku: "SC126.2",
      date: "02.07.2022",
      stock: 110,
      price: "€24.99",
      margin: "3.12",
      returnRate: "17.95%",
      atc: "20.92%",
      cvr: "6.15%",
      purchases: 120,
      impressions: 1950,
      profitability: "100 - Highest",
      impressionScore: "73 - High",
          image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
    },
    {
      name: "Spitzen-Bustier, weiß, L",
      sku: "SC126.3",
      date: "02.07.2022",
      stock: 70,
      price: "€24.99",
      margin: "3.12",
      returnRate: "20.86%",
      atc: "10.51%",
      cvr: "1.44%",
      purchases: 28,
      impressions: 1950,
      profitability: "20 - Very Low",
      impressionScore: "73 - High",
          image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Body aus Spitze, schwarz",
      sku: "SC127",
      date: "28.06.2022",
      stock: 130,
      price: "€39.99",
      margin: "3.64",
      returnRate: "49.44%",
      atc: "28.99%",
      cvr: "6.45%",
      purchases: 89,
      impressions: 1380,
      profitability: "69 - High",
      impressionScore: "51 - Medium",
      image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
      hasSubItems: false,
      isActive: true,
    },
    {
      id: 5,
      name: "Crochet-Top, weiß",
      sku: "SC128",
      date: "12.07.2022",
      stock: 110,
      price: "€39.99",
      margin: "3.70",
      returnRate: "34.83%",
      atc: "26.78%",
      cvr: "8.80%",
      purchases: 161,
      impressions: 1830,
      profitability: "100 - Highest",
      impressionScore: "68 - High",
      image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
      hasSubItems: true,
      isActive: true,
      subItems: [
        {
          name: "Spitzen-Bustier, weiß, S",
          sku: "SC126.1",
          date: "02.07.2022",
          stock: 130,
          price: "€24.99",
          margin: "3.12",
          returnRate: "17.47%",
          atc: "16.36%",
          cvr: "3.90%",
          purchases: 76,
          impressions: 1950,
          profitability: "69 - High",
          impressionScore: "73 - High",
              image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
        },
        {
          name: "Spitzen-Bustier, weiß, M",
          sku: "SC126.2",
          date: "02.07.2022",
          stock: 110,
          price: "€24.99",
          margin: "3.12",
          returnRate: "17.95%",
          atc: "20.92%",
          cvr: "6.15%",
          purchases: 120,
          impressions: 1950,
          profitability: "100 - Highest",
          impressionScore: "73 - High",
              image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
        },
        {
          name: "Spitzen-Bustier, weiß, L",
          sku: "SC126.3",
          date: "02.07.2022",
          stock: 70,
          price: "€24.99",
          margin: "3.12",
          returnRate: "20.86%",
          atc: "10.51%",
          cvr: "1.44%",
          purchases: 28,
          impressions: 1950,
          profitability: "20 - Very Low",
          impressionScore: "73 - High",
              image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
            },
          ],
    },
    // Add some inactive products
    {
      id: 6,
      name: "Vintage Denim Jacket, blue",
      sku: "SC129",
      date: "15.05.2022",
      stock: 0,
      price: "€59.99",
      margin: "4.20",
      returnRate: "45.20%",
      atc: "15.30%",
      cvr: "3.20%",
      purchases: 45,
      impressions: 1400,
      profitability: "25 - Low",
      impressionScore: "35 - Low",
      image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
      hasSubItems: false,
      isActive: false,
    },
    {
      id: 7,
      name: "Summer Dress, floral",
      sku: "SC130",
      date: "10.04.2022",
      stock: 0,
      price: "€39.99",
      margin: "3.80",
      returnRate: "52.10%",
      atc: "18.50%",
      cvr: "2.80%",
      purchases: 32,
      impressions: 1150,
      profitability: "15 - Very Low",
      impressionScore: "28 - Low",
      image: "/src/images/rio_2_movie_2-wallpaper-1366x768.jpg",
      hasSubItems: false,
      isActive: false,
    },
  ];

  // Show all products when inactive toggle is ON, otherwise show only active products
  const filteredData = showInactive ? data : data.filter(item => item.isActive);

  const renderRow = (item, index, isSubItem = false) => (
    <>
      <tr 
        key={item.id || index}
        className={`border-b border-gray-200 hover:bg-blue-50 ${isSubItem ? 'bg-gray-50' : ''}`}
      >
        {/* Chevron Column */}
        <td className="p-2 w-8">
            {!isSubItem && (
              <button 
                onClick={() => {
                  if (item.hasSubItems) {
                    toggleRowExpansion(index);
                  } else {
                    toggleKPIVisibility(index);
                  }
                }}
                className="text-gray-400 hover:text-blue-600 cursor-pointer"
                title={item.hasSubItems ? "Click to expand/collapse sub-items" : "Click to show/hide KPI"}
              >
                <i className={`fas fa-chevron-${
                  item.hasSubItems 
                    ? (expandedRows.has(index) ? 'up' : 'down')
                    : (showKPI.has(index) ? 'down' : 'up')
                }`}></i>
              </button>
            )}
        </td>
        
        {/* Status Column - Show both Active and Inactive status when toggle is ON */}
        {showInactive && (
          <td className="p-2 w-20">
            {!isSubItem && (
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                item.isActive ? 'bg-green-600 text-white' : 'bg-gray-400 text-white'
              }`}>
                {item.isActive ? 'Active' : 'Inactive'}
              </span>
            )}
          </td>
        )}
        
        {/* Image Column */}
        <td className="p-2 w-20">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-8 h-8 rounded object-cover"
            />
        </td>
        
        {/* Product Name Column */}
        <td className="p-2 w-48">
          <div>
            <div 
              className={`font-medium text-xs cursor-pointer hover:text-blue-600 ${isSubItem ? 'text-sm text-gray-600' : 'text-gray-900'}`}
              onClick={() => !isSubItem && handleProductClick(item)}
            >
              {item.name}
            </div>
            {!isSubItem && showKPI.has(index) && (
              <button 
                onClick={() => handleViewKPI(item)}
                className="text-blue-600 text-xs hover:underline cursor-pointer flex items-center space-x-1"
              >
               <i className="fas fa-chart-line"></i>
                <span>View KPI</span>
              </button>
            )}
            {!isSubItem && item.hasSubItems && expandedRows.has(index) && (
              <button 
                onClick={() => handleViewKPI(item)}
                className="text-blue-600 text-xs hover:underline cursor-pointer flex items-center space-x-1"
              >
               <i className="fas fa-chart-line"></i>
                <span>View KPI</span>
              </button>
            )}
          </div>
        </td>
        
        {/* Date Published Column */}
        <td className="p-2 w-24 text-gray-700 text-xs">{item.date}</td>
        
        {/* Stock Column */}
        <td className="p-2 w-16 text-gray-700 text-xs">{item.stock}</td>
        
        {/* Price Column */}
        <td className="p-2 w-20 text-gray-700 text-xs">{item.price}</td>
        
        {/* Margin Column */}
        <td className="p-2 w-16 text-gray-700 text-xs">{item.margin}</td>
        
        {/* Return Rate Column */}
        {/* <td className="p-4 text-gray-700">{item.returnRate}</td> */}
        
        {/* ATC Column */}
        <td className="p-2 w-16 text-gray-700 text-xs">{item.atc}</td>
        
        {/* CVR Column */}
        {/* <td className="p-4 text-gray-700">{item.cvr}</td> */}
        
        {/* Purchases Column */}
        <td className="p-2 w-20 text-gray-700 text-xs">{item.purchases}</td>
        
        {/* Impressions Column */}
        <td className="p-2 w-20 text-gray-700 text-xs">{item.impressions}</td>
        
        {/* 7 Day Profitability Score Column */}
        <td className="p-2 w-32 bg-blue-200 bg-opacity-50 hover:bg-blue-300 hover:bg-opacity-70">
          <div className="flex items-center space-x-1">
            <span className="text-gray-700 text-xs font-semibold">{item.profitability.split(' - ')[0]}</span>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getScoreCardStyle(item.profitability)}`}>
              {item.profitability.split(' - ')[1]}
            </span>
          </div>
        </td>
        
        {/* 7 Days Impression Score Column */}
        <td className="p-2 w-32 bg-blue-200 bg-opacity-50 hover:bg-blue-300 hover:bg-opacity-70">
          <div className="flex items-center space-x-1">
            <span className="text-gray-700 text-xs font-semibold">{item.impressionScore.split(' - ')[0]}</span>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getScoreCardStyle(item.impressionScore)}`}>
              {item.impressionScore.split(' - ')[1]}
            </span>
          </div>
        </td>
      </tr>
      {item.hasSubItems && expandedRows.has(index) && item.subItems?.map((subItem, subIndex) => 
        renderRow(subItem, `${index}-${subIndex}`, true)
      )}
    </>
  );

    return (
    <div className={`min-h-screen overflow-x-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
   

      {/* Table Controls */}
      <div className="bg-white p-3 mb-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <button 
                onClick={() => setShowInactive(!showInactive)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  showInactive ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    showInactive ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-gray-700">Show inactive products</span>
            </label>
          </div>
          
            <div className="flex items-center space-x-20">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-0 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">
                  <Icon icon="line-md:file-export" />
                  <span>EXPORT</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-0 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">
                  <Icon icon="akar-icons:filter" />
                  <span>FILTERS</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Select Timeframe:</span>
              <div className="flex border border-blue-700 rounded-sm">
                {["7 days", "30 days", "90 days", "Custom Date Range"].map((timeframe, index) => (
                  <div key={timeframe} className="flex">
                    <button
                      onClick={() => setSelectedTimeframe(timeframe)}
                      className={`px-3 py-1 text-sm text-blue-600 ${
                        selectedTimeframe === timeframe
                          ? 'bg-blue-700 text-white'
                          : 'hover:bg-blue-100'
                      }`}
                    >
                      {timeframe}
                    </button>
                    {index < ["7 days", "30 days", "90 days", "Custom Date Range"].length - 1 && (
                      <div className="border-l border-blue-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead className="border-b border-gray-300">
              {/* First row - Group headers */}
              <tr>
                <th rowSpan="2" className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-8">
                  <div className="flex items-center space-x-1">
                    <span></span>
                  </div>
                </th>
                {showInactive && (
                  <th rowSpan="2" className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-20">
                    <div className="flex items-center space-x-1">
                      <span>Status</span>
                      <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                    </div>
                  </th>
                )}
                <th rowSpan="2" className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-20">
                  <div className="flex items-center space-x-1">
                    <span>Image</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th rowSpan="2" className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-48">
                  <div className="flex items-center space-x-1">
                    <span>Product Name</span>
                    <i className="fas fa-info-circle text-blue-600 text-xs relative z-10"></i>
                  </div>
                </th>
                <th rowSpan="2" className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-24">
                  <div className="flex items-center space-x-1">
                    <span>Date Published</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th rowSpan="2" className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-16">
                  <div className="flex items-center space-x-1">
                    <span>Stock</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th rowSpan="2" className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-20">
                  <div className="flex items-center space-x-1">
                    <span>Price</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th rowSpan="2" className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-16">
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th colSpan="3" className="px-2 py-2 text-center text-sm font-bold text-black bg-gray-200">
                  7 Days Statistic
                </th>
                <th rowSpan="2" className="px-1 py-3 text-left text-xs font-medium text-gray-900 bg-blue-200 bg-opacity-50 w-32">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <span>7 Day Profitability Score</span>
                      <Icon icon="weui:setting-filled" className="relative z-10" /> 
                      <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                    </div>
                    <span className="text-xs text-gray-500">(Low 1 - High 100)</span>
                  </div>
                </th>
                <th rowSpan="2" className="px-0 py-3 text-left text-xs font-medium text-gray-900 bg-blue-200 bg-opacity-50 min-w-[160px] w-35">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <span>7 Days Impression Score</span>
                      <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                    </div>
                    <span className="text-xs text-gray-500">(Low 1 - High 100)</span>
                  </div>
                </th>
              </tr>
              {/* Second row - Individual column headers */}
              <tr>
                <th className="px-2 py-3 text-left text-xs font-medium text-black bg-gray-200 w-16">
                  <div className="flex items-center space-x-1">
                    <span>Rate</span>
                    <i className="fas fa-info-circle text-blue-600 text-xs relative z-10"></i>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-black bg-gray-200 w-20">
                  <div className="flex items-center space-x-1">
                    <span>Purchases</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-black bg-gray-200 w-20">
                  <div className="flex items-center space-x-1">
                  <i className="fas fa-info-circle text-blue-600 text-xs relative z-10"></i>
                    <span>Impressions</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => renderRow(item, index))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Details Modal */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" onClick={closeProductModal}>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 z-[9998]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          ></div>
          
          <div className="relative z-[9999] bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Product Details</h2>
              <button
                onClick={closeProductModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

          {/* Modal Content */}
          <div className="p-4 space-y-4">
              {/* Parameters Section */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Purchase Rate</span>
                    <span className="text-sm text-gray-900">60.00%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Add to Cart Rate</span>
                    <span className="text-sm text-gray-900">33.33%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Price</span>
                    <span className="text-sm text-gray-900">15.00%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Status</span>
                    <span className="text-sm text-gray-900">50.00%</span>
                  </div>
                </div>
              </div>

            {/* Table Section */}
            <div className="space-y-2">
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th rowSpan="2" className="px-3 py-2 text-left text-xs font-medium text-gray-900 border-b border-gray-200">Batch number</th>
                      <th colSpan="2" className="px-3 py-2 text-start text-xs font-bold text-gray-900">Quantity</th>
                      <th rowSpan="2" className="px-3 py-2 text-left text-xs font-medium text-gray-900 border-b border-gray-200">Expiring Date</th>
                    </tr>
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-900">Stock</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-900">Remaining</th>
                    </tr>
                  </thead>
                    <tbody>
                      {[
                        { batch: "0", stock: "100", remaining: "100", expiring: "0.00" },
                        { batch: "27", stock: "90", remaining: "10", expiring: "50.00" },
                        { batch: "54.8", stock: "80", remaining: "20", expiring: "60.00" },
                        { batch: "82.2", stock: "70", remaining: "30", expiring: "70.00" },
                        { batch: "109.6", stock: "60", remaining: "40", expiring: "80.00" },
                        { batch: "137", stock: "50", remaining: "50", expiring: "90.00" },
                        { batch: "164.4", stock: "40", remaining: "60", expiring: "100.00" },
                        { batch: "191.8", stock: "30", remaining: "70", expiring: "100.00" },
                        { batch: "219.2", stock: "20", remaining: "80", expiring: "100.00" },
                        { batch: "246.6", stock: "10", remaining: "90", expiring: "100.00" },
                        { batch: "274", stock: "0", remaining: "100", expiring: "100.00" }
                      ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="px-3 py-2 text-xs text-gray-900">{row.batch}</td>
                        <td className="px-3 py-2 text-xs text-gray-900">{row.stock}</td>
                        <td className="px-3 py-2 text-xs text-gray-900">{row.remaining}</td>
                        <td className="px-3 py-2 text-xs text-gray-900">{row.expiring}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end p-4 border-t border-gray-200 bg-gray-50 space-x-3">
              <button
                onClick={closeProductModal}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                CANCEL
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                APPLY CHANGES
              </button>
            </div>
          </div>
        </div>
      )}

      {/* KPI Analysis Modal */}
      {showKPIModal && selectedKPIProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" onClick={closeKPIModal}>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 z-[9998]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          ></div>
          
          <div className="relative z-[9999] bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img 
                  src={selectedKPIProduct.image} 
                  alt={selectedKPIProduct.name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Analysis</h2>
                  <p className="text-sm text-red-600">{selectedKPIProduct.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-3 py-1 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">
                  <i className="fas fa-redo"></i>
                  <span className="text-sm">SKU RETURNS HISTORY</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-1 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">
                  <i className="fas fa-calendar"></i>
                  <span className="text-sm">SELECT TIMEFRAME</span>
                </button>
                <button
                  onClick={closeKPIModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold ml-2"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Date Range */}
            <div className="px-4 py-2">
              <p className="text-sm text-gray-600 text-end">This Month: May 23, 2022 - May 29, 2022</p>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              {/* KPI Selection Checkboxes */}
              <div className="flex items-center space-x-6 mb-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4 border-2 border-red-500 rounded focus:ring-red-500 accent-red-600" />
                  <span className="text-xs font-medium text-gray-700">Impressions</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4 border-2 border-cyan-500 rounded focus:ring-cyan-500 accent-cyan-600" />
                  <span className="text-xs font-medium text-gray-700">Conversion rate</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4 border-2 border-green-500 rounded focus:ring-green-500 accent-green-600" />
                  <span className="text-xs font-medium text-gray-700">Add to cart rate</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4 border-2 border-blue-500 rounded focus:ring-blue-500 accent-blue-600" />
                  <span className="text-xs font-medium text-gray-700">Purchases</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 border-2 border-pink-500 rounded focus:ring-pink-500 accent-pink-600" />
                  <span className="text-xs font-medium text-gray-700">Price changes</span>
                </label>
              </div>

              {/* Graph Area */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="h-64 bg-white rounded border border-gray-200">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={kpiData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis 
                        dataKey="day" 
                        stroke="#6b7280"
                        fontSize={9}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="#6b7280"
                        fontSize={9}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          fontSize: '10px'
                        }}
                      />
                      <Legend 
                        wrapperStyle={{ fontSize: '10px' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="impressions" 
                        stroke="#ef4444" 
                        strokeWidth={2}
                        dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="conversionRate" 
                        stroke="#06b6d4" 
                        strokeWidth={2}
                        dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#06b6d4', strokeWidth: 2 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="addToCartRate" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="purchases" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="priceChanges" 
                        stroke="#ec4899" 
                        strokeWidth={2}
                        dot={{ fill: '#ec4899', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#ec4899', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Days of the Week Display */}
              <div className="flex items-center justify-center space-x-6 py-4">
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-700">Monday</p>
                  <p className="text-[10px] text-gray-500">29/05/22</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-700">Tuesday</p>
                  <p className="text-[10px] text-gray-500">29/05/22</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-700">Wednesday</p>
                  <p className="text-[10px] text-gray-500">29/05/22</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-700">Thursday</p>
                  <p className="text-[10px] text-gray-500">29/05/22</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-700">Friday</p>
                  <p className="text-[10px] text-gray-500">29/05/22</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-700">Saturday</p>
                  <p className="text-[10px] text-gray-500">29/05/22</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-700">Sunday</p>
                  <p className="text-[10px] text-gray-500">29/05/22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;

import React, { useMemo, useState } from 'react';

function CustomLabels() {
  const [labelValues, setLabelValues] = useState({});
  const [currentLabelName, setCurrentLabelName] = useState('Custom Label 1');

  const demoRows = useMemo(() => ([
    { id: 1, status: 'Active', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop', name: 'Sneaker in Blue with red laces (38, 40, 42)', sku: 'T15000, T15001, T15002' },
    { id: 2, status: 'Active', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop', name: 'Dress Red', sku: 'T12342' },
    { id: 3, status: 'Active', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop', name: 'Bra + Panties, Black', sku: 'T12343' },
    { id: 4, status: 'Active', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop', name: 'T-Shirt with print', sku: 'T12344' },
    { id: 5, status: 'Active', img: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=100&h=100&fit=crop', name: 'Sneaker Yellow', sku: 'T12345' },
    { id: 6, status: 'Active', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop', name: 'Sneaker Black', sku: 'T12346' },
    { id: 7, status: 'Active', img: 'https://images.unsplash.com/photo-1518558406231-1a2c23a0a0d4?w=100&h=100&fit=crop', name: 'Dress Pink', sku: 'T12347' },
    { id: 8, status: 'Active', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop', name: 'Sweatshirt Red', sku: 'T12348' },
    { id: 9, status: 'Active', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop', name: 'Sneaker in Blue with red laces (38, 40, 42)', sku: 'T15000, T15001, T15002' },
    { id:10, status: 'Active', img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=100&h=100&fit=crop', name: 'Dress Red', sku: 'T12342' },
    { id:11, status: 'Active', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop', name: 'Bra + Panties, Black', sku: 'T12343' },
    { id:12, status: 'Active', img: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=100&h=100&fit=crop', name: 'Sneaker Yellow', sku: 'T12345' },
    { id:13, status: 'Active', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop', name: 'Sneaker Black', sku: 'T12346' },
  ]), []);

  const quickOptions = ['Summer Sale', 'Most Wanted'];

  const setRowLabel = (rowId, value) => {
    setLabelValues(prev => ({ ...prev, [rowId]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dark Top Bar */}
      <div className=" text-white px-6 py-3 flex items-center justify-between">
        <h1 className="text-base font-medium text-black">Add Custom Labels to this specific catalogue</h1>
        <div className="flex items-center space-x-3">
          <select
            value={currentLabelName}
            onChange={(e)=>setCurrentLabelName(e.target.value)}
            className=" text-gray-600 rounded px-2 py-1 text-sm"
          >
            {['Custom Label 1','Custom Label 2','Custom Label 3','Custom Label 4','Custom Label 5'].map(n => (
              <option key={n} value={n} className="text-black">{n}</option>
            ))}
          </select>
          <button className="space-x-2 px-4 py-0 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">CANCEL</button>
          <button className="space-x-2 px-4 py-0 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100"><i className="fas fa-arrow-left mr-1"></i> BACK</button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold flex items-center">FINISH & GENERATE FEED <i className="fas fa-arrow-right ml-2"></i></button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white m-6 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-700">Status</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-700">Product Image (Default)</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-700">Product Name</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-700">SKU</th>
                <th className="px-0 py-0 text-left align-top">
                  <div className="w-full bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-gray-600 tracking-wide">{currentLabelName}</span>
                    <i className="fas fa-chevron-down text-[10px] text-gray-400"></i>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {demoRows.map((row) => {
                const val = labelValues[row.id] ?? '';
                return (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-3 py-2 whitespace-nowrap"><span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium bg-green-600 text-white">Active</span></td>
                    <td className="px-3 py-2 whitespace-nowrap"><img src={row.img} alt={row.name} className="w-10 h-10 rounded object-cover" /></td>
                    <td className="px-3 py-2 text-xs text-gray-900">{row.name}</td>
                    <td className="px-3 py-2 text-xs text-gray-700">{row.sku}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder={`Insert ${currentLabelName}`}
                          value={val}
                          onChange={(e)=>setRowLabel(row.id, e.target.value)}
                          className="flex-1 px-2 py-1 text-xs text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400"
                        />
                        {val && (
                          <button
                            onClick={()=>setRowLabel(row.id, '')}
                            className="text-gray-500 hover:text-gray-700 flex-shrink-0"
                            title="Clear"
                          >
                            <i className="fas fa-times text-xs"></i>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomLabels;


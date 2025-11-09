import React, { useMemo, useState } from 'react';
import { Icon } from '@iconify/react';

function EditFeed() {
  const rows = useMemo(() => ([
    { id: 1, status: 'Active', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop', name: 'Sneaker in Blue with red laces (38, 40, 42)', sku: 'T15000 , T15001 , T15002', l1: 'Summer Sale', l2: 'Red', l3: 'Male', l4: 'Summer Sale' },
    { id: 2, status: 'Active', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop', name: 'Dress Red', sku: 'T12342', l1: 'Most Wanted', l2: 'Blue', l3: 'Male', l4: 'Most Wanted' },
    { id: 3, status: 'Active', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop', name: 'Bra + Panties, Black', sku: 'T12343', l1: '', l2: '', l3: '', l4: '' },
    { id: 4, status: 'Active', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop', name: 'T-Shirt with print', sku: 'T12344', l1: '', l2: '', l3: '', l4: '' },
    { id: 5, status: 'Active', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop', name: 'Sneaker Black', sku: 'T12345', l1: 'Summer Sale', l2: 'Blue', l3: 'Female', l4: 'Summer Sale' },
  ]), []);

  const [data, setData] = useState(rows);

  const setCell = (id, key, value) => {
    setData(prev => prev.map(r => r.id === id ? { ...r, [key]: value } : r));
  };

  const renderLabelCell = (row, key, placeholder) => {
    const val = row[key] || '';
    return (
      <td className="px-3 py-2">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder={placeholder}
            value={val}
            onChange={(e)=>setCell(row.id, key, e.target.value)}
            className="flex-1 px-2 py-1 text-[10px] text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400"
          />
          {val && (
            <button
              onClick={() => setCell(row.id, key, '')}
              className="text-gray-500 hover:text-gray-700 flex-shrink-0"
              title="Clear"
            >
              <i className="fas fa-times text-xs"></i>
            </button>
          )}
        </div>
      </td>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="text-black px-6 py-4 flex items-center justify-between">
        <h1 className="text-xs font-semibold">Profit Dog - Lifestyle UGC June & Logo Frame</h1>
        <div className="flex items-center space-x-3">
          <button className="space-x-2 px-4 py-0 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100 text-xs">
            CHANGE FRAME
          </button>
          <button className="space-x-2 px-4 py-0 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100 text-xs">
            CANCEL
          </button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded text-[10px] font-semibold flex items-center">
            SAVE & APPLY CHANGES <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white m-6 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 py-3 text-left text-[10px] font-medium text-gray-700">
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-[10px] font-medium text-gray-700">
                  <div className="flex items-center space-x-2">
                    <span>Product Image (Current)</span>
                    {/* <i className="fas fa-times text-gray-400 text-xs"></i> */}
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-[10px] font-medium text-gray-700">
                  <div className="flex items-center space-x-2">
                    <span>Product Name</span>
                    {/* <i className="fas fa-times text-gray-400 text-xs"></i> */}
                    <i className="fas fa-info-circle text-blue-600 text-xs relative z-10"></i>
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-[10px] font-medium text-gray-700">
                  <div className="flex items-center space-x-1">
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                    <span>SKU</span>
                  </div>
                </th>
                <th className="px-0 py-0 text-left align-top">
                  <div className="w-full bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-gray-600 tracking-wide">Custom Label 1</span>
                    {/* <i className="fas fa-sort text-[10px] text-gray-400"></i> */}
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th className="px-0 py-0 text-left align-top">
                  <div className="w-full bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-gray-600 tracking-wide">Custom Label 2</span>
                    {/* <i className="fas fa-sort text-[10px] text-gray-400"></i> */}
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th className="px-0 py-0 text-left align-top">
                  <div className="w-full bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-gray-600 tracking-wide">Custom Label 3</span>
                    {/* <i className="fas fa-sort text-[10px] text-gray-400"></i> */}
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th className="px-0 py-0 text-left align-top">
                  <div className="w-full bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-gray-600 tracking-wide">Custom Label 4</span>
                    {/* <i className="fas fa-sort text-[10px] text-gray-400"></i> */}
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 whitespace-nowrap"><span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium bg-green-600 text-white">{row.status}</span></td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <img src={row.img} alt={row.name} className="w-12 h-12 rounded object-cover" />
                      {row.id === 1 ? (
                        <i className="fas fa-upload text-blue-600 text-xs cursor-pointer hover:text-blue-700"></i>
                      ) : (
                        <i className="fas fa-times text-gray-400 text-xs cursor-pointer hover:text-gray-600"></i>
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] text-gray-900">{row.name}</span>
                      <i className="fas fa-times text-gray-400 text-xs cursor-pointer hover:text-gray-600"></i>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-[10px] text-gray-700">{row.sku}</td>
                  {renderLabelCell(row, 'l1', 'Insert Custom Label')}
                  {renderLabelCell(row, 'l2', 'Insert Custom Label')}
                  {renderLabelCell(row, 'l3', 'Insert Custom Label')}
                  {renderLabelCell(row, 'l4', 'Insert Custom Label')}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EditFeed;



import React, { useMemo, useState } from 'react';
import { Icon } from '@iconify/react';

function Inventory() {
  const [tab, setTab] = useState('all'); // all | rising | declining
  const [tf, setTf] = useState('dod'); // dod | wow | mom
  const [showInactive, setShowInactive] = useState(false);

  const rows = useMemo(() => ([
    { id: 1, status: 'Active', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=80&h=80&fit=crop', name: 'Asymmetrisches Crop-Shirt, orange', sku: 'SC123', price: 0, atc: -13, cvr: -11, imp: -23, ps: -15, expanded: false },
    { id: 2, status: 'Inactive', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=80&h=80&fit=crop', name: 'Netz-Pullover, beige', sku: 'SC124', price: 0, atc: 12, cvr: 34, imp: 13, ps: 37, expanded: false },
    { id: 3, status: 'Active', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=80&h=80&fit=crop', name: 'Schulterfreies Smok Top, gelb', sku: 'SC125', price: -15, atc: 32, cvr: 18, imp: 42, ps: 19, expanded: false },
    { id: 4, status: 'Inactive', image: 'https://images.unsplash.com/photo-1520975682031-a5cb2a528b9f?w=80&h=80&fit=crop', name: 'Spitzen-Bustier, weiß', sku: 'SC126', price: 0, atc: -9, cvr: -4, imp: -7, ps: -2, expanded: false },
    { id: 5, status: 'Inactive', image: 'https://images.unsplash.com/photo-1542060748-10c28b62716b?w=80&h=80&fit=crop', name: 'Body aus Spitze, schwarz', sku: 'SC127', price: 20, atc: 5, cvr: 12, imp: 2, ps: 6, expanded: false },
  ]), []);

  const formatPct = (v, forceRed = false) => {
    const up = v >= 0;
    const icon = up ? '▲' : '▼';
    const color = forceRed ? 'text-red-600' : (up ? 'text-green-600' : 'text-red-600');
    return <span className={`${color}`}>{icon} {Math.abs(v)}%</span>;
  };

  const filtered = rows.filter(r => showInactive ? true : r.status === 'Active');

  const renderTable = (mode) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead className="border-b border-gray-300">
            <tr>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-8">
                <div className="flex items-center space-x-1">
                  <span></span>
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-20">
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-20">
                <div className="flex items-center space-x-1">
                  <span>Image</span>
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-48">
                <div className="flex items-center space-x-1">
                  <span>Product Name</span>
                  <i className="fas fa-info-circle text-blue-600 text-xs relative z-10"></i>
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-24">
                <div className="flex items-center space-x-1">
                  <span>SKU</span>
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-24">
                <div className="flex items-center space-x-1">
                  <span>{mode==='dod'?'Price DoD change':mode==='wow'?'Price WoW change':'Price MoM change'}</span>
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-24">
                <div className="flex items-center space-x-1">
                  <span>{mode==='dod'?'ATC DoD change':mode==='wow'?'ATC WoW change':'ATC MoM change'}</span>
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-24">
                <div className="flex items-center space-x-1">
                  <span>{mode==='dod'?'CVR DoD change':mode==='wow'?'CVR WoW change':'CVR MoM change'}</span>
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-24">
                <div className="flex items-center space-x-1">
                  <span>{mode==='dod'?'Impressions DoD change':mode==='wow'?'Impressions WoW change':'Impressions MoM change'}</span>
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                </div>
              </th>
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100 w-32">
                <div className="flex items-center space-x-1">
                  <span>{mode==='dod'?'Profitability Score DoD change':mode==='wow'?'Profitability Score WoW change':'Profitability Score MoM change'}</span>
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id} className="border-b border-gray-200 hover:bg-blue-50">
                <td className="p-2 w-8">
                  <i className={`fas fa-chevron-${r.expanded?'up':'down'} text-xs text-gray-400 hover:text-blue-600 cursor-pointer`}></i>
                </td>
                <td className="p-2 w-20">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium ${r.status==='Active'?'bg-green-600 text-white':'bg-gray-400 text-white'}`}>{r.status}</span>
                </td>
                <td className="p-2 w-20">
                  <img src={r.image} alt={r.name} className="w-8 h-8 rounded object-cover" />
                </td>
                <td className="p-2 w-48 text-xs text-gray-900">
                  <div className="flex items-center space-x-2">
                    <span>{r.name}</span>
                    {r.id===4 && (
                      <button className="text-blue-600 text-[11px] underline">View KPI</button>
                    )}
                  </div>
                </td>
                <td className="p-2 w-24 text-xs text-gray-700">{r.sku}</td>
                <td className="p-2 w-24 text-xs">{formatPct(r.price)}</td>
                <td className="p-2 w-24 text-xs">{formatPct(r.atc, tab === 'declining' && mode === 'mom')}</td>
                <td className="p-2 w-24 text-xs">{formatPct(r.cvr, tab === 'declining' && mode === 'mom')}</td>
                <td className="p-2 w-24 text-xs">{formatPct(r.imp)}</td>
                <td className="p-2 w-32 text-xs">{formatPct(r.ps)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end px-4 py-2 text-xs text-gray-500 border-t border-gray-200">1-5 of 13</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-6">
        {/* Tabs */}
        {/* <div className="flex items-center space-x-4 mb-4">
          <button onClick={()=>{setTab('all'); setTf('dod');}} className={`px-4 py-2 rounded-t border ${tab==='all'?'bg-white border-gray-300 shadow-sm':'bg-gray-100 border-transparent text-gray-600 hover:text-gray-900'}`}>All Inventory</button>
          <button onClick={()=>{setTab('rising'); setTf('wow');}} className={`px-4 py-2 rounded-t border ${tab==='rising'?'bg-white border-gray-300 shadow-sm':'bg-gray-100 border-transparent text-gray-600 hover:text-gray-900'}`}>Rising Stars</button>
          <button onClick={()=>{setTab('declining'); setTf('mom');}} className={`px-4 py-2 rounded-t border ${tab==='declining'?'bg-white border-gray-300 shadow-sm':'bg-gray-100 border-transparent text-gray-600 hover:text-gray-900'}`}>Heavy Decliners</button>
        </div> */}
        {/* Header Tabs */}
<div className="flex border-b border-gray-300 mb-4">
  {[
    { id: 'all', label: 'All Inventory', tf: 'dod' },
    { id: 'rising', label: 'Rising Stars', tf: 'wow' },
    { id: 'declining', label: 'Heavy Decliners', tf: 'mom' },
  ].map((item) => (
    <button
      key={item.id}
      onClick={() => { setTab(item.id); setTf(item.tf); }}
      className={`px-5 py-2 text-sm font-medium ${
        tab === item.id
          ? 'border border-gray-500 text-gray-800 bg-gray-100 bg-opacity-50'
          : 'text-gray-600 hover:text-gray-800 bg-gray-100 bg-opacity-30'
      }`}
    >
      {item.label}
    </button>
  ))}
</div>


        {/* Success banner */}
        <div className="mb-3 bg-green-100 text-green-900 border border-green-200 rounded px-4 py-3 flex items-center space-x-2">
          <i className="fas fa-check-circle"></i>
          <span className="text-sm">Timeframe has successfully been collected</span>
        </div>

        {/* Controls (match Product.jsx) */}
        <div className="bg-white p-3 mb-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-900">Inventory insight</h2>
            <p className="text-sm text-gray-600">Day over Day (DoD) Compares: <strong>22.08.2022</strong>
            to the previous day <strong>21.08.2022</strong></p>
          </div>
          <div className="flex items-center justify-between mb-4">
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
              <span className="text-gray-700 font-medium mr-2">Select Timeframe:</span>
              <div className="flex border border-blue-700 rounded-sm">
                {['Day over Day','Week over Week','Month over Month'].map((label, index) => (
                  <div key={label} className="flex">
                    <button
                      onClick={() => setTf(label==='Day over Day'?'dod':label==='Week over Week'?'wow':'mom')}
                      className={`px-3 py-1 text-sm text-blue-600 ${
                        (label==='Day over Day' && tf==='dod') || (label==='Week over Week' && tf==='wow') || (label==='Month over Month' && tf==='mom')
                          ? 'bg-blue-700 text-white'
                          : 'hover:bg-blue-100'
                      }`}
                    >
                      {label}
                    </button>
                    {index < 3 - 1 && (
                      <div className="border-l border-blue-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* Filters chip (Rising Stars) */}
        {tab==='rising' && (
          <div className="flex items-center space-x-2 mb-2">
            <div className="inline-flex items-center bg-gray-100 border border-gray-300 rounded px-3 py-1 text-xs text-gray-700">
              <span>7D Impression Score is equal to a number between 15 - 70</span>
              <i className="fas fa-chevron-down text-[10px] text-gray-500 ml-2"></i>
            </div>
          </div>
        )}

        {/* Tables per tab */}
        {tab==='all' && renderTable(tf)}
        {tab==='rising' && renderTable('wow')}
        {tab==='declining' && renderTable('mom')}
      </div>
    </div>
  );
}

export default Inventory;
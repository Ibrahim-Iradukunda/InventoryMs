import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FeedHistory() {
  const navigate = useNavigate();
  const [showUpgradeBanner, setShowUpgradeBanner] = useState(true);
  const rows = useMemo(() => ([
    {
      id: 1,
      name: 'Profit Dog - PDP Pictures (default)',
      frame: 'frame',
      url: 'https://social-cooks-rzrwk.ondigitalocean.app/feed?userId=6296e2e11aa827a105b987ad&shop=joy-band.myshopify.com',
      date: '3:13 PM - 18.06.2022'
    },
    {
      id: 2,
      name: 'Profit Dog - PDP Pictures & Sale Frame',
      frame: 'frame',
      url: 'https://social-cooks-rzrwk.ondigitalocean.app/feed?userId=6296e2e11aa827a105b987ad&shop=joy-band.myshopify.com',
      date: '3:18 PM - 18.06.2022'
    },
    {
      id: 3,
      name: 'Profit Dog - Lifestyle UGC June',
      frame: 'none',
      url: 'https://social-cooks-rzrwk.ondigitalocean.app/feed?userId=6296e2e11aa827a105b987ad&shop=joy-band.myshopify.com',
      date: '3:21 PM - 18.06.2022'
    },
    {
      id: 4,
      name: 'Profit Dog - Lifestyle UGC June & Logo Frame',
      frame: 'logo',
      url: 'https://social-cooks-rzrwk.ondigitalocean.app/feed?userId=6296e2e11aa827a105b987ad&shop=joy-band.myshopify.com',
      date: '3:28 PM - 18.06.2022'
    },
    {
      id: 5,
      name: 'Profit Dog - Lifestyle UGC June',
      frame: 'disabled',
      url: 'https://social-cooks-rzrwk.ondigitalocean.app/feed?userId=6296e2e11aa827a105b987ad&shop=joy-band.myshopify.com',
      date: '3:21 PM - 18.06.2022'
    }
  ]), []);

  const [selectedIds, setSelectedIds] = useState(new Set([4]));
  const allSelectableIds = rows.filter(r => r.frame !== 'disabled').map(r => r.id);
  const allSelected = allSelectableIds.every(id => selectedIds.has(id));

  const toggleAll = () => {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(allSelectableIds));
    }
  };

  const toggleOne = (id) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelectedIds(next);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header row with actions */}
      <div className="px-6 pt-4 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">Previously generated feeds</div>
        <div className="flex items-center space-x-3">
          <button className="space-x-2 px-4 py-0 border border-red-700 rounded-sm text-red-600 hover:bg-blue-100">DELETE SELECTED</button>
          <button
            onClick={() => {
              // For demo: navigate to edit page for the first selected feed
              if (selectedIds.size > 0) {
                const firstId = Array.from(selectedIds)[0];
                navigate('/EditFeed', { state: { feedId: firstId } });
              }
            }}
            className="space-x-2 px-3 py-0 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100"
          >
            SEE / EDIT FEED
          </button>
          <button className="px-3 py-2 bg-blue-700 text-white rounded text-xs font-semibold hover:bg-blue-600">UPGRADE TO MORE CATALOGUES</button>
        </div>
      </div>

      {/* Upgrade banner */}
      {showUpgradeBanner && (
        <div className="mx-6 mt-3 bg-amber-100 text-amber-900 border border-amber-200 rounded px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-info-circle"></i>
            <span className="text-sm">You can use 1 feed for free, and upgrade here to use purchase additional data feeds</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-xs font-semibold text-amber-900 underline">UPGRADE NOW</button>
            <button onClick={()=>setShowUpgradeBanner(false)} className="text-xl leading-none">×</button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm mx-6 mt-4 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-300">
              <tr>
                <th className="w-10 px-3 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100">
                  <input type="checkbox" checked={allSelected} onChange={toggleAll} className="w-4 h-4" />
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100">Catalogue/Feed Name</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100">Frame</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100">Catalogue/Feed URL</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-900 bg-gray-100">Date Created</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const disabled = r.frame === 'disabled';
                return (
                  <tr key={r.id} className={`border-b border-gray-200 hover:bg-blue-50 ${disabled ? 'opacity-40' : ''}`}>
                    <td className="w-10 px-3 py-3">
                      <input
                        type="checkbox"
                        disabled={disabled}
                        checked={selectedIds.has(r.id)}
                        onChange={()=>toggleOne(r.id)}
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="px-3 py-3 text-sm text-gray-900">{r.name}</td>
                    <td className="px-3 py-3">
                      {r.frame === 'none' ? (
                        <span className="text-xs text-gray-600">No Frame used</span>
                      ) : (
                        <div className="h-10 w-10 border-2 border-black rounded bg-white"></div>
                      )}
                    </td>
                    <td className="px-3 py-3 text-xs text-black break-words">
                      {r.url}
                    </td>
                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{r.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer (pagination hint) */}
        <div className="flex items-center justify-end px-4 py-2 text-xs text-gray-500 border-t border-gray-200">
          <span>1-5 of 13</span>
        </div>
      </div>
    </div>
  );
}

export default FeedHistory;

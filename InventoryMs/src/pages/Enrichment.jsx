import React, { useMemo, useState } from 'react';

function Enrichment() {
  // Controls state
  const [activeTab, setActiveTab] = useState('Price');
  const [position, setPosition] = useState('bl'); // tl, tr, bl, br
  const [opacityMode, setOpacityMode] = useState('solid'); // solid | transparent
  const [shape, setShape] = useState('rectangle'); // rectangle | pill | circle | triangle
  const [shapeColor, setShapeColor] = useState('#111827'); // default near-black
  const [textColor, setTextColor] = useState('#111827');

  // Demo items
  const items = useMemo(() => ([
    { id: 1, name: 'Watch', price: '€129.99', image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?w=900&q=80' },
    { id: 2, name: 'Headphones', price: '€44.99', image: 'https://images.unsplash.com/photo-1518443895914-7a2d5b21c07a?w=900&q=80' },
    { id: 3, name: 'Car', price: '€39.99', image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=900&q=80' },
    { id: 4, name: 'Sneaker', price: '€79.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80' },
  ]), []);

  const badgeStyles = useMemo(() => {
    const base = {
      color: opacityMode === 'transparent' ? textColor : '#FFFFFF',
      backgroundColor: opacityMode === 'transparent' ? 'rgba(0,0,0,0)' : shapeColor,
      border: opacityMode === 'transparent' ? `2px solid ${shapeColor}` : 'none',
    };
    const radius = shape === 'pill' ? '9999px' : shape === 'circle' ? '9999px' : '6px';
    return { ...base, borderRadius: radius };
  }, [opacityMode, shape, shapeColor, textColor]);

  const badgePosClass = useMemo(() => {
    switch (position) {
      case 'tl': return 'top-2 left-2';
      case 'tr': return 'top-2 right-2';
      case 'br': return 'bottom-2 right-2';
      default: return 'bottom-2 left-2';
    }
  }, [position]);

  const shapeSwatches = ['#FFFFFF', '#111827', '#1f2937', '#f59e0b', '#9333ea', '#7f1d1d'];
  const textSwatches = ['#3b82f6', '#111827'];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header */}
      <div className=" text-black px-6 py-4 flex items-center justify-between">
        <h1 className="text-base font-medium text-black">Add elements to enrich this catalogue</h1>
        <div className="flex items-center space-x-3">
          <button className="space-x-2 px-4 py-1.5 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">CANCEL</button>
          <button className="space-x-2 px-4 py-1.5 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100"><i className="fas fa-arrow-left mr-2"></i> BACK</button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold flex items-center">NEXT <i className="fas fa-arrow-right ml-2"></i></button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-12 gap-6">
        {/* Preview Grid */}
        <div className="col-span-7 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-900">Preview</h2>
            <div className="text-xs text-gray-600">1-4 of 13</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {items.map((it) => (
              <div key={it.id} className="relative rounded border-8 border-gray-400" style={{ boxShadow: 'inset 0 0 0 4px #000' }}>
                <img src={it.image} alt={it.name} className="w-full h-56 object-cover" />
                <div className={`absolute ${badgePosClass} px-2 py-1 text-xs font-semibold`} style={badgeStyles}>
                  {it.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="col-span-5 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-gray-900">Info</h3>
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center"><i className="fas fa-info text-white text-xs"></i></div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center space-x-2 mb-6">
            {['Price','Strikethrough Price','Currency discount','Percentage discount'].map(tab => (
              <button key={tab} onClick={()=>setActiveTab(tab)} className={`px-4 py-2 rounded border text-xs font-semibold ${activeTab===tab ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300'}`}>{tab}</button>
            ))}
          </div>

          {/* Position */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Position</h4>
            <div className="grid grid-cols-4 gap-3 w-40">
              {['tl','tr','bl','br'].map(pos => (
                <button key={pos} onClick={()=>setPosition(pos)} className={`h-10 w-10 border rounded relative ${position===pos ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-300'}`}>
                  <div className={`absolute h-3 w-3 bg-blue-600 ${pos==='tl'?'top-1 left-1':pos==='tr'?'top-1 right-1':pos==='bl'?'bottom-1 left-1':'bottom-1 right-1'}`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Opacity */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Opacity</h4>
            <div className="flex items-center space-x-4">
              <button onClick={()=>setOpacityMode('solid')} className={`h-12 w-16 border rounded ${opacityMode==='solid'?'border-blue-600 ring-2 ring-blue-200':'border-gray-300'}`}></button>
              <button onClick={()=>setOpacityMode('transparent')} className={`h-12 w-16 border rounded bg-[length:8px_8px] ${opacityMode==='transparent'?'border-blue-600 ring-2 ring-blue-200':'border-gray-300'}`} style={{ backgroundImage: 'linear-gradient(45deg, #e5e7eb 25%, transparent 25%), linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e7eb 75%), linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)', backgroundSize: '12px 12px', backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px' }}></button>
            </div>
            <div className="flex items-center space-x-8 mt-2 text-xs text-gray-600">
              <span>Solid</span>
              <span>Transparent</span>
            </div>
          </div>

          {/* Shape */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Shape</h4>
            <div className="flex items-center space-x-3">
              {[
                { key:'rectangle', className:'rounded-md' },
                { key:'pill', className:'rounded-full' },
                { key:'circle', className:'rounded-full' },
                { key:'triangle', className:'' },
              ].map(s => (
                <button key={s.key} onClick={()=>setShape(s.key)} className={`h-12 w-16 border flex items-center justify-center ${shape===s.key?'border-blue-600 ring-2 ring-blue-200':'border-gray-300'}`}>
                  {s.key !== 'triangle' ? (
                    <div className={`h-6 w-10 bg-gray-300 ${s.className}`}></div>
                  ) : (
                    <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-8 border-b-gray-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Shape Color */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Shape Color</h4>
            <p className="text-xs text-gray-600 mb-2">Select a color for the shape of your overlay that will be applied to every image.</p>
            <div className="flex items-center space-x-3">
              {shapeSwatches.map(col => (
                <button key={col} onClick={()=>setShapeColor(col)} className={`h-8 w-8 rounded-full border ${shapeColor===col?'ring-2 ring-blue-500 border-blue-600':'border-gray-300'}`} style={{ backgroundColor: col }}></button>
              ))}
            </div>
          </div>

          {/* Text Color */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">Text Color</h4>
            <p className="text-xs text-gray-600 mb-2">Select a color for the text of your overlay that will be applied to every image.</p>
            <div className="flex items-center space-x-3">
              {textSwatches.map(col => (
                <button key={col} onClick={()=>setTextColor(col)} className={`h-8 w-8 rounded-full border ${textColor===col?'ring-2 ring-blue-500 border-blue-600':'border-gray-300'}`} style={{ backgroundColor: col }}></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrichment;

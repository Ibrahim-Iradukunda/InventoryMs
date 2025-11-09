import React, { useState, useRef } from 'react';

// Inline Frame Editor shown after a successful upload
function FrameEditor({ onBack }) {
  const [activeTab, setActiveTab] = useState('Frame');
  const [frameThickness, setFrameThickness] = useState(5);
  const [frameColor, setFrameColor] = useState({ hex: '#4F46E5', hue: 240, saturation: 100, lightness: 50, opacity: 100 });
  const [textColor, setTextColor] = useState('#374151');
  const [textValue, setTextValue] = useState('');
  const [fontFamily, setFontFamily] = useState('Roboto');
  const [logoFile, setLogoFile] = useState(null);
  const [logoOption, setLogoOption] = useState('Mirror'); // Fit | Mirror | Rotate
  const [logoCount, setLogoCount] = useState(4);
  const colorPickerRef = useRef(null);
  const textColorPickerRef = useRef(null);
  const logoInputRef = useRef(null);

  const hslToHex = (h, s, l) => {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;
    if (s === 0) { r = g = b = l; }
    else {
      const hue2rgb = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q - p) * 6 * t; if (t < 1/2) return q; if (t < 2/3) return p + (q - p) * (2/3 - t) * 6; return p; };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s; const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1/3);
    }
    const toHex = (x) => { const hex = Math.round(x * 255).toString(16); return hex.length === 1 ? '0' + hex : hex; };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const handleColorPickerClick = (e) => {
    if (!colorPickerRef.current) return;
    const rect = colorPickerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const saturation = (x / rect.width) * 100; const lightness = 100 - (y / rect.height) * 100;
    const newHex = hslToHex(frameColor.hue, saturation, lightness);
    setFrameColor(prev => ({ ...prev, hex: newHex, saturation, lightness }));
  };

  const frameSize = 400 - (frameThickness * 2);
  const frameStyle = { width: `${frameSize}px`, height: `${frameSize}px`, border: `${frameThickness}px solid ${frameColor.hex}`, opacity: frameColor.opacity / 100 };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className="space-x-2 px-4 py-1.5 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">
              <i className="fas fa-arrow-left mr-2"></i> BACK
            </button>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-gray-900">Frame editor</h1>
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <i className="fas fa-info text-white text-xs"></i>
              </div>
            </div>
          </div>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded text-sm font-semibold flex items-center">
            <i className="fas fa-undo mr-2"></i> RESET TO DEFAULT
          </button>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex space-x-1">
          <button onClick={() => setActiveTab('Frame')} className={`px-4 py-3 flex items-center space-x-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'Frame' ? 'border-blue-600 text-white bg-blue-700' : 'border-transparent text-gray-600 hover:text-gray-900'}`}>
            <i className="fas fa-hashtag"></i><span>Frame</span>
          </button>
          <button onClick={() => setActiveTab('Text')} className={`px-4 py-3 flex items-center space-x-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'Text' ? 'border-blue-600 text-white bg-blue-700' : 'border-transparent text-gray-600 hover:text-gray-900'}`}>
            <span className="font-bold">T</span><span>Text</span>
          </button>
          <button onClick={() => setActiveTab('Upload Logo')} className={`px-4 py-3 flex items-center space-x-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'Upload Logo' ? 'border-blue-600 text-white bg-blue-700' : 'border-transparent text-gray-600 hover:text-gray-900'}`}>
            <i className="fas fa-cloud-upload-alt"></i><span>Upload Logo</span>
          </button>
        </div>
      </div>

      <div className="flex p-6 gap-6">
        <div className="flex-1 bg-white rounded-lg shadow-sm p-8">
          <div className="bg-gray-100 rounded-lg h-[500px] flex items-center justify-center relative">
            <div style={frameStyle} className="bg-white rounded relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {activeTab === 'Frame' && (
                  <p className="text-gray-700 text-sm">Drag any side to adjust frame thickness</p>
                )}
                {activeTab === 'Text' && (
                  <div className="text-center">
                    <i className="fas fa-heading text-3xl text-gray-400"></i>
                    <p className="mt-2 text-gray-700 text-sm">Click on any side of the frame to add your text</p>
                  </div>
                )}
                {activeTab === 'Upload Logo' && (
                  <div className="text-center text-gray-600">
                    <i className="fas fa-cloud-upload-alt text-3xl text-gray-400"></i>
                    <p className="mt-2 text-gray-700 text-sm">Drag & drop files or in the upload section to get started</p>
                  </div>
                )}
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-ns-resize"><i className="fas fa-arrows-alt-v text-gray-400 text-lg"></i></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-1/2 cursor-ns-resize"><i className="fas fa-arrows-alt-v text-gray-400 text-lg"></i></div>
              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-ew-resize"><i className="fas fa-arrows-alt-h text-gray-400 text-lg"></i></div>
              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-ew-resize"><i className="fas fa-arrows-alt-h text-gray-400 text-lg"></i></div>
            </div>
          </div>
        </div>
        <div className="w-80 bg-white rounded-lg shadow-sm p-6 space-y-6">
          {activeTab === 'Frame' && (
            <>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Frame thickness</h3>
                <p className="text-xs text-gray-600 mb-4">Adjust your frame thickness</p>
                <div className="relative">
                  <input type="range" min="1" max="50" value={frameThickness} onChange={(e)=>setFrameThickness(parseInt(e.target.value))} className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer" style={{background:`linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(frameThickness/50)*100}%, #dbeafe ${(frameThickness/50)*100}%, #dbeafe 100%)`}} />
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full" style={{left:`calc(${(frameThickness/50)*100}% - 8px)`}}></div>
                </div>
                <p className="text-sm font-medium text-gray-900 mt-2">{frameThickness}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Frame Color</h3>
                <p className="text-xs text-gray-600 mb-4">Adjust color of the Frame lines</p>
              <div className="mb-4">
                <div ref={colorPickerRef} onClick={handleColorPickerClick} className="w-full h-48 rounded-lg cursor-crosshair relative overflow-hidden" style={{background:`linear-gradient(to bottom, hsl(${frameColor.hue},100%,50%) 0%, hsl(${frameColor.hue},100%,0%) 100%), linear-gradient(to right, white 0%, hsl(${frameColor.hue},100%,50%) 100%)`}}>
                  <div className="absolute w-3 h-3 bg-white rounded-full border-2 border-gray-800 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{left:`${frameColor.saturation}%`, top:`${100-frameColor.lightness}%`}}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative h-4 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 rounded-lg" style={{background:'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'}}></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full border border-gray-300 pointer-events-none" style={{left:`calc(${(frameColor.hue/360)*100}% - 6px)`}}></div>
                  <input type="range" min="0" max="360" value={frameColor.hue} onChange={(e)=>setFrameColor(prev=>({...prev,hue:parseInt(e.target.value),hex:hslToHex(parseInt(e.target.value), prev.saturation, prev.lightness)}))} className="w-full h-4 appearance-none cursor-pointer opacity-0 z-10 relative" />
                </div>
              </div>
              <div className="mb-4">
                <div className="relative h-4 rounded-lg overflow-hidden">
                  <div className="absolute inset-0" style={{backgroundImage:'repeating-linear-gradient(45deg, #e5e7eb 0px, #e5e7eb 8px, transparent 8px, transparent 16px)'}}></div>
                  <div className="absolute inset-0" style={{background:`linear-gradient(to right, transparent 0%, ${frameColor.hex} 100%)`}}></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full border border-gray-300 pointer-events-none z-20" style={{left:`calc(${frameColor.opacity}% - 6px)`}}></div>
                  <input type="range" min="0" max="100" value={frameColor.opacity} onChange={(e)=>setFrameColor(prev=>({...prev,opacity:parseInt(e.target.value)}))} className="w-full h-4 appearance-none cursor-pointer opacity-0 z-10 relative" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div><label className="text-xs text-gray-600 mb-1 block">Hex</label><input type="text" value={frameColor.hex} onChange={(e)=>setFrameColor(prev=>({...prev,hex:e.target.value}))} className="w-full px-2 py-1 text-xs border border-gray-300 rounded" /></div>
                <div><label className="text-xs text-gray-600 mb-1 block">&nbsp;</label><input type="text" value={frameColor.hex} readOnly className="w-full px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50" /></div>
                <div><label className="text-xs text-gray-600 mb-1 block">&nbsp;</label><input type="text" value={`${frameColor.opacity}%`} readOnly className="w-full px-2 py-1 text-xs border border-gray-300 rounded bg-gray-50" /></div>
              </div>
              </div>
            </>
          )}

          {activeTab === 'Text' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Text editor</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-2 bg-white">
                    <select value={fontFamily} onChange={(e)=>setFontFamily(e.target.value)} className="text-xs border border-gray-200 rounded px-2 py-1">
                      <option>Roboto</option>
                      <option>Inter</option>
                      <option>Open Sans</option>
                    </select>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <i className="fas fa-arrows-alt-h"></i>
                      <button className="font-bold text-xs">B</button>
                      <button className="italic text-xs">i</button>
                      <button className="underline text-xs">U</button>
                      <i className="fas fa-align-left"></i>
                      <i className="fas fa-align-center"></i>
                      <i className="fas fa-align-right"></i>
                      <i className="fas fa-align-justify"></i>
                    </div>
                  </div>
                  <textarea value={textValue} onChange={(e)=>setTextValue(e.target.value)} placeholder="Write your text here..." className="w-full h-24 text-xs px-3 py-2 border-t border-gray-200 outline-none" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Text Color</h3>
                <p className="text-xs text-gray-600 mb-2">Adjust color of text</p>
                <div className="mb-2">
                  <div ref={textColorPickerRef} className="w-full h-40 rounded-lg overflow-hidden" style={{background:'linear-gradient(to top, black, transparent), linear-gradient(to right, white, #4F46E5)'}}></div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-600">Hex</span>
                  <input value={textColor} onChange={(e)=>setTextColor(e.target.value)} className="flex-1 text-xs border border-gray-300 rounded px-2 py-1" />
                  <input value={'100%'} readOnly className="w-16 text-xs border border-gray-300 rounded px-2 py-1 bg-gray-50" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Upload Logo' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Upload logo</h3>
                <div className="border-2 border-dashed border-blue-200 rounded-lg p-6 text-center bg-blue-50">
                  <i className="fas fa-cloud-upload-alt text-3xl text-blue-500"></i>
                  <p className="text-sm text-gray-700 mt-2">Drag & drop files or <button onClick={()=>logoInputRef.current?.click()} className="text-blue-600 underline font-semibold">Browse</button></p>
                  <p className="text-xs text-gray-500 mt-1">Supported format: JPG/PNG</p>
                  <p className="text-xs text-gray-500">Aspect ratio: 1:1</p>
                  <p className="text-xs text-gray-500">Pixel: 1080 x 1080</p>
                  <input ref={logoInputRef} type="file" accept="image/*" className="hidden" onChange={(e)=>setLogoFile(e.target.files?.[0] || null)} />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Additional options</h3>
                <p className="text-xs text-gray-600 mb-3">It enables users to choose more options with their image after its upload.</p>
                <div className="flex items-center space-x-2">
                  {['Fit','Mirror','Rotate'].map(opt => (
                    <button key={opt} onClick={()=>setLogoOption(opt)} className={`px-3 py-2 rounded border text-sm ${logoOption===opt ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300'}`}>{opt}</button>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-700 mb-2">Number of logo displays per side</p>
                  <div className="relative">
                    <input type="range" min="1" max="10" value={logoCount} onChange={(e)=>setLogoCount(parseInt(e.target.value))} className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer" style={{background:`linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(logoCount/10)*100}%, #dbeafe ${(logoCount/10)*100}%, #dbeafe 100%)`}} />
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-sm text-gray-900">{logoCount}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CustomFrames() {
  const [showEditor, setShowEditor] = useState(false);
  const [showCreateDropdown, setShowCreateDropdown] = useState(false);
  const [selectedFrameSize, setSelectedFrameSize] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const frameSizes = [
    '1080 x 1080 pixel using 1:1 aspect ratio',
    '1350 x 1080 pixel using 5:4 aspect ratio',
    '1200 x 630 pixel using 1.91:1 aspect ratio'
  ];

  const handleCreateSelect = (size) => {
    setSelectedFrameSize(size);
    setShowCreateDropdown(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileSelect = (file) => {
    // Validate file type
    if (file.type === 'image/png') {
      setUploadedFile({
        name: file.name,
        size: file.size,
        file: file,
        preview: URL.createObjectURL(file)
      });
    } else {
      alert('Please upload a PNG file only.');
    }
  };

  const handleUploadFrame = () => {
    if (!uploadedFile) {
      alert('Please select a file to upload.');
      return;
    }
    if (!selectedFrameSize) {
      alert('Please select a frame size from the CREATE dropdown.');
      return;
    }
    // After successful upload, show the editor view
    setShowEditor(true);
  };

  if (showEditor) {
    return <FrameEditor onBack={() => setShowEditor(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dark Header */}
      <div className=" text-black px-6 py-4 flex items-center justify-between">
        <h1 className="text-base font-medium text-black">Adjust any product pictures for this specific catalog</h1>
        <div className="flex items-center space-x-3">
          <button className="space-x-2 px-4 py-1.5 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">
            CANCEL
          </button>
          <button className="space-x-2 px-4 py-1.5 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">
            <i className="fas fa-arrow-left mr-2"></i> BACK
          </button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold flex items-center">
            NEXT <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-gray-900">Upload Frame for this Catalogue</h2>
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
              <i className="fas fa-info text-white text-xs"></i>
            </div>
          </div>
          
          {/* CREATE Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCreateDropdown(!showCreateDropdown)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold flex items-center space-x-2"
            >
              <i className="fas fa-plus"></i>
              <span>CREATE</span>
              <i className={`fas fa-chevron-down transition-transform ${showCreateDropdown ? 'rotate-180' : ''}`}></i>
            </button>
            
            {/* Dropdown Menu */}
            {showCreateDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowCreateDropdown(false)}
                ></div>
                <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  <div className="py-2">
                    {frameSizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => handleCreateSelect(size)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          selectedFrameSize === size ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div
            className={`border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-12 transition-colors ${
              isDragging 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-blue-300 bg-white'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <i className="fas fa-cloud-upload-alt text-5xl text-blue-400 mb-4"></i>
            <p className="text-sm text-gray-700 text-center mb-2">
              Drag & drop files or{' '}
              <button
                onClick={handleBrowseClick}
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                Browse
              </button>
            </p>
            <div className="text-xs text-gray-500 text-center space-y-1 mt-4">
              <p>Supported format: PNG</p>
              <p>Aspect ratio: 1:1</p>
              <p>Pixel: 1080 x 1080</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png"
              onChange={handleFileInputChange}
              className="hidden"
            />
          </div>

          {/* Upload Frame Button */}
          <button
            onClick={handleUploadFrame}
            className="w-full mt-8 space-x-2 px-4 py-2 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100 text-sm font-semibold"
          >
            UPLOAD FRAME
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomFrames;

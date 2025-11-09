import React, { useState, useRef } from 'react';
import { Icon } from "@iconify/react";
function CustomImage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: 'SC123_12345678001.jpg',
      size: '431KB',
      status: 'success',
      thumbnail: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: '12345678001_SC124.png',
      size: '314KB',
      status: 'success',
      thumbnail: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'SC125_12345678001.jpg',
      size: '431KB',
      status: 'uploading',
      progress: 60,
      thumbnail: null
    },
    {
      id: 4,
      name: 'SC126_12345678001.png',
      size: '431KB',
      status: 'uploading',
      progress: 45,
      thumbnail: null
    },
    {
      id: 5,
      name: '12345678001.png',
      size: '431KB',
      status: 'failed',
      error: 'Upload failed: Title missing Variant ID',
      thumbnail: null
    },
    {
      id: 6,
      name: '12345678001_SC127.jpg',
      size: '431KB',
      status: 'uploading',
      progress: 30,
      thumbnail: null
    }
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [toasts, setToasts] = useState([]);
  const [customImageLinks, setCustomImageLinks] = useState({
    0: 'www.dropbox.com/12345c678001',
    1: 'www.dropbox.com/12345678001',
    2: '',
    3: '',
    4: 'www.dropbox.com/12345678001',
    5: 'www.dropbox.com/12345678001',
    6: '12345678001.jpg',
    7: '12345678001.jpg',
    8: '12345678001.jpg',
    9: '',
    10: '',
    11: '',
    12: '12345678001.jpg'
  });

  const handleClearLink = (index) => {
    setCustomImageLinks(prev => ({
      ...prev,
      [index]: ''
    }));
  };

  const handleLinkChange = (index, value) => {
    setCustomImageLinks(prev => ({
      ...prev,
      [index]: value
    }));
  };

  const handleUploadClick = () => {
    setShowUploadModal(true);
  };

  const handleCloseModal = () => {
    setShowUploadModal(false);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + 'B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + 'KB';
    return (bytes / (1024 * 1024)).toFixed(2) + 'MB';
  };

  const handleFileSelect = (files) => {
    const newFiles = Array.from(files).map((file, index) => {
      const fileId = Date.now() + index;
      const fileName = file.name;
      
      // Check if filename matches pattern (for validation)
      const hasVariantId = fileName.includes('_') || fileName.match(/SC\d+/);
      
      return {
        id: fileId,
        name: fileName,
        size: formatFileSize(file.size),
        status: hasVariantId ? 'uploading' : 'failed',
        progress: hasVariantId ? 0 : null,
        error: hasVariantId ? null : 'Upload failed: Title missing Variant ID',
        thumbnail: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
        file: file
      };
    });
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    // Simulate upload progress for valid files
    newFiles.forEach(file => {
      if (file.status === 'uploading') {
        simulateUpload(file.id);
      }
    });
  };

  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        setUploadedFiles(prev => prev.map(f => 
          f.id === fileId 
            ? { ...f, status: 'success', progress: 100 }
            : f
        ));
        clearInterval(interval);
      } else {
        setUploadedFiles(prev => prev.map(f => 
          f.id === fileId ? { ...f, progress: Math.min(progress, 99) } : f
        ));
      }
    }, 300);
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
      handleFileSelect(files);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files);
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const handleCancelUpload = (fileId) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const showToast = (type, message) => {
    const toastId = Date.now();
    const newToast = {
      id: toastId,
      type, // 'success' or 'error'
      message
    };
    setToasts(prev => [...prev, newToast]);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      dismissToast(toastId);
    }, 5000);
  };

  const dismissToast = (toastId) => {
    setToasts(prev => prev.filter(toast => toast.id !== toastId));
  };

  const handleContinue = () => {
    // Check upload results
    const successfulFiles = uploadedFiles.filter(f => f.status === 'success');
    const failedFiles = uploadedFiles.filter(f => f.status === 'failed');
    const uploadingFiles = uploadedFiles.filter(f => f.status === 'uploading');
    
    // If there are still files uploading, don't proceed
    if (uploadingFiles.length > 0) {
      return;
    }
    
    // Show appropriate toast based on results
    if (failedFiles.length > 0 && successfulFiles.length === 0) {
      // All failed
      showToast('error', 'Bulk Upload failed.');
    } else if (successfulFiles.length > 0 && failedFiles.length === 0) {
      // All succeeded
      showToast('success', 'Bulk Upload completed.');
    } else if (successfulFiles.length > 0 && failedFiles.length > 0) {
      // Mixed results - show success if majority succeeded
      if (successfulFiles.length >= failedFiles.length) {
        showToast('success', 'Bulk Upload completed.');
      } else {
        showToast('error', 'Bulk Upload failed.');
      }
    }
    
    // Process successful uploads and update the custom image links
    // You can add logic here to update the customImageLinks state
    setShowUploadModal(false);
  };

  // Sample data based on the image description
  const products = [
    {
      id: 1,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Sneaker in Blue with red laces (38, 40, 42)',
      sku: 'T15000, T15001, T15002',
      customImage: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Dress Red',
      sku: 'T12342',
      customImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Bra + Panties, Black',
      sku: 'T12343',
      customImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'T-Shirt with print',
      sku: 'T12344',
      customImage: 'https://images.unsplash.com/photo-1515446815652-5a5c6c6b1b4b?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Sneaker Yellow',
      sku: 'T12345',
      customImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop'
    },
    {
      id: 6,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Sneaker Black',
      sku: 'T12346',
      customImage: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=100&h=100&fit=crop'
    },
    {
      id: 7,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Dress Pink',
      sku: 'T12347',
      customImage: 'https://images.unsplash.com/photo-1518558406231-1a2c23a0a0d4?w=100&h=100&fit=crop'
    },
    {
      id: 8,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Sweatshirt Red',
      sku: 'T12348',
      customImage: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=100&h=100&fit=crop'
    },
    {
      id: 9,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Sneaker in Blue with red laces (38, 40, 42)',
      sku: 'T15000, T15001, T15002',
      customImage: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=100&h=100&fit=crop'
    },
    {
      id: 10,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Dress Red',
      sku: 'T12342',
      customImage: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=100&h=100&fit=crop'
    },
    {
      id: 11,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Bra + Panties, Black',
      sku: 'T12343',
      customImage: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=100&h=100&fit=crop'
    },
    {
      id: 12,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Sneaker Yellow',
      sku: 'T12345',
      customImage: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop'
    },
    {
      id: 13,
      status: 'Active',
      productImage: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop',
      shopifyLink: 'www.dropbox.com/12345678',
      productName: 'Sneaker Black',
      sku: 'T12346',
      customImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=100&h=100&fit=crop'
    }
  ];

  const totalItems = products.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className=" text-black px-6 py-4 flex items-center justify-between">
        <h1 className="text-sm font-semibold">Adjust any product pictures for this specific catalog</h1>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleUploadClick}
            className=" space-x-2 px-4 py-0 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100"
          >
            BULK UPLOAD
          </button>
          <button className="space-x-2 px-4 py-0 border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-100">
            CANCEL
          </button>
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded text-xs font-semibold flex items-center">
            NEXT <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>

      {/* Toast Notifications */}
      <div className="mx-6 mt-4 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-sm ${
              toast.type === 'success'
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}
          >
            <div
              className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {toast.type === 'success' ? (
                <i className="fas fa-check text-white text-xs"></i>
              ) : (
                <i className="fas fa-exclamation text-white text-xs"></i>
              )}
            </div>
            <span
              className={`flex-1 text-xs font-medium ${
                toast.type === 'success' ? 'text-green-700' : 'text-red-700'
              }`}
            >
              {toast.message}
            </span>
            <button
              onClick={() => dismissToast(toast.id)}
              className={`flex-shrink-0 text-sm font-semibold leading-none ${
                toast.type === 'success' ? 'text-green-500 hover:text-green-700' : 'text-red-500 hover:text-red-700'
              }`}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Table Container */}
      <div className="bg-white mx-6 my-4 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-800">
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-800">
                  <div className="flex items-center space-x-1">
                    <span>Product Image (Default)</span>
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-800">
                  <div className="flex items-center space-x-1">
                    <span>Link to Product Image (Shopify)</span>
                    {/* <i className="fas fa-chevron-down text-[10px] text-gray-500"></i> */}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-800">
                  <div className="flex items-center space-x-1">
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                    <span>Product Name</span>
                    <i className="fas fa-info-circle text-blue-600 text-[10px]"></i>
                    {/* <i className="fas fa-chevron-down text-[10px] text-gray-500"></i> */}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-800">
                  <div className="flex items-center space-x-1">
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                    <span>SKU</span>
                    {/* <i className="fas fa-chevron-down text-[10px] text-gray-500"></i> */}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-800">
                  <div className="flex items-center space-x-1">
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                    <span>Custom Image (Catalog)</span>
                    {/* <i className="fas fa-chevron-down text-[10px] text-gray-500"></i> */}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-800">
                  <div className="flex items-center space-x-1">
                  <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                    <span>Link to custom image (CDN)</span>
                    {/* <i className="fas fa-chevron-down text-[10px] text-gray-500"></i> */}
                    <Icon icon="mdi-light:arrow-down" className="relative z-10" /> 
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentProducts.map((product, index) => {
                const globalIndex = startIndex + index;
                const customLink = customImageLinks[globalIndex] || '';
                const hasLink = customLink.trim() !== '';

                return (
                  <tr key={product.id} className="hover:bg-gray-50">
                    {/* Status */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium bg-green-600 text-white">
                        {product.status}
                      </span>
                    </td>

                    {/* Product Image (Default) */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <img 
                        src={product.productImage} 
                        alt={product.productName}
                        className="w-14 h-14 object-cover rounded"
                      />
                    </td>

                    {/* Link to Product Image (Shopify) */}
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={product.shopifyLink}
                        readOnly
                        className="w-full px-2 py-1.5 text-[10px] border border-gray-300 rounded bg-white text-gray-700"
                      />
                    </td>

                    {/* Product Name */}
                    <td className="px-4 py-3 text-[10px] text-gray-900">
                      {product.productName}
                    </td>

                    {/* SKU */}
                    <td className="px-4 py-3 text-[10px] text-gray-700">
                      {product.sku}
                    </td>

                    {/* Custom Image (Catalog) */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <img 
                        src={product.customImage} 
                        alt={`Custom ${product.productName}`}
                        className="w-14 h-14 object-cover rounded"
                      />
                    </td>

                    {/* Link to custom image (CDN) */}
                    <td className="px-4 py-3">
                      {hasLink ? (
                        <div className="flex items-center space-x-1">
                          <input
                            type="text"
                            value={customLink}
                            onChange={(e) => handleLinkChange(globalIndex, e.target.value)}
                            className="flex-1 px-2 py-1.5 text-[10px] border border-gray-300 rounded bg-white text-gray-700"
                          />
                          <button
                            onClick={() => handleClearLink(globalIndex)}
                            className="text-black hover:text-gray-700 cursor-pointer ml-1"
                            title="Clear link"
                          >
                            <i className="fas fa-times text-xs"></i>
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 border border-gray-300 rounded px-2 py-1.5 bg-gray-50 w-full">
                          <input
                            type="text"
                            placeholder="Insert Link or upload local file"
                            value={customLink}
                            onChange={(e) => handleLinkChange(globalIndex, e.target.value)}
                            className="flex-1 text-[10px] text-gray-500 bg-transparent border-none outline-none placeholder-gray-400"
                          />
                          <button
                            onClick={handleUploadClick}
                            className="text-blue-600 hover:text-blue-700 cursor-pointer"
                          >
                            <i className="fas fa-upload text-[10px]"></i>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-end">
          <span className="text-[10px] text-gray-700">
            {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
          </span>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" onClick={handleCloseModal}>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 z-[9998]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          ></div>
          
          <div 
            className="relative z-[9999] bg-white rounded-lg shadow-xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-900">Upload multiple images at once</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Left Section - Drag & Drop */}
              <div className="w-1/2 border-r border-gray-200 p-6 flex flex-col">
                <div
                  className={`flex-1 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-8 transition-colors ${
                    isDragging 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-300 bg-gray-50'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <i className="fas fa-cloud-upload-alt text-5xl text-blue-500 mb-4"></i>
                  <p className="text-xs text-gray-700 text-center mb-2">
                    Drag & drop multiple files, folder or{' '}
                    <button
                      onClick={handleBrowseClick}
                      className="text-blue-600 hover:text-blue-800 font-semibold underline"
                    >
                      Browse
                    </button>
                  </p>
                  <div className="text-[10px] text-gray-500 text-center space-y-1 mt-4">
                    <p>Supported format: JPG/PNG</p>
                    <p>Aspect ratio: 1:1</p>
                    <p>Pixel: 1080 x 1080</p>
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleFileInputChange}
                  className="hidden"
                />
              </div>

              {/* Right Section - Uploaded Files List */}
              <div className="w-1/2 p-6 overflow-y-auto">
                <div className="space-y-4">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-start space-x-3">
                        {/* Thumbnail */}
                        <div className="flex-shrink-0">
                          {file.thumbnail ? (
                            <img
                              src={file.thumbnail}
                              alt={file.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                              <span className="text-[10px] font-medium text-gray-500">
                                {file.name.endsWith('.png') ? 'PNG' : 'JPG'}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* File Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-900 truncate">
                            {file.name}
                          </p>
                          <p className="text-[10px] text-gray-500">{file.size}</p>
                          
                          {/* Status Indicators */}
                          {file.status === 'success' && (
                            <div className="flex items-center space-x-2 mt-2">
                              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                <i className="fas fa-check text-white text-[10px]"></i>
                              </div>
                            </div>
                          )}
                          
                          {file.status === 'uploading' && (
                            <div className="mt-2">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-blue-600 h-2 rounded-full transition-all"
                                  style={{ width: `${file.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                          
                          {file.status === 'failed' && (
                            <div className="mt-2">
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                  <i className="fas fa-exclamation text-white text-[10px]"></i>
                                </div>
                                <p className="text-[10px] text-red-600">{file.error}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Remove/Cancel Button */}
                        <button
                          onClick={() => {
                            if (file.status === 'uploading') {
                              handleCancelUpload(file.id);
                            } else {
                              handleRemoveFile(file.id);
                            }
                          }}
                          className="flex-shrink-0 text-black hover:text-gray-700"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end">
              <button
                onClick={handleContinue}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-xs font-semibold flex items-center"
              >
                CONTINUE <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomImage;

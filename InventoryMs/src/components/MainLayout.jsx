import { Link, Outlet, useLocation } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import logoImage from '../images/Screenshot 2025-10-14 090023.png';

function MainLayout() {
  const location = useLocation(); 
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleRefresh = () => {
    window.location.reload();
  };

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
     
     <header className={`fixed top-0 left-0 right-0 w-full shadow-sm border-b py-2 px-6 flex items-center justify-between z-15 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
  
  <div className="flex items-center space-x-4">
    <img
      src={logoImage}
      alt="App Logo"
      className="w-10 h-10 rounded-lg"
    />
    <div className="flex items-center space-x-2">
      <span className={`text-xl font-semibold mr-5 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>InventoryMS</span>
      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Dashboard</span>
      <i className={`fas fa-chevron-right ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}></i>
      <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
        {location.pathname === '/Newdata' ? 'New Data' :
         location.pathname === '/Product' ? 'Product' :
         location.pathname === '/Inventory' ? 'Inventory' :
         location.pathname === '/Category' ? 'Category' :
         location.pathname === '/FeedHistory' ? 'Feed History' :
         location.pathname === '/Settings' ? 'Settings' :
         location.pathname === '/CustomImage' ? 'Custom Image' :
         location.pathname === '/CustomFrames' ? 'Custom Frames' :
         location.pathname === '/Enrichment' ? 'Enrichment' :
         location.pathname === '/CustomLabels' ? 'Custom Labels' :
         location.pathname === '/EditFeed' ? 'Edit Feed' :
         'Dashboard'}
      </span>
    </div>
  </div>

 
  <div className="flex items-center space-x-4">
  
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-0 shadow-sm">
      <button 
        onClick={handleRefresh}
        className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
      >
        <i className="fas fa-sync-alt"></i>
        <span className="text-sm font-medium">Refresh</span>
      </button>
    </div>

   
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-600">Dark Mode</span>
      <button 
        onClick={toggleDarkMode}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isDarkMode ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>

   
    <button className="cursor-pointer hover:opacity-80">
      <img
        src="https://i.pravatar.cc/32"
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
    </button>
  </div>
</header>


      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar - Fixed positioning */}
        <nav className={`fixed left-0 top-16 w-40 h-[calc(100vh-4rem)] flex flex-col p-3 space-y-1.5 font-medium z-50 shadow-lg overflow-y-auto ${isDarkMode ? 'bg-gray-800 text-blue-300' : 'bg-white text-blue-950'}`}>
          <Link
            to="/Product"
            className={`flex flex-col items-center p-1.5 rounded ${
              isActive('/Product') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
            }`}
          >
            <i className={`fas fa-chart-bar mb-0.5 text-[11px] ${isActive('/Product') ? 'text-white' : 'text-blue-500'}`}></i>
            <span className="text-[10px]">Product</span>
          </Link>

          <Link
            to="/Category"
            className={`flex flex-col items-center p-1.5 rounded ${
              isActive('/Category') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
            }`}
          >
             <i className={`fas fa-tasks mb-0.5 text-[11px] ${isActive('/Category') ? 'text-white' : 'text-blue-500'}`}></i>
            <span className="text-[10px]">Category</span>
          </Link>

          <Link
            to="/Inventory"
            className={`flex flex-col items-center p-1.5 rounded ${
              isActive('/Inventory') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
            }`}
          >
            <i className={`fas fa-tachometer-alt mb-0.5 text-[11px] ${isActive('/Inventory') ? 'text-white' : 'text-blue-500'}`}></i>
            <span className="text-[10px]">Inventory</span>
          </Link>

          <Link
            to="/Newdata"
            className={`flex flex-col items-center p-1.5 rounded ${
              isActive('/Newdata') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
            }`}
          >
           <i className={`fas fa-file mb-0.5 text-[11px] ${isActive('/Newdata') ? 'text-white' : 'text-blue-500'}`}></i>
            <span className="text-[10px]">New Data Feed</span>
          </Link>

          <Link
            to="/CustomImage"
            className={`flex flex-col items-center p-1.5 rounded ${
              isActive('/CustomImage') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
            }`}
          >
            <i className={`fas fa-image mb-0.5 text-[11px] ${isActive('/CustomImage') ? 'text-white' : 'text-blue-500'}`}></i>
            <span className="text-[10px]">Custom Image</span>
          </Link>

          <Link
            to="/CustomFrames"
            className={`flex flex-col items-center p-1.5 rounded ${
              isActive('/CustomFrames') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
            }`}
          >
            <i className={`fas fa-square mb-0.5 text-[11px] ${isActive('/CustomFrames') ? 'text-white' : 'text-blue-500'}`}></i>
            <span className="text-[10px]">Custom Frames</span>
          </Link>

          <Link
            to="/Enrichment"
            className={`flex flex-col items-center p-1.5 rounded ${
              isActive('/Enrichment') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
            }`}
          >
            <i className={`fas fa-magic mb-0.5 text-[11px] ${isActive('/Enrichment') ? 'text-white' : 'text-blue-500'}`}></i>
            <span className="text-[10px]">Enrichment</span>
          </Link>

          <Link
            to="/CustomLabels"
            className={`flex flex-col items-center p-1.5 rounded ${
              isActive('/CustomLabels') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
            }`}
          >
            <i className={`fas fa-tags mb-0.5 text-[11px] ${isActive('/CustomLabels') ? 'text-white' : 'text-blue-500'}`}></i>
            <span className="text-[10px]">Custom Labels</span>
          </Link>

          {/* Spacer to push Feed History and Settings to bottom */}
          <div className="flex-1"></div>

          <div className="mt-auto space-y-1.5">
            <Link
              to="/FeedHistory"
              className={`flex flex-col items-center p-1.5 rounded ${
                isActive('/FeedHistory') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
              }`}
            >
              <i className={`fas fa-history mb-0.5 text-[11px] ${isActive('/FeedHistory') ? 'text-white' : 'text-blue-500'}`}></i>
              <span className="text-[10px]">Feed History</span>
            </Link>

            <Link
              to="/Settings"
              className={`flex flex-col items-center p-1.5 rounded ${
                isActive('/Settings') ? 'bg-blue-700 text-black' : 'hover:bg-blue-200'
              }`}
            >
              <i className={`fas fa-cog mb-0.5 text-[11px] ${isActive('/Settings') ? 'text-white' : 'text-blue-500'}`}></i>
              <span className="text-[10px]">Settings</span>
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className={`flex-1 p-8 ml-40 mt-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;

import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 Get current route

  const handleLogout = () => {
    navigate('/');
  };

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
     <header className="bg-white w-full shadow-sm border-b border-gray-100 py-2 px-6 flex items-center justify-between">
  <h1 className="text-2xl font-bold text-gray-800">Attendify</h1>

  <div className="flex items-center space-x-6 text-blue-950">
    <button className="relative cursor-pointer hover:text-blue-600">
      <i className="far fa-bell text-lg"></i>
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>

    <button className="cursor-pointer hover:text-blue-600">
      <i className="far fa-comment-alt text-lg"></i>
    </button>

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
        {/* Sidebar */}
        <nav className="w-64 bg-white text-blue-950 flex flex-col p-6 space-y-4 font-medium">
          <Link
            to="/attendance"
            className={`flex items-center p-2 rounded ${
              isActive('/attendance') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-200'
            }`}
          >
            <i className="fas fa-clipboard-list p-2"></i>
            Attendance Sheet
          </Link>

          <Link
            to="/dashboard"
            className={`flex items-center p-2 rounded ${
              isActive('/dashboard') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-200'
            }`}
          >
            <i className="fas fa-chart-line p-2"></i>
            Dashboard
          </Link>

          <Link
            to="/reports"
            className={`flex items-center p-2 rounded ${
              isActive('/reports') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-200'
            }`}
          >
            <i className="fas fa-file-alt p-2"></i>
            Report
          </Link>

          <Link
            to="/students"
            className={`flex items-center p-2 rounded ${
              isActive('/students') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-200'
            }`}
          >
            <i className="fas fa-user-graduate p-2"></i>
            Student
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center p-2 rounded hover:bg-blue-200 text-left cursor-pointer"
          >
            <i className="fas fa-sign-out-alt p-2"></i>
            Logout
          </button>
        </nav>

        {/* Page Content */}
        <main className="flex-1 bg-gray-100 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;

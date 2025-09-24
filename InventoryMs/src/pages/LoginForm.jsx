function LoginForm() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <h1 className="text-start text-2xl font-bold pl-6 text-gray-800">Attendify</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center space-x-40 px-4">
        {/* Left Content */}
        <div className="w-[350px] flex flex-col items-start justify-center text-start h-full">
          <h2 className="text-3xl font-bold mb-4">Attendance</h2>
          <h2 className="text-3xl text-blue-950 font-bold mb-8">for your business</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, justo ut tincidunt
            dictum, massa augue volutpat odio, ac ullamcorper erat justo id lorem.
          </p>
        </div>

        {/* Right Form - All aligned to left */}
        <div className="bg-white p-10 rounded shadow-md w-[480px] flex flex-col items-start">
          {/* Role Cards */}
          <div className="flex gap-4 mb-6">
            {/* Teacher Card */}
            <label className="flex items-center gap-2 bg-blue-500/20 border border-blue-300 p-4 rounded-md cursor-pointer w-[140px] justify-center">
              <input
                type="radio"
                name="role"
                value="teacher"
                className="accent-blue-600"
                defaultChecked
              />
              <span className="text-sm font-medium text-gray-800">Teacher</span>
            </label>

            {/* Admin Card */}
            <label className="flex items-center gap-2 bg-blue-500/20 border border-blue-300 p-4 rounded-md cursor-pointer w-[140px] justify-center">
              <input type="radio" name="role" value="admin" className="accent-blue-600" />
              <span className="text-sm font-medium text-gray-800">Admin</span>
            </label>
          </div>

          {/* Username */}
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>

          {/* Remember Me */}
          <div className="mb-4 w-full flex justify-start text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-600" />
              <span>Remember me</span>
            </label>
          </div>

          {/* Sign In in small card like role, aligned left */}
          <div className="mb-4 w-full flex justify-start text-sm">
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm cursor-pointer">
              Sign In
            </button>
          </div>

          {/* Forgot password */}
          <div className="text-sm w-full mb-5">
            <a href="/forgot-password" className="text-gray-500 hover:text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Register link */}
          <p className="text-sm w-full">
            Don’t have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

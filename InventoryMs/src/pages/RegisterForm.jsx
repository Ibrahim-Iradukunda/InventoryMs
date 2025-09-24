function RegisterForm() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-[500px]">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Create Account</h2>

        {/* First and Last Name side-by-side */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-2 border rounded"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Terms & Conditions */}
        <div className="flex items-start text-sm mb-4">
          <input type="checkbox" className="mr-2 mt-1 accent-green-600" />
          <p>
            I agree to the{' '}
            <a href="/terms" className="text-green-600 hover:underline">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-green-600 hover:underline">
              Privacy Policy
            </a>.
          </p>
        </div>

        {/* Register Button */}
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>

        {/* Already have an account? */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <a href="/Login" className="text-green-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;

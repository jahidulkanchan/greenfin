export default function DashboardPage() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome back! Here’s a quick overview of your activities and stats.</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800">Total Users</h2>
            <p className="text-3xl font-bold text-blue-900 mt-2">1,245</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-green-800">Active Sessions</h2>
            <p className="text-3xl font-bold text-green-900 mt-2">87</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-yellow-800">New Orders</h2>
            <p className="text-3xl font-bold text-yellow-900 mt-2">32</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-purple-800">Pending Tasks</h2>
            <p className="text-3xl font-bold text-purple-900 mt-2">14</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm">
              User <span className="font-semibold">John Doe</span> signed up.
            </li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm">Order #2345 has been placed.</li>
            <li className="bg-gray-50 p-4 rounded-lg shadow-sm">You updated your profile picture.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

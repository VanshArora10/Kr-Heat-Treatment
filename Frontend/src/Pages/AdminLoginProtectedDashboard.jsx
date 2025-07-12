import React, { useState, useEffect } from "react";
import { Search, Users, Clock, Eye, RefreshCw, LogOut, Mail, Phone, Calendar, Package, Hash, Settings } from "lucide-react";

const AdminLoginProtectedDashboard = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [lastUpdated, setLastUpdated] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setAuthError("");

        try {
            const res = await fetch("http://localhost:5000/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setIsAuthenticated(true);
                localStorage.setItem("isAdmin", "true");
            } else {
                setAuthError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            setAuthError("Something went wrong. Try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        setIsAuthenticated(false);
        setForm({ username: "", password: "" });
        setInquiries([]);
        setLastUpdated(null);
    };

    const fetchInquiries = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/inquiry");
            if (response.ok) {
                const data = await response.json();
                setInquiries(data);
                setLastUpdated(new Date());
            } else {
                console.error("Failed to fetch inquiries");
            }
        } catch (error) {
            console.error("Error fetching inquiries:", error);
        } finally {
            setLoading(false);
        }
        if (res.ok && data.success) {
            setIsAuthenticated(true);
            localStorage.setItem("isAdmin", "true");
            fetchInquiries(); // 👈 fetch inquiries immediately after login
        }
        
    };

    useEffect(() => {
    if (isAuthenticated) {
        fetchInquiries(); // 👈 fetch data only after dashboard is ready
    }
}, [isAuthenticated]);
    

    const filteredInquiries = inquiries.filter(inquiry =>
        inquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const recentInquiries = filteredInquiries.slice(0, 5);

    // LOGIN SCREEN
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md">
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-700 rounded-full mb-4">
                            <Settings className="w-7 h-7 sm:w-8 sm:h-8 text-gray-300" />
                        </div>
                        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">Admin Portal</h2>
                        <p className="text-gray-400 text-sm sm:text-base">Access your dashboard</p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2 text-sm font-medium">Username</label>
                            <input
                                type="text"
                                value={form.username}
                                onChange={(e) => setForm({ ...form, username: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                placeholder="Enter password"
                                required
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleLogin(e);
                                    }
                                }}
                            />
                        </div>
                        {authError && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                                <p className="text-red-400 text-sm">{authError}</p>
                            </div>
                        )}
                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50"
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // DASHBOARD SCREEN
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
                {/* Header */}
                <header className="bg-gray-800/30 backdrop-blur-sm border-b border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full">
                                    <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                                </div>
                                <div>
                                    <h1 className="text-lg sm:text-2xl font-bold text-white">Admin Dashboard</h1>
                                    <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">Inquiry Management Portal</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-4">
                                <button
                                    onClick={fetchInquiries}
                                    disabled={loading}
                                    className="flex items-center justify-center w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 bg-gray-700/50 border border-gray-600 rounded-xl hover:bg-gray-700 transition-all duration-300 disabled:opacity-50"
                                >
                                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                                    <span className="text-sm ml-2 hidden sm:inline">Refresh</span>
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center justify-center w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 bg-red-600/20 border border-red-600/30 rounded-xl hover:bg-red-600/30 transition-all duration-300 text-red-400"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span className="text-sm ml-2 hidden sm:inline">Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-gray-800/50 transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-400 text-xs sm:text-sm font-medium">Total Inquiries</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-white">{inquiries.length}</p>
                                </div>
                                <div className="p-2 sm:p-3 bg-blue-600/20 rounded-full">
                                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-gray-800/50 transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-400 text-xs sm:text-sm font-medium">Recent Inquiries</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-white">{recentInquiries.length}</p>
                                </div>
                                <div className="p-2 sm:p-3 bg-purple-600/20 rounded-full">
                                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-gray-800/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-400 text-xs sm:text-sm font-medium">Last Updated</p>
                                    <p className="text-lg sm:text-lg font-bold text-white">
                                        {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Never'}
                                    </p>
                                </div>
                                <div className="p-2 sm:p-3 bg-green-600/20 rounded-full">
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    {/* Inquiries Section */}
                    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                        {/* Recent Inquiries Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Recent Inquiries</h3>
                                {loading ? (
                                    <div className="text-center py-6 sm:py-8">
                                        <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 animate-spin mx-auto mb-2 text-gray-400" />
                                        <p className="text-gray-400 text-sm">Loading...</p>
                                    </div>
                                ) : recentInquiries.length > 0 ? (
                                    <div className="space-y-3 sm:space-y-4">
                                        {recentInquiries.map((inquiry, index) => (
                                            <div key={index} className="bg-gray-700/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-600/30">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-white text-sm truncate">{inquiry.name}</h4>
                                                        <p className="text-gray-400 text-xs mt-1 truncate">{inquiry.email}</p>
                                                        <p className="text-gray-400 text-xs mt-1">
                                                            {inquiry.part || inquiry.partName} - Qty: {inquiry.quantity}
                                                        </p>
                                                    </div>
                                                    <div className="text-xs text-gray-500 ml-2 flex-shrink-0">
                                                        {new Date(inquiry.createdAt).toLocaleDateString()}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-6 sm:py-8 text-gray-400">
                                        <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 opacity-50" />
                                        <p className="text-sm">No recent inquiries</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* All Inquiries Table */}
                        <div className="lg:col-span-2">
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">All Inquiries</h3>

                                {loading ? (
                                    <div className="text-center py-8 sm:py-12">
                                        <RefreshCw className="w-8 h-8 sm:w-12 sm:h-12 animate-spin mx-auto mb-4 text-gray-400" />
                                        <p className="text-gray-400 text-sm">Loading inquiries...</p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-xs sm:text-sm">
                                            <thead className="text-gray-400 uppercase border-b border-gray-700">
                                                <tr>
                                                    <th className="p-2 sm:p-3 text-left">
                                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                                            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                                                            <span>Name</span>
                                                        </div>
                                                    </th>
                                                    <th className="p-2 sm:p-3 text-left hidden sm:table-cell">
                                                        <div className="flex items-center space-x-2">
                                                            <Mail className="w-4 h-4" />
                                                            <span>Email</span>
                                                        </div>
                                                    </th>
                                                    <th className="p-2 sm:p-3 text-left hidden md:table-cell">
                                                        <div className="flex items-center space-x-2">
                                                            <Phone className="w-4 h-4" />
                                                            <span>Phone</span>
                                                        </div>
                                                    </th>
                                                    <th className="p-2 sm:p-3 text-left">
                                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                                            <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                                                            <span>Part</span>
                                                        </div>
                                                    </th>
                                                    <th className="p-2 sm:p-3 text-left">
                                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                                            <Hash className="w-3 h-3 sm:w-4 sm:h-4" />
                                                            <span>Qty</span>
                                                        </div>
                                                    </th>
                                                    <th className="p-2 sm:p-3 text-left hidden lg:table-cell">
                                                        <div className="flex items-center space-x-2">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>Date</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredInquiries.map((inquiry, index) => (
                                                    <tr
                                                        key={index}
                                                        className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-all duration-300"
                                                    >
                                                        <td className="p-2 sm:p-3 font-medium text-white">
                                                            <div className="max-w-24 sm:max-w-none truncate">{inquiry.name}</div>
                                                            <div className="text-gray-400 text-xs mt-1 sm:hidden truncate">{inquiry.email}</div>
                                                        </td>
                                                        <td className="p-2 sm:p-3 text-gray-300 hidden sm:table-cell">
                                                            <div className="max-w-32 truncate">{inquiry.email}</div>
                                                        </td>
                                                        <td className="p-2 sm:p-3 text-gray-300 hidden md:table-cell">{inquiry.phone}</td>
                                                        <td className="p-2 sm:p-3 text-gray-300">
                                                            <div className="max-w-20 sm:max-w-none truncate">{inquiry.part || inquiry.partName}</div>
                                                        </td>
                                                        <td className="p-2 sm:p-3 text-gray-300">{inquiry.quantity}</td>
                                                        <td className="p-2 sm:p-3 text-gray-300 hidden lg:table-cell">
                                                            {new Date(inquiry.createdAt).toLocaleDateString()}
                                                        </td>
                                                    </tr>
                                                ))}
                                                {filteredInquiries.length === 0 && (
                                                    <tr>
                                                        <td colSpan="6" className="text-center text-gray-400 py-8 sm:py-12">
                                                            <Users className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
                                                            <p className="text-sm">No inquiries found.</p>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLoginProtectedDashboard;
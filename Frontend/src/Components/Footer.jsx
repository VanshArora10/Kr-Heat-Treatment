import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Thermometer } from 'lucide-react';

const Foooter = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="py-12 lg:py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {/* Company Info */}
                            <div className="lg:col-span-2">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <Thermometer className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">KR Heat Treatment</h3>
                                </div>
                                <p className="text-gray-300 mb-6 max-w-md">
                                    Leading provider of precision heat treatment solutions for cycle and automotive industries.
                                    Delivering quality, reliability, and excellence for over 15 years.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Services */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">BB Axles Treatment</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nuts & Bolts</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">End Caps</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cycle Spindles</a></li>
                                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Custom Solutions</a></li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-gray-300">+91 88724 14000</p>
                                            <p className="text-gray-300">+91 98551 03477</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-gray-300">aryansharma732005@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-300">
                                            Plot no. 13246, Opp. sandhu Petrol Pump<br />
                                            Dholewal, Ludhiana, Punjab 141010, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-800 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-gray-400 text-sm">
                                © 2025 KR Heat Treatment. All rights reserved.
                            </div>
                          
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Foooter;
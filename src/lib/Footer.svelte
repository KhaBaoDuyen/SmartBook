<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WAKA - Footer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .logo-gradient {
            background: linear-gradient(135deg, #10b981 0%, #fbbf24 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .vietnam-flag {
            background: linear-gradient(to bottom, #da020e 50%, #ffcd00 50%);
            position: relative;
        }
        
        .vietnam-flag::before {
            content: '★';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #ffcd00;
            font-size: 8px;
            font-weight: bold;
        }
    </style>
</head>
<body class="bg-gray-50">
    <footer class="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <!-- Main Footer Content -->
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div class="space-y-4">
                    <!-- Footer Logo -->
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                            <span class="text-white font-bold text-xl">W</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="logo-gradient font-bold text-2xl leading-none">WAKA</span>
                            <span class="text-xs text-gray-400">Digital Library</span>
                        </div>
                    </div>
                    
                    <p class="text-gray-300 leading-relaxed">
                        Thư viện số hàng đầu Việt Nam, cung cấp hàng triệu đầu sách điện tử, sách nói và truyện tranh chất lượng cao.
                    </p>
                    
                    <!-- Social Links -->
                    <div class="flex space-x-4 pt-4">
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 hover:scale-110">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                            </svg>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white mb-4">Danh mục sách</h3>
                    <ul class="space-y-3">
                        <li><a href="/sach-dien-tu" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center"><span class="mr-2">📚</span> Sách điện tử</a></li>
                        <li><a href="/sach-hoi-vien" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center"><span class="mr-2">👥</span> Sách hội viên</a></li>
                        <li><a href="/sach-hieu-sua" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center"><span class="mr-2">✏️</span> Sách hiệu sửa</a></li>
                        <li><a href="/sach-noi" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center"><span class="mr-2">🎧</span> Sách nói</a></li>
                        <li><a href="/truyen-tranh" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center"><span class="mr-2">📖</span> Truyện tranh</a></li>
                        <li><a href="/dich-vu-xuat-ban" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center"><span class="mr-2">📝</span> Dịch vụ xuất bản</a></li>
                    </ul>
                </div>

                <!-- Support Links -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white mb-4">Hỗ trợ khách hàng</h3>
                    <ul class="space-y-3">
                        <li><a href="/huong-dan" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Hướng dẫn sử dụng</a></li>
                        <li><a href="/cau-hoi" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Câu hỏi thường gặp</a></li>
                        <li><a href="/lien-he" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Liên hệ hỗ trợ</a></li>
                        <li><a href="/chinh-sach" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Chính sách bảo mật</a></li>
                        <li><a href="/dieu-khoan" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Điều khoản sử dụng</a></li>
                        <li><a href="/bao-cao-loi" class="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Báo cáo lỗi</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white mb-4">Thông tin liên hệ</h3>
                    <div class="space-y-3">
                        <div class="flex items-start space-x-3">
                            <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div>
                                <p class="text-gray-300">123 Đường Nguyễn Huệ</p>
                                <p class="text-gray-300">Quận 1, TP. Hồ Chí Minh</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                            <svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <span class="text-gray-300">1900 1234</span>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                            <svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span class="text-gray-300">support@waka.vn</span>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                            <svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span class="text-gray-300">24/7 Hỗ trợ khách hàng</span>
                        </div>
                    </div>

                    <!-- App Download -->
                    <div class="pt-4">
                        <h4 class="text-sm font-semibold text-white mb-3">Tải ứng dụng</h4>
                        <div class="flex flex-col space-y-2">
                            <a href="#" class="inline-flex items-center px-3 py-2 bg-black rounded-lg hover:bg-gray-800 transition-colors">
                                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                </svg>
                                <div class="text-left">
                                    <div class="text-xs text-gray-400">Tải trên</div>
                                    <div class="text-sm font-semibold">App Store</div>
                                </div>
                            </a>
                            <a href="#" class="inline-flex items-center px-3 py-2 bg-black rounded-lg hover:bg-gray-800 transition-colors">
                                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                </svg>
                                <div class="text-left">
                                    <div class="text-xs text-gray-400">Tải trên</div>
                                    <div class="text-sm font-semibold">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Newsletter Section -->
        <div class="border-t border-gray-800">
            <div class="container mx-auto px-4 py-8">
                <div class="max-w-md mx-auto text-center">
                    <h3 class="text-xl font-semibold text-white mb-2">Đăng ký nhận thông tin mới</h3>
                    <p class="text-gray-400 mb-4">Nhận thông báo về sách mới và ưu đãi đặc biệt</p>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="Nhập email của bạn..."
                            class="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                        <button class="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-semibold">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-gray-800 bg-gray-900">
            <div class="container mx-auto px-4 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div class="text-gray-400 text-sm">
                        © 2024 WAKA Digital Library. All rights reserved.
                    </div>
                    
                    <div class="flex items-center space-x-6 text-sm text-gray-400">
                        <a href="/privacy" class="hover:text-emerald-400 transition-colors">Chính sách riêng tư</a>
                        <span>|</span>
                        <a href="/terms" class="hover:text-emerald-400 transition-colors">Điều khoản dịch vụ</a>
                        <span>|</span>
                        <a href="/cookies" class="hover:text-emerald-400 transition-colors">Cookie Policy</a>
                    </div>

                    <!-- Vietnam Flag -->
                    <div class="flex items-center space-x-2">
                        <span class="text-gray-400 text-sm">Made with ❤️ in</span>
                        <div class="vietnam-flag w-6 h-4 rounded-sm"></div>
                        <span class="text-gray-400 text-sm">Vietnam</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
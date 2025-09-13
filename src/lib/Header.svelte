<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WAKA - Vietnamese Digital Library</title>
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
        
        .search-glow:focus {
            box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.3);
        }
        
        .nav-link {
            position: relative;
            transition: all 0.3s ease;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #10b981, #fbbf24);
            transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
            width: 100%;
        }
        
        .crown-icon {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
        }
        
        @media (max-width: 768px) {
            .mobile-menu {
                transform: translateY(-100%);
                transition: transform 0.3s ease;
            }
            
            .mobile-menu.active {
                transform: translateY(0);
            }
        }
    </style>
</head>
<body class="bg-gray-50">
    <header class="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-2xl">
        <!-- Main Header -->
        <div class="container mx-auto px-4 py-3">
            <div class="flex items-center justify-between">
                <!-- Logo Section -->
                <div class="flex items-center space-x-3">
                    <!-- Enhanced Logo -->
                    <div class="flex items-center space-x-1">
                        <div class="relative">
                            <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                                <span class="text-white font-bold text-xl">W</span>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="logo-gradient font-bold text-2xl leading-none">WAKA</span>
                            <span class="text-xs text-gray-400">Digital Library</span>
                        </div>
                    </div>
                    
                    <!-- Vietnamese Flag -->
                    <div class="vietnam-flag w-6 h-4 rounded-sm shadow-sm"></div>
                </div>

                <!-- Navigation - Desktop -->
                <nav class="hidden lg:flex items-center space-x-8">
                    <a href="/sach-dien-tu" class="nav-link text-gray-300 hover:text-white py-2">
                        Sách điện tử
                    </a>
                    <a href="/sach-hoi-vien" class="nav-link text-gray-300 hover:text-white py-2">
                        Sách hội viên
                    </a>
                    <a href="/sach-hieu-sua" class="nav-link text-gray-300 hover:text-white py-2">
                        Sách hiệu sửa
                    </a>
                    <a href="/sach-noi" class="nav-link text-gray-300 hover:text-white py-2">
                        Sách nói
                    </a>
                    <a href="/truyen-tranh" class="nav-link text-gray-300 hover:text-white py-2">
                        Truyện tranh
                    </a>
                    <a href="/dich-vu-xuat-ban" class="nav-link text-gray-300 hover:text-white py-2">
                        Dịch vụ xuất bản
                    </a>
                </nav>

                <!-- Search Bar - Desktop -->
                <div class="hidden md:flex flex-1 max-w-md mx-8">
                    <div class="relative w-full">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sách, tác giả..."
                            class="search-glow w-full px-4 py-2.5 pl-4 pr-12 bg-gray-800/80 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:bg-gray-800 transition-all duration-300"
                        />
                        <button class="absolute inset-y-0 right-0 pr-4 flex items-center">
                            <svg class="h-5 w-5 text-gray-400 hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Auth & User Section -->
                <div class="flex items-center space-x-3">
                    <!-- Not Logged In State -->
                    <div id="auth-buttons" class="flex items-center space-x-2">
                        <button class="px-5 py-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-gray-500">
                            Đăng nhập
                        </button>
                        <button class="px-5 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                            Đăng ký
                        </button>
                    </div>

                    <!-- Logged In State (Hidden by default) -->
                    <div id="user-section" class="hidden flex items-center space-x-3">
                        <button class="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-black font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg">
                            Gói cước
                        </button>
                        <div class="crown-icon w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300">
                            <span class="text-lg">👑</span>
                        </div>
                        <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300">
                            <span class="text-white font-semibold text-sm">U</span>
                        </div>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu md:hidden bg-gray-900 border-t border-gray-700">
            <div class="container mx-auto px-4 py-4">
                <!-- Mobile Search -->
                <div class="mb-4">
                    <div class="relative">
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            class="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                        />
                        <button class="absolute inset-y-0 right-0 pr-4 flex items-center">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Navigation -->
                <nav class="space-y-2">
                    <a href="/sach-dien-tu" class="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                        📚 Sách điện tử
                    </a>
                    <a href="/sach-hoi-vien" class="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                        👥 Sách hội viên
                    </a>
                    <a href="/sach-hieu-sua" class="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                        ✏️ Sách hiệu sửa
                    </a>
                    <a href="/sach-noi" class="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                        🎧 Sách nói
                    </a>
                    <a href="/truyen-tranh" class="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                        📖 Truyện tranh
                    </a>
                    <a href="/dich-vu-xuat-ban" class="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                        📝 Dịch vụ xuất bản
                    </a>
                </nav>
            </div>
        </div>
    </header>

    <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('active');
        });

        // Search functionality
        document.querySelectorAll('input[type="text"]').forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    console.log('Tìm kiếm:', this.value);
                }
            });
        });

        // Auth button handlers
        document.querySelector('#auth-buttons button:first-child').addEventListener('click', function() {
            console.log('Đăng nhập clicked');
        });

        document.querySelector('#auth-buttons button:last-child').addEventListener('click', function() {
            console.log('Đăng ký clicked');
        });
    </script>
</body>
</html>
/**
 * Header Component Loader
 * Loads the header component and initializes all its functionality
 */
(function($) {
    'use strict';

    // Header loader configuration
    const HeaderLoader = {
        // Configuration
        config: {
            headerPath: 'Blaxcut HTML/components/header.html',
            targetSelector: '#header-placeholder',
            fallbackSelector: 'body',
            currentPage: '',
            basePath: ''
        },

        // Initialize the header loader
        init: function() {
            this.detectCurrentPage();
            this.detectBasePath();
            this.loadHeader();
        },

        // Detect current page for navigation highlighting
        detectCurrentPage: function() {
            const path = window.location.pathname;
            const page = path.split('/').pop() || 'index.html';
            this.config.currentPage = page;
        },

        // Detect base path for relative URLs
        detectBasePath: function() {
            // Simplified path detection - let the tryLoadHeader handle multiple paths
            this.config.basePath = '';
        },

        // Load header component
        loadHeader: function() {
            const self = this;
            
            // Try multiple possible paths for the header file
            const possiblePaths = [
                '/components/header.html',
                './assets/components/header.html',
                '../assets/components/header.html',
                '../../assets/components/header.html',
                this.config.basePath + this.config.headerPath
            ];
            
            this.tryLoadHeader(possiblePaths, 0);
        },

        // Try loading header from different paths
        tryLoadHeader: function(paths, index) {
            const self = this;
            
            if (index >= paths.length) {
                console.error('Header file not found in any of the expected locations');
                self.handleLoadError();
                return;
            }
            
            const currentPath = paths[index];
            console.log('Trying to load header from:', currentPath);
            
            fetch(currentPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(html => {
                    console.log('Header loaded successfully from:', currentPath);
                    self.injectHeader(html);
                    self.initializeHeaderFunctionality();
                    self.setActiveNavigation();
                    self.adjustRelativePaths(currentPath);
                })
                .catch(error => {
                    console.log(`Failed to load from ${currentPath}:`, error.message);
                    // Try next path
                    self.tryLoadHeader(paths, index + 1);
                });
        },

        // Inject header HTML into the page
        injectHeader: function(html) {
            let targetElement = document.querySelector(this.config.targetSelector);
            
            if (!targetElement) {
                // If no placeholder exists, create one at the beginning of body
                targetElement = document.createElement('div');
                targetElement.id = 'header-placeholder';
                document.body.insertBefore(targetElement, document.body.firstChild);
            }

            targetElement.innerHTML = html;
        },

        // Initialize all header functionality after injection
        initializeHeaderFunctionality: function() {
            // Wait for DOM to be ready with the new header elements
            setTimeout(() => {
                this.initStickyHeader();
                this.initMobileMenu();
                this.initDropdownMenus();
                this.initMegaMenus();
                this.initHeaderSearch();
                this.initBackdropEvents();
            }, 10);
        },

        // Initialize sticky header functionality
        initStickyHeader: function() {
            if ($('.stricky').length) {
                // Clone the original header for sticky behavior
                $('.stricky').addClass('original').clone(true).insertAfter('.stricky')
                    .addClass('stricked-menu').removeClass('original');
            }

            // Sticky header scroll behavior
            $(window).on('scroll', function() {
                if ($('.stricked-menu').length) {
                    const headerScrollPos = 150;
                    const stricky = $('.stricked-menu');
                    if ($(window).scrollTop() > headerScrollPos) {
                        stricky.addClass('stricky-fixed');
                    } else {
                        stricky.removeClass('stricky-fixed');
                    }
                }
            });
        },

        // Initialize mobile menu functionality
        initMobileMenu: function() {
            // Add mobile menu toggles
            $('.xb-nav-hidden li.menu-item-has-children > a').append('<span class="xb-menu-toggle"></span>');
            $('.xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children').append('<span class="xb-menu-toggle"></span>');

            // Mobile menu toggle functionality
            $('.xb-menu-toggle').on('click', function() {
                if (!$(this).hasClass('active')) {
                    $(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
                    $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
                }
                $(this).toggleClass('active');
                $(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
                $(this).closest('.menu-item').find('> .sub-menu').slideToggle();
            });

            // Mobile menu link handling
            $('.xb-nav-hidden li.menu-item-has-children > a').click(function(e) {
                const target = $(e.target);
                if ($(this).attr('href') === '#' && !(target.is('.xb-menu-toggle'))) {
                    e.stopPropagation();
                    if (!$(this).find('.xb-menu-toggle').hasClass('active')) {
                        $(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
                        $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
                    }
                    $(this).find('.xb-menu-toggle').toggleClass('active');
                    $(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
                    $(this).closest('.menu-item').find('> .sub-menu').slideToggle();
                }
            });

            // Mobile menu button
            $(".xb-nav-mobile").on('click', function() {
                $(this).toggleClass('active');
                $('.xb-header-menu').toggleClass('active');
                $('body').toggleClass('body-overflow');
            });

            // Mobile menu close
            $(".xb-menu-close, .xb-header-menu-backdrop").on('click', function() {
                $(this).removeClass('active');
                $('.xb-header-menu').removeClass('active');
                $('body').removeClass('body-overflow');
            });
        },

        // Initialize dropdown menus
        initDropdownMenus: function() {
            // Desktop dropdown hover functionality
            $('.main-menu ul li.menu-item-has-children').hover(
                function() {
                    $(this).find('> .submenu').stop(true, true).fadeIn(200);
                },
                function() {
                    $(this).find('> .submenu').stop(true, true).fadeOut(200);
                }
            );
        },

        // Initialize mega menu functionality  
        initMegaMenus: function() {
            // Mega menu hover effects
            $('.megamenu').hover(
                function() {
                    $(this).find('.mega_menu_wrapper').stop(true, true).fadeIn(200);
                },
                function() {
                    $(this).find('.mega_menu_wrapper').stop(true, true).fadeOut(200);
                }
            );
        },

        // Initialize header search functionality
        initHeaderSearch: function() {
            $(".header-search-btn").on("click", function(e) {
                e.preventDefault();
                $(".header-search-form-wrapper").addClass("open");
                $('.header-search-form-wrapper input[type="search"]').focus();
                $('.body-overlay').addClass('active');
            });

            $(".xb-search-close").on("click", function(e) {
                e.preventDefault();
                $(".header-search-form-wrapper").removeClass("open");
                $("body").removeClass("active");
                $('.body-overlay').removeClass('active');
            });
        },

        // Initialize backdrop events
        initBackdropEvents: function() {
            $('.body-overlay').on('click', function() {
                $(this).removeClass('active');
                $(".header-search-form-wrapper").removeClass("open");
            });
        },

        // Set active navigation based on current page
        setActiveNavigation: function() {
            const currentPage = this.config.currentPage;
            
            // Remove existing active classes
            $('.main-menu ul li').removeClass('active');
            $('.xb-menu-primary li').removeClass('active');

            // Set active class for main navigation
            $('.main-menu ul li a, .xb-menu-primary li a').each(function() {
                const href = $(this).attr('href');
                if (href && (href === currentPage || 
                    (currentPage === 'index.html' && href === 'index.html'))) {
                    $(this).closest('li').addClass('active');
                    // Also set parent menu item as active for dropdowns
                    $(this).closest('.menu-item-has-children').addClass('active');
                }
            });

            // Special handling for home page variations
            if (currentPage.startsWith('home-') || currentPage === 'index.html') {
                $('.main-menu ul li a[href="index.html"]').closest('.menu-item-has-children').addClass('active');
                $('.xb-menu-primary li a[href="#!"]').closest('.menu-item-has-children').addClass('active');
            }
        },

        // Adjust relative paths based on current page location
        adjustRelativePaths: function(successfulPath) {
            // Determine the correct base path based on the successful path used
            let basePath = '';
            if (successfulPath && successfulPath.includes('../')) {
                const levels = (successfulPath.match(/\.\.\//g) || []).length;
                basePath = '../'.repeat(levels);
            }
            
            // Update image sources
            $('#header-placeholder img').each(function() {
                const src = $(this).attr('src');
                if (src && !src.startsWith('http') && !src.startsWith('/') && !src.startsWith('data:')) {
                    // Don't modify if already has correct path
                    if (basePath && !src.startsWith(basePath)) {
                        $(this).attr('src', basePath + src);
                    }
                }
            });

            // Update links that need base path adjustment
            $('#header-placeholder a').each(function() {
                const href = $(this).attr('href');
                if (href && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#') && href !== '#!') {
                    // Don't modify if already has correct path
                    if (basePath && !href.startsWith(basePath)) {
                        $(this).attr('href', basePath + href);
                    }
                }
            });
        },

        // Handle load error
        handleLoadError: function() {
            console.warn('Header component could not be loaded. Falling back to inline header.');
            // You could implement a fallback header here if needed
        }
    };

    // Initialize when DOM is ready
    $(document).ready(function() {
        HeaderLoader.init();
    });

    // Make HeaderLoader globally available if needed
    window.HeaderLoader = HeaderLoader;

})(jQuery);

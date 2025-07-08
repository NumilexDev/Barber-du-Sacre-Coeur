/**
 * footer Component Loader
 * Loads the footer component and initializes all its functionality
 */
(function ($) {
  "use strict";

  // footer loader configuration
  const footerLoader = {
    // Configuration
    config: {
      footerPath: "components/footer.html", // <-- chemin mis à jour ici
      targetSelector: "#footer-placeholder",
      fallbackSelector: "body",
      currentPage: "",
      basePath: "",
    },

    // Initialize the footer loader
    init: function () {
      this.detectCurrentPage();
      this.detectBasePath();
      this.loadfooter();
    },

    // Detect current page for navigation highlighting
    detectCurrentPage: function () {
      const path = window.location.pathname;
      const page = path.split("/").pop() || "index.html";
      this.config.currentPage = page;
    },

    // Detect base path for relative URLs
    detectBasePath: function () {
      // Simplified path detection - let the tryLoadfooter handle multiple paths
      this.config.basePath = "";
    },

    // Load footer component
    loadfooter: function () {
      const self = this;

      // Try multiple possible paths for the footer file
      const possiblePaths = [
        "components/footer.html",
        "./components/footer.html",
        "../components/footer.html",
        "../../components/footer.html",
        this.config.basePath + this.config.footerPath,
      ];

      this.tryLoadfooter(possiblePaths, 0);
    },

    // Try loading footer from different paths
    tryLoadfooter: function (paths, index) {
      const self = this;

      if (index >= paths.length) {
        console.error("footer file not found in any of the expected locations");
        self.handleLoadError();
        return;
      }

      const currentPath = paths[index];
      console.log("Trying to load footer from:", currentPath);

      fetch(currentPath)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then((html) => {
          console.log("footer loaded successfully from:", currentPath);
          self.injectfooter(html);
          self.initializefooterFunctionality();
          self.setActiveNavigation();
          self.adjustRelativePaths(currentPath);
        })
        .catch((error) => {
          console.log(`Failed to load from ${currentPath}:`, error.message);
          // Try next path
          self.tryLoadfooter(paths, index + 1);
        });
    },

    // Inject footer HTML into the page
    injectfooter: function (html) {
      let targetElement = document.querySelector(this.config.targetSelector);

      if (!targetElement) {
        // If no placeholder exists, create one at the beginning of body
        targetElement = document.createElement("div");
        targetElement.id = "footer-placeholder";
        document.body.insertBefore(targetElement, document.body.firstChild);
      }

      targetElement.innerHTML = html;
    },

    // Initialize all footer functionality after injection
    initializefooterFunctionality: function () {
      // Wait for DOM to be ready with the new footer elements
      setTimeout(() => {
        this.initStickyfooter();
        this.initMobileMenu();
        this.initDropdownMenus();
        this.initMegaMenus();
        this.initfooterSearch();
        this.initBackdropEvents();
      }, 10);
    },

    // Initialize sticky footer functionality
    initStickyfooter: function () {
      if ($(".stricky").length) {
        // Clone the original footer for sticky behavior
        $(".stricky")
          .addClass("original")
          .clone(true)
          .insertAfter(".stricky")
          .addClass("stricked-menu")
          .removeClass("original");
      }

      // Sticky footer scroll behavior
      $(window).on("scroll", function () {
        if ($(".stricked-menu").length) {
          const footerScrollPos = 150;
          const stricky = $(".stricked-menu");
          if ($(window).scrollTop() > footerScrollPos) {
            stricky.addClass("stricky-fixed");
          } else {
            stricky.removeClass("stricky-fixed");
          }
        }
      });
    },

    // Initialize mobile menu functionality
    initMobileMenu: function () {
      // Add mobile menu toggles
      $(".xb-nav-hidden li.menu-item-has-children > a").append(
        '<span class="xb-menu-toggle"></span>'
      );
      $(
        ".xb-footer-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children"
      ).append('<span class="xb-menu-toggle"></span>');

      // Mobile menu toggle functionality
      $(".xb-menu-toggle").on("click", function () {
        if (!$(this).hasClass("active")) {
          $(this)
            .closest("ul")
            .find(".xb-menu-toggle.active")
            .toggleClass("active");
          $(this)
            .closest("ul")
            .find(".sub-menu.active")
            .toggleClass("active")
            .slideToggle();
        }
        $(this).toggleClass("active");
        $(this).closest(".menu-item").find("> .sub-menu").toggleClass("active");
        $(this).closest(".menu-item").find("> .sub-menu").slideToggle();
      });

      // Mobile menu link handling
      $(".xb-nav-hidden li.menu-item-has-children > a").click(function (e) {
        const target = $(e.target);
        if ($(this).attr("href") === "#" && !target.is(".xb-menu-toggle")) {
          e.stopPropagation();
          if (!$(this).find(".xb-menu-toggle").hasClass("active")) {
            $(this)
              .closest("ul")
              .find(".xb-menu-toggle.active")
              .toggleClass("active");
            $(this)
              .closest("ul")
              .find(".sub-menu.active")
              .toggleClass("active")
              .slideToggle();
          }
          $(this).find(".xb-menu-toggle").toggleClass("active");
          $(this)
            .closest(".menu-item")
            .find("> .sub-menu")
            .toggleClass("active");
          $(this).closest(".menu-item").find("> .sub-menu").slideToggle();
        }
      });

      // Mobile menu button
      $(".xb-nav-mobile").on("click", function () {
        $(this).toggleClass("active");
        $(".xb-footer-menu").toggleClass("active");
        $("body").toggleClass("body-overflow");
      });

      // Mobile menu close
      $(".xb-menu-close, .xb-footer-menu-backdrop").on("click", function () {
        $(this).removeClass("active");
        $(".xb-footer-menu").removeClass("active");
        $("body").removeClass("body-overflow");
      });
    },

    // Initialize dropdown menus
    initDropdownMenus: function () {
      // Desktop dropdown hover functionality
      $(".main-menu ul li.menu-item-has-children").hover(
        function () {
          $(this).find("> .submenu").stop(true, true).fadeIn(200);
        },
        function () {
          $(this).find("> .submenu").stop(true, true).fadeOut(200);
        }
      );
    },

    // Initialize mega menu functionality
    initMegaMenus: function () {
      // Mega menu hover effects
      $(".megamenu").hover(
        function () {
          $(this).find(".mega_menu_wrapper").stop(true, true).fadeIn(200);
        },
        function () {
          $(this).find(".mega_menu_wrapper").stop(true, true).fadeOut(200);
        }
      );
    },

    // Initialize footer search functionality
    initfooterSearch: function () {
      $(".footer-search-btn").on("click", function (e) {
        e.preventDefault();
        $(".footer-search-form-wrapper").addClass("open");
        $('.footer-search-form-wrapper input[type="search"]').focus();
        $(".body-overlay").addClass("active");
      });

      $(".xb-search-close").on("click", function (e) {
        e.preventDefault();
        $(".footer-search-form-wrapper").removeClass("open");
        $("body").removeClass("active");
        $(".body-overlay").removeClass("active");
      });
    },

    // Initialize backdrop events
    initBackdropEvents: function () {
      $(".body-overlay").on("click", function () {
        $(this).removeClass("active");
        $(".footer-search-form-wrapper").removeClass("open");
      });
    },

    // Set active navigation based on current page
    setActiveNavigation: function () {
      const currentPage = this.config.currentPage;

      // Remove existing active classes
      $(".main-menu ul li").removeClass("active");
      $(".xb-menu-primary li").removeClass("active");

      // Set active class for main navigation
      $(".main-menu ul li a, .xb-menu-primary li a").each(function () {
        const href = $(this).attr("href");
        if (
          href &&
          (href === currentPage ||
            (currentPage === "index.html" && href === "index.html"))
        ) {
          $(this).closest("li").addClass("active");
          // Also set parent menu item as active for dropdowns
          $(this).closest(".menu-item-has-children").addClass("active");
        }
      });

      // Special handling for home page variations
      if (currentPage.startsWith("home-") || currentPage === "index.html") {
        $('.main-menu ul li a[href="index.html"]')
          .closest(".menu-item-has-children")
          .addClass("active");
        $('.xb-menu-primary li a[href="#!"]')
          .closest(".menu-item-has-children")
          .addClass("active");
      }
    },

    // Adjust relative paths based on current page location
    adjustRelativePaths: function (successfulPath) {
      // Determine the correct base path based on the successful path used
      let basePath = "";
      if (successfulPath && successfulPath.includes("../")) {
        const levels = (successfulPath.match(/\.\.\//g) || []).length;
        basePath = "../".repeat(levels);
      }

      // Update image sources
      $("#footer-placeholder img").each(function () {
        const src = $(this).attr("src");
        if (
          src &&
          !src.startsWith("http") &&
          !src.startsWith("/") &&
          !src.startsWith("data:")
        ) {
          // Don't modify if already has correct path
          if (basePath && !src.startsWith(basePath)) {
            $(this).attr("src", basePath + src);
          }
        }
      });

      // Update links that need base path adjustment
      $("#footer-placeholder a").each(function () {
        const href = $(this).attr("href");
        if (
          href &&
          !href.startsWith("http") &&
          !href.startsWith("/") &&
          !href.startsWith("#") &&
          href !== "#!"
        ) {
          // Don't modify if already has correct path
          if (basePath && !href.startsWith(basePath)) {
            $(this).attr("href", basePath + href);
          }
        }
      });
    },

    // Handle load error
    handleLoadError: function () {
      console.warn(
        "footer component could not be loaded. Falling back to inline footer."
      );
      // You could implement a fallback footer here if needed
    },
  };

  // Initialize when DOM is ready
  $(document).ready(function () {
    footerLoader.init();
  });

  // Make footerLoader globally available if needed
  window.footerLoader = footerLoader;
})(jQuery);

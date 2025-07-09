/**
 * Simple Header Loader
 * Tries to load the header from possible paths and injects it into the page.
 */
(function ($) {
  "use strict";

  const possiblePaths = [
    "components/header.html",
    "./components/header.html",
    "../components/header.html",
    "../../components/header.html",
  ];

  function tryLoadHeader(paths, index) {
    if (index >= paths.length) {
      console.error("Header file not found in any of the expected locations");
      return;
    }
    const currentPath = paths[index];
    fetch(currentPath)
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.text();
      })
      .then((html) => {
        let target = document.querySelector("#header-placeholder");
        if (!target) {
          target = document.createElement("div");
          target.id = "header-placeholder";
          document.body.insertBefore(target, document.body.firstChild);
        }
        target.innerHTML = html;
        // Re-attach burger menu logic from designesia.js after header is loaded
        var mobile_menu_show = 0;
        var menuBtn = jQuery("#menu-btn");
        if (menuBtn.length) {
          menuBtn.off("click").on("click", function () {
            var h = jQuery("header")[0].scrollHeight;
            if (mobile_menu_show == 0) {
              jQuery("header").addClass("menu-open");
              jQuery("header").css("height", $(window).innerHeight());
              mobile_menu_show = 1;
            } else {
              jQuery("header").removeClass("menu-open");
              jQuery("header").css("height", "auto");
              mobile_menu_show = 0;
            }
          });
        }
      })
      .catch(() => {
        tryLoadHeader(paths, index + 1);
      });
  }

  $(document).ready(function () {
    tryLoadHeader(possiblePaths, 0);
  });
})(jQuery);

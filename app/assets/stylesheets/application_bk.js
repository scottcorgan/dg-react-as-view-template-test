/*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, vendor/assets/stylesheets,
 * or any plugin's vendor/assets/stylesheets directory can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS
 * files in this directory. Styles in this file should be added after the last require_* statement.
 * It is generally better to create a new file per style scope.
 *
 *= require_tree .
 *= require_self
 */

@import "welcome"

body, html {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: #fff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 15px;
}

* {
  box-sizing: border-box;
}

ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.button {
  display: inline-block;
    margin: 0;
    padding: 13px 20px;
    font-style: normal;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    text-align: center;
    background: #c6000e;
    color: #ffffff;
    border: none;
}

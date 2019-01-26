<!DOCTYPE html>
<html lang="$ContentLocale">
  <% include Head %>

  <body>
    <% include Header %>
    <main>
      $Layout
    </main>
    <% include Footer %>

    <%-- This script tag is for watching via webpack as js files are virtual --%>
    <%-- Will be removed for `prod` or `build` and required via Page.php --%>
    <!--<Prod>-->
    <% require javascript('$ThemeDir/js/main.js') %>
    <!--</Prod>-->
    <!--<Dev>-->
    <% include DesignHelper %>
    <script src="$ThemeDir/js/main.js"></script>
    <!--</Dev>-->
    <% include BrowserWarning %>
  </body>

</html>

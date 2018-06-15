<!DOCTYPE html>
<html lang="$ContentLocale">
  <% include Head %>

  <body>
    <div class="l-wrap">
      <% include Header %>
      <main>
        $Layout
      </main>
      <% include Footer %>
    </div>

    <% include DesignHelper %>

    <%-- This script tag is for watching via webpack as js files are virtual --%>
    <%-- Will be removed for `prod` or `build` and required via Page.php --%>
    <!--<RemoveProd>-->
    <% include DesignHelper %>
    <script src="$ThemeDir/js/main.js"></script>
    <!--</RemoveProd>-->
    <% include BrowserWarning %>
  </body>

</html>

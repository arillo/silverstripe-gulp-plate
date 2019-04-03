<!DOCTYPE html>
<html lang="$ContentLocale">
  <% include Head %>

  <body>
    <% include Header %>
    <main>
      $Layout
    </main>
    <% include Footer %>

    <!--<Prod>-->
    <%--
      This block will only be included in prod builds.
      `%themedir%` will be replaced with the theme directory name.
    --%>
    <% require javascript('/resources/themes/%themedir%/js/main.js') %>
    <!--</Prod>-->

    <!--<Dev>-->
    <%--
      This block will only be included in dev / watch builds.
      The `main.js` file is loaded via a script tag as watching via webpack creates virtual files,
      thus a regular SilverStripe `require` will not work as the file does not exist on disk
    --%>
    <% include DesignHelper %>
    <script src="$ThemeDir/js/main.js"></script>
    <!--</Dev>-->

    <% include BrowserWarning %>
  </body>

</html>

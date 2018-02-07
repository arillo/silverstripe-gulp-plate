<!DOCTYPE html>
<html lang="$ContentLocale">
  <% include Head %>

  <body>
    <% include BrowserWarning %>
    <div class="l-wrap">
      <% include Header %>
      <main>
        $Layout
      </main>
      <% include Footer %>
    </div>

    <% include DesignHelper %>

    $SiteConfig.GoogleAnalytics
    <%-- Include script via SilverStripe for better cache busting --%>
    <script src="$ThemeDir/js/main.js"></script>
  </body>

</html>

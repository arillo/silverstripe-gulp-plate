<!DOCTYPE html>
  <html lang="$ContentLocale">
  <head>
    <% base_tag %>
    <title>$SiteConfig.Title</title>
    <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    $MetaTags(false)

    <%-- <link rel="apple-touch-icon" href="{$BaseHref}apple-touch-icon.png"> --%>
    <%-- <meta name="msapplication-TileColor" content="#D8262E"> --%>
    <%-- <meta name="msapplication-TileImage" content="{$BaseHref}tile.png"> --%>
    <%-- <meta content="{$BaseHref}favicon.ico" itemprop="image"> --%>
    <%-- <link rel="icon" href="{$BaseHref}favicon.ico" type="image/x-icon"> --%>

    $CSS(main)
    <script src="{$BaseHref}$ThemeDir/js/lib/modernizr.js"></script>
  </head>

  <body class="security">
    <div class="security_box">
      <h1 class="page_title"><a href="$BaseURLForLocale">$SiteConfig.Title</a></h1>
      <div class="security_content">
        <% if $Content %>$Content<% end_if %>
        <% if $Form %>$Form<% end_if %>
      </div>
      <a class="security_back" href="$BaseURLForLocale">&laquo; Home</a>
    </div>
    $SiteConfig.GoogleAnalytics
  </body>
</html>

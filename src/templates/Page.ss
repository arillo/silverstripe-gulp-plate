<!DOCTYPE html>
<!--[if lte IE 8]>    <html lang="$ContentLocale" class="ie8 lt9 lt10"><![endif]-->
<!--[if IE 9]>        <html lang="$ContentLocale" class="ie9 lt10"><![endif]-->
<!--[if gt IE 9]><!--><html lang="$ContentLocale"><!--<![endif]-->
  <head>
    <% base_tag %>
    <title><% if $ClassName == "WTKStartPage" %>$SiteConfig.Title<% else %>$Title / $SiteConfig.Title<% end_if %></title>
    <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    $MetaTags(false) $ShareMetaTags

    <%-- <link rel="apple-touch-icon" href="{$BaseHref}{$ThemeDir}/images/apple-touch-icon.png"> --%>
    <%-- <meta name="msapplication-TileColor" content="#D8262E"> --%>
    <%-- <meta name="msapplication-TileImage" content="{$BaseHref}{$ThemeDir}/images/tile.png"> --%>
    <%-- <meta content="{$BaseHref}{$ThemeDir}/images/favicon.ico" itemprop="image"> --%>
    <%-- <link rel="icon" href="{$BaseHref}{$ThemeDir}/images/favicon.ico" type="image/x-icon"> --%>

    <% require themedCSS("main") %>
  </head>

  <body>
    <div class="l-wrap">
      <i class="i i-facebook"></i>
      <svg class="i i-facebook ">
      <use xlink:href="$ThemeDir/images/sprite.svg#facebook"></use>
    </svg>
      <% include Header %>
      $Layout
      <% include Footer %>
    </div>
    $SiteConfig.GoogleAnalytics
    <% if $CurrentMember %>
      <% include DesignHelper %>
    <% end_if %>
    <script src="$ThemeDir/js/main.js"></script>
  </body>

</html>
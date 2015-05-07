<!DOCTYPE html>
<!--[if lte IE 8]>    <html lang="$ContentLocale" class="ie8 lt9 lt10"> <![endif]-->
<!--[if IE 9]>        <html lang="$ContentLocale" class="ie9 lt10"> <![endif]-->
<!--[if gt IE 9]><!--><html lang="$ContentLocale"> <!--<![endif]-->
  <head>
    <% base_tag %>
    <title><% if $ClassName == "WTKStartPage" %>$SiteConfig.Title<% else %>$Title / $SiteConfig.Title<% end_if %></title>
    <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    $MetaTags(false) $ShareMetaTags

    <%-- <link rel="apple-touch-icon" href="{$BaseHref}apple-touch-icon.png"> --%>
    <%-- <meta name="msapplication-TileColor" content="#D8262E"> --%>
    <%-- <meta name="msapplication-TileImage" content="{$BaseHref}tile.png"> --%>
    <%-- <meta content="{$BaseHref}favicon.ico" itemprop="image"> --%>
    <%-- <link rel="icon" href="{$BaseHref}favicon.ico" type="image/x-icon"> --%>

    $CSS(main)
    <%-- // <script src="{$BaseHref}$ThemeDir/js/lib/modernizr.js"></script> --%>
  </head>

  <body data-page="<% if $Template %>$Template<% else %>$TemplateClassName<% end_if %>">
    <div class="l-wrap">
      <% include Header %>
      <div class="g-row">
        <div class="g g-lg-12 test">
          $Layout
        </div>
      </div>
      <% include Footer %>
    </div>
    $SiteConfig.GoogleAnalytics
    <% include DesignHelper %>
    <script src="$ThemeDir/js/main.js"></script>
  </body>

</html>
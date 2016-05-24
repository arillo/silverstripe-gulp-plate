<head>
  <% base_tag %>
  <title><% if $ClassName == "WTKStartPage" %>$SiteConfig.Title<% else %>$Title / $SiteConfig.Title<% end_if %></title>
  <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  $MetaTags(false) $ShareMetaTags

  <%-- Include favicons here http://realfavicongenerator.net/ --%>

  <% require themedCSS("main") %>
</head>
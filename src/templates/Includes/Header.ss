<header>
  <div class="l-container">
    <p>$SiteConfig.Title</p>

    <ul>
      <% loop Menu(1) %>
        <li><a href="$Link" class="$LinkingMode">$MenuTitle</a></li>
      <% end_loop %>
    </ul>

    <% if Locales.count > 1 %>
      <p>Current Locale: $LocaleInformation($CurrentLocale).Alias</p>
      <ul>
        <% loop Locales %>
          <li><a href="$Link.ATT" class="$LinkingMode"<% if $LinkingMode != 'invalid' %> rel="alternate" hreflang="$LocaleRFC1766"<% end_if %>>$Alias</a></li>
        <% end_loop %>
      </ul>
    <% end_if %>
  </div>
</header>

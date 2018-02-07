<svg class="i i-{$Icon} $Class">
  <% if $IconTitle %>
    <title>$IconTitle</title>
  <% end_if %>
  <use xlink:href="{$ThemeDir}/images/sprite.svg#{$Icon}"></use>
</svg>

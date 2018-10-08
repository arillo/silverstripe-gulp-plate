<div class="l-container">
  <h1><% if $ErrorCode %>$ErrorCode - <% end_if %>$Title</h1>

  <% if $Content %>
    <div class="typography">
      $Content
    </div>
  <% end_if %>

  <% if $Form %>
    <div class="ss-form">
      $Form
    </div>
  <% end_if %>
</div>

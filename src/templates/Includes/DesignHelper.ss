<style type="text/css">
  #DesignHelper{
    background: rgba(0,0,0,0.25);
    padding: 5px 10px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 2000000;
    font-size: 11px;
    line-height: 16px;
    color: #FFF;
  }

  #Grid {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    opacity: .3;
    z-index: 20000;
    display: none;
    pointer-events: none;
  }

  .fillupelement {
    background: lightblue;
    height: 100vh;
  }

  #Grid.show {
    display: block;
  }
</style>


<div id="Grid">
  <div class="l-container">
  <div class="g-row fillgrid">
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
    <div class="g g-1"><div class="fillupelement"></div></div>
  </div>
  </div>
</div>
<div id="DesignHelper">$ClassName – [$ID]<% if $Template %><br />Template: $Template<% end_if %></div>

<script>
  (function() {
    var dh = document.getElementById('DesignHelper');
    var g = document.getElementById('Grid');

    var toggle = function(){
      g.classList.toggle("show");
    };

    dh.addEventListener('click', toggle, false);

  })();
</script>
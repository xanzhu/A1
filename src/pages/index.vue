<template>
  <main>
    <p class="version-date">
      A1 - APRIL 2020
    </p>
    <h1 class="title">
      XANZHU
    </h1>
    <p>We're currently updating our website.</p>
    <p>Check back soon.</p>
        <p class="Background-Credit">
      <a
        href="https://www.pexels.com/photo/photo-of-northern-lights-1819656/"
        target="_blank"
      >Photo by Tobias Bjørkli</a>
    </p>
  </main>
</template>
<!-- Matomo (Experimenting)-->
<script type="text/javascript">
  var _paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setDomains", ["*.xanzhu.com"]]);
  _paq.push(["disableCookies"]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://xanzhu.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.matomo.cloud/xanzhu.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="https://xanzhu.matomo.cloud/matomo.php?idsite=1&amp;rec=1" style="border:0;" alt="" /></p></noscript>
<!-- End Matomo Code -->
<style>
body, html {
    height: calc(100% - 2em);
    margin: 0;
    font-family: 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    margin-top: 2em;
    color: #fff;
    line-height: 1.7em;
    font-size: 1.1em;
    text-align: center;
    overflow: hidden;
    background-color:#0a181c;
    background-image: url('~static/Green.jpg');
    background-repeat: no-repeat;
    background-position: top center;
    background-attachment: fixed;
    -webkit-background-size: cover;
       -moz-background-size: cover;
         -o-background-size: cover;
            background-size: cover;
}

.version-date {
    display: none;
}

main {
    padding: 4em 1.3em;
}

h1 {
    margin: 0;
    padding-bottom: 1em;
    font-size: 3em;
}
p {
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.4px;
    font-size: 1.4em;
}

a {
    text-decoration: none;
    color: rgb(250, 237, 54);
    font-size: 16px;
    letter-spacing: 2px;
}

a:hover {
    opacity: 0.7;
}

@media only screen and (min-width: 768px){

    body, html {
        margin: 0;
        padding: 0;
        text-align: left;
    }

    main {
        line-height: 1.7em;
        padding: 4em;
        margin: 11em 2em 8em;
    }

    h1 {
        font-size: 5em;
        padding-bottom: 0.3em;
    }
    p {
        font-size: 1.7em;
    }

    .version-date {
    display: block;
    padding-bottom: 1em;
    font-size: 1em;
    font-weight: bold;
    }
}
</style>

<template>
<b-footer footer class="page-footer font-small blue pt-4" type="light">
  <div class="container-fluid text-center text-md-left shadow-sm top-shadow bg-dark navbar fixed-bottom">
    <div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
      <b-badge variant="dark"><h5>DominicanWho.Codes</h5></b-badge>
        <p>Open source project inspired in <a href="https://indianswhodesign.in">Indians
Who Design</a>, made to expose all the developers from the Dominican Republic with their skills and contacts.</p>
      </div>
      <hr class="clearfix w-100 d-md-none pb-3">
      <div class="col-md-3 mb-md-0 mb-3">
        <b-badge variant="dark"><h5>Links</h5></b-badge>
        <ul class="list-unstyled">
          <li>
            <a href="https://github.com/VueDominicana/DominicanWhoCodes">GitHub</a>
          </li>
          <li>
            <a href="https://chat.whatsapp.com/L5rFQpme22IHmmyOMI1MWA">WhatsApp</a>
          </li>
          <li>
            <a href="http://www.dominicanwho.codes.s3-website-us-east-1.amazonaws.com/">Amazon S3 Bucket</a>
          </li>
          <li>
            <a href="http://dominicanwhocodes.azurewebsites.net/">Azure WebApp</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</b-footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>

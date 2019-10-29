<template>
    <div>
  <b-navbar toggleable="lg" type="light" variant="info" class="shadow-sm bg-dark bottom-shadow" >
    <b-navbar-brand href="#"><b-badge variant="dark"><h3>DominicanWho.Codes</h3></b-badge></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
    <b-navbar-nav right>
        <b-nav-item href="#"><b-navbar-brand href="#"><b-badge variant="dark"><h4>About</h4></b-badge></b-navbar-brand></b-nav-item>
      </b-navbar-nav>
     <b-navbar-nav right>
        <b-nav-item href="#"><b-navbar-brand href="#"><b-badge variant="dark"><h4>Nominate</h4></b-badge></b-navbar-brand></b-nav-item>
      </b-navbar-nav>
    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

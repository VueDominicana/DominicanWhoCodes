<template>
    <div>
  <b-navbar toggleable="lg" type="light" variant="info" class="shadow-sm bg-white" >
    <b-navbar-brand href="#"><b-badge variant="dark">DominicanWho.Codes</b-badge></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
     <b-navbar-nav right>
        <b-nav-item class="text-dark font-weight-bold" href="https://github.com/VueDominicana/DominicanWhoCodes" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/> About</b-nav-item>
        <b-nav-item href="#">Nominate</b-nav-item>
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

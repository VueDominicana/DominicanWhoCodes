<template>
  <div class="home container">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <developer-card />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DeveloperCard from '@/components/DeveloperCard.vue'

export default {
  name: 'CardExample',
  components: {
    DeveloperCard
  }
}
</script>

<template>
  <div class="home container">
    <div class="developers-container">
        <developer-card
          v-for="(developer, index) in developers"
          :developer="developer"
          :key="index" />
    </div>
  </div>
</template>

<script>
import DeveloperCard from '@/components/DeveloperCard.vue'

export default {
  name: 'DevelopersList',
  components: {
    DeveloperCard
  },
  data() {
    return {
      developers: []
    }
  },
  created() {
    this.fetchDevelopers()
  },
  methods: {
    fetchDevelopers() {
      axios.get("/developers").then(({ data: developers }) => {
        this.sortDevelopers(developers);
      }).catch(error => {
        console.error(error);
      })
    },
    sortDevelopers(developers) {
      const sortedDevelopers = developers.sort((a, b) => a.name.localeCompare(b.name, 'es', {ignorePunctuation: true}));

      this.developers = sortedDevelopers;
    }
  }
}
</script>

<style lang="scss" scope>
  .developers-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
<template>
  <div class="home container">
    <div v-if="loading">
      <loading-animation></loading-animation>
    </div>
    <div v-else class="developers-container">
        <developer-card
          v-for="(developer, index) in developers"
          :developer="developer"
          :key="index" />
    </div>
  </div>
</template>

<script>
import DeveloperCard from '@/components/DeveloperCard.vue'
import LoadingAnimation from "@/components/LoadingAnimation.vue"

export default {
  name: 'DevelopersList',
  components: {
    DeveloperCard,
    LoadingAnimation
  },
  data() {
    return {
      developers: [],
      loading: false
    }
  },
  created() {
    this.fetchDevelopers()
  },
  methods: {
    fetchDevelopers() {
      this.loading = true;
      axios.get("/developers").then(({ data: developers }) => {
        this.sortDevelopers(developers);
        this.loading = false;
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
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    justify-content: center;
    transition: all ease .3s;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .developers-container {
      grid-template-columns: repeat(auto-fill, minmax(220px, 220px));
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    .developers-container {
      grid-template-columns: repeat(auto-fill, minmax(210px, 210px));
    }
  }

  @media screen and (max-width: 575px) {
    .developers-container {
      grid-template-columns: 0.85fr;
    }
  }
</style>
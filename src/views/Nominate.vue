<template>
  <div class="nominate">
    <div class="nominate__section">
      <div class="nominate__content-wrapper">
        <h1 class="nominate__title">
          Nominate a <span class="nominate__highlight">developer</span>
        </h1>
        <p class="nominate__body-text">
          Help us build the directory of Developers thriving in the field of
          programming. If you know someone who deserves to be on the list,
          nominate them by clicking the Nominate button and filling the form.
          And hey, it's alright to nominate yourself. 😎
        </p>

        <NominateForm />

      </div>
    </div>
  </div>
</template>
<script>

import NominateForm from '@/components/FormNominate.vue'

export default {
  name: "Nominate",
  components: {
      NominateForm
  },

};
</script>
<style lang="scss" scoped>
.nominate {
  margin-top: 33px;
    font-family: Poppins, Source Sans Pro, sans-serif;
    
  &__section {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5rem;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 720px;
    align-items: baseline;
  }

  &__title {
    font-size: 3rem;
    margin: 5rem 0 2rem;
    font-weight: bold;
    color: #fff;
  }

  &__body-text {
    font-size: 0.97rem;
    text-align: justify;
    margin: 0;
    color: #fff;
  }

  &__highlight {
    color: #909090;
  }
}

</style>
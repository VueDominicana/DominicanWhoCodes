<template>
  <div class="campos mt-3 pt-4 w-100 text-left" id="nominate">
    <div class="row flex-wrap">
      <div class="col-lg-6 col-md-12 my-2">
        <label class="text-white">User Name *</label>
        <input
          type="text"
          class="form-control"
          placeholder="@example02"
          v-model="form.nameUser"
        />
      </div>
      <div class="col-lg-6 col-md-12 my-2">
        <label class="text-white">Url of your Github profile *</label>
        <input
          type="text"
          class="form-control"
          placeholder="https://github.com/example02"
          v-model="form.urlGithub"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 my-2">
        <label class="text-white">Url of your Twitter profile</label>
        <input
          type="text"
          class="form-control"
          placeholder="https://twitter.com/example02"
          v-model="form.urlTwitter"
        />
      </div>
      <div class="col-lg-6 col-md-12 my-2">
        <label class="text-white">Url of your Linkedin profile </label>
        <input
          type="text"
          class="form-control"
          placeholder="https://www.linkedin.com/in/emxaple02"
          v-model="form.urlLinkedin"
        />
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <label class="text-white">Make a brief description</label>
      </div>
      <div class="col-12">
        <textarea class="form-control" v-model="form.descripcion"></textarea>
      </div>
      <div class="col-12 text-center mt-3" v-if="errorForm === true">
        <small class="d-block text-danger"> Fill in all the fields * </small>
      </div>
      <div class="col-12 mt-3">
        <a
          href="#nominate"
          rel="noreferrer"
          class="btn secundary block"
          @click="sendNominate"
        >
          Send
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NominateForm",
  data() {
    return {
      form: {
        nameUser: "",
        urlGithub: "",
        urlTwitter: "",
        urlLinkedin: "",
        descripcion: "",
      },
      errorForm: false,
    };
  },
  methods: {
    sendNominate() {
      if (
        this.form.nameUser === "" ||
        this.form.urlGithub === "" ||
        this.form.urlTwitter === "" ||
        this.form.urlLinkedin === "" ||
        this.form.descripcion === ""
      ) {
        this.errorForm = true;
        return;
      }
      this.errorForm = false;
    },
  },
};
</script>
<style>
.campos {
  width: 100%;
  transition: ease-in-out 0.9s;
  font-family: Poppins, Source Sans Pro, sans-serif;
  font-weight: bold;
}
.campos input,
textarea {
  font-weight: normal;
  font-size: 14px;
}
</style>>
import Vue from 'vue'
import Vuex from 'vuex'
import developers from "./modules/developers.js"

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
		developers
	},
	strict: debug,
})

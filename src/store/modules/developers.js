const state = () => ({
	developersURL: "https://raw.githubusercontent.com/AngelGarcia13/DominicanWhoCodes/master/DWC.Blazor/wwwroot/data/developers.json",
	allDevelopers: [],
});

const getters = {
	getAllDevelopers(state) {
		return state.allDevelopers;
	}
};

const mutations = {
	setAllDevelopers(state, payload) {
		state.allDevelopers = payload;
	},

	sortAllDevelopersByName(state) {
		const developers = state.allDevelopers;
		const options = { ignorePunctuation: true }
		developers.sort((a, b) => a.name.localeCompare(b.name, "es", options));
		state.allDevelopers = developers;
	},
};

const actions = {
	fetchAllDevelopers({ state, commit }) {
		axios.get(state.developersURL)
			.then((response) => {
				commit("setAllDevelopers", response.data);
				commit("sortAllDevelopersByName");
			})
			.catch(error => {
				/* eslint-disable no-console */
				console.error(error);
			})
	}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

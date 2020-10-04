<template>
    <div>
        <SubHeading/>
        <section class="home container">
            <div v-if="!allDevelopers.length">
                <loading-screen />
            </div>
            <div v-else class="developers-container">
                <developer-card
                    v-for="(developer, index) in allDevelopers"
                    :developer="developer"
                    :key="index"
                />
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DeveloperCard from "@/components/DeveloperCard";
import LoadingScreen from "@/components/LoadingScreen";
import SubHeading from '@/components/SubHeading';

export default {
    name: "DevelopersList",
    components: {
        DeveloperCard,
        LoadingScreen,
        SubHeading
    },
    created() {
        this.fetchAllDevelopers();
    },
    computed: mapGetters({
        allDevelopers: "developers/getAllDevelopers",
    }),
    methods: mapActions({
        fetchAllDevelopers: "developers/fetchAllDevelopers",
    }),
};
</script>

<style lang="scss" scoped>
.developers-container {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    justify-content: center;
    transition: all ease 0.3s;
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

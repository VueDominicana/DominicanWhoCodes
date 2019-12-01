<template>
    <div>
        <SubHeading/>
        <div class="home container">
            <div v-if="isLoading">
                <loading-screen></loading-screen>
            </div>
            <div v-else class="developers-container">
                <developer-card
                    v-for="(developer, index) in developers"
                    :developer="developer"
                    :key="index"
                />
            </div>
        </div>
    </div>
</template>

<script>
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
    data() {
        return {
            developers: [],
            isLoading: false
        };
    },
    created() {
        this.fetchDevelopers();
    },
    methods: {
        fetchDevelopers() {
            this.isLoading = true;
            const developersURL =
                "https://raw.githubusercontent.com/AngelGarcia13/DominicanWhoCodes/master/DWC.Blazor/wwwroot/data/developers.json";
            axios
                .get(developersURL)
                .then(({ data: developers }) => {
                    this.sortDevelopers(developers);
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        sortDevelopers(developers) {
            const sortedDevelopers = developers.sort((a, b) =>
                a.name.localeCompare(b.name, "es", { ignorePunctuation: true })
            );

            this.developers = sortedDevelopers;
        }
    }
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

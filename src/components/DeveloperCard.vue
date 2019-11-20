<template>
<div class="developer-card card">
    <div class="developer-card__image-container">
        <img class="developer-card__image-cover" :src="image" alt="developer image">
    </div>

    <div class="developer-card__body card-body p-3">
        <div class="developer-card__header d-flex align-items-center">
            <div>
                <span class="developer-card__avatar avatar-sm rounded-circle bg-dark text-white">{{ developer.initials }}</span>
            </div>
            <div class="pl-3"><span class="developer-card__name h6 text-sm mb-0">{{ developer.name }}</span></div>
        </div>

        <section class="developer-card__skills" ref="skills">
            <div class="info-space">
                <span v-for="skill in skillList" :key="skill" class="badge badge-dark badge-pill">{{ skill }}</span>
                <span v-if="haveMoreSkills" class="badge badge-dark badge-pill"
                    @click="showAll = !showAll"
                    :title="showAll ? 'show less' :'show more'"> 
                    <font-awesome-icon :icon="showAll ? 'times' :'ellipsis-h'" />
                </span>
            </div>
        </section>

        <div class="developer-card__description">
            <p class="text-muted text-monospace">
                <small :title="developer.summary">{{ developer.summary }}</small>
            </p>
        </div>

        <div class="developer-card__social-networks">
            <a
                v-if="developer.webpage"
                :href="developer.webpage"
                :title="developer.webpage | extractUsernameFromUrl"
                target="_blank"
                class="text-dark">
                <font-awesome-icon icon="globe-americas" />
            </a>
            <a
                v-if="developer.linkedin"
                :href="developer.linkedin"
                :title="developer.linkedin | extractUsernameFromUrl"
                target="_blank"
                class="text-dark">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a
                v-if="developer.twitter"
                :href="developer.twitter"
                :title="developer.twitter | extractUsernameFromUrl"
                target="_blank"
                class="text-dark">
                <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a
                v-if="developer.github"
                :href="developer.github"
                :title="developer.github | extractUsernameFromUrl"
                target="_blank"
                class="text-dark">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
        </div>
    </div>
</div>
</template>

<script>

export default {
    props: {
        developer: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            skillsHeight: 0,
            showAll: false
        }
    },
    mounted() {
        // we need know if the developer have more than a row of skills to show the toggle
        this.skillsHeight = this.$refs.skills.clientHeight;
    },
    computed: {
        skills() {
            return this.developer.skills.split(',').map(skill => skill.trim());
        },

        skillList() {
            // we need to show the first two if the developer have more than a row of skills
            if (!this.showAll && this.skillsHeight > 38) {
                return this.skills.slice(0, 2);
            } else {
                return this.skills;
            }
        },

        haveMoreSkills() {
            if (this.skills.length > this.skillList.length) {
                return 1;
            } else if (this.showAll) {
                return 2;
            }
            return 0;
        },

        image() {
            const localImage = "data/devs-pics/";
            return this.developer.image.replace(localImage,`http://www.dominicanwho.codes/${localImage}`)
        }
    }
}
</script>

<style lang="scss" scoped>

.developer-card {
    border: 1px #ddd solid; 
    border-radius: 0.5rem;
    box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.03);
    transition: all ease .3s;
    width: 100%;
    height: auto;
    overflow: hidden;

    &:hover {
        transform: scale(1.02);
        z-index: 1000;
        box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.3);

        .developer-card__image-cover{
            filter: none;
        }
    }

    &__image-cover {
        border-top-left-radius: calc(0.5rem - 1px);
        border-top-right-radius: calc(0.5rem - 1px);
        filter: grayscale(100%);
        transition: all 375ms ease-in-out;
        width: 100%;
        height: 20rem;
        object-fit: cover;
    }

    &__body {
        text-align: left;
    }

    &__header {
        margin-bottom: 2px;
    }

    &__avatar {
        position: relative;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        font-size: 1rem;
        font-weight: 600;
        height: 3.125rem;
        width: 3.125rem;
        border-radius: 0.375rem;
    }

    &__name {
        display: flex;
        text-align: left;
    }

    &__skills {
        margin: 0.3rem 0;
        min-height: 35px;
        overflow: hidden;
        transition: all ease .3s;

        .info-space .badge {
            margin: 2px 2px;
            padding: 5px;
        }
    }

    &__description {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        scrollbar-width: thin;

        small {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 16px;
            max-height: 64px;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }
    }

    &__social-networks {
        font-size: x-large;
        display: flex;
        justify-content: space-evenly;
    }
}
.developer-card:last-child {
    margin-right: 0;
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 
    .developer-card {
        &__image-cover {
            height: 24rem;
        }
    }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
    .developer-card {
        &__image-cover {
            height: 12rem;
        }
    }
}

</style>
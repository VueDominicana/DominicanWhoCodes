<template>
    <div class="card developer-card mb-3">
    <div class="h-100"><img class="card-img-top" :src="developer.image" alt="Card image cap"></div>
    <div class="card-body p-3">
        <div class="d-flex align-items-center info-space">
            <div>
                <span class="avatar avatar-sm rounded-circle bg-dark text-white">{{ developer.initials }}</span>
            </div>
            <div class="pl-3"><span class="h5 text-sm mb-0">{{ developer.name }}</span></div>

        </div>
        <section class="info-skills">
            <div class="info-space">
                <span v-for="skill in skillList" :key="skill" class="badge badge-dark badge-pill">{{ skill }}</span>
            </div>
        </section>
        <div class="description-space">
            <p class="text-muted text-monospace ">
                <small>{{ developer.summary }}</small>
            </p>
        </div>
        <div class="social-networks">
            <a v-if="developer.webpage" :href="developer.webpage" target="_blank" class="text-dark"><font-awesome-icon icon="globe-americas" /></a>
            <a v-if="developer.linkedIn" :href="developer.linkedIn" target="_blank" class="text-dark"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            <a v-if="developer.twitter" :href="developer.twitter" target="_blank" class="text-dark"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a v-if="developer.github" :href="developer.github" target="_blank" class="text-dark"><font-awesome-icon :icon="['fab', 'github']" /></a>
        </div>
    </div>
</div>
</template>

<script>
const developer = {
    name: 'John Doe',
    initials: 'JD',
    image: 'https://avatars3.githubusercontent.com/u/499550?s=400&v=4',
    summary: 'This is a test summary',
    skills: 'Vue, React, Angular',
    webpage: 'test.com',
    linkedIn: 'linkedin.com',
    twitter: 'twitter.com',
    github: 'github.com'
}

export default {
    props: {
        developer: {
            type: Object,
            default() {
                return {...developer}
            }
        }
    },
    computed: {
        skillList() {
            return this.developer.skills.split(',').map(skill => skill.trim());
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
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        z-index: 1000;
        box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.3);


        .card-img-top{
            filter: none;
        }
    }
}

.card-img-top {
    border-top-left-radius: calc(0.5rem - 1px);
    border-top-right-radius: calc(0.5rem - 1px);
    filter: grayscale(100%);
    transition: all 375ms ease-in-out;
    width: 100%;
    height: 15vw;
    object-fit: cover;
    object-position: 0 -10px;
}


.avatar {
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

.info-skills {
    margin: 0.3rem 0;
    height: 35px;
    overflow: hidden;

    .info-space .badge {
        margin: 0 2px;
    }
}

.description-space {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    scrollbar-width: thin;
}

.social-networks {
    font-size: x-large;
    display: flex;
    justify-content: space-around;
}
</style>
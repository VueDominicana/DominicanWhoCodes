<template>
    <div>
        <b-navbar
            toggleable="lg"
            type="dark"
            variant="info"
            class="shadow-sm bg-dark"
            fixed="top"
        >
            <router-link to="/" class="navbar-brand">
                <b-badge variant="dark">DominicanWho.Codes</b-badge>
            </router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav right>
                        <b-nav-item
                            class="font-weight-bold active"
                            href="https://github.com/VueDominicana/DominicanWhoCodes"
                            target="_blank"
                        >
                            <font-awesome-icon :icon="['fab', 'github']" /> About
                        </b-nav-item>
                        <li class="nav-item">
                            <router-link to="nominate" variant="dark" class="btn font-weight-bold btn-dark">Nominate</router-link>
                        </li>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    name: "Header"
};
</script>

<style lang="scss" scoped>
.bg-dark {
    background-color: #111 !important;
}
</style>

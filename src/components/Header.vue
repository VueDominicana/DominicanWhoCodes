<template>
    <div>
        <b-navbar
            toggleable="lg"
            type="light"
            variant="info"
            class="shadow-sm bg-white"
            fixed="top"
        >
            <b-navbar-brand href="/">
                <b-badge variant="dark">DominicanWho.Codes</b-badge>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav right>
                        <b-nav-item
                            class="font-weight-bold active"
                            href="https://github.com/VueDominicana/DominicanWhoCodes"
                            target="_blank"
                        >
                            <font-awesome-icon :icon="['fab', 'github']" />About
                        </b-nav-item>
                        <li class="nav-item">
                            <b-button href="/nominate" variant="dark" class="font-weight-bold">Nominate</b-button>
                        </li>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Header"
};
</script>

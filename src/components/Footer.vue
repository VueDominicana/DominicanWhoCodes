<template>
    <div class="container">
        <footer class="pt-4 my-md-5 pt-md-5 border-top mt-4">
            <div class="row">
                <div class="col-12 col-md">
                    <h5 class="font-weight-normal">
                        <kbd>DominicanWho.Codes</kbd>
                    </h5>
                    <small class="d-block mb-3 text-light">© {{ new Date().getFullYear() }}</small>
                </div>
                <div class="col-6 col-md">
                    <h5>Features</h5>
                    <ul class="list-unstyled text-small">
                        <li>
                            <a class="text-light" href="#">Cool stuff</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Random feature</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Team feature</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Stuff for developers</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Another one</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Last time</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>Resources</h5>
                    <ul class="list-unstyled text-small">
                        <li>
                            <a class="text-light" href="#">Resource</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Resource name</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Another resource</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Final resource</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>About</h5>
                    <ul class="list-unstyled text-small">
                        <li>
                            <a class="text-light" href="#">Team</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Locations</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Privacy</a>
                        </li>
                        <li>
                            <a class="text-light" href="#">Terms</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "FooterItem"
};
</script>
<style lang="scss" scoped>
.container {
    text-align: left;
    h5 {
        font-weight: 700;
        color: #909090;
    }
}
</style>

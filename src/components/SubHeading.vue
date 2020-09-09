<template>
    <div class="container">
        <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
            <h3 class="text-white">DominicanWho.<span class="highlight">Codes</span></h3>
            <p class="lead text-monospace text-white">Dominican Developers <img src="https://twemoji.maxcdn.com/2/72x72/1f1e9-1f1f4.png" /> who like to code and contribute to Open Source <img src="https://twemoji.maxcdn.com/2/72x72/2764.png" /></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SubHeading"
}
</script>

<style lang="scss" scoped>
    p, h3 {
        text-align: left;
    }
    .highlight{
        color:#909090;
    }

    img {
        width: 30px;
    }
    .container{
        margin-top: 33px;
    }
</style>

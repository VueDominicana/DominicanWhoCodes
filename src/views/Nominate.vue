<template>
    <div class="container">
        <div class="nominate-container">
            <div class="content-wrapper">
                <h1 class="title-nominate">
                    Nominate a <span class="highlight">developer</span>
                </h1>
                <p class="body-text">
                    Help us build the directory of Developers thriving in the field of programming.
                    If you know someone who deserves to be on the list, nominate them by clicking the Nominate button and filling the form.
                    And hey, it's alright to nominate yourself😎
                </p>
                <a href="#" rel="noreferrer" class="nominate-button btn primary">Nominate</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        margin-top: 33px;
    }

    .nominate-container {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 5rem;
    }

    .content-wrapper {
        display: flex;
        flex-direction: column;
        max-width: 720px;
        align-items: baseline;
    }

    .body-text {
        font-size: 0.97rem;
        font-family: Poppins, Source Sans Pro, sans-serif;
        text-align: justify;
        margin: 0;
    }

    .title-nominate {
        font-size: 3.0rem;
        margin: 5.0rem 0 2.0rem;
        font-family: Poppins, Source Sans Pro, sans-serif;
        font-weight: bold;
        color: black;
    }

    .nominate-button {
        text-align: center;
        width: 200px;
        display: inline-block;
        height: 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;
        color: #fff;
        background: #343a40;
        border-radius: 6px;
        font-family: "Poppins";
        font-size: 1.3rem;
        margin-top: 50px;
    }

    .btn {
        &.primary {
            background: #343a40;
            outline: none;
            color: #fff;
            padding: 10px;
            border: none;
            justify-content: center;
            transition: var(--transition);
            box-sizing: border-box;
            flex: 1 1 auto;
        }

        &.primary:hover {
            background: black;
        }
    }

    .highlight {
        color: #343a40;
    }
</style>

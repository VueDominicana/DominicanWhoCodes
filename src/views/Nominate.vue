<template>
    <div class="nominate">
        <div class="nominate__section">
            <div class="nominate__content-wrapper">
                <h1 class="nominate__title">
                    Nominate a <span class="nominate__highlight">developer</span>
                </h1>
                <p class="nominate__body-text">
                    Help us build the directory of Developers thriving in the field of programming.
                    If you know someone who deserves to be on the list, nominate them by clicking the Nominate button and filling the form.
                    And hey, it's alright to nominate yourself😎
                </p>
                <a href="#" rel="noreferrer" class="btn primary">Nominate</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .nominate {
        margin-top: 33px;

        &__section {
            display: flex;
            flex: 1 1 auto;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 5rem;
        }

        &__content-wrapper {
            display: flex;
            flex-direction: column;
            max-width: 720px;
            align-items: baseline;
        }

        &__title {
            font-size: 3.0rem;
            margin: 5.0rem 0 2.0rem;
            font-family: Poppins, Source Sans Pro, sans-serif;
            font-weight: bold;
            color: black;
        }

        &__body-text {
            font-size: 0.97rem;
            font-family: Poppins, Source Sans Pro, sans-serif;
            text-align: justify;
            margin: 0;
        }

        &__highlight {
            color: #343a40;
        }
    }
</style>

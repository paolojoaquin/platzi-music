<template>
    <div class="notification">
        <div class="notification__container">
            <div class="container__columns">
                <div :class="cantResults > 0 ? 'is-success' : 'is-danger'">
                    <slot name="body">Algo anduvo mal</slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['cantResults']
}
</script>
<style lang="scss" scoped>
.notification {
    width: 100%;
    height: 70px;
    &__container {
        width: 100%;
        height: 100%;
    }
}
.container__columns {
    display:grid;
    place-items: center;
    height: 100%;
}
.is-danger {
    padding: 10px 30px;
    box-sizing: border-box;
    background: red;
}
.is-success {
    padding: 10px 30px;
    box-sizing: border-box;
    background: #23d160;
}
</style>
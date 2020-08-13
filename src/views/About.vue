<template>
    <div class="about">
        <h1>This is an about page</h1>
        <test></test>
    </div>
</template>
<script>
export default {
    components: {
        test: () => import('../components/test.vue')
    }
}
</script>
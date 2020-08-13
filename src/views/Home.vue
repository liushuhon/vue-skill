<template>
    <div class="home">
        <img alt="Vue logo"
             src="../assets/logo.png">
        <editor></editor>
    </div>
</template>

<script>
// @ is an alias to /src
import editor from '../components/editor';

export default {
    name: 'Home',
    components: {
        editor,
    }
};
</script>

<template>
    <div class="home">
        <img alt="Vue logo"
             src="../assets/logo.png">
             <el-button>aaa</el-button>
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

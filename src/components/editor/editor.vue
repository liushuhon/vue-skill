<template>
  <div
    ref="container"
    class="the-code-editor-container"
  ></div>
</template>

<script>
import { editor, languages, Range } from 'monaco-editor';
export default {
    data() {
        return {
            // monacoInstance: null
        }
    },
    mounted() {
       this.monacoInstance = monaco.editor.create(
    this.$refs["container"], {
        value: this.value,
        ...this.options
    });
    }
}
</script>

<style>
.the-code-editor-container {
    width: 100%;
    height: 500px;
}
</style>
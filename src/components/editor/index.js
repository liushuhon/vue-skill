import ComponentLoading from './loading.vue';

export default () => ({
    component: import('./editor.vue'),
    loading: ComponentLoading,
    error: ComponentLoading,
    delay: 0
});

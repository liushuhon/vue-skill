import ComponentLoading from './Loading.vue';

export default () => ({
    component: import('./Editor.vue'),
    loading: ComponentLoading,
    error: ComponentLoading,
    delay: 0
});

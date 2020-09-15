import elementUI from './element_ui';

const plugins = [
    elementUI,
];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};

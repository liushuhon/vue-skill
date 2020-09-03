import elementUI from './element_ui';
import directive from './directives';

const plugins = [
    elementUI,
    directive
];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};

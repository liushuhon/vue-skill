import antDesign from './directives/ant_design';
import directive from './directives';

const plugins = [
    antDesign,
    directive
];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};

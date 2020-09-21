import {
    Button,
    Icon,
    Table,
    Skeleton,
    Spin,
    Tree,
    Radio
} from 'ant-design-vue';

const components = [
    Button,
    Icon,
    Table,
    Skeleton,
    Spin,
    Tree,
    Radio
];


export default {
    install(Vue) {
        components.forEach(d => {
            Vue.component(d.name, d);
        });
    }
};

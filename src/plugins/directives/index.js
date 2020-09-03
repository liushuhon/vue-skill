import { segmaLoading, inputNumber } from '@segma/segma-directives';

const directives = [
    segmaLoading,
    inputNumber
];

export default {
    install(vue) {
        directives.forEach(d => {
            vue.directive(d.name, d.directive);
        });
    }
};

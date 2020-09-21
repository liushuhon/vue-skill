<template>

    <div class="hello">
        <div>
            <a-button>xxx</a-button>
        </div>
        <div>
            <a-icon type="home" />
            <a-icon type="setting"
                    theme="filled" />
            <a-icon type="smile"
                    theme="outlined" />
            <a-icon type="sync"
                    spin />
            <a-icon type="smile"
                    :rotate="180" />
            <a-icon type="loading" />
        </div>

        <div class="icons-list">
            <icon-font type="icon-tuichu" />
            <icon-font type="icon-facebook" />
            <icon-font type="icon-twitter" />
        </div>
        <div>
            <a-table :columns="columns"
                     :data-source="data">
                <a slot="name"
                   slot-scope="text">{{ text }}</a>
            </a-table>
        </div>
        <div>
        </div>
        <div>
            <a-tree
                v-model="checkedKeys"
                checkable
                :expanded-keys="expandedKeys"
                :auto-expand-parent="autoExpandParent"
                :selected-keys="selectedKeys"
                :tree-data="treeData"
                @expand="onExpand"
                @select="onSelect"
            />
        </div>
        <div>
            <a-radio>Radio</a-radio>
        </div>
    </div>
</template>

<script>
import { Icon } from 'ant-design-vue';
import { data, columns, treeData } from './table_data';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        IconFont
    },
    data() {
        return {
            data,
            columns,
            expandedKeys: ['0-0-0', '0-0-1'],
            autoExpandParent: true,
            checkedKeys: ['0-0-0'],
            selectedKeys: [],
            treeData,
        };
    },
    watch: {
        checkedKeys(val) {
            console.log('onCheck', val);
        },
    },
    methods: {
        onExpand(expandedKeys) {
            console.log('onExpand', expandedKeys);
            // if not set autoExpandParent to false, if children expanded, parent can not collapse.
            // or, you can remove all expanded children keys.
            this.expandedKeys = expandedKeys;
            this.autoExpandParent = false;
        },
        onCheck(checkedKeys) {
            console.log('onCheck', checkedKeys);
            this.checkedKeys = checkedKeys;
        },
        onSelect(selectedKeys, info) {
            console.log('onSelect', info);
            this.selectedKeys = selectedKeys;
        }
    }
};
</script>

<style scoped
       lang="less">
.hello {
    div {
        margin: 10px;
    }

    i {
        padding: 10px;
    }
}

h3 {
    margin: 40px 0 0;
}

</style>
<style>
button[ant-click-animating-without-extra-node]:after {
/*    border: 0 none;
    opacity: 0;
    animation:none 0 ease 0 1 normal;*/
}
</style>

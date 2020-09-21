export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        scopedSlots: { customRender: 'name' },
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 80,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address 1',
        ellipsis: true,
    },
    {
        title: 'Long Column Long Column Long Column',
        dataIndex: 'address',
        key: 'address 2',
        ellipsis: true,
    },
    {
        title: 'Long Column Long Column',
        dataIndex: 'address',
        key: 'address 3',
        ellipsis: true,
    },
    {
        title: 'Long Column',
        dataIndex: 'address',
        key: 'address 4',
        ellipsis: true,
    },
];

export const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 2 Lake Park, London No. 2 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export const treeData = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
    },
];

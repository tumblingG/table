import myInput from "./myInput";
export const columnDefs = [
    {
        title: 'name',
        width: '33%',
        isHTML: true,
        cellTemplate: (data) => `<a href="baidu.com">${data.name}</a>`
    },
    {
        title: 'address',
        width: '33%',
        cellTemplate: () => myInput
    },
    {
        title: 'age',
        width: '33%',
        cellTemplate: (data) => data.age
    },

]

export const tableData = [
    {
        name: '李连杰',
        address: '北京路',
        age: 23
    },
    {
        name: '赵薇',
        address: '上海路',
        age: 55
    },
    {
        name: '知足',
        address: '关注路',
        age: 26
    },

]

import scrollPicker from "./scrollPicker";
const coms = [ scrollPicker ]; // 如果有多个其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
    coms.forEach((com) => {
        Vue.component(com.name, com);
    });
};

export default install;

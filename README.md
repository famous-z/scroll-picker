# vue2-scroll-picker
## 功能
- 适用于vue中实现滚动选择适用于不同步长、单位可进行滚动选择、点击跳转、默认值回显等

## 安装
```
npm i vue2-scroll-picker
```

### 使用
1.在main.js中引入组件以及样式
 - import scrollPicker from 'vue2-scroll-picker'
 - import 'vue2-scroll-picker/scrollPicker.css'
 - Vue.use(scrollPicker)
 
2.组件使用方法
 - rangStart 滚动选择的开始值
 - rangEnd 滚动选择的结束值
 - step 滚动选择的步长
 - unit 滚动选择的单位
 - v-model滚动选择绑定的值（可作为组件默认值）
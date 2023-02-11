<template>
    <div ref="solidBox" id="solidBox" :v-model="dataPopRadio" class="solidBox" @scroll="scrollChange" @mousemove="scrollEnd">
        <ul ref="scrollUl">
            <li
                    v-for="(item, index) in dataPopOption"
                    :key="index"
                    @click="pickerCurrent(index)"
                    :class="index===0?'active':'active2'"
            >{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'scrollPicker1',
        props: {
            rangStart: {
                type: Number
            },
            rangEnd: {
                type: Number
            },
            step: {
                type: Number,
                default: 1
            },
            unit: {
                type: String
            },
            value: {
                type: Number
            }
        },
        data() {
            return {
                dataPopRadio: '',
                dataPopOption: []
            }
        },
        beforeMount() {
            for (let i = this.rangStart; i <= this.rangEnd; i += this.step) {
                this.dataPopOption.push({ label: i + this.unit, value: i })
            }
        },
        mounted() {
            this.$refs.solidBox.scrollTop = this.value * 40
        },
        methods: {
            scrollChange(e) {
                // 首先获取到li元素
                const lis = this.$refs.scrollUl.getElementsByTagName('li')
                // 获取当前中心的li
                const currentLi = Math.round(e.target.scrollTop / 40)
                // 对li元素进行遍历
                for (let i = 0; i < lis.length; i++) {
                    // 对比是否是当前active属性
                    if (i === currentLi) {
                        // 如果是给元素增加"active"的属性
                        lis[i].classList.remove('active2')
                        lis[i].classList.add('active')
                        // 给当前元素以上的元素动态设置文字大小，离当前文字越远，文字大小越小
                        for (let j = 1; j <= i; j++) {
                            lis[i - j].style.fontSize = (14 - j) + 'px'
                        }
                        // 给当前元素以下的元素动态设置文字大小，离当前文字越远，文字大小越小
                        for (let a = 1; a < lis.length - i; a++) {
                            lis[i + a].style.fontSize = (14 - a) + 'px'
                        }
                        // 当没滚动到期待位置时，也就是其他所有元素，移除"active"的样式，增加"active2"的样式
                    } else {
                        lis[i].classList.remove('active')
                        lis[i].classList.add('active2')
                    }
                }
            },
            // 鼠标移动时将高亮节点移至正中心
            scrollEnd() {
                // 首先获取到li元素
                const lis = this.$refs.scrollUl.getElementsByTagName('li')
                // // 对li元素进行遍历
                for (let i = 0; i < lis.length; i++) {
                    if (lis[i].classList[0] === 'active') {
                        // 修改当前值传递给父组件
                        this.$emit('input', this.dataPopOption[i].value)
                        // 将高亮节点移至中心
                        this.$refs.solidBox.scrollTop = i * 40
                    }
                }
            },
            pickerCurrent(ind) {
                // 通过鼠标使选择项为当前高亮项
                this.$refs.solidBox.scrollTop = ind * 40
            }
        }
    }
</script>

<style scoped>
    .solidBox{
        height: 200px;
        width: 60px;
        overflow-y: scroll;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
    }
    .solidBox::-webkit-scrollbar {
        display: none;
    }
    ul {
        padding: 80px 0 80px 0;
        margin: 0;
        background-color: #fff;
    }
    li {
        user-select: none;
        list-style: none;
        line-height: 40px;
        font-size: 13px !important;
        text-align: center;
        opacity: 0.3;
        height: 40px;
        background-color: #fff;
        cursor: pointer;
    }
    .active {
        font-weight: 400;
        font-size: 14px !important;
        color: #6383ff;
        opacity: 1.2 !important;
        top: 150px;
    }
    .active2 {
        color: #333;
        opacity: 0.6 !important;
    }
    .active2:hover{
        background: #f5f7fa;
    }
</style>

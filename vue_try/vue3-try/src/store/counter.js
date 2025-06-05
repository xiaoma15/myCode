import { ref } from 'vue';
import { defineStore } from 'pinia';

export const counter_ = defineStore('counter_', () => {
    const num = ref(100)

    const addNum = () => {
        num.value++
    }

    const notAddNum = () => {
        num.value--
    }

    return { num, addNum, notAddNum }
})

export const counter_1 = defineStore('counter_1', () => {
    const nickName = ref(" 我是小猫 ")
    return { nickName }
})
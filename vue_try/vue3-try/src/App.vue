<script setup>
import { reactive, ref, computed } from 'vue';

import Son1Com from '@/components/Son1Com.vue';
import Son2Com from '@/components/Son2Com.vue';


const state = reactive({
  count: 1
})
const addCount = () => {
  state.count++
}

const data = ref(1)
const addData = () => {
  data.value++
}

const data1 = ref({name: "xiaoma"})
const setName = () => {
  data1.value.name = "xiaoliu"
}

const list = ref([1,2,3,4,5,6])
const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})

const addArr = () => {
  list.value.push(666)
}

import { counter_ } from './store/counter';
import { storeToRefs } from 'pinia';
const store = counter_()
const {num} = storeToRefs(store)

import { counter_1 } from './store/counter';
const nickNameStore = counter_1()
const {nickName} = storeToRefs(nickNameStore)

</script>

<template>
  <div>{{ state.count }}</div>
  <button @click="addCount">增加count</button>

  <div>{{ data }}</div>
  <button @click="addData">增加data</button>

  <div>{{ data1 }}</div>
  <button @click="setName">修改name</button>

  <div>list: {{ list }}</div>
  <div>computedList: {{ computedList }}</div>
  <button @click="addArr">addlist</button>

  <h1>我是根组件 {{ num }} - {{ nickName }}</h1>
  <Son1Com />
  <Son2Com />

</template>

<style scoped>

</style>

<script setup>
import { counter_ } from '@/store/counter';
import { storeToRefs } from 'pinia';
const store = counter_()
const {num} = storeToRefs(store)
const {addNum} = store


</script>

<template>
    <div>
        我是son1 {{ num }}
        <button @click="addNum">+</button>
    </div>
</template>

<style scoped>
</style>
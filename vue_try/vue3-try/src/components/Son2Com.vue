<script setup>
import { counter_ } from '@/store/counter';
import { storeToRefs } from 'pinia';
const store = counter_()
const {num} = storeToRefs(store)
const {notAddNum} = store

</script>

<template>
    <div>
        我是son2 {{ num }}
        <button @click="notAddNum">-</button>
    </div>
</template>

<style scoped>
</style>
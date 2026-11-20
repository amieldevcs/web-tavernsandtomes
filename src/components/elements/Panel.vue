<script setup lang="tsx">

import {ref} from 'vue';

let title = ref('Lorem Ipsum');
let mainTitle = ref('Dolor Sit Amet');

let buttons = ref({});
let instructions = ref('"Sed ut perspiciatis unde omnis iste natus error sit')

</script>

<template>
    <div>
        <h3>{{ title }}</h3>
        <h2>{{ mainTitle }}</h2>

        <p>
            {{ instructions }}
        </p>
        <div>

        </div>
    </div>
</template>

<style>

</style>
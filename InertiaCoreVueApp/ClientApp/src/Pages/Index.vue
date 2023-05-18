<script setup>
import {Head} from '@inertiajs/vue3'

defineProps({user: {type: String}})
</script>

<template>
    <Head title="Welcome"></Head>
    <h1>Welcome</h1>
    <p>Hello, {{ user }}, welcome to your first Inertia app!</p>
</template>
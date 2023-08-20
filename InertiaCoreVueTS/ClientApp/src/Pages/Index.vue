<script setup lang="ts">
import {Head} from '@inertiajs/vue3'
import {Person} from "@/Person";
import {Message} from "@/Message";

interface Props {
    user: Person,
    message: Message
}

defineProps<Props>()
</script>

<template>
    <Head title="Welcome"></Head>
    <h1>Welcome</h1>
    <p>Hello, {{ user.givenName }}, you say: {{ message.msgText }}</p>
</template>
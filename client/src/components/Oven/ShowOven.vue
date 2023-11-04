<template>
    <div>
        <h1>Get Oven By Id</h1>
        <hr>
        <p>{{ oven.id }}</p>
        <p>{{ oven.Name }}</p>
        <p>{{ oven.Size }}</p>
        <p>{{ oven.Price }}</p>
        <p>{{ oven.Watt }}</p>
        <p>
            <button v-on:click="navigateTo('/oven/edit/'+oven.id)">Edit oven</button>
            <button v-on:click="navigateTo('/ovens')">Back</button>
        </p>
        <hr>
    </div>
</template>

<script>

import OvenService from '@/services/OvenService'

export default {

    data() {
        return {
            oven: ""
        }
    },

    methods: {
        navigateTo(route) {
            // ตรง$router ต้องตั้งให้ตรง folder ของ route
            this.$router.push(route)
        }
    },

    async created() {
        try {
            let ovenId = this.$route.params.ovenId
            this.oven = (await OvenService.show(ovenId)).data
        } catch (error) {
            console.log(error)
        }
    }

}

</script>

<style scoped></style>
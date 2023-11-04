<template>
    <div>
        <h1>Create Oven</h1>
        <form v-on:submit.prevent="createOven">
            <p>Name : <input type="text" v-model="oven.Name"></p>
            <p>Size: <input type="text" v-model="oven.Size"> </p>
            <p>Price : <input type="text" v-model="oven.Price"> </p>
            <p>Watt : <input type="text" v-model="oven.Watt"> </p>
            <p><button type="submit">Create oven</button></p>
        </form>
         <button v-on:click="navigateTo('/ovens')">Back</button>
        
        <hr>
    </div>
</template>
<script>

import OvenService from '@/services/OvenService'
export default {
    data() {
        return {
            oven: {
                Name: '',
                Size: '',
                Price: '',
                Watt: '',
            }
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route).catch(err => {})
        },
        async createOven() {
            try {
                await OvenService.post(this.oven)
                this.$router.push('/ovens')
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped></style>
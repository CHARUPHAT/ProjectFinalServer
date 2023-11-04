<template>
    <div>
        <h1>Edit Oven</h1>
        <form v-on:submit.prevent="editOven">
            <p>Name : <input type="text" v-model="oven.OvenName"></p>
            <p>Size: <input type="text" v-model="oven.OvenSize"> </p>
            <p>Price : <input type="text" v-model="oven.OvenPrice"> </p>
            <p>Watt : <input type="text" v-model="oven.OvenWatt"> </p>
            <button v-on:click="navigateTo('/ovens')">กลับ</button>
        </form>
        <hr>
        <div>
            <p>Name: {{ oven.OvenName }}</p>
            <p>Size: {{ oven.OvenSize }}</p>
            <p>Price: {{ oven.OvenPrice }}</p>
            <p>Watt: {{ oven.OvenWatt }}</p>
            <p></p>
        </div>
    </div>
</template>
<script>
import OvenService from '@/services/OvenService'
export default {
    data() {
        return {
            oven: {
                OvenName: '',
                OvenSize: '',
                OvenPrice: '',
                OvenWatt: ''
            }
        }
    },
    methods: {
        async editOven() {
            try {
                await OvenService.put(this.oven)
                this.$router.push({
                    name: 'ovens'
                })
            } catch (err) {
                console.log(err)
            }
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
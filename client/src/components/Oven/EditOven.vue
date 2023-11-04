<template>
    <div>
        <h1>Edit Oven</h1>
        <form v-on:submit.prevent="editOven">
          <p>Name : <input type="text" v-model="oven.Name"></p>
            <p>Size: <input type="text" v-model="oven.Size"> </p>
            <p>Price : <input type="text" v-model="oven.Price"> </p>
            <p>Watt : <input type="text" v-model="oven.Watt"> </p>
            <p><button type="submit">Edit oven</button></p>
          <button v-on:click="navigateTo('/ovens')">Back</button>
      </form>
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
      this.$router.push(route)
    },

    async editOven() {
      try {
        await OvenService.put(this.oven)
        this.$router.push({ name: 'ovens' })
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
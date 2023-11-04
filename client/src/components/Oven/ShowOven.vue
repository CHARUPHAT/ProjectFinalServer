<template>
  <div>
    <div class="Box-Create">
      <div class="tablehead">
        <h1>Get Oven By Id</h1>
      </div>
      <hr />
      <div class="tablec">
        <p> ID : {{ oven.id }}</p>
        <p>Name : {{ oven.Name }}</p>
        <p>Size : {{ oven.Size }}</p>
        <p>Price : {{ oven.Price }} baht</p>
        <p>Watt : {{ oven.Watt }} watt</p>
        <p>
          <button v-on:click="navigateTo('/oven/edit/' + oven.id)">
            Edit oven
          </button>
          <button v-on:click="navigateTo('/ovens')">Back</button>
        </p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import OvenService from "@/services/OvenService";

export default {
  data() {
    return {
      oven: ""
    };
  },

  methods: {
    navigateTo(route) {
      // ตรง$router ต้องตั้งให้ตรง folder ของ route
      this.$router.push(route);
    }
  },

  async created() {
    try {
      let ovenId = this.$route.params.ovenId;
      this.oven = (await OvenService.show(ovenId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.Box-Create {
  background-color: #eeb89b;
  height: 100%;
  padding: 100px;
}
.tablec {
  background-color: #fff1e4;
  border-radius: 50px;
  padding: 30px;
  margin-bottom: 5px;
}
.tablehead{
  background-color: #ffdab9;
  border-radius: 50px;
  padding: 15px;
  margin-bottom: 15px;
}
h1 {
  color: #b58274;
  margin-bottom: 10px;
  font-size: 50px;
  text-decoration: underline;
  padding: 5px;
  font-weight: 500;
}
</style>

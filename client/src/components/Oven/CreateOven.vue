<template>
  <div>
    <div class="Box-Create">
      <div class="tablehead">
        <h1>Create Oven</h1>
      </div>
      <form v-on:submit.prevent="createOven">
        <div class="tablec">
          <p>Name : <input type="text" v-model="oven.Name" /></p>
          <p>Size: <input type="text" v-model="oven.Size" /></p>
          <p>Price : <input type="text" v-model="oven.Price" /> baht</p>
          <p>Watt : <input type="text" v-model="oven.Watt" /> watt</p>
          <p><button type="submit">Create oven</button></p>
          <button v-on:click="navigateTo('/ovens')">Back</button>
        </div>
      </form>
      

      <hr />
    </div>
  </div>
</template>
<script>
import OvenService from "@/services/OvenService";
export default {
  data() {
    return {
      oven: {
        Name: "",
        Size: "",
        Price: "",
        Watt: ""
      }
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route).catch(err => {});
    },
    async createOven() {
      try {
        await OvenService.post(this.oven);
        this.$router.push("/ovens");
      } catch (err) {
        console.log(err);
      }
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

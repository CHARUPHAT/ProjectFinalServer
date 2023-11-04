<template>
    <div class="container-xl">
        <div class="">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col">
                            <b>Oven List</b>
                            <div class="col-btn">
                                <a class="btn btn-secondary" v-on:click="navigateTo('oven/create')"><i
                                        class="material-icons">&#xE147;</i>
                                    <span>Add Oven</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-bg">
                    <table class="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name <i class=""></i></th>
                                <th>Size(W,l,h)</th>
                                <th>Price <i class=""></i></th>
                                <th>Watt</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="oven in ovens" v-bind:key="oven.id">
                                <td>{{ oven.id }}</td>
                                <td>{{ oven.Name }}</td>
                                <td>{{ oven.Size }}</td>
                                <td>{{ oven.Price }}</td>
                                <td>{{ oven.Watt }}</td>

                                <td>
                                    <a class="view" title="View" data-toggle="tooltip"
                                        v-on:click="navigateTo('oven/' + oven.id)"><i class="material-icons">&#xE417;</i>
                                    </a>

                                    <a class="edit" title="Edit" data-toggle="tooltip"
                                        v-on:click="navigateTo('oven/edit/' + oven.id)"><i
                                            class="material-icons">&#xE254;</i>
                                    </a>

                                    <a class="delete" title="Delete" data-toggle="tooltip" v-on:click="deleteOven(oven)"><i
                                            class="material-icons">&#xE872;</i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OvenService from "@/services/OvenService";

export default {
    data() {
        return {
            ovens: ""
        };
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },

        async deleteOven(oven) {
            let result = confirm("Want to delete oven?");
            if (result) {
                try {
                    await OvenService.delete(oven);
                    this.refreshData();
                } catch (err) {
                    console.log(err);
                }
            }
            console.log(oven);
        },
        async refreshData() {
            this.ovens = (await OvenService.index()).data;
        }
    },

    async created() {
        this.ovens = (await OvenService.index()).data;
        console.log(this.ovens);
    }
};
</script>

<style scoped>
.container-xl {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eeb89b;
    height: 100%;
}

.col {
    background-color: #ffdab9;
    width: 100%;
    margin-bottom: 20px;
    padding: 18px;
    border-radius: 20px;
}

.table-bg {
    background-color: #fbe9df;
    border-radius: 20px;
}

.material-icons {
    cursor: pointer;
}
b{
    font-size: 50px;
    color: #E57A72;
}
.view {
    color: #B19CD8;
    
}
.delete{
    color: #E57A72;
}
.edit{
    color: #96CFCF;
}
.btn {
    color: aliceblue;
}

.btn-secondary {
    position: absolute;
    background-color: #e9967a;
    right: 10px;
    bottom: 10px;
    padding: 5px;
}
</style>

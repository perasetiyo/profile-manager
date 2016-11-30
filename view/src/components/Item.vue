<template>
  <li class="item row">
    <div class="div1 col-md-8">
      <router-link to="/itemdescription">Item 1</router-link>
    </div>
    <div class="div2">
      <button class="btn btn-default"><router-link to="/update">Update</router-link></button>
      <button class="btn btn-danger" data-toggle="modal" data-target="#myModal">Delete</button>
    </div>
    <modals></modals>
  </li>
</template>

<script>
import Modals from './modals'

export default {
  name: 'item',
  components: {
    Modals
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: block;
  margin: 0;
  padding: 10px 10px;
  border-bottom: thick ridge #42b983;
}

a {
  text-decoration: none;
}

.div1 {
  padding: 5px 0 5px 15px;
}

.div2 {
  padding: 5px 10px 5px 0;
}

.btn {
  padding: 0 10px;
}

.btn-default {
  color: black;
}

.modal-dialog {
  width: 300px;
  margin: 15% auto;
}
</style>


<template>
  <div class="form-container">
    <div class="header">
      <h4>Data People</h4>
    </div>
    <div>
  <form class="form-horizontal">

    <div class="form-group form-group-sm">
      <label class="col-sm-3 col-sm-offset-1">First name</label>
      <label class="col-sm-1">:</label>
      <p class="col-sm-5 itemDesc">First name</p>
    </div>

    <div class="form-group form-group-sm">
      <label  class="col-sm-3 col-sm-offset-1">Last name</label>
      <label class="col-sm-1">:</label>
      <p  class="col-sm-5 itemDesc">Last name</p>
    </div>

    <div class="form-group form-group-sm">
      <label class="col-sm-3 col-sm-offset-1">Phone</label>
      <label class="col-sm-1">:</label>
      <p class="col-sm-5 itemDesc">Phone</p>
    </div>

    <div class="form-group form-group-sm">
      <label class="col-sm-3 col-sm-offset-1">Address</label>
      <label  class="col-sm-1">:</label>
      <p class="col-sm-5 addressDesc">Address Address Address Address Address Address
       Address Address Address Address Address</p>
    </div>

    <div class="form-group form-group-sm">
      <label class="col-sm-3 col-sm-offset-1">Curent Job</label>
      <label class="col-sm-1">:</label>
      <p class="col-sm-5 itemDesc">Curent Job</p>
    </div>

    <div class="form-group form-group-sm">
      <div class="col-sm-offset-6 col-sm-4">
        <button type="submit" class="btn btn-default"><router-link to="/update">Update</router-link></button>
        <button type="submit" class="btn btn-danger" data-toggle="modal" data-target="#myModal">Delete</button>
      </div>
    </div>

  </form>
</div>
<modals></modals>
  <div>
</template>

<script>
import Modals from './modals'

export default {
  name: 'itemdescription',
  components: {
    Modals
  }
}
</script>

<style>
div {
  /*margin: 10px 20px 0 20px;*/
  padding-top: 5px;
}

.header {
  text-align: center;
  margin-bottom: 10px;
}

.form-container {
  margin-top: 10px;
}

/*.form-group {
  border-bottom: thin ridge #42b983;
}*/

.col-sm-3{
  padding-left: 40px;
}

.addressDesc {
  /*width: 100px;*/
  height: 50px;
  overflow: auto;
  border: 1px solid #42b983;
}

.itemDesc{
  border: 1px solid #42b983;
}
</style>

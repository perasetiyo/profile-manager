
<template>
  <div class="create form-container">
  <form class="form-horizontal">

    <div class="form-group form-group-sm">
      <label class="col-sm-4 control-label">First name</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" placeholder="First name" v-model="input.first_name">
      </div>
    </div>

    <div class="form-group form-group-sm">
      <label class="col-sm-4 control-label">Last name</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" placeholder="Last name" v-model="input.last_name">
      </div>
    </div>

    <div class="form-group form-group-sm">
      <label class="col-sm-4 control-label">Phone</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" placeholder="Phone number" v-model="input.phone">
      </div>
    </div>

    <div class="form-group form-group-sm">
      <label class="col-sm-4 control-label">Address</label>
      <div class="col-sm-5">
        <textarea class="form-control" rows="3" placeholder="Address" v-model="input.address" >
      </div>
    </div>

    <div class="form-group form-group-sm">
      <label class="col-sm-4 control-label">Curent Job</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" placeholder="Current job" v-model="input.current_job">
      </div>
    </div>

    <div class="form-group form-group-sm">
      <div class="col-sm-offset-4 col-sm-4">
        <button type="submit" class="btn btn-default" @click="post(input)">Save</button>
        <button type="submit" class="btn btn-default"><router-link to="/">Cancel</router-link></button>
      </div>
    </div>

  </form>
  <div>
</template>

<script>
import RequestController from '../controller/RequestController'

export default {
  name: 'create',
  data() {
    return {
      input: {},
    }
  },
  methods: {
    post(input) {
      RequestController.post(this, input)
      this.input = {}
    }
  }
}
</script>

<style>
div {
  /*margin: 10px 20px 0 20px;*/
  padding-top: 2px;
}

.form-container {
  margin-top: 20px;
}
</style>

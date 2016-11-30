<template>
  <!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Caution</h4>
      </div>
      <div class="modal-body">
        <p>Are you sure want to delete?</p>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Yes</button> -->
        <!-- TODO: change ^^ to this: -->
        <!-- <button type="button" class="btn btn-default" data-dismiss="modal" @click=delete(id)>Yes</button> -->
        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import RequestController from '../controller/RequestController'

export default {
  name: 'modals',
  methods: {
    delete(id) {
      RequestController.delete(this, id)
    }
  }
}
</script>

<style>
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

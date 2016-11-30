<template>
  <div class="itemlist">
    <ul>
      <item></item>
    </ul>
  </div>
</template>

<script>
import RequestController from '../controller/RequestController'
import Item from './Item'

export default {
  name: 'itemlist',
  data() {
    return {
      items: {},
    }
  },
  methods: {
    list() {
      RequestController.list(this)
    },
    get() {
      RequestController.get(this, datas)
    },
    fetchItems() {
      list()
    }
  },
  components: {
    Item
  }
}
</script>

<style>
ul {
  padding: 0;
}
</style>

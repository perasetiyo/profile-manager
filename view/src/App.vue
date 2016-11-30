<template>
  <div id="app">
    <h1>{{ headline }}</h1>
    <div class="well">
      <ul>
        <!-- <li class="menu"><router-link to="/">Home</router-link></li> -->
        <li class="menu"><router-link to="/itemlist">Home</router-link></li>
        <li class="list-page">
          <div>
            <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">&lt; prev</router-link>
            <a v-else class="disabled">&lt; prev</a>
            <span>{{ page }}/{{ maxPage }}</span>
            <router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)">more &gt;</router-link>
            <a v-else class="disabled">more &gt;</a>
          </div>
        </li>
        <li class="btn btn-primary" id="btnCreate"><router-link to="/create">Create</router-link></li>
      </ul>
    </div>
    <div class="card">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ItemList from './components/ItemList'

export default {
  name: 'app',
  components: {
    ItemList
  },
  data () {
    return {
      headline: 'People Manager'
    }
  },
  methods: {
    counter: function() {
      console.log("1");
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 25px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

h2 {
  font-weight: normal;
}

.well {
  background-color: #42b983;
  margin-bottom: 0;
}

ul {
  list-style-type: none;
  padding: 0 100px 0 100px;
  margin-bottom: 0;
}

.menu {
  margin: 0 10px;
  padding-left: 150px;
}

.list-page {
  margin: 0 25% 0 20%;
}

li {
  display: inline-block;
}

a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

#btnCreate {
  float: right;
}

.btn {
  padding: 0 12px 0 12px;
  margin-right: 100px;
}

.btn-primary {
  border-color: #337ab7;
}

div.card {
  width: 500px;
  height: 500px;
  margin: auto;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.19);
}

</style>

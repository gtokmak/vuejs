<template>
  <div class="container">
    <h3>User Start Component</h3>
    <hr />
    <ul class="list-group">
      <router-link
        active-class="active"
        exact
        to="/user/1"
        tag="li"
        class="list-group-item"
        ><a>User 1</a></router-link
      >
      <router-link
        active-class="active"
        exact
        to="/user/2"
        tag="li"
        class="list-group-item"
        ><a>User 2</a></router-link
      >
    </ul>
  </div>
</template>
<script>
export default {};
</script>

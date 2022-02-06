<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />
    <p>Kullanıcının Id Bilgisi: {{ $route.params.id }}</p>
    <!--     <router-link tag="button" class="btn btn-primary" :to="'/user/' + $route.params.id + '/edit'">Kullanıcı Düzenle</router-link> -->
    <!--     <router-link
      tag="button"
      class="btn btn-primary"
      :to="{ name: 'userEdit', params: { id: $route.params.id } }"
      >Kullanıcı Düzenle</router-link
    > -->
    <router-link tag="button" class="btn btn-primary" :to="navigationLink"
      >Kullanıcı Düzenle</router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigationLink: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { name: "gokhan", lastname: "Tokmak" },
        hash: '#data'
      },
    };
  },
};
</script>

<template>
  <div class="container">
    <Loading v-if="this.loading" />
    <LoginForm @loading="(condition) => (this.loading = condition)" />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import Loading from '@/components/Loading.vue';
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading.loading,
    }),
  },
  components: { LoginForm, Loading },
  name: 'Login',
};
</script>

<style scoped>
.container {
  background-color: #161616;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>

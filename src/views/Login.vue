<template>
  <div class="container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: { LoginForm },
  name: 'Login',
};
</script>

<style scoped>
.container {
  background-color: #161616;
  display: grid;
  width: 100vw;
  height: 100vh;
}
</style>

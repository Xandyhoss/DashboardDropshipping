<template>
  <div class="overlay">
    <div class="spinner">
      <div
        class="ball"
        style="
          background-color: red;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
        "
      ></div>
      <div
        class="ball"
        style="
          background-color: blue;
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
        "
      ></div>
      <div
        class="ball"
        style="
          background-color: pink;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
        "
      ></div>
      <div
        class="ball"
        style="
          background-color: purple;
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #16161690;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
.spinner {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  position: relative;
  animation: spin 1s ease-in-out infinite;
}

.ball {
  width: 20px;
  height: 20px;
  border-radius: 25px;
  position: absolute;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

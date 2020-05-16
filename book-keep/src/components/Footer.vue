<template>
  <footer>
    <div class="navbar bg-light">
      <div class="container d-flex justify-content-between">
        <strong>{{ message }}</strong>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Header",
  props: {
    message: String
  }
};
</script>

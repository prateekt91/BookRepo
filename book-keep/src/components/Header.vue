<template>
  <header>
 <div class = "navbar bg-light">
     <div class = "container d-flex justify-content-between">
     <strong>{{ Heading }}</strong>
     </div>
 </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    Heading: String
  }
};
</script>   

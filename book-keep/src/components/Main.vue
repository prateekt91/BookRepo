<template>
    <div class = "bd-content">
  <label>{{Body}}</label>&nbsp;&nbsp;
  <input type="textbox" id = "search-input" placeholder = "Search Here">&nbsp;
  <button type="submit" id= "search-button">Search</button>

  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    Body: String
  }
};
</script>   

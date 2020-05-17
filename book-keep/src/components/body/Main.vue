<template>
  <div class="bd-content">
    <label>{{ Body }}</label
    >&nbsp;&nbsp;
    <input type="textbox" v-model="searchVal" id="search-input" placeholder="Search Here" />&nbsp;
    <button v-on:click="searchForBook" class="btn btn-primary" type="submit" id="search-button">
      Search
    </button>
    <p class="loading" v-if="loading">LOADING</p>
    <SearchDisplay v-if=!loading :data= result />
    <div></div>
  </div>
</template>

<script>
import BookSearchApi from "../../services/api/BookSearch";
import SearchDisplay from "../body/SearchDisplay";
export default {
  components: {
    SearchDisplay
  },
  data: function() {
    return {
      loading: true,
      searchVal: "",
      result: String,
    };
  },
  props: {
    Body: String
  },
  methods: {
    searchForBook: function() {
      BookSearchApi.getBook(this.searchVal)
        .then((result) => {
          this.result = result.data;
          this.loading = false;
        })
        .catch((error) => console.log(error))
        .finally(() => {
          console.log("Get Book function Completes.");
        });
    },
  },
};
</script>

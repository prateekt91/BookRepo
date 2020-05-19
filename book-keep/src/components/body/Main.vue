<template>
  <div class="bd-content">
    <label>{{ Body }}</label
    >&nbsp;&nbsp;
    <input type="textbox" v-model="searchVal" id="search-input" placeholder="Search Here" />&nbsp;
    <button v-on:click="searchForBook" class="btn btn-primary" type="submit" id="search-button">
      Search
    </button>
    <div class="container">

<div v-if="!clicked">    
<div v-for="book in allData" :key="book._id">
<p>isbn:{{book.isbn}}</p>
<p>title:{{book.title}}</p>
<p>subtitle:{{book.subtitle}}</p>
<p>author:{{book.author}}</p>
<p>published:{{book.published}}</p>
<p>publisher:{{book.publisher}}</p>
<p>description:{{book.description}}</p>
<p>website:{{book.website}}</p> 
</div>
</div>
    <SearchDisplay :books= result />
    </div>
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
      clicked: false,
      searchVal: "",
      result: [],
      allData: []
    };
  },
  props: {
    Body: String
  },
  created: function () {
      BookSearchApi.getAllBook().then((allData) => {
        this.allData = allData.data;
      }).catch((error) => console.log(error))
    },
  methods: {
    searchForBook: function() {
      BookSearchApi.getBook(this.searchVal)
        .then((result) => {
          this.result = result.data;
          this.clicked = true;
          console.log("Fetch Completes.",result.data);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          console.log("Get Book function Completes.",this.result);
        });
    },
  },
};
</script>

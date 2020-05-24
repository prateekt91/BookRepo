<template>
  <div >
    <label>{{ Body }}</label>&nbsp;&nbsp;
    <input type = "textbox" v-model = "searchVal" id = "search-input" placeholder = "Search Here" @keyup.enter = "searchForBook" required>&nbsp;
    <button :enabled = "!!searchVal" v-on:click = "searchForBook" class="btn btn-primary" type="submit" id="search-button" >
      Search
    </button>
    <hr />
    <div class="container-fluid .col-xs-12 .col-md-8">
      <div v-if="!clicked">
        <ul class="list-unstyled" v-for="book in allData" :key="book._id">
          <li class="media">
            <img
              class="mr-3"
              src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200"
              alt="Generic placeholder image"
            />
            <div  id = "listContent" class="media-body">
              <div class="margin-left:auto margin-right:0">
                <b>isbn:</b>{{ book.isbn }}
              </div>
              <div><b>title:</b>{{ book.title }}</div>
              <div><b>subtitle:</b>{{ book.subtitle }}</div>
              <div><b>author:</b>{{ book.author }}</div>
              <div><b>published:</b>{{ book.published }}</div>
              <div><b>publisher:</b>{{ book.publisher }}</div>
              <div><b>description:</b>{{ book.description }}</div>
              <div><b>website:</b>{{ book.website }}</div>
            </div>
          </li>
          <hr />
        </ul>
      </div>
      <SearchDisplay :books="result" />
    </div>
  </div>
</template>

<script>
import BookSearchApi from "../../services/api/BookSearch";
import SearchDisplay from "../body/SearchDisplay";
export default {
  components: {
    SearchDisplay,
  },
  data: function() {
    return {
      clicked: false,
      searchVal: "",
      result: [],
      allData: [],
    };
  },
  props: {
    Body: String,
  },
  created: function() {
    BookSearchApi.getAllBook()
      .then((allData) => {
        this.allData = allData.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    searchForBook: function() {
      BookSearchApi.getBook(this.searchVal)
        .then((result) => {
          this.result = result.data;
          this.clicked = true;
          console.log("Fetch Completes.", result.data);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          console.log("Get Book function Completes.", this.result);
        });
    },
  },
};
</script>

<style>
#listContent {
  
    padding-left: 50px;

}
</style>

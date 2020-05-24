<template>
<div>
 <ul class="list-unstyled" v-for="book in books" :key="book._id">
 <li class="media">
            <img class="mr-3" src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200" alt="Generic placeholder image" />
            <div  id = "listContent" class="media-body">
              <div><b>isbn:</b>{{ book.isbn }}</div>
              <div><b>title:</b>{{ book.title }}</div>
              <div><b>subtitle:</b>{{ book.subtitle }}</div>
              <div><b>author:</b>{{ book.author }}</div>
              <div><b>published:</b>{{ book.published }}</div>
              <div><b>publisher:</b>{{ book.publisher }}</div>
              <div><b>description:</b>{{ book.description }}</div>
              <div><b>website:</b>{{ book.website }}</div>
            </div>
          </li>
</ul>  
</div>
</template>

<script>

export default {
  props: {
      books: {
        type: Array,
        required: false
      }
  }
};
</script>

<style>
#listContent {
  
    padding-left: 50px;

}
</style>

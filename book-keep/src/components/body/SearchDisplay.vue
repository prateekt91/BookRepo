<template>
<div>
<div v-for="book in books" :key="book._id">
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

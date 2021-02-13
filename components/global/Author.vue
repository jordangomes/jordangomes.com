<template>
    <NuxtLink :to="`/blog/author/${author.name}`">
        <div>
            <h4>Author</h4>
            <img :src="author.image" />
            <p>{{ author.name }}</p>
            <p>{{ author.bio }}</p>
        </div>
    </NuxtLink>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #000;
  }
  a>div {
    max-width: 300px;
  }
  a>div>p{
    text-align: justify;
  }
  img {
    max-width: 100px;
    border-radius: 50%;
  }
</style>
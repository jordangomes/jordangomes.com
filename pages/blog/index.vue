<template>
  <div>
    <PageHeader />
    <main class="blogPosts">
        <h1>Blog Posts</h1>
        <ul class="article-list">
            <li v-for="article of articles" :key="article.slug" >
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <img :src="article.img" />
                    <div>
                        <h2>{{ article.title }}</h2>
                        <p>by {{ article.author.name }}</p>
                        <p>{{ article.description }}</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </main>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      // fetch our article here
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()
      return { articles }
    },
    head() {
      return {
        title: 'blog',
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  }
</script>

<style>
    main.blogPosts {
        width: 100vw;
        min-height: calc(100vh - 80px);
        margin: 0 auto;
        background-color: #fff;
        border-radius:  0px 0px 0px 0px;
        padding: 20px;
    }
    main.blogPosts>h1 {
        color: #000; 
        max-width: 70rem;
        width: 90vw;
        margin: 15px auto;
    }
    ul.article-list {
        display: flex;
        flex-direction: column;
        max-width: 70rem;
        width: 90vw;
        margin: 0 auto;
        padding: 0;
    }
    ul.article-list>li {
        list-style: none;
        background-color: #f8f8f8;
        padding: 20px;
        border-radius: 10px;
    }
    ul.article-list>li a {
        color: #000;
        text-decoration: none;
    }
    ul.article-list>li a img {
        max-width: 100px;
        margin-right: 10px;
        float: left;
    }
    ul.article-list>li h2,h3,h4,h5 {
        color: #000;
        font-weight: 300;
        text-decoration: none;
    }
</style>
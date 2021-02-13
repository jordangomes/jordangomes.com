<template>
  <div>
    <PageHeader />
    <main class="blogPosts">
      <div class="contain-header">
        <h1>{{ articles[0].author.name }}</h1>
        <img :src="articles[0].author.image" />
        <p>Bio: {{ articles[0].author.bio }}</p>
        <br>
        <h3>Here are a list of articles by {{ articles[0].author.name }}:</h3>
      </div> 
      <ul class="article-list">
        <li v-for="article in articles" :key="article.slug">
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
      const articles = await $content('articles', params.slug)
        .where({
          'author.name': {
            $regex: [params.author, 'i']
          }
        })
        .without('body')
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
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
    main.blogPosts>div.contain-header {
        color: #000; 
        max-width: 70rem;
        width: 90vw;
        margin: 15px auto;
    }
    main.blogPosts>div.contain-header h1 {
      color: #000;
    }
    main.blogPosts>div.contain-header img {
      max-width: 300px;
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
<template>
  <div>
    <PageHeader />
    <main class="blogPosts">
      
      <article>
        <img :src="article.img" :alt="article.alt" />
        <h1>{{ article.title }}</h1>
        <p class="postDescription">{{ article.description }}</p>
        <p class="postUpdated">Article last updated: {{ formatDate(article.updatedAt) }}</p>
        <br>
        <nuxt-content :document="article" />
        <br>
        <author :author="article.author" />
      </article>
    </main>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      // fetch our article here
      const article = await $content('articles', params.slug).fetch()
      return { article }
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
  .blogPosts {
    width: 100%;
    min-height: calc(100vh - 80px);
    margin: 0 auto;
    background-color: #fff;
    border-radius:  0px 0px 0px 0px;
    padding: 20px;
  }
  .blogPosts article {
    display: flex;
    flex-direction: column;
    max-width: 70rem;
    width: 90vw;
    margin: 0 auto;
    padding: 0;
  }

  .blogPosts article p {
    margin-block-start: 0.3em;
    word-wrap: break-word;
  }

  .blogPosts article h1,h2,h3,h4,h5,h6 {
    color: #000
  }
  .blogPosts article p.postUpdated {
    color: #444444;
  }
  .blogPosts article p.postDescription {
    color: #444444;
    font-style: italic;
  }
  .blogPosts article>img {
    max-width: 100%;
    padding-bottom: 20px;
  }
  .nuxt-content-highlight {
    position: relative;
  }
  .nuxt-content-highlight .filename {
    position: absolute ;
    right: 0;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    padding: 5px 10px;
    z-index: 10;
  }
</style>
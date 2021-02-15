<template>
  <div>
    <PageHeader />
    <main class="blogPosts">
        <h1>what im listening to</h1>
        <client-only>
            <MusicGrid ref="musicGrid"/>
        </client-only>
    </main>
  </div>
</template>

<script>
  export default {
    async asyncData() {
        return {
            error: "",
            songs: [], 
            playingSong: "",
            audio: ""
        }
    },
    beforeRouteLeave(to, from, next) {
        this.$refs.musicGrid.audio.pause()
        next()
    },
    head() {
      return {
        title: 'music',
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
    main.blogPosts {
        width: 100%;
        min-height: calc(100vh - 80px);
        margin: 0 auto;
        background-color: #fff;
        border-radius:  0px 0px 0px 0px;
        padding: 20px;
    }
    main.blogPosts>h1 {
        color: #000; 
        text-align: center;
        margin: 15px auto;
    }
</style>
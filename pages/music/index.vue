<template>
  <div>
    <PageHeader />
    <main class="blogPosts">
        <h1>what im listening to</h1>
        <p class="error" v-if="error !== ''">{{error}}</p>
        <ul class="image-grid">
            <li v-for="song of songs" :key="song.track.id" :ref="song.track.id">
                <a :href="song.track.external_urls.spotify" class="spotify-link slideIn">
                    <font-awesome-icon :icon="['fab', 'spotify']" />
                </a>
                <div class="song-overlay">
                    <button class="play slideIn" v-if="song.track.id != playingSong && song.track.preview_url" @click="playSong(song.track.id)">
                        <font-awesome-icon icon="play-circle" />
                    </button>
                    <button class="pause" v-if="song.track.id == playingSong" @click="pauseSong()">
                        <font-awesome-icon icon="pause-circle" />
                    </button>
                    <p class="song-name slideIn">{{song.track.name}}</p>
                    <p class="song-artists slideIn">
                        <span v-for="(artist, index) in song.track.artists" :key="artist.id">
                            {{artist.name}}<span v-if="index != song.track.artists.length - 1">, </span>
                        </span>
                    </p>
                </div>
                <img :src="song.track.album.images[0].url" />
            </li>
        </ul>
    </main>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
        let error = ""
        let songs
        let sortedSongs = []
        try{
            songs = await $axios.$get('https://ksl3m408ya.execute-api.ap-southeast-2.amazonaws.com/default-deployment')
            sortedSongs = songs.sort(function (a, b) {
                const aDate = new Date(Date.parse(a.added_at))
                const bDate = new Date(Date.parse(b.added_at))
                return bDate - aDate
            });
        } catch(err) {
            console.log(songs)
            console.error(err)
            error = "Couldn't download the tunes right now :( please come back later"
        }
        return { 
            error,
            songs: sortedSongs, 
            playingSong: "",
            audio: new Audio()
        }
    },
    methods: {
        playSong(id) {
            this.songs.forEach(song => {
                if(song.track.id == id) {
                    console.log(`Playing ${song.track.name}`)
                    if(this.playingSong !== "") {
                        this.$refs[this.playingSong][0].classList.remove("active")
                    }
                    this.audio.pause()
                    this.audio.currentTime = 0;
                    this.audio = new Audio(song.track.preview_url)
                    this.audio.addEventListener('ended', (event) => {
                        this.pauseSong()
                    });
                    this.audio.play()
                    this.$refs[id][0].classList.add("active")
                }
            });
            this.playingSong = id
        },
        pauseSong() {
            this.$refs[this.playingSong][0].classList.remove("active")
            this.playingSong = ""
            this.audio.pause()
            this.audio.currentTime = 0;
        }
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
    main.blogPosts .error {
        color: #000; 
        font-size: 1.2rem;
        text-align: center;
        margin: 15px auto;
    }

    ul.image-grid {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 100%;
        padding: 0px;
    }
    ul.image-grid li {
        height: auto;
        max-height: 500px;
        max-width: 100%;
        flex-shrink: 1;
        position: relative;
    }
    @media (min-height: 750px) and (min-width: 800px) {
        ul.image-grid li {
            height: 40vh;
        }
    }
    ul.image-grid li:hover .song-overlay {
        display: flex;
        backdrop-filter: blur(5px);
        background-color: rgb(0 0 0 / 65%);
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        animation-duration: 0.5s;
    }
    ul.image-grid li.active:hover .slideIn {
        animation: none;
    }
    ul.image-grid li.active .song-overlay {
        display: flex;
        backdrop-filter: blur(5px);
        background-color: rgb(0 0 0 / 65%);
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        animation-duration: 0.5s;
    }
    ul.image-grid li .song-overlay {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
    }
    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
            backdrop-filter: blur(0);
        }
        100% {
            opacity: 1;
            backdrop-filter: blur(5px);
        }
    }
    ul.image-grid li .spotify-link { 
        display: none;
    }
    ul.image-grid li:hover .spotify-link { 
        color: #fff;
        position: absolute;
        right: 0.5em;
        top: 0.5em;
        font-size: 1.8rem;
        z-index: 1;
        display: block;
    }
    ul.image-grid li:hover .spotify-link svg {
        height: auto;
        vertical-align: top;
    }
    ul.image-grid li .song-overlay p {
        color: #fff;
    }
    ul.image-grid li .song-overlay .play {
        background: none;
        border: none;
        outline: none;
        color: #fff;
        font-size: 5rem;
    }
    ul.image-grid li .song-overlay .pause {
        background: none;
        border: none;
        outline: none;
        color: #fff;
        font-size: 5rem;
    }
    ul.image-grid li .song-overlay .song-name {
        max-width: 80%;
        text-align: center;
        font-size: 1.5rem;
    }
    ul.image-grid li .song-overlay .song-artists {
        max-width: 80%;
        text-align: center;
    }
    img {
        max-height: 100%;
        min-width: 100%;
        max-width: 100%;
        object-fit: cover;
        vertical-align: bottom;
    }
    ul.image-grid li:hover .slideIn {
        animation-name: slideInElements;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        animation-duration: 0.3s;
    }

    @keyframes slideInElements {
        0% {
            transform: translateY(-30px);
        }

        100% {
            transform: translateY(0);
        }
    }
</style>
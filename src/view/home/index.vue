<template>
  <div class="home">
    <Narbar/>
    <router-view></router-view>
    <meting-js server="netease" type="playlist" id="7160080139" fixed="true" loop="all" order="list"
      preload="auto" list-folded="true" list-max-height="500px" lrc-type="2">
    </meting-js>
  </div>
</template>

<script>
import Narbar from '../../components/common/navbar'
export default {
  name: 'PersonBlogHome',
  components: {
    Narbar,
  },

  data() {
    return {
      audio: [
        {
          name: 'Viva La Vida',
          artist: 'Coldplay',
          url: 'http://music.163.com/song/media/outer/url?id=5139948.mp3',
          cover: 'http://p3.music.126.net/Wr13D68yaaknFmxTD5xnoQ==/18569651881855121.jpg?param=300x300', // prettier-ignore
        },
        {
          name: 'Something Just Like This',
          artist: 'The Chainsmokers',
          url: 'http://music.163.com/song/media/outer/url?id=461347998.mp3',
          cover: 'http://p3.music.126.net/7tMKza9QbB9xsiQHMmLSKw==/109951167280335904.jpg?param=300x300', // prettier-ignore
          lrc: 'https://cdn.moefe.org/music/lrc/kyoukiranbu.lrc',
        },
      ],
    }
  }
};
</script>

<style lang="less" scoped>

.context{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
</style>
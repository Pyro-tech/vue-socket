<template lang="pug">
  #App
    img(
     alt='Vue logo'
     src='@/assets/logo.png'
    )
    router-view
</template>

<script>
import { w3cwebsocket } from 'websocket'
const W3CWebSocket = w3cwebsocket

export default {
  data () {
    return {
      ws: new W3CWebSocket('ws://localhost:8080/pipe'),
      devices: [
        {
          data: []
        }
      ]
    }
  },
  name: 'App',
  created () {
    const self = this
    self.ws.onmessage = (e) => {
      if (typeof e.data === 'string') {
        const res = JSON.parse(e.data)
        self.devices[0].data.push({ createdAt: new Date(res.time).toLocaleString(), value: res.message })
      }
    }
  },
  methods: {
    publish (i) { // eslint-disable-line
      this.ws.send(JSON.stringify({ message: 'hello' }))
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

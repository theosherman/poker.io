<template lang="pug">
div
  h1 Player
  hr
  p Connected: {{ connected }}
</template>

<script>
import io from 'socket.io-client'
import Deck from '@/deck'

export default {

  data: () => ({
    connected: false,
    socket: {}
  }),

  created() {
    console.log('created')
  },

  mounted() {
    console.log('mounted')

    this.socket = io('http://localhost:3000/')

    this.socket.on('connect', () => {
      console.log('connected')
      this.connected = true

      this.socket.emit('join', this.$route.params.gameId)
    })

    this.socket.on('disconnect', () => {
      console.log('disconnected')
      this.connected = false
    })

    this.socket.on('error', (err) => {
      console.error(err)
    })
  }
}
</script>

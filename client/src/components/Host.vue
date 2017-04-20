<template lang="pug">
div
  h1 Host
  hr
  p Connected: {{ connected }}

  hr

  h2 Players
  pre {{ players }}

  hr

  h2 Deck
  pre {{ deck.deck }}
</template>

<script>
import io from 'socket.io-client'
import Deck from '@/deck'

export default {

  data: () => ({
    connected: false,
    socket: {},
    players: [],
    deck: new Deck()
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

      this.socket.emit('host', this.$route.params.gameId)
    })

    this.socket.on('disconnect', () => {
      console.log('disconnected')
      this.connected = false
    })

    this.socket.on('error', (err) => {
      console.error(err)
    })

    this.socket.on('join', (id) => {
      console.log('player joined')
      this.players.push(id)
    })

    this.deck.shuffle()
    console.log(this.deck.pullCard())
  }
}
</script>

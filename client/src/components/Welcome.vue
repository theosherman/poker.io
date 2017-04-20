<template lang="pug">
div
  h1.ui.center.aligned.header Poker.IO

  .ui.grid

    .row
      .eight.wide.column
        h3.ui.header Join a game
        .ui.input.action
          input(type='text', v-model='gameId', placeholder="Game ID")
          button.ui.button.blue(@click='joinGame') Join

      .eight.wide.column
        h3 Image

    .row
      .sixteen.wide.column
        .ui.horizontal.divider OR

    .row
      .eight.wide.column
        h3.ui.header Create a game
        .ui.input.action
          input(type='text', v-model='gameId', placeholder="Game ID")
          button.ui.button.green.icon.labeled(@click='createGame')
            i.icon.plus
            | &nbsp;Create

      .eight.wide.column
        h3 Image

  .ui.center.aligned.basic.segment

</template>

<script>
export default {
  
  data: () => ({
    gameId: ''
  }),

  methods: {
    joinGame() {
      this.$router.push({ name: 'player', params: { gameId: this.gameId }})
    },
    createGame() {
      this.$router.push({ name: 'host', params: { gameId: this.gameId }})
    }
  }

}
</script>
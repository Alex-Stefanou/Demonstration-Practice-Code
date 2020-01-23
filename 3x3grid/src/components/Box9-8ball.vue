<template>
  <div class="column is-one-third-tablet">
    <h1>Click to shake the Magic 8-ball!</h1>
    <div v-on:click="shake">
      <div>{{ output }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box9-8ball',

  data() {
    return{
      result: [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
      ],
      output: "Click me to shake!",
      img8ball: "",
    };
  },

  mounted() { //Load images
    this.img8ball = require("../assets/magic8ball.png");
  },

  methods: {
    shake: function() { //Generate random number 0-19, output result
      this.output = this.result[Math.floor(Math.random()*20)];
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Local styling here*/

</style>

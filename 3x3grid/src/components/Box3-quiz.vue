<template>
  <div class="column is-one-third-tablet">
    <h1>The time is</h1>
    <div id="clock">
      <span>{{hours}}:</span>
      <span>{{minutes}}:</span>
      <span>{{seconds}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box3-quiz',

  data() {
    return{
      quiz: {
        Q1: {
          question: "How many feet do hedgehogs have?",
          options: [
            "2",
            "4",
            "6",
            "8"
          ],
          hint: "Hedgehogs have more than 3 feet but less than 5!",
          answer: 2,
        },
        Q2: {
          question: "What are baby hedgehogs called?",
          options: [
            "A kitten",
            "A caltrop",
            "A hoglet",
            "An urchin"
          ],
          hint: "A spiky sea creature shares this name!",
          answer: 4
        },
        Q3: {
          question: "What shape will a threatened hedgehog adopt?",
          options: [
            "A ball",
            "A cube",
            "A tetrahedron",
            "A cone"
          ],
          hint: "They have to be careful not to roll away!",
          answer: 1
        },
        Q4: {
          question: "What is the name for a group of hedgehogs?",
          options: [
            "A pincushion",
            "An array",
            "A prickle",
            "An army"
          ],
          hint: "A programing object[] shares this name!",
          answer: 2
        },
        score = 0,
        result: [
          "I don't think you know what a hedgehog is!",
          "I find your lack of hedgehog knowledge disturbing.",
          "You know the hedgehog basics.",
          "Impressive hedgehog knowledge!",
          "You are clearly a master of hedgehogs, they bow to you!"
        ],
      }
    };
  },

  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },

  methods: {
    updateTime() {
      let date = new Date();
      let time = date.toLocaleString();
      this.hours = time.slice(12,14);
      this.minutes = time.slice(15,17);
      this.seconds = time.slice(18);
      return;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Local styling here*/

</style>

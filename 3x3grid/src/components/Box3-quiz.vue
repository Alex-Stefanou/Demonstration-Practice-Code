<template>
  <div class="column is-one-third-tablet">
    <h1>Welcome to the ultimate hedgehog quiz!</h1>
    <h2>If you get stuck, hover over the question for a hint.</h2>

    <template v-if="quiz.question == 0">
      <button v-on:click="next">Start Quiz</button>
    </template>

    <template v-if="quiz.question == 1">
      <div v-bind:title="quiz.Q1.hint">{{ quiz.Q1.question }}</div>
      <div>
        <input type="radio" id="A1" value=0 v-model="quiz.answer">
        <label for="A1">{{ quiz.Q1.option[0] }}</label>
        <br>
        <input type="radio" id="B1" value=1 v-model="quiz.answer">
        <label for="B1">{{ quiz.Q1.option[1] }}</label>
        <br>
        <input type="radio" id="C1" value=2 v-model="quiz.answer">
        <label for="C1">{{ quiz.Q1.option[2] }}</label>
        <br>
        <input type="radio" id="D1" value=3 v-model="quiz.answer">
        <label for="D1">{{ quiz.Q1.option[3] }}</label>
      </div>
      <button v-on:click="next">Next question</button>
    </template>

    <template v-if="quiz.question == 2">
      <div v-bind:title="quiz.Q2.hint">{{ quiz.Q2.question }}</div>
      <div>
        <input type="radio" id="A2" value=0 v-model="quiz.answer">
        <label for="A2">{{ quiz.Q2.option[0] }}</label>
        <br>
        <input type="radio" id="B2" value=1 v-model="quiz.answer">
        <label for="B2">{{ quiz.Q2.option[1] }}</label>
        <br>
        <input type="radio" id="C2" value=2 v-model="quiz.answer">
        <label for="C2">{{ quiz.Q2.option[2] }}</label>
        <br>
        <input type="radio" id="D2" value=3 v-model="quiz.answer">
        <label for="D2">{{ quiz.Q2.option[3] }}</label>
      </div>
      <button v-on:click="next">Next question</button>
    </template>

    <template v-if="quiz.question == 3">
      <div v-bind:title="quiz.Q3.hint">{{ quiz.Q3.question }}</div>
      <div>
        <input type="radio" id="A3" value=0 v-model="quiz.answer">
        <label for="A3">{{ quiz.Q3.option[0] }}</label>
        <br>
        <input type="radio" id="B3" value=1 v-model="quiz.answer">
        <label for="B3">{{ quiz.Q3.option[1] }}</label>
        <br>
        <input type="radio" id="C3" value=2 v-model="quiz.answer">
        <label for="C3">{{ quiz.Q3.option[2] }}</label>
        <br>
        <input type="radio" id="D3" value=3 v-model="quiz.answer">
        <label for="D3">{{ quiz.Q3.option[3] }}</label>
      </div>
      <button v-on:click="next">Next question</button>
    </template>

    <template v-if="quiz.question == 4">
      <div v-bind:title="quiz.Q4.hint">{{ quiz.Q4.question }}</div>
      <div>
        <input type="radio" id="A4" value=0 v-model="quiz.answer">
        <label for="A4">{{ quiz.Q4.option[0] }}</label>
        <br>
        <input type="radio" id="B4" value=1 v-model="quiz.answer">
        <label for="B4">{{ quiz.Q4.option[1] }}</label>
        <br>
        <input type="radio" id="C4" value=2 v-model="quiz.answer">
        <label for="C4">{{ quiz.Q4.option[2] }}</label>
        <br>
        <input type="radio" id="D4" value=3 v-model="quiz.answer">
        <label for="D4">{{ quiz.Q4.option[3] }}</label>
      </div>
      <button v-on:click="next">Next question</button>
    </template>
    
    <template v-if="quiz.question == 5">
      <div>
        <h3>You scored {{quiz.score}} out of 4</h3>
        <h3>{{ quiz.result[quiz.score] }}</h3>
      </div>
      <button v-on:click="reset">Restart Quiz</button>
    </template>

  </div>
</template>

<script>
export default {
  name: 'Box3-quiz',

  data() {
    return{
      audio: {},

      quiz: {
        Q1: {
          question: "How many feet do hedgehogs have?",
          option: [
            "2",
            "4",
            "6",
            "8"
          ],
          hint: "Hedgehogs have more than 3 feet but less than 5!",
          answer: 1
        },
        Q2: {
          question: "What did baby hedgehogs used to be called?",
          option: [
            "A kitten",
            "A caltrop",
            "A hedgelet",
            "An urchin"
          ],
          hint: "A spiky sea creature shares this name!",
          answer: 3
        },
        Q3: {
          question: "What shape will a threatened hedgehog adopt?",
          option: [
            "A ball",
            "A cube",
            "A tetrahedron",
            "A cone"
          ],
          hint: "They have to be careful not to roll away!",
          answer: 0
        },
        Q4: {
          question: "What is the name for a group of hedgehogs?",
          option: [
            "A pincushion",
            "An array",
            "A prickle",
            "An army"
          ],
          hint: "A programing object [ ] shares this name!",
          answer: 1
        },
        question: 0,
        answer: -1,
        score: 0,
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

  mounted() { //Load audio file from "assets" into a variable
    this.audio.applause = new Audio(require("../assets/audio/applause.mp3"));
  },

  methods: {
    answerCorrect() { //Boolian function to check if an answer is correct
      switch ( this.quiz.question ) {
        case 1: if ( this.quiz.answer == this.quiz.Q1.answer) return true; break;
        case 2: if ( this.quiz.answer == this.quiz.Q2.answer) return true; break;
        case 3: if ( this.quiz.answer == this.quiz.Q3.answer) return true; break;
        case 4: if ( this.quiz.answer == this.quiz.Q4.answer) return true; break;
        default: return false;
      }
      return false;
    },

    next: function() {  //Update score and proceed to next question
      if ( this.answerCorrect() ) this.quiz.score++;
      if ( this.quiz.score >= 4 ) this.audio.applause.play();
      this.quiz.answer = -1;
      this.quiz.question++;
    },

    reset: function() { //Reset quiz variables
      this.quiz.score = 0;
      this.quiz.answer = -1;
      this.quiz.question = 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Local styling here*/

</style>

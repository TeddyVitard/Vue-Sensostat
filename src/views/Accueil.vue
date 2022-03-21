<template>
    <div >
      <v-container>
       <v-card-title class="justify-center" >En cliquant sur suivant vous acceptez l'utilisation du microphone et des enceintes</v-card-title>
           <v-card-actions class="justify-center">
          <v-btn
            x-large
            color="orange"
            dark
            @click="redirect()"
          >
          Suivant
          </v-btn>
           </v-card-actions>
      </v-container>
    </div>
</template>

<script>
import TextToSpeechService from '../services/TextToSpeechService';
//import SpeechToTextService from '../services/SpeechToTextService';
  export default {
    name: 'Accueil',

    components: {
      
    },
    data() {
      return {
        titre: "",
        textHeader: "",
        textCode: "",
        finaltext: undefined,
        textToSpeechService: new TextToSpeechService(),
        areaText : "",
      //speechToTextService: new SpeechToTextService(),
    }
    },
    methods: {
      redirect(){
      //this.speechToTextService.translateToText();
      this.$router.push({name: 'Home'});
      },
      // speechToText()
      // {
      //   this.speechToTextService.translateToText();
      // }
    },
    mounted()
    {
      //this.textToSpeech();
      //this.$router.push({name: 'Home'});
      //this.speechToText();
    },
  }
</script>

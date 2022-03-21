<template>
    <div >
      <v-container>
      <v-row class="mb-10"></v-row>
      <v-row class="justify-center mb-16">
        <h1>{{welcomeText}}</h1>
      </v-row>
      <v-row class="justify-center mb-16">
        <h1>{{productText}} {{count}}{{produit}}</h1>
      </v-row>
      <v-divider></v-divider>
      <v-row class="justify-center mb-1 mt-7">
        <h3>{{textClick}}</h3>
      </v-row>
      <v-card-actions class="justify-center">
      <v-btn
        x-large
        color="orange"
        dark
        @click="redirect()"
      >
        Etape suivante
        <v-icon
          dark
          left
          class="mx-2"
        >
          mdi-arrow-right
        </v-icon>
      </v-btn>
      </v-card-actions>
      </v-container>
    </div>
</template>

<script>
import TextToSpeechService from '../services/TextToSpeechService';
import SpeechToTextService from '../services/SpeechToTextService';
//import * as sdk from "microsoft-cognitiveservices-speech-sdk";

  export default {
    name: 'Home',

    components: {
      
    },
    data() {
      return {
        produit: " shampoings",
        count: 3,
        welcomeText: "Bienvenue à cette séance. ",
        productText: "Vous aller donner votre avis sur ",
        textClick: "Cliquez ou dites :",
        finalText: "",
        textToSpeechService: new TextToSpeechService(),
        speechToTextService: new SpeechToTextService(),
        pageSuivante: "Testtts",
        timerCount : 5
      }
    },
    methods: {
      redirect(){
        //this.textToSpeechService.closeSpeech();
        this.$router.push({name: 'Testtts'});
        
      },
      textToSpeech(text){
        this.textToSpeechService.speech(text);
      },
      speechToText(speechRecognizer)
      {
        speechRecognizer.recognizing = (s, e) => {
           console.log(`RECONNU: Text=${e.result.text}`);
          if(e.result.text.toLowerCase().includes("suivant")){
            //this.textToSpeechService.closeSpeech();
            this.$router.push({name: 'Testtts'});
          }
        }

      },

    },
    async mounted()
    {
      this.finaltext = this.welcomeText + this.productText+ this.count+" "+this.produit +" " + this.textClick + " "+"etape suivante "
      this.textToSpeech(this.finaltext);
      
      this.textToSpeech(this.finaltext);
      // var result = this.speechToTextService.speechToText();
      // this.speechToText(result);

    },
    watch: {

      timerCount: {
          handler(value) {

              if (value > 0) {
                  setTimeout(() => {
                      this.timerCount--;
                  }, 1000);
              }
              else if(value == 0)
              {
                var result = this.speechToTextService.speechToText();
                this.speechToText(result);

              }

          },
          immediate: true // This ensures the watcher is triggered upon creation
      }
    }
  }
</script>

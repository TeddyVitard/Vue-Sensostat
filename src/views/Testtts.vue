<template>
<div>
  <v-row class="justify-center mb-16 mt-8">
  <h1 id="titre">{{titre}}</h1>
  </v-row>
  <v-row class="justify-center mb-16">
    <h2>{{textHeader}}</h2>
  </v-row>
  <v-row class="justify-center">
  <h2><strong class="purple--text">{{textCode}}</strong></h2>
  </v-row>
  <v-row class="justify-center mb-16">
    <h2> Entrez du texte à tester :</h2>
  </v-row>
  <v-row class="justify-center mb-16">
    <v-col md="5">
     <v-textarea
          filled
          name="input-7-4"
          label="Texte à synthetiser"
          v-model="areaText"
        >
        </v-textarea>
                <v-btn
            elevation:2
            class="ma-2"
            color="orange"
            v-on:click="textToSpeech(areaText)"
          >
          Testez Moi !
          </v-btn>
    </v-col>
    <v-col>
      <v-textarea
          filled
          name="input-7-4"
          label="Text provenenant de la voix"
          v-model="areaResponse"
        >
      </v-textarea>
    </v-col>
  </v-row>
</div>
</template>

<script>
import TextToSpeechService from '../services/TextToSpeechService';
import SpeechToTextService from '../services/SpeechToTextService';
// import * as sdk from "microsoft-cognitiveservices-speech-sdk";
// import { SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';

export default {
  name: "Testtts",
  components: {},
  data() {
    return {
    titre: "Premier produit.. ",
    textHeader: "Vous allez désormais tester le shampoing",
    textCode: "n°58",
    finaltext: undefined,
    textToSpeechService : new TextToSpeechService(),
    speechToTextService: new SpeechToTextService(),
    areaText : "",
    areaResponse: "",
    timerCount: 5,
    }
  
  },
  methods: {
    // speech(){
    //   const speechConfig = sdk.SpeechTranslationConfig.fromSubscription("d79c166fd5184d808298626a46d17c6b","francecentral");
    //   speechConfig.speechSynthesisLanguage="fr-FR";
    //   speechConfig.speechSynthesisVoiceName= "fr-BE-CharlineNeural"
    //   const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();

    //   const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    //   synthesizer.speakTextAsync(
    //     this.titre + " "+this.textHeader+" "+this.textCode,
    //     result => {
    //       if(result) {
    //         synthesizer.close();
    //         return result.audioData;
    //       }
    //     },
    //     error => {
    //       console.log(error);
    //       synthesizer.close();
    //     });

    // }
    textToSpeech(){
      this.finaltext = this.titre + this.textHeader + this.textCode
      this.textToSpeechService.speech(this.finaltext);
    },
    speechToText(speechRecognizer)
      {
        speechRecognizer.recognizing = (s, e) => {
           console.log(`RECONNU: Text=${e.result.text}`);
          this.areaResponse += e.result.text;

          if(e.result.text.toLowerCase().includes("vider")){
            this.areaResponse = "";
          }
          if(e.result.text.toLowerCase().includes("stop")){
            this.speechToTextService.closeSTT();
          }
        }
      },
  },
   mounted() {
    //this.speech();
    //this.textToSpeechService.speech("Coucou");
    this.finaltext = this.titre + this.textHeader + this.textCode
    this.textToSpeech();
    //var result = this.speechToTextService.speechToText();
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

import * as sdk from "microsoft-cognitiveservices-speech-sdk";
const speechConfig = sdk.SpeechConfig.fromSubscription('80f4bcdc32d04fe38c0eccbe69acec42', 'francecentral')
speechConfig.speechRecognitionLanguage = "fr-FR";
const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
const speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

export default class SpeechToTextService {

  // translateToText(next)
  // {
  //   const speechConfig = sdk.SpeechTranslationConfig.fromSubscription("80f4bcdc32d04fe38c0eccbe69acec42","francecentral");
  //   speechConfig.speechRecognitionLanguage ="fr-FR";

  //   let audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
  //   let speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

  //   speechRecognizer.recognizeOnceAsync(result => {
  //    // console.log(`RECONNU: Text=${result.text}`);
  //    if(sdk.ResultReason.RecognizedSpeech)
  //    {
  //     if(result.text.toLowerCase().includes("suivant"))
  //     {
  //       console.log(next)
  //       console.log(`RECONNU: Text=${result.text}`);
  //       this.$router.push({name: next});
  //     }
  //   }
  //   //   switch(result.reason){
  //   //     case sdk.ResultReason.RecognizedSpeech:
          
  //   //       console.log(`RECONNU: Text=${result.text}`);
  //   //       if(result.text.toLowerCase().includes("suivant"))
  //   //       {
  //   //         this.$router.push({name: next});
  //   //       }
  //   //       break;
          
  //   //     case sdk.ResultReason.NoMatch:
  //   //       console.log("NO MATCH speech non reconnu");
  //   //       break;
  //   //     case sdk.ResultReason.Canceled:
  //   //       // eslint-disable-next-line no-case-declarations
  //   //       const cancellation = CancellationDetails.fromResult(result);
  //   //       console.log(`CANCELED: Raison=${cancellation.reason}`);
  //   //       if (cancellation.reason == sdk.CancellationReason.Error) {
  //   //         console.log(`CANCELED: ErrorCode=${cancellation.ErrorCode}`);
  //   //         console.log(`CANCELED: ErrorDetails=${cancellation.errorDetails}`);
  //   //         console.log("CANCELED:Avez vous mis à jour votre clé et vos informations de région/location ?");
  //   //       }
  //   //       break;
  //   //   }
  //   //   speechRecognizer.close();
  //   // });


  //   })

  
  // }
  speechToText() {
    speechRecognizer.startContinuousRecognitionAsync();
    return speechRecognizer;
  }
  closeSTT(){
    speechRecognizer.stopContinuousRecognitionAsync();
  }

}


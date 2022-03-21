import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';
//  const speechConfig = sdk.SpeechTranslationConfig.fromSubscription("80f4bcdc32d04fe38c0eccbe69acec42","francecentral");
//  speechConfig.speechSynthesisLanguage="fr-FR";
//  speechConfig.speechSynthesisVoiceName= "fr-FR-DeniseNeural"
//  const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();

// const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

export default class TextToSpeechService {
  
  speech(text){
    const speechConfig = sdk.SpeechTranslationConfig.fromSubscription("80f4bcdc32d04fe38c0eccbe69acec42","francecentral");
    speechConfig.speechSynthesisLanguage="fr-FR";
    speechConfig.speechSynthesisVoiceName= "fr-FR-DeniseNeural"
    const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();

    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.Rate = -3
    synthesizer.speakTextAsync(
      text,
      result => {
        if(result) {
          synthesizer.close();
          return result.audioData;
        }
      },
      error => {
        console.log(error);
        this.synthesizer.close();
      });

  }

  // closeSpeech()
  // {
  //   synthesizer.close()
  // }
}
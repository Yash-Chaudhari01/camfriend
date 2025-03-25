import { Component } from '@angular/core';

@Component({
  selector: 'app-voice-recorder',
  standalone: false,
  
  templateUrl: './voice-recorder.component.html',
  styleUrl: './voice-recorder.component.css'
})
export class VoiceRecorderComponent {
// audio record

isRecording = false;
liveTranscript = '';
finalTranscript = '';
completeTranscript = ''; // Stores all accumulated text
errorMessage = '';
recordingTime = 0;
private recognition: any;
private recordingInterval: any;
private recordingTimer: any;


private initSpeechRecognition() {
  const SpeechRecognition = 
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    this.errorMessage = 'Speech recognition not supported in your browser. Try Chrome or Edge.';
    return;
  }

  this.recognition = new SpeechRecognition();
  this.recognition.continuous = true;
  this.recognition.interimResults = true;
  this.recognition.lang = 'en-US';

  this.recognition.onresult = (event: any) => {
    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        this.finalTranscript += transcript + ' ';
      } else {
        interimTranscript += transcript;
      }
    }
    this.liveTranscript = interimTranscript;
  };

  this.recognition.onerror = (event: any) => {
    this.stopRecording();
  };
}

startRecordingCycle() {
  this.startRecording();
  
  // Set up the 10-second cycle
  this.recordingTimer = setInterval(() => {
    this.stopRecording();
    
    // Save the current transcript before resetting
    if (this.finalTranscript.trim().length > 0) {
      this.completeTranscript += this.finalTranscript + '\n';
    }
    
    // Restart recording after a brief pause
    setTimeout(() => {
      this.startRecording();
    }, 300);
  }, 10000); // 10 seconds
}

startRecording() {
  this.liveTranscript = '';
  this.finalTranscript = '';
  this.errorMessage = '';
  this.recordingTime = 0;

  try {
    this.recognition.start();
    this.isRecording = true;

    this.recordingInterval = setInterval(() => {
      this.recordingTime++;
    }, 1000);
  } catch (error) {
    this.errorMessage = 'Microphone access denied. Please allow microphone permissions.';
    console.error(error);
  }
}

stopRecording() {
  if (this.recognition) {
    this.recognition.stop();
  }
  this.isRecording = false;
  clearInterval(this.recordingInterval);
}

copyToClipboard() {
  navigator.clipboard.writeText(this.completeTranscript || this.finalTranscript)
    .then(() => alert('Text copied to clipboard!'))
    .catch(err => this.errorMessage = 'Failed to copy text');
}

toggleRecording() {
  if (this.isRecording) {
    this.stopRecording();
    clearInterval(this.recordingTimer);
  } else {
    this.startRecordingCycle();
  }
}

}

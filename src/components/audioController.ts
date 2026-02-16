import { WeatherType } from '../constants/weater-type/weater-type';

export class AudioController {
    private currentAudio: HTMLAudioElement;
    private weatherType: WeatherType | null;
    private htmlAudionInput: HTMLInputElement;
    
    constructor() {
        this.currentAudio = new Audio();
        this.weatherType = null
        this.currentAudio.volume = 1
        this.htmlAudionInput = document.querySelector('#volume-slider') as HTMLInputElement;
    }

    public setVolume(value: number): void {
        this.currentAudio.volume = value;
    };

    private setSound(weatherType: WeatherType): void {
        this.weatherType = weatherType
        this.currentAudio.src = `./assets/sounds/${weatherType}.mp3`
        this.currentAudio.preload = 'auto'
    }

    public play(weatherType: WeatherType): void {
        if (weatherType !== this.weatherType) {
            this.setSound(weatherType)
        }

        this.currentAudio.paused ? this.currentAudio.play() : this.currentAudio.pause()
    }
    
    get audioInput(){
        return this.htmlAudionInput
    }
};
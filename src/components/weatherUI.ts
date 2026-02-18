import { parseWeatherType, WeatherType } from '../constants/weather-type';
import { AudioController } from './audioController';

export class WeatherUI {
    private audioController: AudioController;
    private widgets: NodeListOf<HTMLElement>;
    private weatherType?: WeatherType;

    constructor(audioController: AudioController) {
        this.audioController = audioController
        this.widgets = document.querySelectorAll('.widget');
        this.bindEvents();
    };

    bindEvents(): void {
        this.widgets.forEach((widget) =>
            widget.addEventListener('click', () =>
                this.handleClick(widget)
            )
        );

        const audioInput = this.audioController.audioInput
        audioInput.addEventListener('input', () =>
            this.handleVolumeChange(audioInput.value)
        );
    };

    handleClick(weatherWidget: HTMLElement): void {
        if (this.weatherType) {
            document.querySelector(`[data-weather="${this.weatherType}"]`)?.classList.remove('clicked');
        }
        
        this.weatherType = parseWeatherType(weatherWidget.dataset.weather);
        document.body.className = `${this.weatherType}-bg`;
        weatherWidget.classList.add('clicked');
        this.audioController.play(this.weatherType);
    };

    handleVolumeChange(value: string): void {
        this.audioController.setVolume(Number(value));
    };
};
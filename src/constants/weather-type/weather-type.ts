export enum WeatherType {
    RAIN = 'rain',
    SUMMER = 'summer',
    WINTER = 'winter'
}

export function parseWeatherType(value: string | null | undefined): WeatherType {
    if (!value) {
        throw new Error('Weather type is required');
    }
    
    if (!Object.values(WeatherType).includes(value as unknown as WeatherType)) {
        throw new Error(`Invalid weather type: ${value}.`);
    }
    
    return value as WeatherType;
}
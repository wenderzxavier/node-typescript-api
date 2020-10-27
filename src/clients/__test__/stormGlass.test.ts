
import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassWeather3HoursResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
    it('should return the normalized forecast from the StormGlass Service', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        const lat = -33.792726;
        const lng = 151.289824;

        mockedAxios.get.mockResolvedValue({ data: stormGlassWeather3HoursFixture });

        const stormGlass = new StormGlass(mockedAxios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassWeather3HoursResponseFixture);
    });
});

import weather from '../apis/weather';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY='ebc45f1183b4689ae4efda8da4bd93e5';

export const fetchWeather = (q)=> async (dispatch) => {
    const response = await weather.get('',{
        params:{
            q: q,
            appid: API_KEY
        }
    });

    // console.log(response.data);
    // const payload = {id: response.data.city.id, payload: response.data.list, name: response.data.city.name}
    const payload = {id: response.data.city.id, payload: response.data}
    dispatch({
        type: FETCH_WEATHER,
        payload: payload
    });
}
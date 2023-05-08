//api base url
export const BASE_URL = 'http://139.180.221.97:8585/api/v1/';
export const processResponse = async (response) => { 
    try{
        const statusCode = response.status;                 //
        const data = response.json();                       //
        const res = await Promise.all([statusCode, data]);  //
        return ({                                           // get response from api
            statusCode: res[0],                             //
            data: res[1],                                   //
        });        
    } catch(e) {
        console.log(e);
    }
}
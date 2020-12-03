import * as NodeGeocoder from 'node-geocoder';

let nodeGeocoder:NodeGeocoder.Geocoder;

export function loadAPI(API_KEY:string){
    nodeGeocoder = NodeGeocoder({
        provider: 'google',
 
        // Optional depending on the providers
        //fetch: customFetchImplementation,
        apiKey: API_KEY, // for Mapquest, OpenCage, Google Premier
        formatter: null
    });
}

export function reverseLookup(lat:number,lng:number){
    return nodeGeocoder.reverse({ lat: lat, lon: lng });;
}
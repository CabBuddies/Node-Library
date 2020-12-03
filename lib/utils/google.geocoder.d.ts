import * as NodeGeocoder from 'node-geocoder';
export declare function loadAPI(API_KEY: string): void;
export declare function reverseLookup(lat: number, lng: number): Promise<NodeGeocoder.Entry[]>;

interface IRequest {
    id: string;
    user: {
        isAuthenticated: boolean;
        email: string;
        id: string;
    };
    header: {
        ip: string;
        token: {
            type: string;
            value: string;
            expiryTime: number;
            isExpired: boolean;
            secondsToExpiry: number;
        };
    };
    hasToken: boolean;
}
export default class Request implements IRequest {
    id: string;
    user: {
        email: string;
        id: string;
        isAuthenticated: boolean;
    };
    header: {
        ip: string;
        token: {
            type: string;
            value: string;
            expiryTime: number;
            isExpired: boolean;
            secondsToExpiry: number;
        };
    };
    hasToken: boolean;
    constructor();
    getId(): string;
    setIP(ip: string): string;
    getIP(): string;
    setEmail(email: string): string;
    getEmail(): string;
    setUserId(id: string): string;
    getUserId(): string;
    setToken(tokenP: {
        type: string;
        value: string;
        expiryTime: number;
    }): {
        type: string;
        value: string;
        expiryTime: number;
        isExpired: boolean;
        secondsToExpiry: number;
    };
    getToken(): {
        type: string;
        value: string;
        expiryTime: number;
        isExpired: boolean;
        secondsToExpiry: number;
    };
    getTokenValue(): string;
    getTokenType(): string;
    isTokenExpired(): boolean;
    isUserAuthenticated(): boolean;
}
export {};

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
    raw: {
        body: object;
        query: object;
        params: object;
        header: object;
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
    raw: {
        body: object;
        query: object;
        params: object;
        header: object;
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
    setRaw(raw: {
        body: object;
        query: object;
        params: object;
        header: object;
    }): {
        body: object;
        query: object;
        params: object;
        header: object;
    };
    getRaw(): {
        body: object;
        query: object;
        params: object;
        header: object;
    };
}
export {};

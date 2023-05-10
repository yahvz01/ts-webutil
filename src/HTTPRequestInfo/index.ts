export enum HTTP_METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

export class HttpRequestInfo {
    readonly method : HTTP_METHOD
    readonly endpoint : string
    private appendedQuery : boolean

    static empty() : HttpRequestInfo {
        return new HttpRequestInfo(HTTP_METHOD.GET, "")
    }

    static of( method : HTTP_METHOD, endpoint : string = "/") : HttpRequestInfo {
        return new HttpRequestInfo(method, endpoint)
    }

    constructor(method : HTTP_METHOD , endpoint : string) {
        this.method = method;
        this.endpoint = endpoint
    }

    setHostExplicitly( host : string ) {
        return new HttpRequestInfo(this.method, `${host}${this.endpoint}`)
    }

    append( query : string ) : HttpRequestInfo {
        return HttpRequestInfo.of(this.method, `${this.endpoint}${query}`)
    }

    appendQuery( key : string, value : string ) : HttpRequestInfo {
        if(this.appendedQuery) {
            return this.append(`&${key}=${value}`);
        } else {
            const data = this.append(`?${key}=${value}`)
            data.appendedQuery = true;
            return data;
        }
    }
}
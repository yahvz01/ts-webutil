
export class AjaxPendingError implements Error {
    name: string = "AjaxPendingError"
    message: string;

    constructor(message : string = "A related request is already in progress") {
        this.message = message
    }
}
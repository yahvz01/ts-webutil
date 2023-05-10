
export enum STATUS {
    INIT,
    PENNDING,
    SUCCESS,
    FAILURE
}

export class ProcessStatus {
    private status : STATUS = STATUS.INIT
    getProcessing() { return this.status; }

    get isInit() : boolean { return this.status == STATUS.INIT; }
    get isPending() : boolean { return this.status == STATUS.PENNDING; }
    get isFailure() : boolean { return this.status == STATUS.FAILURE; }
    get isSuccess() : boolean { return this.status == STATUS.SUCCESS; }
    
    setPending() { this.status = STATUS.PENNDING }
    setSuccess() { this.status = STATUS.SUCCESS }
    setFailure() { this.status = STATUS.FAILURE }
}
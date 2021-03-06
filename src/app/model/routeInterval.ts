interface IRouteInterval{
    Id?:string;
    name:string;
    startTimeStamp:Date;
    endTimeStamp?:Date;
    interval?:number;
}

export class RouteInterval {
    private _id : string;

    public get Id() : string {return this._id;}

    public name : string;

    public startTimeStamp : Date;

    public endTimeStamp : Date;

    public interval : number;

    constructor(routeInterval: IRouteInterval) {
        this._id = routeInterval.Id?routeInterval.Id: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0,
                v = c === 'x'
                    ? r
                    : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        this.startTimeStamp = routeInterval.startTimeStamp;
        this.name = routeInterval.name;
        this.endTimeStamp = routeInterval.endTimeStamp;
    }
}
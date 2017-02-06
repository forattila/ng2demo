import {RouteInterval} from '../../model/index';
import {IntervalService} from '../../services/index';

export class ComponentBase {

    protected id : string;

    protected intervalService : IntervalService;

    constructor(intervalService : IntervalService) {
        this.intervalService = intervalService;
    }

    ngOnInit(name : string) {
        this.id=this.intervalService.startInterval(name);
    }

    ngOnDestroy() {        
        this.intervalService.endInterval(this.id);
    }
}
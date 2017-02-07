import {Action} from '@ngrx/store';
import {RouteInterval} from '../model/index';
import {RouteIntervalActions} from './actions';



export const routeIntervals = (state: Array<RouteInterval> = [], action: Action) => {
    switch (action.type) {
        case RouteIntervalActions.SET_ROUTEINTERVALS:
            return action.payload;
        case RouteIntervalActions.ADD_ROUTEINTERVAL:
            return [...state,action.payload];       
        case RouteIntervalActions.MODIFY_ROUTEINTERVAL:
            return state.map(routeInterval=>{
            return routeInterval.Id === action.payload.Id?action.payload:routeInterval;
            }) ;       
        
        default:
            return state;
    }
};



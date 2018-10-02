import {subscriberGrid} from "../models/subscriberGrid";
var pubsub = require('pubsub.js');

// https://sahadar.github.io/pubsub/


/*
Lets a component subscribe to a channel, 
This can be thought of as the message bus relaying (e.g. woker) messages to the MST objects governing the grid
*/
export function subscribeToChannel(componentIndex, channelIndex){
    return pubsub.subscribe(`subscriberGrid/${channelIndex}/state`, function(data) {
        subscriberGrid.tasks[componentIndex].setState(data);
    });
}

export function unSubscribe(subscription){
    pubsub.unsubscribe(subscription); 
}

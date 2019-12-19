import React, {Component, Fragment} from 'react';
import EventListItemComponent from "./EventListItem.component";

class EventListComponent extends Component {
    render() {
        return (
            <Fragment>
                {this.props.events.map((event) =>
                    <EventListItemComponent key={event.id} event={event}/>
                )}

            </Fragment>
        );
    }
}

export default EventListComponent;

import React, {Component} from 'react';
import {Button, Icon, Item, List, Segment} from "semantic-ui-react";
import EventListAttendeeComponent from "./EventListAttendee.component";


class EventListItemComponent extends Component {
    render() {
        const {event} = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header as="a">{event.title}</Item.Header>
                                <Item.Description>
                                    {event.hostedBy}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {event.attendees && event.attendees.map(attendee => (
                            <EventListAttendeeComponent key={attendee.id} attendee={attendee} />
                        ))}

                    </List>
                </Segment>
                <Segment clearing>
                    <span>{event.description}</span>
                    <Button as="a" color="teal" floated="right" content="View" />
                </Segment>
            </Segment.Group>

        );
    }
}

export default EventListItemComponent;

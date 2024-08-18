"""Event Service.

The Event Service provides access to the Event model and its associated database operations.
"""
from fastapi import Depends
from sqlalchemy.orm import Session

from backend.entities.event_entity import EventEntity
from backend.entities.club_entity import ClubEntity
from backend.models.event import Event, NewEvent
from ..database import db_session

class EventService:

    _session: Session

    def __init__(self, session: Session = Depends(db_session)):
        """Initialize the Club Service."""
        self._session = session

    def create(self, event: NewEvent) -> Event:
        """Create a new event.

        Args:
            event: The event to create.

        Returns:
            Event: The created event.
        """
        event_entity = EventEntity.from_model(model=event)
        self._session.add(event_entity)
        print("EVENT ENTITY", event_entity)
        self._session.commit()
        return event_entity.to_model()
    
    def get_all(self) -> list[Event]:
        """Get all events.

        Returns:
            list[Event]: The list of events.
        """
        query = self._session.query(EventEntity)
        return [event_entity.to_model() for event_entity in query.all()]

    def delete_events(self, id: int) -> None:
        """Deletes all events associated with club.

        Args:
            club: club of the events.
        
        Returns:
            None."""
        query = self._session.query(EventEntity)
        for event_entity in query.all():
            if (event_entity.club_id  == id):
                self._session.delete(event_entity)
        self._session.commit()
        return
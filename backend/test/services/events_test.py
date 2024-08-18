"""
Unit tests for the backend events service.

Tests the backend events service by using a mock database session. Checks creation of a new eve and weather getting all clubs works.
"""

import pytest
from sqlalchemy.orm import Session
from backend.entities.event_entity import EventEntity
from backend.models.club import Club
from backend.models.event import Event, NewEvent
from backend.services.club import ClubService
from backend.services.event import EventService

def test_create_event(db_session: Session):
    event_service = EventService(session=db_session)
    new_club = Club(name="Test Club", description="This is a test club.")
    club_service = ClubService(session=db_session)
    created_club = club_service.create(new_club)

    new_event = NewEvent(event_name="Test Event", club_id=created_club.id)
    created_event = event_service.create(new_event)

    # Confirm that the event was added to the database
    retrieved_event = db_session.query(EventEntity).filter(EventEntity.id == created_event.id).first()
    assert retrieved_event is not None
    assert retrieved_event.event_name == new_event.event_name
    assert retrieved_event.club_id == new_event.club_id

    # Confirm that the created event matches the expected values
    assert created_event.event_name == new_event.event_name
    assert created_event.associated_club.name == created_club.name
    assert created_event.associated_club.description == created_club.description


def test_get_all_events(db_session: Session):
    event_service = EventService(session=db_session)
    club_service = ClubService(session=db_session)
    clubs = [Club(name=f"Club {i}", description=f"Description {i}") for i in range(3)]
    created_clubs = [club_service.create(club) for club in clubs]

    events = [
        NewEvent(event_name=f"Event {i}", club_id=created_clubs[i].id) 
        for i in range(3)
    ]
    for event in events:
        event_entity = EventEntity.from_model(event)
        db_session.add(event_entity)
    db_session.commit()
    result = event_service.get_all()
    assert len(result) == len(events)
    assert all(isinstance(event, Event) for event in result)

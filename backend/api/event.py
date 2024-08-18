from fastapi import APIRouter, Depends

from backend.models.event import Event, NewEvent
from backend.services.event import EventService

from backend.entities.entity_base import EntityBase
api = APIRouter(prefix="/api/event")

@api.post("", response_model=Event, tags=['Event'])
def create(event: NewEvent, event_svc: EventService = Depends()):
    return event_svc.create(event)

@api.get("", response_model=list[Event], tags=['Event'])
def get_all(event_svc: EventService = Depends()):
    return event_svc.get_all()
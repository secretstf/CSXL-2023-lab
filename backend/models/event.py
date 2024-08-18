"""Event model serves as the data object for representing registered events across application layers."""

from pydantic import BaseModel
from backend.models.club import Club

class Event(BaseModel):
    id: int | None = None
    event_name: str = ""
    associated_club: Club | None = None

class NewEvent(BaseModel):
    event_name: str = ""
    club_id: int | None = None

Event.update_forward_refs()
NewEvent.update_forward_refs()
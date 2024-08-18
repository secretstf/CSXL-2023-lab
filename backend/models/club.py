"""Club model serves as the data object for representing registered clubs across application layers."""

from pydantic import BaseModel

class Club(BaseModel):
    id: int | None = None
    club_name: str = ""
    email: str = ""
    leadership: str = ""
    link: str = ""
    approved: bool = False

class NewClub(BaseModel):
    club_name: str = ""
    email: str = ""
    leadership: str = ""
    link: str = ""
    approved: bool = False

Club.update_forward_refs()
NewClub.update_forward_refs()
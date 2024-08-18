from fastapi import APIRouter, Depends

from backend.models.club import Club
from backend.models.club import NewClub
from backend.services.club import ClubService
from backend.services.event import EventService
from backend.services.event import EventService

from backend.entities.entity_base import EntityBase
api = APIRouter(prefix="/api/club")

@api.post("", response_model=Club, tags=['Club'])
def create(club: NewClub, club_svc: ClubService = Depends()):
    return club_svc.create(club)

@api.get("", response_model=list[Club], tags=['Club'])
def get_all(club_svc: ClubService = Depends()):
    return club_svc.get_all()

@api.get("/approved", response_model=list[Club], tags=['Club'])
def get_all(club_svc: ClubService = Depends()):
    return club_svc.get_approved()

@api.put("/approve", response_model=Club, tags=['Club'])
def approve_club(club: Club, club_svc: ClubService = Depends()):
    return club_svc.approve_club(club)

@api.get("/{id}", response_model=Club, tags=['Club'])
def get_club(id:int, club_svc:ClubService=Depends()):
    return club_svc.get_club(id)
  
@api.put("", response_model=Club, tags=['Club'])
def update_club(club: Club, club_svc: ClubService = Depends()):
    return club_svc.update_club(club)

@api.delete("/{id}", response_model=int, tags=['Club'])
def delete_club(id: int, club_svc: ClubService = Depends(), event_svc: EventService = Depends()):
    event_svc.delete_events(id)
    return club_svc.delete_club(id)

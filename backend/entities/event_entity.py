'''Club accounts for all registered clubs in the application.'''

from typing import Self
from fastapi import Depends
from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from backend.entities.club_entity import ClubEntity
from backend.models.event import Event, NewEvent
from backend.models.club import Club
from backend.services.club import ClubService
from .entity_base import EntityBase


class EventEntity(EntityBase):
    __tablename__ = 'event'

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    event_name: Mapped[str] = mapped_column(
        String(64), nullable=False, default=''
    )
    club_id = mapped_column(Integer, ForeignKey("club.id"))
    associated_club: Mapped[ClubEntity] = relationship(
        'ClubEntity', lazy="joined"
    )
    
    class Config:
        orm_mode = True
    
    @classmethod
    def from_model(cls, model: NewEvent) -> Self:
        return cls(
            event_name=model.event_name,
            club_id=model.club_id,
        )

    def to_model(self) -> Event:
        return Event(
            id=self.id,
            event_name=self.event_name,
            associated_club=self.associated_club.to_model(),
        )
'''Club accounts for all registered clubs in the application.'''

from typing import Self
from sqlalchemy import Boolean, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from backend.models.club import Club, NewClub
from .entity_base import EntityBase


class ClubEntity(EntityBase):
    __tablename__ = 'club'

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    email: Mapped[str] = mapped_column(
        String(32), index=True, nullable=False, default=''
    )
    club_name: Mapped[str] = mapped_column(
        String(64), nullable=False, default='')
    approved: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    leadership: Mapped[str] = mapped_column(
        String(64), nullable=False, default='')
    link: Mapped[str] = mapped_column(
        String(64), nullable=False, default='')
    
    class Config:
        orm_mode = True
        
    @classmethod
    def from_model(cls, model: NewClub) -> Self:
        return cls(
            email=model.email,
            club_name=model.club_name,
            approved=model.approved,
            leadership=model.leadership,
            link=model.link
        )

    def to_model(self) -> Club:
        return Club(
            id=self.id,
            email=self.email,
            club_name=self.club_name,
            approved=self.approved,
            leadership=self.leadership,
            link=self.link
        )
    
    def update(self, model: Club) -> None:
        self.club_name = model.club_name
        self.id=model.id
        self.approved=model.approved
        self.email=model.email
        self.leadership=model.leadership
        self.link=model.link
        
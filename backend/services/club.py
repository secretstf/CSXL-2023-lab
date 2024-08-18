"""Club Service.

The Club Service provides access to the Club model and its associated database operations.
"""
from fastapi import Depends
from sqlalchemy.orm import Session

from backend.entities.club_entity import ClubEntity
from backend.models.club import Club
from backend.models.club import NewClub
from ..database import db_session

class ClubService:

    _session: Session

    def __init__(self, session: Session = Depends(db_session)):
        """Initialize the Club Service."""
        self._session = session

    def create(self, club: NewClub) -> Club:
        """Create a new club.

        Args:
            club: The club to create.

        Returns:
            Club: The created club.
        """
        club_entity = ClubEntity.from_model(club)
        self._session.add(club_entity)
        print("CLUB ENTITY", club_entity)
        self._session.commit()
        return club_entity.to_model()
    
    def get_all(self) -> list[Club]:
        """Get all clubs.

        Returns:
            list[Club]: The list of clubs.
        """
        query = self._session.query(ClubEntity)
        return [club_entity.to_model() for club_entity in query.all()]

    def get_approved(self) -> list[Club]:
        """Get all approved clubs.

        Returns:
            list[Club]: The list of approved clubs.
        """
        query = self._session.query(ClubEntity).filter(ClubEntity.approved == True)
        return [club_entity.to_model() for club_entity in query.all()]
    
    def approve_club(self, club: Club) -> Club:
        """Approve a club.

        Args:
            club: The club to approve.

        Returns:
            Club: The approved club.
        """
        club_entity = self._session.query(ClubEntity).filter(ClubEntity.id == club.id).first()
        print("CLUB ENTITY", club_entity)
        if club_entity is not None:
            club_entity.approved = True
            self._session.commit()
        return club_entity.to_model()

    def update_club(self, club: Club) -> Club:
        """Update a club.
        
        Args:
            club: The club to update.
        
        Returns:
            Club: The updated club.
        """
        entity = self._session.get(ClubEntity, club.id)
        if entity is not None:
            entity.update(club)
            self._session.commit()
            return entity.to_model()
        self._session.commit()
        return club

    def delete_club(self, id: int) -> int:
        """Delete a club.
        
        Args:
            club: The club to delete.
        
        Returns:
            Nothing.
        """

        entity = self._session.get(ClubEntity, id)
        if entity is not None:
            self._session.delete(entity)
            self._session.commit()
            return 1
        self._session.commit()
        return 0
"""Club Service.

The Club Service provides access to the Club model and its associated database operations.
"""
from fastapi import Depends
from sqlalchemy.orm import Session

from backend.entities.club_entity import ClubEntity
from backend.models.club import Club
from backend.models.club import NewClub
from ..database import db_session

class ClubService:

    _session: Session

    def __init__(self, session: Session = Depends(db_session)):
        """Initialize the Club Service."""
        self._session = session

    def create(self, club: NewClub) -> Club:
        """Create a new club.

        Args:
            club: The club to create.

        Returns:
            Club: The created club.
        """
        club_entity = ClubEntity.from_model(club)
        self._session.add(club_entity)
        print("CLUB ENTITY", club_entity)
        self._session.commit()
        return club_entity.to_model()
    
    def get_all(self) -> list[Club]:
        """Get all clubs.

        Returns:
            list[Club]: The list of clubs.
        """
        query = self._session.query(ClubEntity)
        return [club_entity.to_model() for club_entity in query.all()]

    def get_approved(self) -> list[Club]:
        """Get all approved clubs.

        Returns:
            list[Club]: The list of approved clubs.
        """
        query = self._session.query(ClubEntity).filter(ClubEntity.approved == True)
        return [club_entity.to_model() for club_entity in query.all()]
    
    def approve_club(self, club: Club) -> Club:
        """Approve a club.

        Args:
            club: The club to approve.

        Returns:
            Club: The approved club.
        """
        club_entity = self._session.query(ClubEntity).filter(ClubEntity.id == club.id).first()
        print("CLUB ENTITY", club_entity)
        if club_entity is not None:
            club_entity.approved = True
            self._session.commit()
        return club_entity.to_model()

    def get_club(self, id:int) -> Club:
        """Get specifc club.

        Returns:
            list[Club]: The list of clubs.
        """
        club_entity = self._session.query(ClubEntity).get(id)
        return club_entity.to_model()

    def update_club(self, club: Club) -> Club:
        """Update a club.
        
        Args:
            club: The club to update.
        
        Returns:
            Club: The updated club.
        """
        entity = self._session.get(ClubEntity, club.id)
        entity.update(club)
        self._session.commit()
        return entity.to_model()

    def delete_club(self, id: int) -> int:
        """Delete a club.
        
        Args:
            club: The club to delete.
        
        Returns:
            Nothing.
        """

        entity = self._session.get(ClubEntity, id)
        if entity is not None:
            self._session.delete(entity)
            self._session.commit()
        self._session.commit()
        return entity.to_model().id

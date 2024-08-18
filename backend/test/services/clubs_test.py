"""
Unit tests for the backend club service.

Tests the backend club service by using a mock database session. Checks creation of a new club and weather getting all clubs works.
"""

import pytest

from sqlalchemy.orm import Session
from backend.entities.club_entity import ClubEntity
from backend.models.club import NewClub
from backend.services.club import ClubService

def test_create_club(db_session: Session):
    club_service = ClubService(session=db_session)
    new_club = NewClub(club_name="Google Developer Students Club", email="dsc@unc.com", leadership="Sundar Pichai", link="https://gdsc.community.dev/")
    created_club = club_service.create(new_club)

    # Confirm that the club was added to the database
    retrieved_club = db_session.query(ClubEntity).filter(ClubEntity.id == created_club.id).first()
    assert retrieved_club is not None
    assert retrieved_club.club_name == new_club.club_name
    assert retrieved_club.email == new_club.email

    # Confirm that the created club matches the expected values
    assert created_club.club_name == new_club.club_name
    assert created_club.email == new_club.email
    assert isinstance(created_club.id, int)


def test_get_all_clubs(db_session: Session):
    club_service = ClubService(session=db_session)
    clubs = [NewClub(club_name=f"Club {i}", email=f"email{i}@example.com", leadership=f"Leader {i}", link=f"https://club{i}.com") for i in range(3)]
    for club in clubs:
        club_entity = ClubEntity.from_model(club)
        db_session.add(club_entity)
    db_session.commit()
    result = club_service.get_all()
    assert len(result) == len(clubs)
    assert all(isinstance(club, NewClub) for club in result)


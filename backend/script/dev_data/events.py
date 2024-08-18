"""Sample Events models to use in the development environment.

These were intially designed to be used by the `script.reset_database` module."""


from backend.models.event import NewEvent


dsc = NewEvent(id=1, event_name="Welcome to DSC", club_id=4)

app_team1 = NewEvent(id=2, event_name="Intro to SwiftUI", club_id=5)

app_team2 = NewEvent(id=3, event_name="Apple Developer SDK", club_id=5)


models = [
    dsc,
    app_team1,
    app_team2
]

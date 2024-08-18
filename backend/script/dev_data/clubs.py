"""Sample Club models to use in the development environment.

These were intially designed to be used by the `script.reset_database` module."""


from backend.models.club import NewClub


dsc = NewClub(club_name="Google Developer Students Club", email="dsc@unc.com", leadership="Sundar Pichai", link="https://gdsc.community.dev/")

appteam = NewClub(club_name="App Team Carolina", email="appteam@live.unc.edu", leadership="Tim Cook", link="https://appteamcarolina.com/")

cs_socialgood = NewClub(club_name="CS + Social Good", email="info@cssocialgood.com", leadership="Sally Social", link="https://cssgunc.org/")


models = [
    dsc,
    appteam,
    cs_socialgood
]

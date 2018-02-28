from . import db

from .tracking import TrackingModel

class User(TrackingModel):

    email = db.Column(db.String(length=50), nullable=False, unique=True)
    passhash = db.Column(db.Text)

    display_name = db.Column(db.String(length=50), unique=True)

    is_admin = db.Column(db.Boolean, default=False)

    def serialize(self):
        base = super().serialize()
        data = {
            'email': self.email,
            'display_name': self.display_name,
            'is_admin': self.is_admin,
        }
        data.update(base)
        return data

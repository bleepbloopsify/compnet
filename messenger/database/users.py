from . import db

from .tracking import TrackingModel

class User(TrackingModel):

    email = db.Column(db.String(length=50), nullable=False, unique=True)
    passhash = db.Column(db.Text)
    display_name = db.Column(db.String(length=50), unique=True)

    verified = db.relationship('Verified', uselist=False, back_populates='user')

    def lean(self):
        base = super().serialize()
        data = {
            'display_name': self.display_name,
        }
        data.update(base)
        return data

    def serialize(self):
        base = self.lean()
        data = {
            'email': self.email,
        }
        data.update(base)
        return data

class Verified(TrackingModel):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=True)
    user = db.relationship('User', back_populates='verified')

    def serialize(self):
        base = super().serialize()
        data = {
            'user': self.user.serialize(),
        }
        data.update(base)
        return data
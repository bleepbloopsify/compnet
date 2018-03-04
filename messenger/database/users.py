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
            'email': self.email,
            'display_name': self.display_name,
            'is_admin': self.is_admin,
        }
        data.update(base)
        return data

    def serialize(self):
        base = self.lean()
        data = {

        }
        data.update(base)
        return data

class Verified(TrackingModel):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    user = db.relationship('User', back_populates='verified')

    def serialize(self):
        base = super().serialize()
        data = {
            'user': self.user.serialize(),
        }
        data.update(base)
        return data
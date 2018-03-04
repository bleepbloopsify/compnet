from . import db
from .tracking import TrackingModel

class Message(TrackingModel):

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    conversation_id = db.Column(db.Integer, db.ForeignKey('conversation.id'), nullable=False)

    user = db.relationship('User')
    conversation = db.relationship('Conversation')

    text = db.Column(db.Text, nullable=False)

    def serialize(self):
        base = self.lean()
        data = {
            'user': self.user.lean(),
            'conversation': self.conversation.lean()
        }
        data.update(base)
        return data

    def lean(self):
        base = super().serialize()
        data = {
            'text': self.text,
        }
        data.update(base)
        return data

conversations_to_users = db.Table('conversations_to_users',
    db.Column('conversation_id', db.Integer, db.ForeignKey('conversation.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'))
)

class Conversation(TrackingModel):

    users = db.relationship('User', secondary=conversations_to_users, lazy='subquery', backref=db.backref('conversations', lazy=True))
    messages = db.relationship('Message')

    def lean(self):
        return super().serialize()

    def serialize(self):
        base = self.lean()
        data = {
            'users': [u.lean() for u in self.users],
            'messages': [m.lean() for m in self.messages],
        }
        data.update(base)
        return data
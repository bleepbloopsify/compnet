from flask import session
from flask_socketio import emit, join_room, leave_room

from . import socketio
from database import Conversation, Message

@socketio.on('connect', namespace='/messages')
def connected():
    print('Connected!')

@socketio.on('disconnect', namespace='/messages')
def disconnected():
    print('Disconnected!')

@socketio.on('new_message', namespace='/messages')
def new_message(conversation_id, text):
    print('Received Message ' + text)
    emit('new_message', { 'text': text }, room=conversation_id)
    conversation = Conversation.query.get(conversation_id)
    new_message = Message(text=text, conversation=conversation)

    emit('new_message', message.lean(), room=conversation_id)

@socketio.on('join_conversation', namespace='/messages')
def join_conversation(id):
    join_room(id)
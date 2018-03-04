from flask import session
from flask_socketio import emit, join_room, leave_room

from . import socketio
from database import Conversation

@socketio.on('connect', namespace='/messages')
def connected():
    print('Connected!')

@socketio.on('disconnect', namespace='/messages')
def disconnected():
    print('Disconnected!')

@socketio.on('new_message', namespace='/messages')
def receive_message(conversation_id, message):
    print('Received Message ' + message)
    emit('new_message', message, room=conversation_id)

@socketio.on('join_conversation', namespace='/messages')
def join_conversation(id):
    join_room(id)
    print(id)
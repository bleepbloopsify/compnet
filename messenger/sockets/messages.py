from flask_socketio import emit

from . import socketio


@socketio.on('send', namespace='/messages')
def receive_message(message):
    print('Received Message ' + message)

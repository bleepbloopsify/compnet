from sockets import socketio
from website import create_app

app = create_app()

if __name__ == '__main__':

    socketio.run(app, port=9999, debug=True)
from flask import Flask, render_template

from sockets import socketio

from .account import account

def create_app():

    app = Flask(__name__)

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/messages')
    def messages():
        return render_template('messages.html')

    app.register_blueprint(account)

    socketio.init_app(app)
    return app
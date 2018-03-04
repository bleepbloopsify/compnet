from flask import Flask, render_template
from sqlalchemy_utils import create_database, database_exists
from flask_migrate import Migrate

from database import db
from sockets import socketio

from .account import account, login_required

def create_app():

    app = Flask(__name__)

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/messages')
    @login_required
    def messages():
        return render_template('messages.html')

    app.register_blueprint(account)

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url = "mysql+pymysql://test:t3stp@ss@0.0.0.0/messenger"

    db.init_app(app)
    if not database_exists(db_url):
        create_database(db_url)
    db.create_all(app=app)
    migrate = Migrate(app, db)

    socketio.init_app(app)
    return app
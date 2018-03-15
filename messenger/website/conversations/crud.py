from flask import jsonify, request, g

from database import db, Conversation, User
from website.account import login_required_json

from . import conversations

@conversations.route('', methods=['POST'])
@login_required_json
def create():

    data = request.get_json()
    user_ids = data['user_ids']
    new = Conversation()
    for user_id in user_ids:
        user = User.query.get(user_id)
        new.users.append(user)
    db.session.add(new)
    db.session.commit()

    return jsonify({
        'success': True,
        'conversation': new.serialize(),
    })

@conversations.route('/<id>', methods=['DELETE'])
@login_required_json
def delete(id):
    db.session.delete(Conversation.query.get(id))
    db.session.commit()

    return jsonify({
        'success': True,
    })
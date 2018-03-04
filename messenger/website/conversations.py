from flask import Blueprint, render_template, request, abort, jsonify, session, redirect, flash, g, url_for
from bcrypt import hashpw, checkpw, gensalt
from functools import wraps

from database import db, Conversation, User

conversations = Blueprint('conversations', __name__)

@conversations.route('', methods=['POST'])
def new_conversation():
    data = request.get_json()
    new_conversation = Conversation()
    fields = ['users']
    if not all(field in data for field in fields) or not all(data[field] for field in fields):
        return abort(401)
    for user_id in data['users']:
        user = User.query.get(user_id)
        if user:
            new_conversation.users.append(user)

    db.session.add(new_conversation)
    db.session.commit()

    return jsonify({
        'success': True,
        'conversation': new_conversation.lean(),
    })

@conversations.route('/<id>', methods=['GET', 'DELETE'])
def individual(id):
    conversation = Conversation.query.get_or_404(id)

    if request.method == 'GET':
        return conversation.serialize()

    if request.method == 'DELETE':
        conversation.delete()
        db.session.commit()

        return jsonify({
            'success': True,
        })

@conversations.route('/<id>/messages', methods=['GET'])
def messages(id):
    return jsonify([])
    conversation = Conversation.query.get_or_404(id)
    return jsonify([m.serialize() for m in conversation.messages()])
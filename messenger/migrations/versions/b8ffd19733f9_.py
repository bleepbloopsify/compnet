"""empty message

Revision ID: b8ffd19733f9
Revises:
Create Date: 2018-03-04 16:31:35.360292

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'b8ffd19733f9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'is_admin')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_admin', mysql.TINYINT(display_width=1), autoincrement=False, nullable=True))
    # ### end Alembic commands ###

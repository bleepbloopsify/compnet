import React from 'react';

import User from '../containers';

export default class UserSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      querystring: '',
    }
  }

  render() {
    const { users } = this.props;
    const { querystring } = this.state;

    let filterstring = querystring.toLowerCase();
    return (
      <div>
        <div className="form-group">
          <input value={querystring}
            onChange={(e)=>this.setState({querystring: e.target.value})}
            placeholder="Search..."/>
        </div>
        <ul className="list-group">
          {Object.values(users).map(user=>{
            if (!user.display_name.toLowerCase().includes(filterstring)) {
              return null;
            }
            return (
              <li className="list-group-item">
                <User id={user.id} />
                <i className="fa fa-plus"
                  onClick={(e)=>this.setState({})}/>
                
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
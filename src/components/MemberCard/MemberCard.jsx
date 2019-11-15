import React, { Component } from 'react';

export default class MemberCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      title: this.props.title,
      email: this.props.email,
      image: this.props.image,
    };
  }

  render() {
    return (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
               src={ this.state.image }
               alt="Member face"/>
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-xl leading-tight">{ this.state.name }</p>
            <p className="text-sm leading-tight text-gray-600">{ this.state.title }</p>
            <p className="text-sm leading-tight text-gray-600">{ this.state.email }</p>
            <div className="mt-4">
              <button onClick={() => console.log("Clicked on member with id: " + this.state.id)}
                className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, {Component} from 'react';
import './App.css';
import MemberCard from './components/MemberCard/MemberCard';

const members = require('./../src/assets/data/team.json');

// todo: change layout to two columns

class App extends Component {

    render() {
        return (
            <div className="flex-col">
                {
                    members.map(member => {
                        return (
                            <MemberCard key={member.id}
                                        id={member.id}
                                        title={member.title}
                                        name={member.name}
                                        email={member.email}
                                        image={member.image}>
                            </MemberCard>
                        );
                    })
                }
            </div>
        );
    }

}

export default App;

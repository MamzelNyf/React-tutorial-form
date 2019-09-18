import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    state = {// state as any data that should be saved and modified without necessarily being added to a database
        characters:[
            {
            name: 'Charlie',
            job: 'Janitor',
            },
            {
            name: 'Mac',
            job: 'Bouncer',
            },
            {
            name: 'Dee',
            job: 'Aspring actress',
            },
            {
            name: 'Dennis',
            job: 'Bartender',
            },
        ],
    }
    removeCharacter = index => {// create a removeCharacter method on the parent App class to be able to remove a character from the table
        const {characters} = this.state

        this.setState({//this.setState(), a built-in method for manipulating state.
            characters: characters.filter((characters, i) => {//filter does not mutate but rather creates a new array
                return i !== index //filter the array based on an index that we pass through, and return the new array.
            }),
        })
    }
    render(){
        const {characters} = this.state

        // const characters = [
        //     {
        //         name: 'Charlie',
        //     job: 'Janitor',
        //     },
        //     {
        //     name: 'Mac',
        //     job: 'Bouncer',
        //     },
        //     {
        //     name: 'Dee',
        //     job: 'Aspring actress',
        //     },
        //     {
        //     name: 'Dennis',
        //     job: 'Bartender',
        //     },
        // ]
        return(
            <div className="container">
                <h1>React, take it easy!</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                {/* pass the removeCharacter function through as a prop to Table */}
            </div>
        )
    }
}

export default App
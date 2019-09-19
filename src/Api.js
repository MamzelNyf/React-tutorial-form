import React, {Component} from 'react'

class App extends Component {
    state = {
        data: [],
    }

    //Code is invoked after the component is mounted/inserted into the DOM tree
    componentDiMount(){
        const url='https://en.wikipedia.org/w/api.php?action=opensearch&search=Game+of+Thrones&format=json&origin=*'

        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.ListeningStateChangedEvent({
                data: result,
            })
        })
    }

    render(){
        const {data} = this.state

        const result = data.map((entry, index)=> {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }
}

export default App 

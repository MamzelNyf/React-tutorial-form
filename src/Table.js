import React, {Component} from 'react'

const Title = () => {
    return <h2>Subtitle</h2> 
    //Not return does not need parentheses when contained on one line
}
const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {//with props, it's one way data flow
    const rows = props.characterData.map((row,index) => { //props are read-only, effective way to pass data  to a React component
        return (
             <tr key={index}> {/*always use keys when making lists in React, as they help identify each list item */}
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                    {/* pass key/index through as a parameter, so the filter function knows which item to remove. */}
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


class Table extends Component {
    render(){
        const {characterData, removeCharacter} = this.props; //Since we're passing it down to TableBody from Table, we have to pass it as a props

        return(
            <div>
                <Title />
                <table>
                    <TableHeader /> 
                    <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
                </table>
            </div>
        )
    }
}

export default Table
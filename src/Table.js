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
    const rows = props.characterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


class Table extends Component {
    render(){
        const {characterData} = this.props //Since we're passing it down to TableBody from Table, we have to pass it as a props

        return(
            <table>
                <TableHeader /> 
                <TableBody characterData={characterData}/>
            </table>
        )
    }
}

export default Table
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

const TableBody = props => {

    return (
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody> 
    )
}


class Table extends Component {
    render(){

        return(
            <table>
                <TableHeader /> 
                <TableBody />
            </table>
        )
    }
}

export default Table
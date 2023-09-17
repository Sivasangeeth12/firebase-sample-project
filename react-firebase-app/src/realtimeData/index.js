import React from 'react'
import {ref, onValue} from 'firebase/database'
import{ Table } from 'react-bootstrap'
import StartFirebase from '../config/firebase'

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData : []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'bin');

        onValue(dbRef,(snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyname = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyname,"data":data});
            });
            this.setState({tableData:records});
        });
    }
    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>DustBin No</th>
                        <th>Type</th>
                        <th>Capacity</th>
                        <th>Type</th>
                        <th>capacity</th>
                        <th>Type</th>
                        <th>capacity</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map((row,index)=>{
                        return(
                        <tr>
                            {/* <td>{index}</td> */}
                            <td>{row.key}</td>
                            <td>Bio</td>
                            <td>{row.data.bio.capacity}</td>
                            <td>Non-Bio</td>
                            <td>{row.data.nonbio.capacity}</td>
                            <td>E-Waste</td>
                            <td>{row.data.ewaste.capacity}</td>
                            
                            <td>{row.data.lati}</td>
                            <td>{row.data.lngi}</td>


                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}
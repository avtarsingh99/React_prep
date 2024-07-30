import React, { useState } from 'react'
import data from "./data"
import "./styles.css"

function Accordian() {

    const [selectedData, setSelectedData] = useState(null)
    const [enableMutliSelection, setEnableMultiSelection] = useState(false)
    const [multipleId, setMultipleId] = useState([])
    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelectedData(getCurrentId === selectedData ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId) {
        let cpymultiple = [...multipleId]
        let findIndexOfCurrentId = cpymultiple.indexOf(getCurrentId)

        if (findIndexOfCurrentId === -1) {
            cpymultiple.push(getCurrentId)
        } else {
            cpymultiple.splice(findIndexOfCurrentId, 1)
        }

        setMultipleId(cpymultiple)
        console.log(selectedData, cpymultiple)

    }
    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMutliSelection)}>Enable multi selection</button>
            <div className='accordian'>
                {
                    data && data.length > 0 ? data.map(dataItem => <div className='item'>
                        <div onClick={enableMutliSelection ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)} className='title'>
                            <h2>{dataItem.ques}</h2>
                            <h1>+</h1>
                        </div>{(

                            enableMutliSelection ?
                                multipleId.indexOf(dataItem.id) !== -1
                                && (<div className='content'> {dataItem.ans}</div>)
                                : selectedData === dataItem.id
                                &&( <div className='content'> {dataItem.ans}</div>)
                       ) }
                    </div>)
                        : <div>No data ! present</div>
                }
            </div>
        </div>
    )
}

export default Accordian

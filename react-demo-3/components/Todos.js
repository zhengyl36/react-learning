/**
 * Created by karl.zheng on 2018/2/28.
 */
import React from 'react'
import PropTypes from 'prop-types'

let Todos = ({data, add})=>{
    let input;
    return (
        <div>
            <input ref={node => input = node}/>
            <button onClick={()=>{add(input.value);input.value="";}}>add</button>
            <ul>
                {
                    data.map((temp) => (
                        <li key={temp.id}>{temp.todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}

Todos.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        todo: PropTypes.string.isRequired
    }).isRequired).isRequired,
    add: PropTypes.func.isRequired
}

export default Todos


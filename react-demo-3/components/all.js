/**
 * Created by karl.zheng on 2018/2/28.
 */
import React from 'react'
import PropTypes from 'prop-types'

let All = ({todos, nodos})=>{
    return (
        <div>
            <p>hello world</p>
            <ul>
                {
                    todos.map(
                        (node) => (
                            <li key={node.id}>{node.todo}</li>
                        )
                    )
                }
            </ul>
            <ul>
                {
                    nodos.map(
                        (node) => (
                            <li key={node.id}>{node.todo}</li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

All.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        todo: PropTypes.string.isRequired
    }).isRequired).isRequired,
    nodos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        todo: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default All
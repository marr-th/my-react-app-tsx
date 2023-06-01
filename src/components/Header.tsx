import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/features/counter'

export default function Header() {
    const count = useSelector((state: any) => state.loginCounter.value)// TODO implement memoize of reselect if it is needed
    const dispatch = useDispatch()

    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Test Increment
            </button>
            <span>numbers of user logged without reload to test saga: {count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Test Decrement
            </button>
        </div>
    )
}
import React, {Component} from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className='search-container'>
                <input type='text' />
                <button>Поиск</button>
                <p>Ошибка</p>
            </div>
        )
    }
}
import React from 'react';
import CampsList from './CampsList'; 

const dummyData = [
    {id: '1', title: 'Nice Tent', description: 'This is a nice camp', address: 'Oslo', location: '', image: 'https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {id: '2', title: 'Another Tent', description: 'This another', address: 'Moss', location: '', image: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {id: '3', title: 'Cool Tent', description: 'Please go here', address: 'Toyen', location: '', image: 'https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
]


export default function Camps() {
    return (
        <CampsList camps={dummyData}/>
    )
}


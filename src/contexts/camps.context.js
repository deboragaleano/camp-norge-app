import React, {createContext, useState} from 'react';

export const CampsContext = createContext(); 

const defaultValues = [
    {title: 'Nice Tent', description: 'This is a nice camp', address: 'Oslo', location: '', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
    {title: 'Another Tent', description: 'This another', address: 'Moss', location: '', image: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {title: 'Cool Tent', description: 'Please go here', address: 'Toyen', location: '', image: 'https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
]

export function CampsProvider(props) {
    const [camps, setCamps] = useState(defaultValues); 
    
    return (
        <CampsContext.Provider value={camps}>
            {props.children}
        </CampsContext.Provider>
    )
}

//TODO:

//Refactor this using useReducer and reducer 
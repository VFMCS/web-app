import React from 'react';
import {useEffect, useState} from 'react';

export const Hello =()=>{
    const [initialState, setInitialState] = useState([])

    useEffect(()=> {
        fetch('/api/').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setInitialState(jsonResponse))
    },[])

    //console.log(initialState)

    return(<div>
        {initialState.length > 0 && initialState.map((e) => <li>{e}</li>)}
    </div>)
    

/*
    return(<div>
    
        {initialState.map((e) => <li>{e}</li>)}

    </div>)
    */
    
    
}
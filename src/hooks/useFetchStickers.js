import { useEffect, useState } from 'react';
import { getStickers } from '../api/getStickers';

export const useFetchStickers = (item) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        getStickers(item)
        .then(
            data => {
                setTimeout(() => {
                    setState({
                        data: data,
                        loading: false
                    })
                }, 1000);
            }
        )
    }, [item]) 
        

    return state
}

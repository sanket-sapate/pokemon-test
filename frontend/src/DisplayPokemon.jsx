import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from './Axios.js'
export default function DisplayPokemon() {
    const {data:pokemon, ref, loading} = usePagination()
    return <div className="min-h-screen p-5">
        <h1 className="text-3xl font-bold text-center">Pokemon</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-20 mt-6">
            {
                pokemon?.map((p,i) => {
                    return <div key={i} className="text-base bg-white h-fit p-4 rounded-lg shadow-lg w-fit mx-auto">
                        <img src={p.image} alt={p.name} className="block mx-auto object-contain h-3/4" />
                        <div className="flex justify-between mt-4">
                            <h2 className=" font-bold ">{p.name}</h2>
                            <p className="text-base"><span className="font-bold">HP:</span> 70</p>
                        </div>
                        <h3 className="text-sm font-medium mt-2">Attacks :</h3>
                        <p className="text-xs"> {p.attacks.join(',')} </p>
                        <h3 className="text-sm font-medium mt-2">Abilities :</h3>
                        {
                            p.abilities.length > 0 ? <p className="text-xs">{p.abilities.join(', ')}</p>: <p className="text-xs">N/A</p>
                        }
                    </div>
                })
            }
        </div>
        {loading ? <span ref={ref} className="loading loading-spinner loading-lg mx-auto block m-3 mt-6"/> : <></>}
    </div>
}

export function usePagination() {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const ref = useRef()
    const navigate = useNavigate()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                setTimeout(()=>setPage((prev)=>prev+1),300)
            }
        }, {threshold: 1})
        if(ref.current)
            observer.observe(ref.current)
        return () => {if(ref.current) return observer.disconnect()}
    },[ref])

    useEffect(() => {
        getNewData()
    },[page])
    const getNewData = async () => {
        setLoading(true)
        try {
            const { data:pokemonData} = await axios.get(`/pokemon/get?page=${page}`)
            setData((prev)=>[...prev,...pokemonData.data])
            
            if(pokemonData.hasMore === false) {
                // ref.current = null
                setLoading(false)
            }
        } catch (error) {
            console.error(error)
            if(error.response.status === 401)
                navigate('/login')
            setLoading(false)
        }
    }

    return { loading, data, ref }
}
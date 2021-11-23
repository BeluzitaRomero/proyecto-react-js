import "./CartCheckOut.css"

export function CartCheckOut ({setClient, client, name}) {
    const handleClientOnChange = (e) =>{
        setClient({...client, [e.target.name]: e.target.value  })
    }

    return (
        <>
        <input type="text" id="name" name={name} onChange={handleClientOnChange}/>
        </>
     )
}
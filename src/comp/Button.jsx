
export function Button({show, setShow}) {

    return(
        <>
            <button onClick={() => setShow(!show)}>{show == true ? "Hide StoreCard" : "Show StoreCard"}</button>
        </>
     )
}
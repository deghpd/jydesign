
export function StoreCard({store}) {

    return (
        <>
       <div>
      <h2>{store.title}</h2>
      <img 
        src={store.img} 
        alt={store.title} 
        style={{
          width: "200px",     
          height: "auto",    
          objectFit: "cover", 
          borderRadius: "8px" 
        }}
      />
    </div>
        </>
    )
}
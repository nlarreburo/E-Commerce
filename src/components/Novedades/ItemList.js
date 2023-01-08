import React,{ useEffect,useState} from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import ProductsCard from '../ProductsCard'
import { PropagateLoader } from 'react-spinners'



export const ItemList = () => {
    const [PRODUCT, setPRODUCT] = useState([])
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
      getItemData()
      setLoading(true)
      setTimeout(() => {
          setLoading(false) //aca cambiar a false
      }, 1000);
    },[])
    
    
  const getItemData = async () => {
        const db = getFirestore()
        const collectionRef = collection(db,'products')
        console.log("paso");
        const snapshot = await  getDocs(collectionRef)
        setPRODUCT(snapshot.docs.map(d => d.data()))
        console.log("items:",PRODUCT)
  }




    
  return (
    <>{
        loading ?
            <div className='flex items-center justify-center m-auto h-[65vh]'>
                <PropagateLoader
                    color="#7e2d2d"
                    loading={loading}
                    size={15}
                    aria-label="Propagate Loader"
                    data-testid="loader"
                />
            </div>
        :
            <div>
                <h2 className='text-4xl text-black text-center p-5'> Nuestros articulos a la venta mas nuevos!!!</h2>
                <div className='min-h-[65vh] grid justify-items-center lg:grid-cols-3 gap-4 md:grid-cols-2 gap-2'>
                    {
                        PRODUCT.map((item) => <ProductsCard key={item.id} {...item}/>)
                        }
                </div>
            </div>
        }
    </>
  )
  
}
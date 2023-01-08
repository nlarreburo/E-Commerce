import {PRODUCTS} from '../data/prod'
import React, { useEffect , useState}  from 'react'
import ProductsCard from './ProductsCard'
import { useParams } from 'react-router-dom'
import PropagateLoader from "react-spinners/PropagateLoader";




const ProductsList = () => {
    const { idCategory } = useParams();
    const [loading, setLoading] = useState(false)
    const [productlist, setProductlist] = useState([])


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false) //aca cambiar a false
        }, 1000);
    }, [])
    

    const getProducts = async() => await new Promise((resolve , reject) => { 
        setTimeout(() => { resolve (PRODUCTS)}, 1000) 
    })

    useEffect(()=>{
        if (idCategory){
            getProducts()
            .then( product => {
                setProductlist(product.filter( p => p.category === idCategory))
            })
            .catch(err => console.log(err))

        }else {
            getProducts()
            .then( product => {
                setProductlist(product)
            })
            .catch(err => console.log(err))
        }
    },[idCategory])

    

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
                    <div className='min-h-[65vh] grid justify-items-center lg:grid-cols-3 gap-4 md:grid-cols-2 gap-2'>
                        {
                            productlist.map((item) => <ProductsCard key={item.id} {...item}/>)
                            }
                    </div>
                </div>
        }
        </>
    )
}

export default ProductsList
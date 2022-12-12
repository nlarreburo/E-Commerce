import {PRODUCTS} from '../data/prod'
import React, { useEffect , useState}  from 'react'
import ProductsCard from './ProductsCard'
import { useParams } from 'react-router-dom'


const ProductsList = () => {
    const { idCategory } = useParams();
    console.log(idCategory)
    const [productlist, setProductlist] = useState([])

    const getProducts = async() => await new Promise((resolve , reject) => { 
        setTimeout(() => { resolve (PRODUCTS)}, 2000) 
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
        <>
            <div className='grid justify-items-center lg:grid-cols-3 gap-4  md:grid-cols-2 gap-2'>
                {
                    productlist.map((p) => <ProductsCard key={p.id} {...p}/>)
                    }
            </div>
            
        </>
    )
}

export default ProductsList
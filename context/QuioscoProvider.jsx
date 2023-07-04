import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

"cliente use"


const { createContext, useState, useEffect } = require( "react" );



const QuioscoContext = createContext();

const QuioscoProvider =({children})=>{

    const [actualCategory, setActualCategory] =useState({});
    const [categories, setCatgories] = useState([]);
    const [modal, setModal] = useState(false);
    const [order,setOrder]=useState([]);
    const [product, setProduct]=useState({});
    const [name, setName]=useState('');
    const [total, setTotal]=useState(0);

    const router = useRouter();

    const getCategories = async ()=>{
        const {data} = await axios('/api/categorias',{
            method:'GET',
            headers:{
                "Content-Type" : "application/json"
            }
        });
        setCatgories(data)
    }


    useEffect(()=>{
        getCategories()
    },[])

    useEffect(()=>{
        setActualCategory(categories[0])
    },[categories])

    useEffect(()=>{
        
        // console.log(order)
    },[order])

    useEffect(()=>{
        const newTotal = order.reduce((total, product)=> (product.precio * product.quantity) + total, 0)
        
        setTotal(newTotal)
    },[order])

    const handleClickCategory = (id)=>{
        const category = categories.filter(_category => _category.id === id);
        setActualCategory(category[0])
        router.push('/')
    }

    const handleSetProducto = (producto)=>{
        setProduct(producto)
    }
    const handleChangeModal = ()=>{
        setModal(!modal)
    }

    const handleAddOrder = ({categoriaId, ...product })=>{
        if(order.some(_order => _order.id === product.id)){
            
            const orderActual = order.filter(_order => _order.id === product.id);
            orderActual[0].quantity = product.quantity            
            setOrder([...orderActual])
            toast.success('Pedido Editado correctamente')

        }else{
            setOrder(prevOrder => prevOrder = [...order,product])
            toast.success('Pedido Agregado')
        }
        setModal(false)
    }

    const handleEditQuantities = (id)=> {
        const productoToUpdate = order.filter(_order => _order.id === id)
        setModal(!modal)
        setProduct(productoToUpdate[0])
    }
    const handleDeleteProduct = (id)=> {
        const orderToUpdate = order.filter(_order => _order.id !== id)

        setOrder([...orderToUpdate])
    }
    
        const sendOrder = () =>{
        console.log('sending order ...')
    }

    return (
        <QuioscoContext.Provider
            value={{
                categories,
                handleClickCategory,
                actualCategory,
                handleSetProducto,
                product,
                handleChangeModal,
                modal,
                handleAddOrder,
                order,
                handleEditQuantities,
                handleDeleteProduct,
                name,
                setName,
                sendOrder,
                total

            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}


export {
    QuioscoProvider
}
export default QuioscoContext;
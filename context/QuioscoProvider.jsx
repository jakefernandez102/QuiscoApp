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
            
            const prodUpdated = order.map(prod => prod.id === product.id ? product : prod)
            console.log(prodUpdated)
            setOrder(prodUpdated)
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
        console.log(order)
        console.log(product)
        console.log(productoToUpdate)
        setProduct(productoToUpdate[0])
    }
    const handleDeleteProduct = (id)=> {
        const orderToUpdate = order.filter(_order => _order.id !== id)

        setOrder([...orderToUpdate])
    }
    
        const sendOrder = async (e) =>{
        e.preventDefault();

        try {
            await axios.post(
                        '/api/ordenes', {
                        pedido:order,
                        nombre:name,
                        total,
                        fecha:new Date().toLocaleDateString('es-CR',{year:'numeric',weekday:'long',month:'long',day:'numeric'})
                        })
            //reset app
            toast.success('Pedido Realizado correctamente');
            setTimeout(() => {
                router.push('/')
                setActualCategory(categories[0])
                setOrder([]);
                setName('')
                setTotal(0);
            }, 1200);



        } catch (error) {
            console.log(error)
        }

        console.log(order)
        console.log(name)
        console.log(total)
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
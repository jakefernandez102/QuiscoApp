import axios from 'axios';

const { createContext, useState, useEffect } = require( "react" );



const QuioscoContext = createContext();

const QuioscoProvider =({children})=>{

    const [actualCategory, setActualCategory] =useState({});
    const [categories, setCatgories] = useState([]);
    const [modal, setModal] = useState(false);
    const [order,setOrder]=useState([]);
    const [product, setProduct]=useState({});

    const getCategories = async ()=>{
        const {data} = await axios('/api/categorias');
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

    const handleClickCategory = (id)=>{
        const category = categories.filter(_category => _category.id === id);
        setActualCategory(category[0])
    }

    const handleSetProducto = (producto)=>{
        setProduct(producto)
    }
    const handleChangeModal = ()=>{
        setModal(!modal)
    }

    const handleAddOrder = ({categoriaId,imagen, ...product })=>{

        if(order.some(_order => _order.id === product.id)){
            
            const orderActual = order.filter(_order => _order.id === product.id);
            orderActual[0].quantity = product.quantity            
            setOrder([...orderActual])

        }else{
            setOrder(prevOrder => prevOrder = [...order,product])
        }

        setModal(false)
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
                order
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
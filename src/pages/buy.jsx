import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { MdAddCircle } from "react-icons/md";
import { FaCircleMinus } from "react-icons/fa6";
const Buynow = ()=>{
     const [quantity,setQuantity] = useState(1);
     const location = useLocation();
     const {data} = location.state || {};
     const addq = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    
    const minus = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    }
    
    return(
        <>
            <section className='flex mobile:flex-col w-full px-3 py-7 h-fit mobile:px-2 mobile:py-4 gap-9'>
<br /><img src={data.image} className="w-[45%] mobile:w-fit object-fill" alt="" />
                <div className="flex  flex-col items-start gap-3 justify-center mobile:w-full w-[42%] mobile:h-fit pl-3">
                    <h1 className="font-semibold text-2xl pb-3">{data.name}</h1>
                    <p>{data.description}</p>
                    <span className="pt-4 flex gap-2 items-center w-fit h-fit justify-center">Quantity:<span className="flex text-[20px] items-center justify-center w-fit h-fit gap-2">
                    <FaCircleMinus onClick={minus} />
                        {quantity}
                    <MdAddCircle onClick={addq} />
                    </span></span>
                    <p className="text-[18px] py-4">Price: $ {data.price*quantity}</p>
                <button
                    className="bg-black flex items-center text-[18px] justify-center gap-2 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    Buy Now
                </button>
                </div>
            </section>
        </>
    )
}
export default Buynow;
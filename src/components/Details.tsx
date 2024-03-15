import { Button, Image } from '@nextui-org/react'
import { useNavigate, useParams } from 'react-router-dom'
import MineCartData from '../db/cart'

const Details = () => {
    const navigate = useNavigate();
    const params = useParams()
    const filteredMenuItems = MineCartData.filter((item) => item.id === Number(params.id))
    return (
        <div className='mt-10'>
            <div className='flex justify-around gap-10 items-center'>
                <div className='flex items-start'>
                    <Image
                        isZoomed
                        alt={filteredMenuItems[0].name}
                        className="w-full object-cover h-[500px]"
                        src={filteredMenuItems[0].image}
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mt-5">{filteredMenuItems[0].name}</h1>
                    <p className="text-lg font-semibold mt-2">{filteredMenuItems[0].description}</p>
                    <p className="text-center text-lg font-bold mt-2">Price: {filteredMenuItems[0].price}</p>
                    <div className='mt-4'>
                        <Button className='mx-auto flex items-center justify-center hover:bg-black hover:text-white' variant='solid' onClick={() => navigate(`/`)}>
                            Go To Home
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import MineCartData from "../db/cart"
import { useNavigate } from "react-router-dom";

const MenuItems = ({ searchQuery }: { searchQuery: string }) => {
    const navigate = useNavigate();
    const filteredMenuItems = MineCartData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="gap-2 grid grid-cols-1 lg:grid-cols-3 mt-4">
            {filteredMenuItems.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => navigate(`/details/${index+1}`) }>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                        <h4 className="font-bold text-large">{item.name}</h4>
                        <p className="text-tiny uppercase font-bold">{item.description}</p>
                        <small className="text-default-500">{item.price}</small>
                    </CardHeader>
                    <CardBody className="p-10">
                        <Image
                            radius="sm"
                            shadow="sm"
                            width="100%"
                            alt={item.name}
                            className="w-full object-cover h-[500px]"
                            src={item.image}
                        />
                    </CardBody>
                </Card>
            ))}
        </div>

    )
}

export default MenuItems
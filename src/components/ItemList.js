import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2 font-bold">
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <button className="p-2 bg-green-500 shadow-lg absolute mx-2 my-24 rounded-lg text-sm text-white"
                             onClick={() => handleAddItem(item)}>
                                Add +
                            </button>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full h-36"/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemList;
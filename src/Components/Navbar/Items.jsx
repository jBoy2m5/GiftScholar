import item from "../../item-img/40px-Doran's_Ring_item.png"
import {useState, useRef, useEffect} from "react";
import gold_icon from "../../assets/20px-Gold_colored_icon.png"

function Items() {

    const [position, setPosition] = useState({x: 0, y: 0});
    const [show, setShow] = useState(false);
    const itemRef = useRef(null);
    const [tableDimension, setTableDimension] = useState({width: 0, height: 0});
    let top = position.y + 15;
    let left = position.x + 15;

    useEffect(() => {
        if (show && itemRef.current) {
            const tableDim = itemRef.current.getBoundingClientRect();
            const width = tableDim.width;
            const height = tableDim.height;
            setTableDimension({width, height});
        }
    }, [show])

    if (top + tableDimension.height > window.innerHeight){
        top = position.y - 15 - tableDimension.height;
    }

    if (left + tableDimension.width > window.innerWidth) {
        left = position.x - 15 - tableDimension.width;
    }

    return(
        <div className="flex flex-wrap gap-10">
            <div className="w-25 px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full mb-3" 
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                onMouseMove={(e) => setPosition({x: e.clientX, y: e.clientY})}
                />
                <p className="text-sm text-center">Doran's Ring</p>
                {show &&
                <div className="fixed bg-black px-5 py-5 flex gap-5 w-120"
                style={{top, left}}
                ref={itemRef}
                > {/* Item box */}
                    <img src={item} className="w-18 rounded-full mb-3 h-18 " /> {/* Icon img */}
                    <div className="w-8/10"> {/* description */}
                        <div className="pb-3 border-b border-[#F2D18B] mb-3">
                            <h1 className="w-[100%] font-bold text-xl break-word">Doran's Ring</h1>
                            <div className="flex gap-2">
                                <img src={gold_icon} />
                                <span>400</span>
                            </div>
                        </div>
                        <div className="pb-3 border-b border-[#F2D18B] mb-3">
                            <div className="flex gap-1">
                                <span>+18</span>
                                <span className="text-[#7F8AA3]">Ability Power</span>
                            </div>
                            <div className="flex gap-1">
                                <span>+90</span>
                                <span className="text-[#7F8AA3]">Health</span>
                            </div>
                        </div>
                        <div className="pb-3 ">
                            <p className="mb-2">
                                <span>Unique – Drain: </span>
                                <span className="text-[#7F8AA3]">Restore 1 mana every second. Dealing damage to an enemy champion increases the restoration to 2 mana for the next 5 seconds. If you cannot gain mana, heal for「 45% of the value 」instead.</span>
                            </p>
                            <p className="mb-2">
                                <span>Unique – Helping Hand: </span>
                                <span className="text-[#7F8AA3]">Basic attacks deal 5 bonus physical damage on-hit against minions.</span>
                            </p>
                        </div>
                    </div>
                </div>
                }
            </div>
            
        </div>
    )
}

export default Items
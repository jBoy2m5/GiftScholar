import {useState} from "react";
import {data} from "./Test/Data.jsx";

function Test() { 

    const [search, setSearch] = useState("");

    const filterName = data.filter((data) => data.first_name.toLowerCase().includes(search));

    return (
        <div>
            <input placeholder="Search" className="bg-white text-black mb-10" value={search} onChange={(e) => setSearch(e.target.value)}></input>

            {filterName.map((data) => (
                <div className="flex gap-30 mb-15">
                <p>{data.first_name}</p>
                <p>{data.last_name}</p>
                <p>{data.email}</p>
                <p>{data.gender}</p>
                <p>{data.ip_address}</p>
            </div>
            ))}

            {}

        </div>
    )
}

export default Test;
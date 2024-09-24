import { useContext, useEffect, useState } from "react";
import "../styles/Display.css";
import Button from '@mui/material/Button';
import { AppContext } from "../useContext/userContext";
import Navbar from "../components/Navbar";

const DisplayFile = ({ contract, account }) => {
    const [data, setData] = useState("");

    const { accountData } = useContext(AppContext);
    const { contractData } = useContext(AppContext);

    const getdata = async () => {
        let dataArray;

        // console.log("display account:", accountData);

        try {
            dataArray = await contractData.display(accountData);
            // console.log("dataArray: ", dataArray);
        } catch (e) {
            console.log("error display account:", accountData);
            alert("You don't have access");
        }

        const isEmpty = dataArray && Object.keys(dataArray).length === 0;

        if (!isEmpty) {
            const str = dataArray.toString();
            const str_array = str.split(",");
            console.log("str: ", str);
            console.log("str_array: ", str_array);
            const images = str_array.map((item, i) => {
                console.log("item:", item);
                return (
                    <a href={item} key={i} target="_blank" id="display-data">
                        <img
                            key={i}
                            // src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                            src={`${item}`}
                            alt={`file ${i}`}
                            className="image-list"
                        ></img>
                    </a>
                );
            });
            setData(images);
        } else {
            alert("No image to display");
        }
    };

    return (
        <>
            <Navbar account={accountData} />
            {/* <button className="center button" onClick={getdata}>
                Get Data
            </button> */}
            <Button onClick={getdata} variant="contained" style={{ backgroundColor: 'blueviolet', margin: '2rem' }}>Show Documents</Button>

            <div className="image-list">{data}</div>
        </>
    );
};

export default DisplayFile;

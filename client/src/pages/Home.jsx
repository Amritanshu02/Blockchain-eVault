import Upload from "../artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect, useContext } from "react";
import UploadFile from "./UploadFile";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { AppContext } from "../useContext/userContext";
const ethers = require("ethers");

function App() {
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const { setAccountData } = useContext(AppContext);
    const { setContractData } = useContext(AppContext);


    useEffect(() => {
        const initializeContract = async () => {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);

                if (!provider) {
                    throw new Error("Metamask is not installed or configured.");
                }

                window.ethereum.on("chainChanged", () => {
                    window.location.reload();
                });

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload();
                });

                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setAccount(address);
                setAccountData(address);

                const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
                const contract = new ethers.Contract(contractAddress, Upload.abi, signer);

                setContract(contract);
                setContractData(contract);
                setProvider(provider);
                setLoading(false);
            } catch (error) {
                console.error("Error initializing contract:", error);
                setLoading(false);
            }
        };

        initializeContract(); // Initialize contract when component mounts
    }, []);

    const handleClick = async () => {
        try {
            setLoading(true); // Set loading state while connecting

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setAccount(address);
            setAccountData(address);

            const contractAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
            const contract = new ethers.Contract(contractAddress, Upload.abi, signer);

            setContract(contract);
            setContractData(contract);
            setProvider(provider);
            setLoading(false); // Set loading state to false after contract initialization
        } catch (error) {
            console.error("Error connecting Metamask and initializing contract:", error);
            setLoading(false); // Set loading state to false in case of error
        }
    };

    // if (loading) {
    //   return <div>Loading...</div>;
    // }

    return (
        <div id="home-container">
            <Navbar account={account} />

            <div className="home">

                {/* <div className="home-bg"></div>
                <div className="home-bg bg2"></div>
                <div className="home-bg bg3"></div> */}

                {/* <p style={{ color: "Black" }}>
                    Account : {account ? account : <button onClick={handleClick}>Connect</button>}
                </p> */}

                <UploadFile
                    account={account}
                    provider={provider}
                    contract={contract}
                />

            </div>
        </div>
    );
}

export default App;
import React from 'react'
import { useState } from "react";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "../styles/UploadFile.css";
import axios from "axios";

const UploadFile = ({ contract, account, provider }) => {

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No image selected");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: `7c6e81135d1fabe3e798`,
                        pinata_secret_api_key: `84032b2a54b6f093dbedd0124f8e04ba6f9ae471a92367187766bf3053bce231`,
                        "Content-Type": "multipart/form-data",
                    },
                });
                const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
                contract.add(account, ImgHash);
                alert("Successfully Image Uploaded");
                setFileName("No image selected");
                setFile(null);
            } catch (e) {
                alert("Unable to upload image to Pinata");
            }
        }
        // alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
    };
    const retrieveFile = (e) => {
        const data = e.target.files[0]; //files array of files object
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend = () => {
            setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
    };

    return (
        <div className='upload-main-container'>

            <div className="upload-content">
                <h1 id="upload-title">Upload Your <span>Files</span></h1>

                <div className="upload-content-dragbox">

                    <form className="form" onSubmit={handleSubmit}>
                        <div id="drag-drop" onClick={() => document.querySelector("#file-upload").click()}>
                            <input
                                disabled={!account}
                                type="file"
                                id="file-upload"
                                name="data"
                                onChange={retrieveFile}
                            />
                            <CloudUploadIcon id="upload-icon" />
                        </div>
                        {fileName !== "No image selected" && <span className="textArea"><b>File:</b> {fileName}</span>}

                        <Button id="upload-button" type="submit" disabled={!file} variant="contained" style={{ backgroundColor: 'blueviolet', marginTop: '2rem' }}>Upload</Button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default UploadFile;
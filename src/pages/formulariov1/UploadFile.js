import React, { useState } from 'react'

const UploadFile = () => {
    const [data, setData] = useState();

    const handleFile = (e) => {
        e.preventDefault();
        console.log(e.target.files[0]);
        setData(e.target.files[0]);
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", data);
        fetch(
            'https://reqres.in/api/users',
            {
                method: 'POST',
                body: formData
            }
        ).then((response) => response.json())
            .then((result) => console.log('success'))
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <form onSubmit={handleUpload}>
                <input type="file" name="file" onChange={handleFile}></input>
                <button type="submit">
                    Upload
                </button>
            </form>
        </>
    )
}


export default UploadFile

import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { uploadJSONToIPFS,uploadFileToIPFS } from "./pinata";
import Marketplace from './Marketplace.json';

const test = () => {
  const [formParams, updateFormParams] = useState({ name: '', description: '', price: ''});
    const [fileURL, setFileURL] = useState(null);
    const ethers = require("ethers");
    const [message, updateMessage] = useState('list');
    const [preImg, setPreImg] = useState("");
   // const location = useLocation();

   function previewImgFile(file) {
    
    const reader = new FileReader();
   
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      setPreImg(reader.result);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
   
   }

    //This function uploads the NFT image to IPFS
    async function OnChangeFile(file) {
        //var file = e.target.files[0];
        //check for file extension
        try {
            //upload the file to IPFS
            const response = await uploadFileToIPFS(file);
            if(response.success === true) {
                console.log("Uploaded image to Pinata: ", response.pinataURL)
                setFileURL(response.pinataURL);
            }
        }
        catch(e) {
            console.log("Error during file upload", e);
        }
    }

    //This function uploads the metadata to IPDS
    async function uploadMetadataToIPFS() {
        const {name, description, price} = formParams;
        //Make sure that none of the fields are empty
        if( !name || !description || !price || !fileURL)
            return;

        const nftJSON = {
            name, description, price, image: fileURL
        }

        try {
            //upload the metadata JSON to IPFS
            const response = await uploadJSONToIPFS(nftJSON);
            if(response.success === true){
                console.log("Uploaded JSON to Pinata: ", response)
                return response.pinataURL;
            }
        }
        catch(e) {
            console.log("error uploading JSON metadata:", e)
        }
    }

    async function listNFT() {   

        //Upload data to IPFS
        try {
            const metadataURL = await uploadMetadataToIPFS();
            //After adding your Hardhat network to your metamask, this code will get providers and signers
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            //console.log(signer)
            //console.log(formParams)
           // console.log(fileURL)
            updateMessage("Please wait.. uploading (upto 5 mins)")

            //Pull the deployed contract instance
            let contract = new ethers.Contract(Marketplace.address, Marketplace.abi, signer)

            //massage the params to be sent to the create NFT request
            const price = ethers.utils.parseUnits(formParams.price, 'ether')
           let listingPrice = await contract.getListPrice()
            listingPrice = listingPrice.toString()

            //actually create the NFT
            let transaction = await contract.createToken(metadataURL, price, { value: listingPrice })
            await transaction.wait()

            alert("Successfully listed your NFT!");
            updateMessage("list");
            updateFormParams({ name: '', description: '', price: ''});
           // window.location.replace("/")
        }
        catch(e) {
            alert( "Upload error"+e )
        }
    }

  return (
    <section className="bg-cream-lighter p-6 shadow">
      <Formik
        initialValues={{
          NFTName: "",
          description: "",
        }}
        
        onSubmit={listNFT}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
            <div className="md:flex p-4">
              <h2 className="justify-center uppercase text-4xl font-bold font-mono tracking-tight text-gray-900">
                Create New NFT
              </h2>
            </div>
            <Form>
              <div className="md:flex mb-8 mt-5 p-4">
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase text-xl font-bold font-mono p-2">
                      NFT Name
                    </label>
                    <input
                      className="w-6/12 shadow-inner p-4 border-0"
                      type="text"
                      name="NFTName"
                      placeholder="Ex: CryptoPuppies"
                      onChange={(e) =>
                        updateFormParams({
                          ...formParams,
                          name: e.target.value,
                        })
                      }
                      value={formParams.name}
                    />
                    <ErrorMessage name="collectionName" component="div" />
                  </div>

                  <div className="mb-4">
                    <label className="block uppercase text-xl font-bold font-mono p-2">
                      Description
                    </label>
                    <textarea
                      className="w-6/12 shadow-inner p-4 border-0"
                      type="text"
                      name="description"
                      placeholder="Welcome to the home of Helions on OpenSea. Discover the best items in this collection."
                      value={formParams.description}
                      onChange={(e) =>
                        updateFormParams({
                          ...formParams,
                          description: e.target.value,
                        })
                      }
                    />
                    <ErrorMessage name="description" component="div" />
                  </div>

                  <div className="mb-4">
                    <label className="block uppercase text-xl font-bold font-mono p-2">
                      NFT Price
                    </label>
                    <input
                      className="w-3/12 shadow-inner p-4 border-0"
                      type="number"
                      name="price"
                      placeholder="Ex: CryptoPuppies"
                      value={formParams.price}
                      onChange={(e) =>
                        updateFormParams({
                          ...formParams,
                          price: e.target.value,
                        })
                      }
                    />
                    <ErrorMessage name="collectionName" component="div" />
                  </div>

                  <div className="mb-4">
                    <legend className="block uppercase text-xl font-bold font-mono p-2">
                      Image
                    </legend>

                    <div className="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative mt-4">
                      <label className="flex justify-center w-full max-w-xs h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                      {preImg && <img id="banner" alt="Image previewban" src={preImg} className="w-full h-32 rounded-lg"/>}
                      {!preImg &&    <span className="flex items-center space-x-2">
                       
                       <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <span className="font-medium text-gray-600">
                            Drop files to Attach, or
                            <span className="text-blue-600 underline">
                              browse
                            </span>
                          </span>
                        </span>}
                        <input
                          type="file"
                          name="NFTImg"
                          className="hidden"
                          onChange={(e) => {
                            OnChangeFile(e.target.files[0]);
							previewImgFile(e.target.files[0])
                          }}
                        />
                      </label>
                    </div>
                    <ErrorMessage name="NFTImg" component="div" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block px-7 py-4 mt-5 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                   {message}
                  </button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
};

export default test;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, getUserDetails } from "redux/actions/userActions";
const ConnectWalletButton = () => {
    const { currentUser, userToken } = useSelector((state) => state.user);
    console.log(currentUser);
    const [data, setdata] = useState({
        address: currentUser ? currentUser.address : "",
        Balance: currentUser ? currentUser.Balance : null,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const getBalance = async () => {
            if (window.ethereum && data.address === "") {
                const res = await window.ethereum.request({ method: "eth_requestAccounts" })
                const address = res[0];
                const balance = await window.ethereum.request({
                    method: "eth_getBalance",
                    params: [address, "latest"]
                })
                setdata({ address, Balance: balance });
            }
        }
        getBalance()
    })

    const btnhandler = async () => {

        if (window.ethereum) {

            const res = await window.ethereum.request({ method: "eth_requestAccounts" })
            const address = res[0];
            const balance = await window.ethereum.request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            setdata({ address, Balance: balance });
            dispatch(userLogin({ walletAdress: address }));
        } else {
            alert("install metamask extension!!");
        }
    };

    return (
        <div>
            <div className="text-black">{data.address}</div>
            <div className="text-red-500" >{data.Balance}</div>
            <button onClick={btnhandler} className="bg-zinc-500 text-white px-4 py-2 rounded-md">Connect Wallet</button>
        </div>
    )
}

export default ConnectWalletButton;
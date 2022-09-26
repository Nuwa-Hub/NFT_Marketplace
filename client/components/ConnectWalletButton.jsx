import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, getUserDetails } from "redux/actions/userActions";
import { logout } from "redux/slices/userSlice";
const ConnectWalletButton = () => {
    const { currentUser, userToken } = useSelector((state) => state.user);
   // console.log(currentUser);
    const [data, setdata] = useState({
        address: currentUser ? currentUser.address : "",
        Balance: currentUser ? currentUser.Balance : null,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const getBalance = async () => {
            if (window.ethereum) {
                const res = await window.ethereum.request({ method: "eth_requestAccounts" })
                const address = res[0];
                const balance = await window.ethereum.request({
                    method: "eth_getBalance",
                    params: [address, "latest"]
                })
                setdata({ address, Balance: (parseInt(balance, 16) / 1000000000000000000).toPrecision(5) });
            }
        }
        if (currentUser && data.address == "") {
            getBalance();
        }
    })

    const disconnectWallet = () => {
        dispatch(logout());
        setdata({ address: "", Balance: null });
    }

    const connectWallet = async () => {

        if (window.ethereum) {

            const res = await window.ethereum.request({ method: "eth_requestAccounts" })
            const address = res[0];
            const balance = await window.ethereum.request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            setdata({ address, Balance: (parseInt(balance, 16) / 1000000000000000000).toPrecision(5) });
            dispatch(userLogin({ walletAdress: address }));
        } else {
            alert("install metamask extension!!");
        }
    };
    let Button;
    if (!currentUser || currentUser.address === "") {
        Button = <button onClick={connectWallet} className="bg-zinc-500 text-white px-4 py-2 rounded-md">Connect Wallet</button>
    } else {
        Button = <button onClick={disconnectWallet} className="bg-zinc-500 text-white px-4 py-2 rounded-md">Disconnect Wallet</button>
    }
    return (
        <div>
            <div className="text-black">{data.address}</div>
            <div className="text-red-500" >{data.Balance}</div>
            {Button}
        </div>
    )
}

export default ConnectWalletButton;
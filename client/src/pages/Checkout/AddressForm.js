import { useState, useEffect, useContext } from "react";
import axios from "../../api";
import axiosR from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
// toast messages
import { toast, Flip } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../../features/cart/cartSlice";

import SocketContext from "../../contexts/socket";

const AddressForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);

    const [curOptionProvince, setCurOptionProvince] = useState();
    const [curOptionDistrict, setCurOptionDistrict] = useState();
    const [curOptionWard, setCurOptionWard] = useState();

    const [provinceList, setProvinceList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [wardList, setWardList] = useState([]);

    const onClickProvince = () => {
        if (provinceList.length) return;

        // fetch provinces list
        axiosR.get("https://provinces.open-api.vn/api/p/").then((res) => {
            const response = res.data;
            let curArr = [];

            response.map((item) => {
                curArr.push({ label: item.name, value: item.code });
            });

            setProvinceList(curArr);
        });
    };

    const onChangeProvinceValue = (provinceCode) => {
        setDistrictList([]);
        setWardList([]);

        axiosR
            .get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
            .then((res) => {
                const response = res.data.districts;
                let curArr = [];

                response.map((item) => {
                    curArr.push({ label: item.name, value: item.code });
                });

                setDistrictList(curArr);
            });
    };

    const onChangeDistrictValue = (districtCode) => {
        axiosR
            .get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
            .then((res) => {
                const response = res.data.wards;
                let curArr = [];

                response.map((item) => {
                    curArr.push({ label: item.name, value: item.code });
                });

                setWardList(curArr);
            });
    };

    const [orderValue, setOrderValue] = useState({
        optionAddress: "0",
        address: "",
        firstName: "",
        lastName: "",
        note: "",
    });

    const handleOnchangeInput = (e) => {
        setOrderValue((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    console.log(orderValue);

    // toast messages
    const notifyError = (message) =>
        toast.error(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    const notifySuccess = (message) =>
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        });

    const [total, setTotal] = useState(0);
    const [itemCart, setItemCart] = useState([]);

    let items = useSelector((state) => state.cart.cart);

    useEffect(() => {
        setItemCart(items);
        let temp = 0;

        items.forEach(
            (item) => (temp += +item.data.data.price * +item.data.amount)
        );

        setTotal(temp);
    }, [items]);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handlePlaceOrder = () => {
        // check if first name input field is empty
        if (!orderValue.firstName) {
            notifyError("Enter your first name");
            return;
        }
        // check if last name input field is empty
        if (!orderValue.lastName) {
            notifyError("Enter your last name");
            return;
        }
        // check if province selector is empty
        if (!curOptionProvince) {
            notifyError("Select a province");
            return;
        }
        // check if district selector is empty
        if (!curOptionDistrict) {
            notifyError("Select a district");
            return;
        }
        // check if ward selector is empty
        if (!curOptionWard) {
            notifyError("Select a ward");
            return;
        }
        // check if detailed address input field is empty
        if (!orderValue.address) {
            notifyError("Enter street name, building, house no.");
            return;
        }

        const products = [];
        itemCart.map((item) =>
            products.push({
                productId: item.data.data.id,
                quantity: item.data.amount,
                name: item.data.data.name,
                price: item.data.data.price,
                type: item.data.data.type,
            })
        );

        axios
            .post(
                "/order/createOrder",
                {
                    totalAmount: total,
                    products: products,
                    address: `${orderValue.address}, ${curOptionWard.label}, ${curOptionDistrict.label}, ${curOptionProvince.label}`,
                    note: orderValue.note,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log(res);
                notifySuccess("Your order has been placed successfully");
                socket.emit("newOrder");

                // clear cart after placing order
                handleClearCart();

                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                notifyError(
                    "Failed to place the order. Please consider re-logging in to proceed with your purchase."
                );
            });
    };

    return (
        <div className="lg:pr-10 mb-4">
            <p className="text-2xl pt-4 lg:pt-0 pb-6">Contact</p>

            {/* first name & last name input field */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                {/* first name */}
                <input
                    type="text"
                    className="font-medium p-2 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full disabled:bg-neutral-100 disabled:text-gray-400"
                    placeholder="First name"
                    name="firstName"
                    required
                    onChange={handleOnchangeInput}
                />

                {/* last name (optional) */}
                <input
                    type="text"
                    className="font-medium p-2 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full disabled:bg-neutral-100 disabled:text-gray-400"
                    placeholder="Last name"
                    name="lastName"
                    required
                    onChange={handleOnchangeInput}
                />
            </div>

            <p className="text-2xl pt-4 lg:pt-0 pb-6">Address</p>

            {/* address selectors */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 mb-6">
                {/* province selector */}
                <div>
                    <p className="mb-1 font-medium">Province</p>

                    <div onClick={onClickProvince}>
                        <Select
                            options={provinceList}
                            onChange={(e) => {
                                setCurOptionProvince({
                                    label: e.label,
                                    value: e.value,
                                });

                                onChangeProvinceValue(e.value);
                            }}
                            value={curOptionProvince}
                            className="font-medium text-sm"
                        />
                    </div>
                </div>

                {/* district selector */}
                <div>
                    <p className="mb-1 font-medium">District</p>

                    <Select
                        options={districtList}
                        onChange={(e) => {
                            setCurOptionDistrict({
                                label: e.label,
                                value: e.value,
                            });

                            onChangeDistrictValue(e.value);
                        }}
                        value={curOptionDistrict}
                        className="font-medium text-sm"
                    />
                </div>

                {/* ward selector */}
                <div>
                    <p className="mb-1 font-medium">Ward</p>

                    <Select
                        options={wardList}
                        onChange={(e) =>
                            setCurOptionWard({ label: e.label, value: e.value })
                        }
                        value={curOptionWard}
                        className="font-medium text-sm"
                    />
                </div>
            </div>

            {/* Street Name, Building, House No. input field */}
            <div className="mb-6">
                <input
                    type="text"
                    className="font-medium p-2 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full disabled:bg-neutral-100 disabled:text-gray-400"
                    placeholder="Street Name, Building, House No."
                    name="address"
                    required
                    onChange={handleOnchangeInput}
                />
            </div>

            {/* notes */}
            <div className="">
                <input
                    type="text"
                    className="font-medium p-2 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full disabled:bg-neutral-100 disabled:text-gray-400"
                    placeholder="Note (optional)"
                    name="note"
                    required
                    onChange={handleOnchangeInput}
                />
            </div>

            {/* confirm button */}
            <div className="lg:mt-8">
                <button
                    onClick={handlePlaceOrder}
                    className="w-full py-2 px-7 font-medium border border-black rounded text-white bg-black hover:scale-105 transition duration-300"
                >
                    Place order
                </button>
            </div>
        </div>
    );
};

export default AddressForm;

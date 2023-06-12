import { useState, useEffect } from "react";
import axios from "../../api";
import axiosR from "axios";
import Select from "react-select";

const AddressForm = () => {
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

    return (
        <div className="lg:pr-10">
            {/* <p className="text-2xl pt-4 lg:pt-0 pb-4">Address</p> */}
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
                    disabled={false}
                />
            </div>
        </div>
    );
};

export default AddressForm;

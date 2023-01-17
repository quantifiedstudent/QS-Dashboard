import React from "react";
import Image from "next/image";
import checkIcon from "@Assets/icons/check-solid.svg";

const RoundedCheck = () => {

    return (
        <div className="absolute top-3 right-3 rounded-full bg-qs-blue-main w-6 aspect-square place-content-center grid">
            <Image src={checkIcon} alt="check-icon" width={12} height={12} className="" />
        </div>
    );
}

export default RoundedCheck;
import Image from "next/image";

import qsLogo from "@Assets/logos/qs-logo.jpg";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <span>
        <Image alt="QS-logo" width={93} height={49} src={qsLogo} />
      </span>
      <span>
        <div></div>
      </span>
    </div>
  );
};

export default Header;

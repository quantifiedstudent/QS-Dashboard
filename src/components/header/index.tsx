import Image from "next/image";
import styles from "@Styles/components/Header.module.scss";

import qsLogo from "@Assets/qs-logo.jpg";

const Header = (props: any) => {
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

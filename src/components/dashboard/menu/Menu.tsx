import { useState } from "react";

import Image from "next/image";
import { Text } from "@nextui-org/react";

import BaseButton from "@Components/misc/button/baseButton";
import GraphEditor from "@Components/modals/addGraphModal/AddGraphModal";

import goalsIcon from "@Assets/icons/goals_icon.svg";
import graphEditorIcon from "@Assets/icons/graph_editor_icon.svg";
import dataSharingIcon from "@Assets/icons/data_sharing.svg";
import notificationsIcon from "@Assets/icons/notifications.svg";

import styles from "./style.module.scss";

const Menu = () => {
  const [GraphModal, ShowGraphModal] = useState(false);

  return (
    <>
      <GraphEditor
        handleClose={() => ShowGraphModal(false)}
        show={GraphModal}
      />
      <div className={styles.menu_container}>
        <div>
          <h3>Hello, Thijmen!</h3>
          <p>you have 3 new notifications</p>
        </div>
        <div className={styles.button_container}>
          <div>
            <BaseButton>
              <>
                <Image
                  src={goalsIcon}
                  width={27.14}
                  height={27.14}
                  alt="Goals icon"
                />
                <Text>goals</Text>
              </>
            </BaseButton>
          </div>
          <div>
            <BaseButton onPress={() => ShowGraphModal(true)}>
              <>
                <Image
                  src={graphEditorIcon}
                  width={27.14}
                  height={27.14}
                  alt="Graph editor icon"
                />
                <Text>Graph editor</Text>
              </>
            </BaseButton>
          </div>
          <div>
            <BaseButton>
              <>
                <Image
                  src={dataSharingIcon}
                  width={27.14}
                  height={27.14}
                  alt="datasharing icon"
                />
                <Text>data sharing</Text>
              </>
            </BaseButton>
          </div>
          <div>
            <BaseButton>
              <>
                <Image
                  src={notificationsIcon}
                  width={27.14}
                  height={27.14}
                  alt="notifications icon"
                />
                <Text>notifications</Text>
              </>
            </BaseButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

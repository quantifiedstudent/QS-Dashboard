import Image from "next/image";
import { Text } from "@nextui-org/react";

import BaseButton from "@Components/misc/button/baseButton";
import AddGraph from "@Components/modals/addGraph/AddGraph";

import goalsIcon from "@Assets/icons/goals_icon.svg";
import graphEditorIcon from "@Assets/icons/graph_editor_icon.svg";
import dataSharingIcon from "@Assets/icons/data_sharing.svg";
import notificationsIcon from "@Assets/icons/notifications.svg";

import styles from "./style.module.scss";
import {useState} from "react";

const Menu = () => {
  const [showAddGraphModal, setShowAddGraphModal] = useState(false);

  const addGraphModalHandler = (value: boolean) => {
    setShowAddGraphModal(value);
  }

  return (
    <>
      <AddGraph
          setClose={() => addGraphModalHandler(false)}
          show={showAddGraphModal}
      />
      <div className={styles.menu_container}>
        <div>
          <h3>Hello, Thijmen!</h3>
          <p>you have 3 new notifications</p>
        </div>
        <div className={styles.button_container}>
          <div className="z-0">
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
          <div className="z-0">
            <BaseButton onPress={() => addGraphModalHandler(true)}>
              <>
                <Image
                  src={graphEditorIcon}
                  width={27.14}
                  height={27.14}
                  alt="Graph editor icon"
                />
                <Text>Add graph</Text>
              </>
            </BaseButton>
          </div>
          <div className="z-0">
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
          <div className="z-0">
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
          <div className="z-0">
            <BaseButton>
              <>
                <Image
                    src={notificationsIcon}
                    width={27.14}
                    height={27.14}
                    alt="notifications icon"
                />
                <Text>test</Text>
              </>
            </BaseButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

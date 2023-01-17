import { useState } from "react";

import Image from "next/image";
import { Text } from "@nextui-org/react";

import BaseButton from "@Components/misc/button/baseButton";
import GraphEditor from "@Components/modals/addGraph/AddGraph";

import goalsIcon from "@Assets/icons/goals_icon.svg";
import graphEditorIcon from "@Assets/icons/graph_editor_icon.svg";
import dataSharingIcon from "@Assets/icons/data_sharing.svg";
import notificationsIcon from "@Assets/icons/notifications.svg";

const Menu = () => {
  const [showAddGraphModal, setShowAddGraphModal] = useState(false);

  const addGraphModalHandler = (value: boolean) => {
    setShowAddGraphModal(value);
  }
    const [GraphModal, ShowGraphModal] = useState(false);
    return (
        <>
            <GraphEditor
                setClose={() => setShowAddGraphModal(false)}
                show={GraphModal}
            />
            <div className="box-border flex items-center justify-between p-4">
                <div>
                    <h3>Hello, Thijmen!</h3>
                    <p>You have 3 new notifications</p>
                </div>
                <div className="flex justify-between w-7/12">
                    <div>
                        <BaseButton>
                            <>
                                <Image
                                    src={goalsIcon}
                                    width={27.14}
                                    height={27.14}
                                    alt="Goals icon"
                                />
                                <Text>Goals</Text>
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
                                <Text>Data sharing</Text>
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
                                <Text>Notifications</Text>
                            </>
                        </BaseButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;

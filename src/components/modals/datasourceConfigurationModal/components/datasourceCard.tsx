import {
  AvailableDatasources,
  BaseDatasource,
} from "@Services/api/dto/datasource";
import Image from "next/image";
import CanvasLogo from "@Assets/logos/canvas_logo.svg";
import { Card, Grid, Text, Input } from "@nextui-org/react";
import type { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import BaseCard from "@Components/misc/card/baseCard";

interface DatasourceCardProps {
  datasource: AvailableDatasources;
  configHandler: (props: BaseDatasource) => void;
}

const DatasourceCard = (props: DatasourceCardProps) => {
  const datasourceInformation = useSelector(
    (state: RootState) => state.datasources[props.datasource] || { token: "" }
  );

  return (
    <BaseCard>
      <>
        <Card.Header>
          <Image
            alt="Canvas logo"
            src={CanvasLogo}
            width="34px"
            height="34px"
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {props.datasource}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>Thijmen Brand</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Input
            onBlur={(e) =>
              props.configHandler({
                name: props.datasource,
                token: e.target.value,
              })
            }
            aria-label="test"
            size="sm"
            width="93%"
            initialValue={datasourceInformation.token}
            placeholder="auth token"
          ></Input>
        </Card.Body>
      </>
    </BaseCard>
  );
};

export default DatasourceCard;

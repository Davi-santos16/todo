import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import IconPlus from "../assets/icons/Plus.svg?react"
import TrashIcon from "../assets/icons/Trash.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import PincelIcon from "../assets/icons/Pencil.svg?react";


export default function PageComponents(){
    return(
        <Container>
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text as="h1" variant="body-sm-bold" className="text-pink-base">
          Ola mundo
        </Text>
        <Text variant="body-md" className="text-pink-base">
          Ola mundo
        </Text>
        <Text variant="body-md-bold" className="text-green-dark">
          Ola mundo
        </Text>
      </div>
      <div className="flex gap-1 ">
        <Icon svg={TrashIcon}  className="fill-pink-base  " />
        <Icon svg={SpinnerIcon} animate className="fill-pink-base  " />
        <Icon svg={PincelIcon} className="fill-pink-light" />
        <Icon  svg={PincelIcon}/>
      </div>

      <div className="flex gap-2">
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
        <Badge loading>5</Badge>
      </div>

      <div>
        <Button icon={IconPlus}>Nova Tarefa</Button>
        <Button >Nova Tarefa</Button>
      </div>

      <div >
      <ButtonIcon icon={TrashIcon}/>
      <ButtonIcon icon={TrashIcon} variant={"primary"}/>
      <ButtonIcon icon={TrashIcon} variant={"secundary"}/>
      <ButtonIcon icon={TrashIcon}  variant={"tertiary"}/>
      <ButtonIcon icon={TrashIcon}  variant={"tertiary"} loading/>
      </div> 

      <div>
        <InputText/>
      </div>

      <div>
        <InputCheckbox />
        <InputCheckbox loading />
      </div>
      <div>
        <Card size="md">Ola mundo</Card>
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton className="h-6"/>
      <Skeleton className="h-6"/>
      <Skeleton className="h-6"/>
    </div>

    
    </Container>
    )
}
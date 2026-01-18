import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash.svg?react";
import PencilIcon from "../assets/icons/Pencil.svg?react";
import XIcon from "../assets/icons/X.svg?react";
import CheckIcon from "../assets/icons/Check.svg?react";
import { useState } from "react";
import InputText from "../components/input-text";

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditTask(){
    setIsEditing(true)
  }

  function handleExitEditTask(){
    setIsEditing(false)
  }

  return (
    <>
      <Card className="flex items-center gap-4" size={"md"}>
        {!isEditing ? (
          <>
            <InputCheckbox />
            <Text className="flex-1">Fazer compras da semana</Text>
            <div className="flex gap-1">
              <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
              <ButtonIcon icon={PencilIcon} variant={"tertiary"} onClick={handleEditTask} />
            </div>
          </>
        ) : (
          <>
            <InputText className="flex-1" />
            <div className="flex gap-1">
              <ButtonIcon icon={XIcon} variant={"secundary"} onClick={handleExitEditTask} />
              <ButtonIcon icon={CheckIcon} variant={"primary"} />
            </div>
          </>
        )}
      </Card>
    </>
  );
}

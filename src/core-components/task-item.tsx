import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash.svg?react";
import PencilIcon from "../assets/icons/Pencil.svg?react";
import XIcon from "../assets/icons/X.svg?react";
import CheckIcon from "../assets/icons/Check.svg?react";
import React, { useState } from "react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import Skeleton from "../components/skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.Creating,
  );

  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const {
    updateTask,
    updateTaskStatus,
    deleteTask,
    isDelitingTask,
    isUpdatingTask,
  } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ id: task.id, title: taskTitle });
    await updateTask(task.id, { title: taskTitle });

    setIsEditing(false);

  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    console.log(checked);

    updateTaskStatus(task.id, checked);
  }

  async function handleClickDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <>
      <Card size={"md"}>
        {!isEditing ? (
          <div className="flex items-center gap-4">
            <InputCheckbox
              checked={task?.concluded}
              onChange={handleChangeTaskStatus}
              loading={loading}
            />
            {!loading ? (
              <Text
                className={cx("flex-1", {
                  "line-through": task?.concluded,
                })}
              >
                {task?.title}
              </Text>
            ) : (
              <Skeleton className="flex-1 h-6" />
            )}
            <div className="flex gap-1">
              <ButtonIcon
                type="button"
                icon={TrashIcon}
                variant={"tertiary"}
                onClick={handleClickDeleteTask}
                loading={loading}
                handling={isDelitingTask}
              />
              <ButtonIcon
                type="button"
                icon={PencilIcon}
                variant={"tertiary"}
                onClick={handleEditTask}
                loading={loading}
              />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <InputText
              value={taskTitle}
              onChange={handleChangeTaskTitle}
              required
              autoFocus
              className="flex-1"
            />
            <div className="flex gap-1">
              <ButtonIcon
                type="button"
                icon={XIcon}
                variant={"secundary"}
                onClick={handleExitEditTask}
              />
              <ButtonIcon
                type="submit"
                icon={CheckIcon}
                variant={"primary"}
                handling={isUpdatingTask}
              />
            </div>
          </form>
        )}
      </Card>
    </>
  );
}

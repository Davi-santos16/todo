import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus.svg?react";
import TaskItem from "./task-item";
import useTask from "../hooks/use-task";

export default function TaskList() {

  const {tasks} = useTask()
  console.log(tasks)

  return (
    <>
      <section>
        <Button className="w-full" icon={PlusIcon}>Nova tarefa</Button>
      </section>
      <section className="space-y-2">
        <TaskItem/>
        <TaskItem/>
        <TaskItem/>
      </section>
    </>
  );
}

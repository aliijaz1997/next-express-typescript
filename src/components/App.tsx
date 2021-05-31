import { TodoForm } from "./todo-form";
import { TodoItem } from "./todo-item";
import {Todo} from '../types/interface'
import axios from "axios";
import { InferGetServerSidePropsType } from "next";

function App({dataProps}: any) {
  console.log(dataProps);
  
  return (
    <div className="container">
      <TodoForm />

      {/* {dataProps.map((todo : Todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))} */}
    </div>
  );
}
export default App;
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { dataProps: data },
  };
};
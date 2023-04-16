import React from "react";
import "./index.css";
import { MultiSelect } from "./components/MultiSelect";
import { data } from "./utils/data";

function App() {
  return (
    <div className="w-500 m-auto mt-52">
      <h1 className="text-32 font-bold text-blue mb-12 text-center">
        Best frontend framework
      </h1>
      <h2 className="font-bold text-22 mb-20">
        You can select multiple frontend frameworks or libraries you like to
        work with.
      </h2>
      <MultiSelect
        data={data}
        label={"Your favourite frameworks/libraries:"}
        placeholder={"Pick all that you like"}
      />
    </div>
  );
}

export default App;

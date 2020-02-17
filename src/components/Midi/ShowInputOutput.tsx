import React from "react";

interface ShowInputOutputProps {
  midiAccess: any;
}

interface Input {
  type: string;
  id: string;
  manufacturer: string;
  name: string;
  version: string;
}

const transformInputs = (midiAccess: any = {}): any => {
  const inputsArray = [];
  const outputsArray = [];
  for (const entry of midiAccess.inputs) {
    const input = entry[0];
    const newInput = {
      type: input.type,
      id: input.id,
      manufacturer: input.manufacturer,
      name: input.name,
      version: input.version
    };
    inputsArray.push(newInput);
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[0];
    const newOutput = {
      type: output.type,
      id: output.id,
      manufacturer: output.manufacturer,
      name: output.name,
      version: output.version
    };
    outputsArray.push(newOutput);
  }
  console.log({ inputsArray });
  return { inputsArray, outputsArray };
};

const ShowInputOutput: React.FC<ShowInputOutputProps> = ({ midiAccess }) => {
  const { inputsArray, outputsArray } = transformInputs(midiAccess);
  if (inputsArray.length === 0 && outputsArray.length === 0) {
    return <div>NO Inputs or Outputs Detected</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>I/O</th>
          <th>Type</th>
          <th>ID</th>
          <th>Brand</th>
          <th>Name</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        {inputsArray.map((input: Input) => (
          <tr>
            <td>input</td>
            <td>{input.type}</td>
            <td>{input.id}</td>
            <td>{input.manufacturer}</td>
            <td>{input.name}</td>
            <td>{input.version}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShowInputOutput;

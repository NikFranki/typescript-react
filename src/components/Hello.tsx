
import * as React from 'react';
import Todolist from './Todolist';
import './Hello.css';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <header className="App-header">
        <img src={require('../logo.svg')} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
      <Todolist name="todolists" />
    </div>
  );
}

// class Hello extends React.Component<any, any> {

//   constructor(props: any) {
//     super(props);
//   }

//   public render() {
//     const {
//       name,
//       enthusiasmLevel,
//       onIncrement,
//       onDecrement
//     } = this.props;

//     if (enthusiasmLevel <= 0) {
//       throw new Error('You could be a little more enthusiastic. :D');
//     }

//     return (
//       <div className="hello">
//          <header className="App-header">
//            <img src={require('../logo.svg')} className="App-logo" alt="logo" />
//            <h1 className="App-title">Welcome to React</h1>
//          </header>
//          <div className="greeting">
//            Hello {name + getExclamationMarks(enthusiasmLevel)}
//          </div>
//          <div>
//            <button onClick={onDecrement}>-</button>
//            <button onClick={onIncrement}>+</button>
//          </div>
//       </div>
//     )
//   }
// }

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

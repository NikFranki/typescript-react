import * as React from 'react';
import './Todolist.css';

export interface ITodolistProps {
    name: string;
}

export interface IState {
    value: string;
    list: any[];
}

export default class Todolist extends React.Component<ITodolistProps, IState> {
    public state = {
        value: '',
        list: []
    };

    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.traverseList = this.traverseList.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleClearInput = this.handleClearInput.bind(this);
    }

    public componentDidMount() {
        const ul = document.getElementById("ulEle");
        (ul as any).addEventListener('click', (event: any) => {
            if (event.target.attributes.length === 0) {
                return;
            }
            const index = parseInt(event.target.attributes[0].value, 10);
            const lists: any[] = this.state.list;
            lists.map((item, i) => {
                if (i === index) {
                    (item as any).completed = !(item as any).completed;
                }
            });
            this.setState({
                list: lists
            });
        }, false);
    }

    public handleChange = (e: any) => {
        const value = e.target.value;
        this.setState({
            value,
        });
    }

    public traverseList = () => {
        const { list } = this.state;
        const listArr: any[] = [];
        const updateList = (index: number, action: string) => {
            const lists: any[] = this.state.list;
            lists.splice(index, 1);
            this.setState({
                list: lists
            });
        };
        list.forEach((item, index) => {
            const items: any = <li data-index={index} className={`${(item as any).completed ? "active" : ""}`} key={index}>
                {(item as any).value}
                <button onClick={updateList.bind(this, index)}>del</button>
            </li>;
            listArr.push(items);
        });
        return listArr;
    }

    public handleAdd = () => {
        this.handleClearInput();
        const list: any[] = this.state.list;
        const obj: {[key: string]: any} = {
            value: this.state.value,
            completed: false
        };
        list.push(obj);
        this.setState({
            list
        });
    }

    public handleClearInput = () => {
        this.setState({
            value: ''
        });
    }

    public render() {
        return (
            <div className="todolist">
                <h1>{this.props.name}</h1>
                <section className="input-area">
                    <label htmlFor="userinput">please input:</label>
                    <input onClick={this.handleClearInput} onChange={this.handleChange} name="userinput" id="userinput" type="text" value={this.state.value} placeholder="something to do" />
                    <button onClick={this.handleAdd}>add</button>
                </section>
                <section className="list-area">
                    <ul id="ulEle">
                        {this.traverseList()}
                    </ul>
                </section>
            </div>
        )
    }
}

// export default ITodolistProps;

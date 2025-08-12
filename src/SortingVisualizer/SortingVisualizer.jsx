import React from "react";
import './SortingVisualizer.css'
import { mergeSort } from "../sortingAlgorithms/sortingAlgorithms";

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        }
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i = 0; i < 100 ; i ++){
            array.push(randomIntFromInterval(5, 730))
        }
        this.setState({array})
    }
    mergeSort() {
        const sortedArray = mergeSort(this.state.array);
        this.setState({array: sortedArray});
        // Visualization logic can be added here
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                <div className="bars">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{ height: `${value}px` }}
                        ></div>
                    ))}
                </div>
                <div className="buttons">
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
</div>
        )
    }

}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
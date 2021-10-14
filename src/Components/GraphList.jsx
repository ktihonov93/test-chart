import Graph from './Graph';
import "./GraphList.css";
import Normativ from './Normativ'

function GraphList({ testVolume, maxSum, firstDiff, secondDiff }){    

  //{maxSum !== null && console.log(maxSum)}

    return (
        <div className="graphList">
            <Graph column = {testVolume != null && testVolume.dev} name = "dev" maxSum = {maxSum !== null && maxSum} /> 
            <Graph column = {testVolume != null && testVolume.test} name = "test" maxSum = {maxSum !== null && maxSum} />
            <Graph column = {testVolume != null && testVolume.prod} name = "prod" maxSum = {maxSum !== null && maxSum} />
            <Normativ column = {testVolume != null && testVolume.norm} name = "Норматив" maxSum = {maxSum !== null && maxSum} />
        </div>
    )
}

export default GraphList;
import { formatter } from "../util/investment";

export default function Results({headers, results}){

    return (
        <div>
           <table id="result">
               <thead>
                   <tr>   
                        {headers.map((header, index) => 
                            <th key={index}>{ header}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                {results.annualData.map((value) => (  
                    <tr key={value.year}>
                        <td>{value.year}</td>
                        <td>{formatter.format(value.valueEndOfYear)}</td>
                        <td>{formatter.format(value.interest)}</td>
                        <td>{formatter.format(value.totalInterest)}</td>
                        <td>{formatter.format(value.annualInvestment)}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}
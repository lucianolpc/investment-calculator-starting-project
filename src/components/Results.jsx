import PropTypes from "prop-types";

import { formatter } from "../util/investment";

export default function Results({ results }) {
  return (
    <section id="result" className="center">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((data) => {
            return (
              <tr key={formatter.format(data.year)}>
                <td>{data.year /* Correct */}</td>
                <td>{formatter.format(data.valueEndOfYear)/*Correct */}</td>
                <td>{formatter.format(data.interest) /* Correct */}</td>
                <td>{formatter.format(data.totalInterest)}</td>
                <td>{formatter.format(data.totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

Results.propTypes = {
  results: PropTypes.array.isRequired,
};

import React from 'react';

const Table = ({ data }) => {
  console.log(data);
  return (
    <div>
      <table className="mt-3 styled-table">
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Points</th>
          <th>Hard Issues Solved</th>
          <th>Medium Issues Solved</th>
          <th>PR Opened</th>
          <th>PR Merged</th>
          <th>Good First Issue</th>
          <th>Milestone Acheived</th>
        </tr>
        <tbody>
          {data &&
            data.map((el) => (
              <tr>
                <td>{el.rank}</td>
                <td>{el.username}</td>
                <td>{el.points}</td>
                <td>{el.hard_issues_solved}</td>
                <td>{el.medium_issues_solved}</td>
                <td>{el.pr_opened}</td>
                <td>{el.pr_merged}</td>
                {el.good_first_issue ? (
                  <td>
                    <i className="fas fa-check-circle text-success"></i>
                  </td>
                ) : (
                  <td>
                    <i className="far fa-times-circle text-danger"></i>
                  </td>
                )}
                {el.milestone_acheived ? (
                  <td>
                    <i className="fas fa-check-circle text-success"></i>
                  </td>
                ) : (
                  <td>
                    <i className="far fa-times-circle text-danger"></i>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

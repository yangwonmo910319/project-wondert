import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
.common-table {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    border-spacing: 0;
  }
  
  .common-table-header-column {
    border-bottom: 1px solid #e8e8e8;
    padding: 0;
    font-size: 16px;
    padding: 10px 5px;
    font-weight: bold;
  }
  
  .common-table-row:hover {
    background-color: #eceaea;
    cursor: pointer;
  }
  
  .common-table-column {
    padding: 10px 5px;
  }
  `;

const CommonTable = props => {
  const { headersName, children } = props;

  return (
    <Table>
    <table className="common-table">
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <td className="common-table-header-column" key={index}>{ item }</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </table>
    </Table>
  );
};

export default CommonTable;
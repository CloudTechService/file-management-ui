import React from "react";

function DataSetLog() {
  return (
    <>
      <div className="p-3">
        <h3>Dataset Logs</h3>
        <div>
          <table className="mt-4">
            <thead>
              <tr>
                <th>Filename</th>
                <th>Dataset Type</th>
                <th>Downloaded</th>
                <th>Received date</th>
                <th>No of Records</th>
                <th>File Size</th>
                <th>Received Via</th>
                <th>Status</th>
                <th>Download</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>File_elascicat_2023.xls</td>
                    <td>In</td>
                    <td>1 times</td>
                    <td>02/02/2022</td>
                    <td>1</td>
                    <td>2kb</td>
                    <td>API</td>
                    <td>Processed</td>
                    <td>Download</td>
                    <td>View Detail</td>

                </tr>
                <tr>
                    <td>In</td>
                    <td>In</td>
                    <td>Out</td>
                    <td>In</td>
                    <td>Out</td>
                    <td>In</td>

                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DataSetLog;

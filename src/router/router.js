import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignIn from "../pages/Authentication/SignIn";
import DataSetLogs from "../pages/DataSetLogs/DataSetLog";
import DataSetLogsAll from "../pages/DataSetLogs/DataSetLogsAll";
import Forgot from "../pages/Authentication/Forgot";
import Dataset from "../pages/DataSetLogs/Dataset";
import FileDetails from "../pages/DataSetLogs/FileDetails";
import DataSetRecord from "../pages/DataSetLogs/DatasetRecord";
import DataSetRecordprimary from "../pages/DataSetLogs/DatasetRecordprimary";
import AdditionalInformation from "../pages/DataSetLogs/AdditionalInformation";
import TwoFactorAuthentication from "../pages/DataSetLogs/TwoFactorAuthentication";

export default function routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dataset-logs" element={<DataSetLogs />} />
        <Route path="/dataset-logsall" element={<DataSetLogsAll />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/dataset" element={<Dataset />} />
        <Route path="/file-details" element={<FileDetails />} />
        <Route path="/dataset-record" element={<DataSetRecord />} />
        <Route
          path="/dataset-record-primary"
          element={<DataSetRecordprimary />}
        />
        <Route
          path="/additional-information"
          element={<AdditionalInformation />}
        />
        <Route
          path="/twofactor-authentication"
          element={<TwoFactorAuthentication />}
        />
      </Routes>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LabTestResultList } from "./labTestResult/LabTestResultList";
import { LabTestResultCreate } from "./labTestResult/LabTestResultCreate";
import { LabTestResultEdit } from "./labTestResult/LabTestResultEdit";
import { LabTestResultShow } from "./labTestResult/LabTestResultShow";
import { LabTestBookingList } from "./labTestBooking/LabTestBookingList";
import { LabTestBookingCreate } from "./labTestBooking/LabTestBookingCreate";
import { LabTestBookingEdit } from "./labTestBooking/LabTestBookingEdit";
import { LabTestBookingShow } from "./labTestBooking/LabTestBookingShow";
import { DrugList } from "./drug/DrugList";
import { DrugCreate } from "./drug/DrugCreate";
import { DrugEdit } from "./drug/DrugEdit";
import { DrugShow } from "./drug/DrugShow";
import { DiseaseList } from "./disease/DiseaseList";
import { DiseaseCreate } from "./disease/DiseaseCreate";
import { DiseaseEdit } from "./disease/DiseaseEdit";
import { DiseaseShow } from "./disease/DiseaseShow";
import { ClinicList } from "./clinic/ClinicList";
import { ClinicCreate } from "./clinic/ClinicCreate";
import { ClinicEdit } from "./clinic/ClinicEdit";
import { ClinicShow } from "./clinic/ClinicShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PiirEkedu Healthcare"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="LabTestResult"
          list={LabTestResultList}
          edit={LabTestResultEdit}
          create={LabTestResultCreate}
          show={LabTestResultShow}
        />
        <Resource
          name="LabTestBooking"
          list={LabTestBookingList}
          edit={LabTestBookingEdit}
          create={LabTestBookingCreate}
          show={LabTestBookingShow}
        />
        <Resource
          name="Drug"
          list={DrugList}
          edit={DrugEdit}
          create={DrugCreate}
          show={DrugShow}
        />
        <Resource
          name="Disease"
          list={DiseaseList}
          edit={DiseaseEdit}
          create={DiseaseCreate}
          show={DiseaseShow}
        />
        <Resource
          name="Clinic"
          list={ClinicList}
          edit={ClinicEdit}
          create={ClinicCreate}
          show={ClinicShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

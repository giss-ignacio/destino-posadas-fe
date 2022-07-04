import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../usersApi";

const Usuarios = ({
  activeMenu,
  setActiveMenu,
  activeNavBar,
  setActiveNavBar,
}) => {
  const [usersData, setUsersData] = useState([]);

  let selectionsettings = { persistSelection: true };
  let toolbarOptions = ["Delete"];
  let editing = { allowDeleting: true, allowEditing: true };
  const gridTemplate = (props) => {
    return (
      <div className="image flex gap-4">
        <img
          className="rounded-full w-10 h-10"
          src={props.UserImage}
          alt="employee"
        />
        <div>
          <p>{props.UserName}</p>

          <p>{props.UserEmail}</p>
        </div>
      </div>
    );
  };

  let navigate = useNavigate();
  const routeRegister = () => {
    navigate("/registro");
  };

  useEffect(() => {
    setActiveMenu(true);
    setActiveNavBar(true);
    setUsersData([]);

    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    let modUsersData = [];
    getUsers()
      .then((jsonResp) => {
        console.log(jsonResp);
        jsonResp.forEach((user) => {
          modUsersData.push({
            UserName: user.nombre,
            UserEmail: user.email,
            UserImage:
              "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
            Role: user.rol,
            Status: "Active",
          });

          console.log(usersData);
          setUsersData(modUsersData);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="control-pane md:m-10 m-4">
      <div className="flex m-3 flex-wrap justify-left">
        <div>
          <p className="text-lg">Agregar Usuario </p>
        </div>
        <button className="text-lg bg-light-red opacity-0.9 text-white rounded-full  p-4">
          <FaUserPlus onClick={routeRegister} />
        </button>
        <div className="w-56 p-4 "></div> <div className=" w-56 p-4 "></div>
        <div className=" w-56 p-4 rounded-r-lg"></div>
      </div>

      <div className="control-section">
        {usersData.length != 0 && (
          <GridComponent
            dataSource={usersData}
            enableHover={false}
            allowPaging={true}
            pageSettings={{ pageCount: 5 }}
            selectionSettings={selectionsettings}
            toolbar={toolbarOptions}
            editSettings={editing}
          >
            <ColumnsDirective>
              <ColumnDirective type="checkbox" width="50"></ColumnDirective>

              <ColumnDirective
                headerText="Usuario"
                width="180"
                template={gridTemplate}
                textAlign="Center"
              />

              <ColumnDirective
                field="Role"
                headerText="Rol"
                width="130"
                format="yMd"
                textAlign="Center"
              />
              <ColumnDirective
                field="Status"
                headerText="Status"
                width="130"
                format="yMd"
                textAlign="Right"
              />
            </ColumnsDirective>
            <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
          </GridComponent>
        )}
      </div>
    </div>
  );
};
export default Usuarios;

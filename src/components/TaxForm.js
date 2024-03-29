import React from "react";

import Results from "./Results";

import { useState } from "react";
import { contractType } from "./data";
import { calculateNPD, calculateSodra } from "./calculation";

const TaxForm = () => {
  const [salary, setSalary] = useState(0);

  const [gpm, setGPM] = useState("Taikomas standartinis");
  const [pension, setPension] = useState("Nekaupia");

  const [contract, setContract] = useState("Neterminuota");
  const [employerType, setEmployerType] = useState("Privatus");
  const [selectGroup, setSelectGroup] = useState("I grupė");

  const changeContractHandler = (event) => {
    setContract(event.target.value);
  };

  const changeEmployerTypeHandler = (event) => {
    setEmployerType(event.target.value);
  };

  const changeGroupHandler = (event) => {
    setSelectGroup(event.target.value);
  };

  let type = null;
  let gpmType = null;
  let pensionType = null;

  // Sutrumpunti if blokus
  // kol nzn atvirkstinio skaiciavimo is neto i bruto padaryt blank field or text type 'i rankas' ir 'darbo vietos kaina'
  // pakeisti mobile spalvas

  // ***********NETERMINUOTA***********
  if (
    contract === "Neterminuota" &&
    employerType === "Privatus" &&
    selectGroup === "I grupė"
  ) {
    type = contractType.indefiniteContract.calculategroup1(salary).employer;
  } else if (
    contract === "Neterminuota" &&
    employerType === "Privatus" &&
    selectGroup === "II grupė"
  ) {
    type = contractType.indefiniteContract.calculategroup2(salary).employer;
  } else if (
    contract === "Neterminuota" &&
    employerType === "Privatus" &&
    selectGroup === "III grupė"
  ) {
    type = contractType.indefiniteContract.calculategroup3(salary).employer;
  } else if (
    contract === "Neterminuota" &&
    employerType === "Privatus" &&
    selectGroup === "IV grupė"
  ) {
    type = contractType.indefiniteContract.calculateGroup4(salary).employer;
  }

  if (
    contract === "Neterminuota" &&
    employerType === "budgetInstitutions" &&
    selectGroup === "I grupė"
  ) {
    type = contractType.indefiniteContract.calculategroup1(salary).budgetInst;
  } else if (
    contract === "Neterminuota" &&
    employerType === "budgetInstitutions" &&
    selectGroup === "II grupė"
  ) {
    type = contractType.indefiniteContract.calculategroup2(salary).budgetInst;
  } else if (
    contract === "Neterminuota" &&
    employerType === "budgetInstitutions" &&
    selectGroup === "III grupė"
  ) {
    type = contractType.indefiniteContract.calculategroup3(salary).budgetInst;
  } else if (
    contract === "Neterminuota" &&
    employerType === "budgetInstitutions" &&
    selectGroup === "IV grupė"
  ) {
    type = contractType.indefiniteContract.calculateGroup4(salary).budgetInst;
  }

  if (
    contract === "Neterminuota" &&
    employerType === "other" &&
    selectGroup === "I grupė"
  ) {
    type = contractType.indefiniteContract.calculategroup1(salary).other;
  } else if (
    contract === "Neterminuota" &&
    employerType === "other" &&
    selectGroup === "II grupė"
  ) {
    type = contractType.indefiniteContract.calculategroup2(salary).other;
  } else if (
    contract === "Neterminuota" &&
    employerType === "other" &&
    selectGroup === "III grupė"
  ) {
    type = contractType.indefiniteContract.calculategroup3(salary).other;
  } else if (
    contract === "Neterminuota" &&
    employerType === "other" &&
    selectGroup === "IV grupė"
  ) {
    type = contractType.indefiniteContract.calculateGroup4(salary).other;
  }

  // ***********TERMINUOTA***********

  if (
    contract === "Terminuota" &&
    employerType === "Privatus" &&
    selectGroup === "I grupė"
  ) {
    type = contractType.timedContract.calculategroup1(salary).employer;
  } else if (
    contract === "Terminuota" &&
    employerType === "Privatus" &&
    selectGroup === "II grupė"
  ) {
    type = contractType.timedContract.calculategroup2(salary).employer;
  } else if (
    contract === "Terminuota" &&
    employerType === "Privatus" &&
    selectGroup === "III grupė"
  ) {
    type = contractType.timedContract.calculategroup3(salary).employer;
  } else if (
    contract === "Terminuota" &&
    employerType === "Privatus" &&
    selectGroup === "IV grupė"
  ) {
    type = contractType.timedContract.calculategroup4(salary).budgetInst;
  }

  if (
    contract === "Terminuota" &&
    employerType === "budgetInstitutions" &&
    selectGroup === "I grupė"
  ) {
    type = contractType.timedContract.calculategroup1(salary).budgetInst;
  } else if (
    contract === "Terminuota" &&
    employerType === "budgetInstitutions" &&
    selectGroup === "II grupė"
  ) {
    type = contractType.timedContract.calculategroup2(salary).budgetInst;
  } else if (
    contract === "Terminuota" &&
    employerType === "budgetInstitutions" &&
    selectGroup === "III grupė"
  ) {
    type = contractType.timedContract.calculategroup3(salary).budgetInst;
  } else if (
    contract === "Terminuota" &&
    employerType === "budgetInstitutions" &&
    selectGroup === "IV grupė"
  ) {
    type = contractType.timedContract.calculategroup4(salary).budgetInst;
  }

  if (
    contract === "Terminuota" &&
    employerType === "other" &&
    selectGroup === "I grupė"
  ) {
    type = contractType.timedContract.calculategroup1(salary).other;
  } else if (
    contract === "Terminuota" &&
    employerType === "other" &&
    selectGroup === "II grupė"
  ) {
    type = contractType.timedContract.calculategroup2(salary).other;
  } else if (
    contract === "Terminuota" &&
    employerType === "other" &&
    selectGroup === "III grupė"
  ) {
    type = contractType.timedContract.calculategroup3(salary).other;
  } else if (
    contract === "Terminuota" &&
    employerType === "other" &&
    selectGroup === "IV grupė"
  ) {
    type = contractType.timedContract.calculategroup4(salary).other;
  }

  // ***********Neapmokestinamas pajamų dydis***********

  if (gpm === "Taikomas standartinis") {
    gpmType = calculateNPD(salary).standardNPD;
  } else if (gpm === "Netaikomas") {
    gpmType = calculateNPD(salary).notApplicable;
  } else if (gpm === "0 - 25% darbingumas") {
    gpmType = calculateNPD(salary).individualNPD25;
  } else if (gpm === "30 - 55% darbingumas") {
    gpmType = calculateNPD(salary).individualNPD55;
  }

  // ***********Papildomas pensijos kaupimas***********
  if (pension === "Nekaupia") {
    pensionType = calculateSodra(salary).notAccumulating;
  } else if (pension === "Netaikomas") {
    pensionType = calculateNPD(salary).notApplicable;
  } else if (pension === "Kaupia palaipsniui") {
    pensionType = calculateSodra(salary).accumulatingConstantly;
  } else if (pension === "Kaupia 3%") {
    pensionType = calculateSodra(salary).accumulatingAdditional;
  }

  return (
    <>
      <div className="w-5/6 mx-auto bg-white p-16 border-2 shadow-xl mt-6">
        <form>
          <div className="fields grid gap-6 mb-6 lg:grid-cols-3">
            <div>
              <label
                htmlFor="salary"
                className="block mb-2 px-1 text-sm font-medium"
              >
                Ant popieriaus
              </label>
              <input
                type="number"
                id="salary"
                className="form-control py-4 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5"
                placeholder="0.00"
                onChange={(e) => setSalary(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label
                htmlFor="salary_to_hand"
                className="block mb-2 px-1 text-sm font-medium"
              >
                Į rankas
              </label>
              <input
                type="number hidden"
                id="salary_to_hand"
                className="inputField py-4 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5"
                placeholder="0.00"
                value={
                  salary <= 540
                    ? (salary - +pensionType).toFixed(2)
                    : salary
                    ? (salary - +pensionType - +gpmType).toFixed(2)
                    : "0.00"
                }
              />
            </div>

            <div>
              <label
                htmlFor="work_space_price"
                className="block mb-2  px-1 text-sm font-medium"
              >
                Darbo vietos kaina
              </label>
              <input
                type="number hidden"
                id="work_space_price"
                className="inputField py-4 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="0.00"
                value={salary ? (salary + +type).toFixed(2) : "0.00"}
              />
            </div>
            <div>
              <label
                htmlFor="npd"
                className="block mb-2 px-1 text-sm font-medium"
              >
                Neapmokestinamas pajamų dydis
              </label>
              <select
                id="npd"
                className="block py-4 p-2 mb-6 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setGPM(e.target.value)}
              >
                <option>Taikomas standartinis</option>
                <option>Netaikomas</option>
                <option>0 - 25% darbingumas</option>
                <option>30 - 55% darbingumas</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="pension"
                className="block mb-2 px-1 text-sm font-medium"
              >
                Papildomas pensijos kaupimas
              </label>
              <select
                id="pension"
                className="block py-4 p-2 mb-6 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setPension(e.target.value)}
              >
                <option>Nekaupia</option>
                <option>Kaupia palaipsniui</option>
                <option>Kaupia 3%</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="contractType"
                className="block mb-2 px-1 text-sm font-medium"
              >
                Sutarties tipas
              </label>
              <select
                id="contractType"
                className="block py-4 p-2 mb-6 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                onChange={changeContractHandler}
              >
                <option>Neterminuota</option>
                <option>Terminuota</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="employerType"
                className="block mb-2 px-1 text-sm font-medium"
              >
                Darbdavio tipas
              </label>
              <select
                id="employerType"
                className="block py-4 p-2 mb-6 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                onChange={changeEmployerTypeHandler}
              >
                <option>Privatus</option>
                <option value="budgetInstitutions">Biudžetinė Įstaiga</option>
                <option value="budgetInstitutions">Lietuvos bankas</option>
                <option value="other">Politinė partija</option>
                <option value="other">Profesinė sąjunga</option>
                <option value="other">Religinės bendruomenės</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="employerGroup"
                className="block mb-2 px-1 text-sm font-medium"
              >
                Darbdavio grupė
              </label>
              <select
                id="employerGroup"
                className="block py-4 p-2 mb-6 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                onChange={changeGroupHandler}
              >
                <option>I grupė</option>
                <option>II grupė</option>
                <option>III grupė</option>
                <option>IV grupė</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="years"
                className="block mb-2 px-1 text-sm font-medium"
              >
                Metai
              </label>
              <select
                id="years"
                className="block py-4 p-2 mb-6 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="2022">2022</option>
              </select>
            </div>

            <div>
              <p>
                Atlyginimo skaičiuoklė suderinta su teisės aktų pakeitimais,
                įsigaliojusiais nuo 2022 m. sausio 1 d. (atnaujinta pagal
                2022-05-17 d. įstatymo paketimus)
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* *************************RESULTS************************* */}

      <Results
        salary={salary}
        gpmType={gpmType}
        pensionType={pensionType}
        type={type}
      />
    </>
  );
};

export default TaxForm;

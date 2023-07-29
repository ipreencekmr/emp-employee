import { DEPARTMENT_LIST } from "../../src/constants/departmentConstant";

it("should match with department object", ()=>{
    const department = require("../../src/constants/departmentConstant");
    expect(department.DEPARTMENT_LIST).toMatchObject(DEPARTMENT_LIST);
});
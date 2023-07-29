import { QUALIFICATION_LIST } from "../../src/constants/qualificationConstant";

it("should match with qualification object", ()=>{
    const qualification = require("../../src/constants/qualificationConstant");
    expect(qualification.QUALIFICATION_LIST).toMatchObject(QUALIFICATION_LIST);
});
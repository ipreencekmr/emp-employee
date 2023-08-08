import { GENDER_LIST } from "../../src/constants/genderConstant";

it("should match with gender object", ()=>{
    const gender = require("../../src/constants/genderConstant");
    expect(gender.GENDER_LIST).toMatchObject(GENDER_LIST);
});
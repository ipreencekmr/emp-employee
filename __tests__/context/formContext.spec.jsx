import { useFormContext } from "../../src/context/formContext";

jest.mock("react", ()=> ({
    ...jest.requireActual("react"),
    useContext: jest.fn(()=>({
        firstName: "mockValue"
    }))
}));

describe("useFormContext", () => {
    it("should export default value object", ()=>{
        const { defaultValue } = require("../../src/context/formContext");
        expect(defaultValue).toEqual(expect.objectContaining({
            firstName: "",
            lastName: "",
            emailId: "",
            age: "",
            gender: {
                id: "",
                value: ""
            },
            department: {
                id: "",
                value: ""
            },
            qualification: {
                id: "",
                value: ""
            },
            agree: false
        }));
    });

    it("should return respective value from useFormContext", () =>{
        const { firstName } = useFormContext();
        expect(firstName).toBe("mockValue");
    });
});
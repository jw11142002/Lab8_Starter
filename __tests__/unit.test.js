// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("123-456-7890 is a phone number", () =>{
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test("862-220-6426 is a phone number", () =>{
    expect(functions.isPhoneNumber("862-220-6426")).toBe(true);
});
test("123 is not a phone number", () =>{
    expect(functions.isPhoneNumber("123")).toBe(false);
});
test("hello is not a phone number", () =>{
    expect(functions.isPhoneNumber("hello")).toBe(false);
});

test("makeupemail@gmail.com is an email", () =>{
    expect(functions.isEmail("makeupemail@gmail.com")).toBe(true);
});
test("coollive@outlook.com is an email", () =>{
    expect(functions.isEmail("coollive@outlook.com")).toBe(true);
});
test("coollive@outlook is not an email", () =>{
    expect(functions.isEmail("coollive@outlook")).toBe(false);
});
test("makeupemail is not an email", () =>{
    expect(functions.isEmail("makeupemail")).toBe(false);
});

test("A1234_1 is a strong password", () =>{
    expect(functions.isStrongPassword("A1234_1")).toBe(true);
});
test("Ab12 is a strong password", () =>{
    expect(functions.isStrongPassword("Ab12")).toBe(true);
});
test("Ab is not a strong password", () =>{
    expect(functions.isStrongPassword("Ab")).toBe(false);
});
test("A1234@1 is not a strong password", () =>{
    expect(functions.isStrongPassword("A1234@1")).toBe(false);
});

test("12/03/2022 is a date", () =>{
    expect(functions.isDate("12/03/2022")).toBe(true);
});
test("08/03/2022 is a date", () =>{
    expect(functions.isDate("08/03/2022")).toBe(true);
});
test("12/03 is not a date", () =>{
    expect(functions.isDate("12/03")).toBe(false);
});
test("12/03/202a is not a date", () =>{
    expect(functions.isDate("12/03/202a")).toBe(false);
});

test("#FF5733 is a hex color", () =>{
    expect(functions.isHexColor("#FF5733")).toBe(true);
});
test("#33FF36 is a hex color", () =>{
    expect(functions.isHexColor("#33FF36")).toBe(true);
});
test("(51, 255, 54) is not a hex color", () =>{
    expect(functions.isHexColor("(51, 255, 54)")).toBe(false);
});
test("(53, 80%, 60%) is not a hex color", () =>{
    expect(functions.isHexColor("(53, 80%, 60%)")).toBe(false);
});

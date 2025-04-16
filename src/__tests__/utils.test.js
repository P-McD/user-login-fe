import { describe, expect, test } from "vitest";
import isStrongPassword from "../utils/isStrongPassword";
import validateForm from "../utils/validateForm";

describe("isStrongPassword", () => {
  test("returns true when passed a password containing at least 1 number and at least 8 characters", () => {
    expect(isStrongPassword("completelyFine23")).toBe(true);
  });
  test("returns false when passed a password containing less than 8 characters", () => {
    expect(isStrongPassword("hi12")).toBe(false);
  });
  test("returns false when passed a password containing no numerical characters", () => {
    expect(isStrongPassword("aFewNumbersShort")).toBe(false);
  });
});

describe("validateForm", () => {
  test("returns an empty object when passed only valid inputs", () => {
    const testFormInput = {
      firstName: "Terra",
      lastName: "Test",
      emailAddress: "testterra@testmail.com",
      password: "MyValidEntry44!",
      confirmPassword: "MyValidEntry44!",
    };
    expect(validateForm(testFormInput)).toEqual({});
  }),
    test("returns an object containing a key value pair of the fieldName and error message when passed a formInput containing an invalid name field", () => {
      const testFormInput = {
        firstName: "",
        lastName: "Test",
        emailAddress: "testterra@testmail.com",
        password: "MyValidEntry44!",
        confirmPassword: "MyValidEntry44!",
      };
      expect(validateForm(testFormInput)).toEqual({
        firstName: "First name is required",
      });
    });
  test("returns an object containing a key value pair of the fieldName and error message when passed a formInput containing a name field that is only whitespace", () => {
    const testFormInput = {
      firstName: "Terra",
      lastName: "   ",
      emailAddress: "testterra@testmail.com",
      password: "MyValidEntry44!",
      confirmPassword: "MyValidEntry44!",
    };
    expect(validateForm(testFormInput)).toEqual({
      lastName: "Last name is required",
    });
  });
  test("returns an object containing a key value pair of the fieldName and error message when passed a formInput with an invalid email address", () => {
    const testFormInput = {
      firstName: "Terra",
      lastName: "Test",
      emailAddress: "notvalid",
      password: "MyValidEntry44!",
      confirmPassword: "MyValidEntry44!",
    };
    expect(validateForm(testFormInput)).toMatchObject({
      emailAddress: "Valid email address is required",
    });
  });
  test("returns an object containing a key value pair of the fieldName and error message when passed a formInput with mismatched password and confirmPassword fields", () => {
    const testFormInput = {
      firstName: "Terra",
      lastName: "Test",
      emailAddress: "testterra@testmail.com",
      password: "MyValidEntry44!",
      confirmPassword: "notAMatch",
    };
    expect(validateForm(testFormInput)).toMatchObject({
      confirmPassword: "Passwords do not match",
    });
  });
  test("returns an object containing a multiple key value pairs when passed a form input with multiple invalid fields", () => {
    const testFormInput = {
      firstName: "",
      lastName: "   ",
      emailAddress: "notvalid",
      password: "nope",
      confirmPassword: "stillNope",
    };
    expect(validateForm(testFormInput)).toEqual({
      confirmPassword: "Passwords do not match",
      emailAddress: "Valid email address is required",
      firstName: "First name is required",
      lastName: "Last name is required",
      password:
        "Passwords should be at least 8 characters long and contain a number",
    });
  });
});

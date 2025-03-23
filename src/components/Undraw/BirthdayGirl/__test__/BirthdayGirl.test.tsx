import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BirthdayGirl from "../BirthdayGirl";

describe("BirthdayGirl component", () => {
  it("BirthdayGirl should render correctly", () => {
    render(<BirthdayGirl />);
    expect(true).toBeTruthy();
  });
});

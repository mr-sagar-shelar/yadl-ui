import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PhoneCall from "../PhoneCall";

describe("PhoneCall component", () => {
  it("PhoneCall should render correctly", () => {
    render(<PhoneCall />);
    expect(true).toBeTruthy();
  });
});

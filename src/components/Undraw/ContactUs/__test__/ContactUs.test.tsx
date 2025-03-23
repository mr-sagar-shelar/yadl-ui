import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContactUs from "../ContactUs";

describe("ContactUs component", () => {
  it("ContactUs should render correctly", () => {
    render(<ContactUs />);
    expect(true).toBeTruthy();
  });
});

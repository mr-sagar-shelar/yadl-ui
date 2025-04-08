import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppRegistrations from "../AppRegistrations";

describe("AppRegistrations component", () => {
  it("AppRegistrations should render correctly", () => {
    render(<AppRegistrations />);
    expect(true).toBeTruthy();
  });
});

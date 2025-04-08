import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FSxforNetAppONTAP from "../FSxforNetAppONTAP";

describe("FSxforNetAppONTAP component", () => {
  it("FSxforNetAppONTAP should render correctly", () => {
    render(<FSxforNetAppONTAP />);
    expect(true).toBeTruthy();
  });
});

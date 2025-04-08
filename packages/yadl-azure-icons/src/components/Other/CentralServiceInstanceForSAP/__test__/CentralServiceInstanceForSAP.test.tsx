import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CentralServiceInstanceForSAP from "../CentralServiceInstanceForSAP";

describe("CentralServiceInstanceForSAP component", () => {
  it("CentralServiceInstanceForSAP should render correctly", () => {
    render(<CentralServiceInstanceForSAP />);
    expect(true).toBeTruthy();
  });
});

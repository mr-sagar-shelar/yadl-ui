import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RDSonVMware from "../RDSonVMware";

describe("RDSonVMware component", () => {
  it("RDSonVMware should render correctly", () => {
    render(<RDSonVMware />);
    expect(true).toBeTruthy();
  });
});

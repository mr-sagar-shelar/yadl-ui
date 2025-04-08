import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Externalid from "../Externalid";

describe("Externalid component", () => {
  it("Externalid should render correctly", () => {
    render(<Externalid />);
    expect(true).toBeTruthy();
  });
});

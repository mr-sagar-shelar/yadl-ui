import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SQLServer from "../SQLServer";

describe("SQLServer component", () => {
  it("SQLServer should render correctly", () => {
    render(<SQLServer />);
    expect(true).toBeTruthy();
  });
});

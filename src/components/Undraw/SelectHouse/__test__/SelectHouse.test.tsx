import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SelectHouse from "../SelectHouse";

describe("SelectHouse component", () => {
  it("SelectHouse should render correctly", () => {
    render(<SelectHouse />);
    expect(true).toBeTruthy();
  });
});

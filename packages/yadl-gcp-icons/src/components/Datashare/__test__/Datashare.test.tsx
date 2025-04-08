import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Datashare from "../Datashare";

describe("Datashare component", () => {
  it("Datashare should render correctly", () => {
    render(<Datashare />);
    expect(true).toBeTruthy();
  });
});

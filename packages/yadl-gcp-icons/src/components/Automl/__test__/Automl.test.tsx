import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Automl from "../Automl";

describe("Automl component", () => {
  it("Automl should render correctly", () => {
    render(<Automl />);
    expect(true).toBeTruthy();
  });
});

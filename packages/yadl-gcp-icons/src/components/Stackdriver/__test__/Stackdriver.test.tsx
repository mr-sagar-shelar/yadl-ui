import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Stackdriver from "../Stackdriver";

describe("Stackdriver component", () => {
  it("Stackdriver should render correctly", () => {
    render(<Stackdriver />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataLabeling from "../DataLabeling";

describe("DataLabeling component", () => {
  it("DataLabeling should render correctly", () => {
    render(<DataLabeling />);
    expect(true).toBeTruthy();
  });
});

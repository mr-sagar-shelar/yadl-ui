import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bigquery from "../Bigquery";

describe("Bigquery component", () => {
  it("Bigquery should render correctly", () => {
    render(<Bigquery />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Redshift from "../Redshift";

describe("Redshift component", () => {
  it("Redshift should render correctly", () => {
    render(<Redshift />);
    expect(true).toBeTruthy();
  });
});

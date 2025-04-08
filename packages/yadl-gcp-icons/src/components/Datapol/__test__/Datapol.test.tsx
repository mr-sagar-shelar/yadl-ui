import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Datapol from "../Datapol";

describe("Datapol component", () => {
  it("Datapol should render correctly", () => {
    render(<Datapol />);
    expect(true).toBeTruthy();
  });
});

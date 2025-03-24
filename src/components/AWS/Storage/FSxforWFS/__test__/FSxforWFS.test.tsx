import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FSxforWFS from "../FSxforWFS";

describe("FSxforWFS component", () => {
  it("FSxforWFS should render correctly", () => {
    render(<FSxforWFS />);
    expect(true).toBeTruthy();
  });
});

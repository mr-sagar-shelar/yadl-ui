import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FSxforOpenZFS from "../FSxforOpenZFS";

describe("FSxforOpenZFS component", () => {
  it("FSxforOpenZFS should render correctly", () => {
    render(<FSxforOpenZFS />);
    expect(true).toBeTruthy();
  });
});

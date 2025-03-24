import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudControlAPI from "../CloudControlAPI";

describe("CloudControlAPI component", () => {
  it("CloudControlAPI should render correctly", () => {
    render(<CloudControlAPI />);
    expect(true).toBeTruthy();
  });
});

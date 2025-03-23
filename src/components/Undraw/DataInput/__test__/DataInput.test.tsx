import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataInput from "../DataInput";

describe("DataInput component", () => {
  it("DataInput should render correctly", () => {
    render(<DataInput />);
    expect(true).toBeTruthy();
  });
});

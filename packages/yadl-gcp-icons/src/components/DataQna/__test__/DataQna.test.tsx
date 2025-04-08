import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataQna from "../DataQna";

describe("DataQna component", () => {
  it("DataQna should render correctly", () => {
    render(<DataQna />);
    expect(true).toBeTruthy();
  });
});

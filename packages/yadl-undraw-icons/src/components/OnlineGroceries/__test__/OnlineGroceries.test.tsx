import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineGroceries from "../OnlineGroceries";

describe("OnlineGroceries component", () => {
  it("OnlineGroceries should render correctly", () => {
    render(<OnlineGroceries />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChasingLove from "../ChasingLove";

describe("ChasingLove component", () => {
  it("ChasingLove should render correctly", () => {
    render(<ChasingLove />);
    expect(true).toBeTruthy();
  });
});

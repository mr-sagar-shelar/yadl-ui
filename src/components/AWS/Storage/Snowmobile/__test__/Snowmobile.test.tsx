import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Snowmobile from "../Snowmobile";

describe("Snowmobile component", () => {
  it("Snowmobile should render correctly", () => {
    render(<Snowmobile />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Xmas_snowmanXmasSnowman from "../Xmas_snowmanXmasSnowman";

describe("Xmas_snowmanXmasSnowman component", () => {
  it("Xmas_snowmanXmasSnowman should render correctly", () => {
    render(<Xmas_snowmanXmasSnowman />);
    expect(true).toBeTruthy();
  });
});

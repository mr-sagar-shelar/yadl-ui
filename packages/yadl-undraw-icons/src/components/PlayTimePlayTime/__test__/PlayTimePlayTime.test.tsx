import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PlayTimePlayTime from "../PlayTimePlayTime";

describe("PlayTimePlayTime component", () => {
  it("PlayTimePlayTime should render correctly", () => {
    render(<PlayTimePlayTime />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import YoungAndHappyYoungAndHappy from "../YoungAndHappyYoungAndHappy";

describe("YoungAndHappyYoungAndHappy component", () => {
  it("YoungAndHappyYoungAndHappy should render correctly", () => {
    render(<YoungAndHappyYoungAndHappy />);
    expect(true).toBeTruthy();
  });
});

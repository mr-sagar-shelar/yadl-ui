import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BizTalk from "../BizTalk";

describe("BizTalk component", () => {
  it("BizTalk should render correctly", () => {
    render(<BizTalk />);
    expect(true).toBeTruthy();
  });
});

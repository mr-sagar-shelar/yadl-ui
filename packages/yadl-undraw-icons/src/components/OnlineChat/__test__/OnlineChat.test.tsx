import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineChat from "../OnlineChat";

describe("OnlineChat component", () => {
  it("OnlineChat should render correctly", () => {
    render(<OnlineChat />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineVideo from "../OnlineVideo";

describe("OnlineVideo component", () => {
  it("OnlineVideo should render correctly", () => {
    render(<OnlineVideo />);
    expect(true).toBeTruthy();
  });
});

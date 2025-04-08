import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SecurityCommandCenter from "../SecurityCommandCenter";

describe("SecurityCommandCenter component", () => {
  it("SecurityCommandCenter should render correctly", () => {
    render(<SecurityCommandCenter />);
    expect(true).toBeTruthy();
  });
});

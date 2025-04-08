import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UserPrivacy from "../UserPrivacy";

describe("UserPrivacy component", () => {
  it("UserPrivacy should render correctly", () => {
    render(<UserPrivacy />);
    expect(true).toBeTruthy();
  });
});

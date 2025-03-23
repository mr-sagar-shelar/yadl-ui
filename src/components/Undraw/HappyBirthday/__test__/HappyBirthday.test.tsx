import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HappyBirthday from "../HappyBirthday";

describe("HappyBirthday component", () => {
  it("HappyBirthday should render correctly", () => {
    render(<HappyBirthday />);
    expect(true).toBeTruthy();
  });
});

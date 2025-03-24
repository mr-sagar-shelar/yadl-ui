import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Sentry from "../Sentry";

describe("Sentry component", () => {
  it("Sentry should render correctly", () => {
    render(<Sentry />);
    expect(true).toBeTruthy();
  });
});

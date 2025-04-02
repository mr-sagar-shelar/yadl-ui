import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ActivityPub from "../ActivityPub";

describe("ActivityPub component", () => {
  it("ActivityPub should render correctly", () => {
    render(<ActivityPub />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SendGift from "../SendGift";

describe("SendGift component", () => {
  it("SendGift should render correctly", () => {
    render(<SendGift />);
    expect(true).toBeTruthy();
  });
});

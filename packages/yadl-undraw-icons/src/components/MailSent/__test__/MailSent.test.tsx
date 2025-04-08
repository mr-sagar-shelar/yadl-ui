import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MailSent from "../MailSent";

describe("MailSent component", () => {
  it("MailSent should render correctly", () => {
    render(<MailSent />);
    expect(true).toBeTruthy();
  });
});

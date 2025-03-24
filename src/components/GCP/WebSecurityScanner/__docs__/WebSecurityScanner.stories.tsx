import type { Meta, StoryObj } from "@storybook/react";
import WebSecurityScanner from "../WebSecurityScanner";

const meta: Meta<typeof WebSecurityScanner> = { title: "GCP/WebSecurityScanner", component: WebSecurityScanner };

export default meta;
type Story = StoryObj<typeof WebSecurityScanner>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

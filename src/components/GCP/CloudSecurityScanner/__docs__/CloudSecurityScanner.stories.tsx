import type { Meta, StoryObj } from "@storybook/react";
import CloudSecurityScanner from "../CloudSecurityScanner";

const meta: Meta<typeof CloudSecurityScanner> = { title: "GCP/CloudSecurityScanner", component: CloudSecurityScanner };

export default meta;
type Story = StoryObj<typeof CloudSecurityScanner>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

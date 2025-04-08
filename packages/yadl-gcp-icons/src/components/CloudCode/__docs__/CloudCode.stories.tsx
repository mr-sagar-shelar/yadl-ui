import type { Meta, StoryObj } from "@storybook/react";
import CloudCode from "../CloudCode";

const meta: Meta<typeof CloudCode> = { title: "GCP/CloudCode", component: CloudCode };

export default meta;
type Story = StoryObj<typeof CloudCode>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

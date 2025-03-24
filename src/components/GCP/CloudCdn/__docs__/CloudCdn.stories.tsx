import type { Meta, StoryObj } from "@storybook/react";
import CloudCdn from "../CloudCdn";

const meta: Meta<typeof CloudCdn> = { title: "GCP/CloudCdn", component: CloudCdn };

export default meta;
type Story = StoryObj<typeof CloudCdn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

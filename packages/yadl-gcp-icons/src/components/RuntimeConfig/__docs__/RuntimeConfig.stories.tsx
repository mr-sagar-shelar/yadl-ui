import type { Meta, StoryObj } from "@storybook/react";
import RuntimeConfig from "../RuntimeConfig";

const meta: Meta<typeof RuntimeConfig> = { title: "GCP/RuntimeConfig", component: RuntimeConfig };

export default meta;
type Story = StoryObj<typeof RuntimeConfig>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

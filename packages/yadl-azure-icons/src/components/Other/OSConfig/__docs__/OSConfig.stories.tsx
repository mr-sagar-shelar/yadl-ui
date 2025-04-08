import type { Meta, StoryObj } from "@storybook/react";
import OSConfig from "../OSConfig";

const meta: Meta<typeof OSConfig> = { title: "Azure/Other/OSConfig", component: OSConfig };

export default meta;
type Story = StoryObj<typeof OSConfig>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

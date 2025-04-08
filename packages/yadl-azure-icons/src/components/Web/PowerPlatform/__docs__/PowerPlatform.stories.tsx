import type { Meta, StoryObj } from "@storybook/react";
import PowerPlatform from "../PowerPlatform";

const meta: Meta<typeof PowerPlatform> = { title: "Azure/Web/PowerPlatform", component: PowerPlatform };

export default meta;
type Story = StoryObj<typeof PowerPlatform>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

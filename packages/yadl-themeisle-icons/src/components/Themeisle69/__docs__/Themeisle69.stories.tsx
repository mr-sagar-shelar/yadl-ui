import type { Meta, StoryObj } from "@storybook/react";
import Themeisle69 from "../Themeisle69";

const meta: Meta<typeof Themeisle69> = { title: "Themeisle/Themeisle69", component: Themeisle69 };

export default meta;
type Story = StoryObj<typeof Themeisle69>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

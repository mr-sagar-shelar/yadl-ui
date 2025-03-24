import type { Meta, StoryObj } from "@storybook/react";
import Themeisle437 from "../Themeisle437";

const meta: Meta<typeof Themeisle437> = { title: "Themeisle/Themeisle437", component: Themeisle437 };

export default meta;
type Story = StoryObj<typeof Themeisle437>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

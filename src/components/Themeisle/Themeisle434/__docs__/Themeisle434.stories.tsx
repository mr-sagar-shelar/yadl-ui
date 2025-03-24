import type { Meta, StoryObj } from "@storybook/react";
import Themeisle434 from "../Themeisle434";

const meta: Meta<typeof Themeisle434> = { title: "Themeisle/Themeisle434", component: Themeisle434 };

export default meta;
type Story = StoryObj<typeof Themeisle434>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

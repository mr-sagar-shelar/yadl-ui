import type { Meta, StoryObj } from "@storybook/react";
import Themeisle224 from "../Themeisle224";

const meta: Meta<typeof Themeisle224> = { title: "Themeisle/Themeisle224", component: Themeisle224 };

export default meta;
type Story = StoryObj<typeof Themeisle224>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

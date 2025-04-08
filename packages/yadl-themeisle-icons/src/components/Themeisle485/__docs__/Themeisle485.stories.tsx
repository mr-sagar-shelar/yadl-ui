import type { Meta, StoryObj } from "@storybook/react";
import Themeisle485 from "../Themeisle485";

const meta: Meta<typeof Themeisle485> = { title: "Themeisle/Themeisle485", component: Themeisle485 };

export default meta;
type Story = StoryObj<typeof Themeisle485>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Themeisle107 from "../Themeisle107";

const meta: Meta<typeof Themeisle107> = { title: "Themeisle/Themeisle107", component: Themeisle107 };

export default meta;
type Story = StoryObj<typeof Themeisle107>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

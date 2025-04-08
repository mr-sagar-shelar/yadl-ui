import type { Meta, StoryObj } from "@storybook/react";
import Themeisle205 from "../Themeisle205";

const meta: Meta<typeof Themeisle205> = { title: "Themeisle/Themeisle205", component: Themeisle205 };

export default meta;
type Story = StoryObj<typeof Themeisle205>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

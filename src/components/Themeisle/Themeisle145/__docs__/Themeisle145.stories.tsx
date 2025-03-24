import type { Meta, StoryObj } from "@storybook/react";
import Themeisle145 from "../Themeisle145";

const meta: Meta<typeof Themeisle145> = { title: "Themeisle/Themeisle145", component: Themeisle145 };

export default meta;
type Story = StoryObj<typeof Themeisle145>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

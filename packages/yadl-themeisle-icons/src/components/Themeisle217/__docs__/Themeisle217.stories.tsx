import type { Meta, StoryObj } from "@storybook/react";
import Themeisle217 from "../Themeisle217";

const meta: Meta<typeof Themeisle217> = { title: "Themeisle/Themeisle217", component: Themeisle217 };

export default meta;
type Story = StoryObj<typeof Themeisle217>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

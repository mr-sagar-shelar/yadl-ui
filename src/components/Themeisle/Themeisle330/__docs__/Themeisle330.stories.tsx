import type { Meta, StoryObj } from "@storybook/react";
import Themeisle330 from "../Themeisle330";

const meta: Meta<typeof Themeisle330> = { title: "Themeisle/Themeisle330", component: Themeisle330 };

export default meta;
type Story = StoryObj<typeof Themeisle330>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

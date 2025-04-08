import type { Meta, StoryObj } from "@storybook/react";
import Themeisle12 from "../Themeisle12";

const meta: Meta<typeof Themeisle12> = { title: "Themeisle/Themeisle12", component: Themeisle12 };

export default meta;
type Story = StoryObj<typeof Themeisle12>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

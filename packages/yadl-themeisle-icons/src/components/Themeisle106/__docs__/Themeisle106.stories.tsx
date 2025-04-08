import type { Meta, StoryObj } from "@storybook/react";
import Themeisle106 from "../Themeisle106";

const meta: Meta<typeof Themeisle106> = { title: "Themeisle/Themeisle106", component: Themeisle106 };

export default meta;
type Story = StoryObj<typeof Themeisle106>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

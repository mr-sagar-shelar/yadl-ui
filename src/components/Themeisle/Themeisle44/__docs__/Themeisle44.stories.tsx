import type { Meta, StoryObj } from "@storybook/react";
import Themeisle44 from "../Themeisle44";

const meta: Meta<typeof Themeisle44> = { title: "Themeisle/Themeisle44", component: Themeisle44 };

export default meta;
type Story = StoryObj<typeof Themeisle44>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

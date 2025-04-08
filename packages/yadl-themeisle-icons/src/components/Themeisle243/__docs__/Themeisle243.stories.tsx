import type { Meta, StoryObj } from "@storybook/react";
import Themeisle243 from "../Themeisle243";

const meta: Meta<typeof Themeisle243> = { title: "Themeisle/Themeisle243", component: Themeisle243 };

export default meta;
type Story = StoryObj<typeof Themeisle243>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Themeisle418 from "../Themeisle418";

const meta: Meta<typeof Themeisle418> = { title: "Themeisle/Themeisle418", component: Themeisle418 };

export default meta;
type Story = StoryObj<typeof Themeisle418>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

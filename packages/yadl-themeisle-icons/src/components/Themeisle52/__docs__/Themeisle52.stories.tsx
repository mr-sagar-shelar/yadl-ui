import type { Meta, StoryObj } from "@storybook/react";
import Themeisle52 from "../Themeisle52";

const meta: Meta<typeof Themeisle52> = { title: "Themeisle/Themeisle52", component: Themeisle52 };

export default meta;
type Story = StoryObj<typeof Themeisle52>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

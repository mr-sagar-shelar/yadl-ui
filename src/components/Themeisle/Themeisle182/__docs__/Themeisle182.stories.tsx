import type { Meta, StoryObj } from "@storybook/react";
import Themeisle182 from "../Themeisle182";

const meta: Meta<typeof Themeisle182> = { title: "Themeisle/Themeisle182", component: Themeisle182 };

export default meta;
type Story = StoryObj<typeof Themeisle182>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

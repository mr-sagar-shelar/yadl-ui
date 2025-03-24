import type { Meta, StoryObj } from "@storybook/react";
import Themeisle220 from "../Themeisle220";

const meta: Meta<typeof Themeisle220> = { title: "Themeisle/Themeisle220", component: Themeisle220 };

export default meta;
type Story = StoryObj<typeof Themeisle220>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

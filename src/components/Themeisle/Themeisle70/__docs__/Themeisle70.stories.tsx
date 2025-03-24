import type { Meta, StoryObj } from "@storybook/react";
import Themeisle70 from "../Themeisle70";

const meta: Meta<typeof Themeisle70> = { title: "Themeisle/Themeisle70", component: Themeisle70 };

export default meta;
type Story = StoryObj<typeof Themeisle70>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

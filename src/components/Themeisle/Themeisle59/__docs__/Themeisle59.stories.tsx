import type { Meta, StoryObj } from "@storybook/react";
import Themeisle59 from "../Themeisle59";

const meta: Meta<typeof Themeisle59> = { title: "Themeisle/Themeisle59", component: Themeisle59 };

export default meta;
type Story = StoryObj<typeof Themeisle59>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

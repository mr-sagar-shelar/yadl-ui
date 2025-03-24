import type { Meta, StoryObj } from "@storybook/react";
import Themeisle331 from "../Themeisle331";

const meta: Meta<typeof Themeisle331> = { title: "Themeisle/Themeisle331", component: Themeisle331 };

export default meta;
type Story = StoryObj<typeof Themeisle331>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

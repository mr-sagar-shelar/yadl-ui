import type { Meta, StoryObj } from "@storybook/react";
import Themeisle210 from "../Themeisle210";

const meta: Meta<typeof Themeisle210> = { title: "Themeisle/Themeisle210", component: Themeisle210 };

export default meta;
type Story = StoryObj<typeof Themeisle210>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

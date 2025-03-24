import type { Meta, StoryObj } from "@storybook/react";
import Themeisle213 from "../Themeisle213";

const meta: Meta<typeof Themeisle213> = { title: "Themeisle/Themeisle213", component: Themeisle213 };

export default meta;
type Story = StoryObj<typeof Themeisle213>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

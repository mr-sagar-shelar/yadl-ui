import type { Meta, StoryObj } from "@storybook/react";
import Themeisle479 from "../Themeisle479";

const meta: Meta<typeof Themeisle479> = { title: "Themeisle/Themeisle479", component: Themeisle479 };

export default meta;
type Story = StoryObj<typeof Themeisle479>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

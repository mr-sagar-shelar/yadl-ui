import type { Meta, StoryObj } from "@storybook/react";
import Themeisle284 from "../Themeisle284";

const meta: Meta<typeof Themeisle284> = { title: "Themeisle/Themeisle284", component: Themeisle284 };

export default meta;
type Story = StoryObj<typeof Themeisle284>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

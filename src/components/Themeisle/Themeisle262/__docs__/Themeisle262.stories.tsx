import type { Meta, StoryObj } from "@storybook/react";
import Themeisle262 from "../Themeisle262";

const meta: Meta<typeof Themeisle262> = { title: "Themeisle/Themeisle262", component: Themeisle262 };

export default meta;
type Story = StoryObj<typeof Themeisle262>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Themeisle448 from "../Themeisle448";

const meta: Meta<typeof Themeisle448> = { title: "Themeisle/Themeisle448", component: Themeisle448 };

export default meta;
type Story = StoryObj<typeof Themeisle448>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

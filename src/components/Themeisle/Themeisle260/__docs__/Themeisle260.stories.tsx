import type { Meta, StoryObj } from "@storybook/react";
import Themeisle260 from "../Themeisle260";

const meta: Meta<typeof Themeisle260> = { title: "Themeisle/Themeisle260", component: Themeisle260 };

export default meta;
type Story = StoryObj<typeof Themeisle260>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

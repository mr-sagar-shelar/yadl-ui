import type { Meta, StoryObj } from "@storybook/react";
import Themeisle134 from "../Themeisle134";

const meta: Meta<typeof Themeisle134> = { title: "Themeisle/Themeisle134", component: Themeisle134 };

export default meta;
type Story = StoryObj<typeof Themeisle134>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

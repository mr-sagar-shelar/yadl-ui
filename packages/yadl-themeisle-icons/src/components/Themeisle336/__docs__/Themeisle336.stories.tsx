import type { Meta, StoryObj } from "@storybook/react";
import Themeisle336 from "../Themeisle336";

const meta: Meta<typeof Themeisle336> = { title: "Themeisle/Themeisle336", component: Themeisle336 };

export default meta;
type Story = StoryObj<typeof Themeisle336>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

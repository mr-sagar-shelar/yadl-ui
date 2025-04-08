import type { Meta, StoryObj } from "@storybook/react";
import Themeisle303 from "../Themeisle303";

const meta: Meta<typeof Themeisle303> = { title: "Themeisle/Themeisle303", component: Themeisle303 };

export default meta;
type Story = StoryObj<typeof Themeisle303>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

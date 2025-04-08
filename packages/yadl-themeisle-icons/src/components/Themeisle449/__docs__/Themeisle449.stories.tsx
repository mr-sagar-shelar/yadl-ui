import type { Meta, StoryObj } from "@storybook/react";
import Themeisle449 from "../Themeisle449";

const meta: Meta<typeof Themeisle449> = { title: "Themeisle/Themeisle449", component: Themeisle449 };

export default meta;
type Story = StoryObj<typeof Themeisle449>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

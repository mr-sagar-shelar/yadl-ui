import type { Meta, StoryObj } from "@storybook/react";
import Themeisle79 from "../Themeisle79";

const meta: Meta<typeof Themeisle79> = { title: "Themeisle/Themeisle79", component: Themeisle79 };

export default meta;
type Story = StoryObj<typeof Themeisle79>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

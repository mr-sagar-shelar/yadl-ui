import type { Meta, StoryObj } from "@storybook/react";
import Themeisle455 from "../Themeisle455";

const meta: Meta<typeof Themeisle455> = { title: "Themeisle/Themeisle455", component: Themeisle455 };

export default meta;
type Story = StoryObj<typeof Themeisle455>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

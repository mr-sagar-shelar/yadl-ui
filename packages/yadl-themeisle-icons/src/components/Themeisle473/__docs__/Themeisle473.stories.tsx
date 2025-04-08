import type { Meta, StoryObj } from "@storybook/react";
import Themeisle473 from "../Themeisle473";

const meta: Meta<typeof Themeisle473> = { title: "Themeisle/Themeisle473", component: Themeisle473 };

export default meta;
type Story = StoryObj<typeof Themeisle473>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

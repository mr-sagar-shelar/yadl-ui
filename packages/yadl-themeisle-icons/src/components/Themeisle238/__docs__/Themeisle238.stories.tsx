import type { Meta, StoryObj } from "@storybook/react";
import Themeisle238 from "../Themeisle238";

const meta: Meta<typeof Themeisle238> = { title: "Themeisle/Themeisle238", component: Themeisle238 };

export default meta;
type Story = StoryObj<typeof Themeisle238>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

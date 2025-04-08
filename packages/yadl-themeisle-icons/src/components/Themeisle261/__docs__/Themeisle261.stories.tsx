import type { Meta, StoryObj } from "@storybook/react";
import Themeisle261 from "../Themeisle261";

const meta: Meta<typeof Themeisle261> = { title: "Themeisle/Themeisle261", component: Themeisle261 };

export default meta;
type Story = StoryObj<typeof Themeisle261>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

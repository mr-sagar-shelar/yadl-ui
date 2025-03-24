import type { Meta, StoryObj } from "@storybook/react";
import Themeisle108 from "../Themeisle108";

const meta: Meta<typeof Themeisle108> = { title: "Themeisle/Themeisle108", component: Themeisle108 };

export default meta;
type Story = StoryObj<typeof Themeisle108>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

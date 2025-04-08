import type { Meta, StoryObj } from "@storybook/react";
import Themeisle327 from "../Themeisle327";

const meta: Meta<typeof Themeisle327> = { title: "Themeisle/Themeisle327", component: Themeisle327 };

export default meta;
type Story = StoryObj<typeof Themeisle327>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

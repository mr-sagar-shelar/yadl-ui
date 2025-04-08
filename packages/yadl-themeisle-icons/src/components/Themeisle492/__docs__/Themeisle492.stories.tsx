import type { Meta, StoryObj } from "@storybook/react";
import Themeisle492 from "../Themeisle492";

const meta: Meta<typeof Themeisle492> = { title: "Themeisle/Themeisle492", component: Themeisle492 };

export default meta;
type Story = StoryObj<typeof Themeisle492>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

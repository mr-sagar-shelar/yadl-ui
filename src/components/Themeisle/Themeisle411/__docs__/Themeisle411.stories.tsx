import type { Meta, StoryObj } from "@storybook/react";
import Themeisle411 from "../Themeisle411";

const meta: Meta<typeof Themeisle411> = { title: "Themeisle/Themeisle411", component: Themeisle411 };

export default meta;
type Story = StoryObj<typeof Themeisle411>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

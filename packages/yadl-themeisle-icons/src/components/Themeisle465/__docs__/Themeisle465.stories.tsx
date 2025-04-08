import type { Meta, StoryObj } from "@storybook/react";
import Themeisle465 from "../Themeisle465";

const meta: Meta<typeof Themeisle465> = { title: "Themeisle/Themeisle465", component: Themeisle465 };

export default meta;
type Story = StoryObj<typeof Themeisle465>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

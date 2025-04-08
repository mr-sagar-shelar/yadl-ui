import type { Meta, StoryObj } from "@storybook/react";
import Themeisle126 from "../Themeisle126";

const meta: Meta<typeof Themeisle126> = { title: "Themeisle/Themeisle126", component: Themeisle126 };

export default meta;
type Story = StoryObj<typeof Themeisle126>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

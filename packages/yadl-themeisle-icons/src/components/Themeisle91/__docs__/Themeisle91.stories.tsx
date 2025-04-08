import type { Meta, StoryObj } from "@storybook/react";
import Themeisle91 from "../Themeisle91";

const meta: Meta<typeof Themeisle91> = { title: "Themeisle/Themeisle91", component: Themeisle91 };

export default meta;
type Story = StoryObj<typeof Themeisle91>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

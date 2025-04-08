import type { Meta, StoryObj } from "@storybook/react";
import Themeisle426 from "../Themeisle426";

const meta: Meta<typeof Themeisle426> = { title: "Themeisle/Themeisle426", component: Themeisle426 };

export default meta;
type Story = StoryObj<typeof Themeisle426>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

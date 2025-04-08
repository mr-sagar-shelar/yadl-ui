import type { Meta, StoryObj } from "@storybook/react";
import Themeisle10 from "../Themeisle10";

const meta: Meta<typeof Themeisle10> = { title: "Themeisle/Themeisle10", component: Themeisle10 };

export default meta;
type Story = StoryObj<typeof Themeisle10>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

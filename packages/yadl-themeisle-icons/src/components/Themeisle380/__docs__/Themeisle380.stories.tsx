import type { Meta, StoryObj } from "@storybook/react";
import Themeisle380 from "../Themeisle380";

const meta: Meta<typeof Themeisle380> = { title: "Themeisle/Themeisle380", component: Themeisle380 };

export default meta;
type Story = StoryObj<typeof Themeisle380>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

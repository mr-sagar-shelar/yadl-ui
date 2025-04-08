import type { Meta, StoryObj } from "@storybook/react";
import Themeisle445 from "../Themeisle445";

const meta: Meta<typeof Themeisle445> = { title: "Themeisle/Themeisle445", component: Themeisle445 };

export default meta;
type Story = StoryObj<typeof Themeisle445>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

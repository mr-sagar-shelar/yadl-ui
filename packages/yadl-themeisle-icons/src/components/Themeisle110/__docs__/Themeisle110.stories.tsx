import type { Meta, StoryObj } from "@storybook/react";
import Themeisle110 from "../Themeisle110";

const meta: Meta<typeof Themeisle110> = { title: "Themeisle/Themeisle110", component: Themeisle110 };

export default meta;
type Story = StoryObj<typeof Themeisle110>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
